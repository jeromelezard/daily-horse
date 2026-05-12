"use client";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { useEffect, useRef } from "react";
import type { LatLng } from "./scoring";

interface GlobeProps {
    onGuess: (p: LatLng) => void;
    reveal: { guess: LatLng; truth: LatLng; score: number } | null;
    interactive: boolean;
}

const RADIUS = 1;
const ARC_LIFT = 1.005;
// Both markers are identical tall thin spikes; only colour/opacity differs.
const PIN_RADIUS = 0.007;
const PIN_HEIGHT = 0.14;
const GUESS_PIN_COLOR = 0x22c55e; // green
const TRUTH_PIN_COLOR = 0xaaaaaa; // grey
const TRUTH_PIN_OPACITY = 0.7;

// Camera distances. Roughly modelled on maptap.gg's Globe.GL altitude:
// they zoom from altitude 60 (very far) to ~1.45 (camera at ~2.45 globe radii)
// over 1500ms during the "loadingZoom" intro.
const DEFAULT_DIST = 3.5;
const INTRO_FROM_DIST = 25;
const INTRO_DURATION_MS = 1500;
const ARC_DURATION_MS = 1500;
const REVEAL_DELAY_MS = 1200;
const CAMERA_MOVE_MS = 2000;
const CAMERA_ZOOM_FACTOR = 0.7;
const MIN_DIST = 1.4;
const MAX_DIST = 12;

// Three.js SphereGeometry's default UV mapping puts lng=0 at +X,
// lng=-90 at +Z (Americas hemisphere), lng=+90 at -Z (Asia hemisphere).
// That's why z carries a negative sign here.
function latLngToVec3(lat: number, lng: number, r = RADIUS): THREE.Vector3 {
    const phi = ((90 - lat) * Math.PI) / 180;
    const lambda = (lng * Math.PI) / 180;
    return new THREE.Vector3(
        r * Math.sin(phi) * Math.cos(lambda),
        r * Math.cos(phi),
        -r * Math.sin(phi) * Math.sin(lambda),
    );
}

function vec3ToLatLng(v: THREE.Vector3): LatLng {
    const n = v.clone().normalize();
    const lat = 90 - (Math.acos(THREE.MathUtils.clamp(n.y, -1, 1)) * 180) / Math.PI;
    const lng = (Math.atan2(-n.z, n.x) * 180) / Math.PI;
    return { lat, lng };
}

function slerpDir(a: THREE.Vector3, b: THREE.Vector3, t: number): THREE.Vector3 {
    const va = a.clone().normalize();
    const vb = b.clone().normalize();
    const dot = THREE.MathUtils.clamp(va.dot(vb), -1, 1);
    const omega = Math.acos(dot);
    if (omega < 1e-6) return va;
    const sinO = Math.sin(omega);
    const A = Math.sin((1 - t) * omega) / sinO;
    const B = Math.sin(t * omega) / sinO;
    return va.multiplyScalar(A).add(vb.multiplyScalar(B)).normalize();
}

function greatCircleVec3s(a: LatLng, b: LatLng, n = 128): THREE.Vector3[] {
    const va = latLngToVec3(a.lat, a.lng).normalize();
    const vb = latLngToVec3(b.lat, b.lng).normalize();
    const dot = THREE.MathUtils.clamp(va.dot(vb), -1, 1);
    const omega = Math.acos(dot);
    if (omega < 1e-6) return [latLngToVec3(a.lat, a.lng, ARC_LIFT)];
    const sinO = Math.sin(omega);
    const points: THREE.Vector3[] = [];
    for (let i = 0; i <= n; i++) {
        const t = i / n;
        const A = Math.sin((1 - t) * omega) / sinO;
        const B = Math.sin(t * omega) / sinO;
        const v = va.clone().multiplyScalar(A).add(vb.clone().multiplyScalar(B));
        v.normalize().multiplyScalar(ARC_LIFT);
        points.push(v);
    }
    return points;
}

// Score (0..100) → arc colour: red (low) → yellow → green (high)
function scoreColor(score: number): THREE.Color {
    const t = THREE.MathUtils.clamp(score / 100, 0, 1);
    return new THREE.Color().setHSL(t * 0.33, 0.85, 0.55);
}

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

interface SceneRefs {
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    renderer: THREE.WebGLRenderer;
    controls: OrbitControls;
    globe: THREE.Mesh;
    revealGroup: THREE.Group;
    setTargetRadius: (r: number) => void;
    setUserCanZoom: (allowed: boolean) => void;
}

export default function Globe({ onGuess, reveal, interactive }: GlobeProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const sceneRef = useRef<SceneRefs | null>(null);
    const onGuessRef = useRef(onGuess);
    const interactiveRef = useRef(interactive);
    const arcAnimRef = useRef<{
        line: THREE.Line;
        totalPoints: number;
        startTime: number;
    } | null>(null);
    const camMoveRef = useRef<{
        fromDir: THREE.Vector3;
        toDir: THREE.Vector3;
        fromRadius: number;
        toRadius: number;
        startTime: number;
    } | null>(null);
    const revealTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    onGuessRef.current = onGuess;
    interactiveRef.current = interactive;

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(45, 1, 0.01, 100);
        camera.position.set(0, 0, INTRO_FROM_DIST);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        container.appendChild(renderer.domElement);

        const sphereGeom = new THREE.SphereGeometry(RADIUS, 96, 64);
        const tex = new THREE.TextureLoader().load("/globe.jpg");
        tex.colorSpace = THREE.SRGBColorSpace;
        tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
        const material = new THREE.MeshBasicMaterial({ map: tex });
        const globe = new THREE.Mesh(sphereGeom, material);
        scene.add(globe);

        const revealGroup = new THREE.Group();
        scene.add(revealGroup);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.1;
        controls.enablePan = false;
        controls.minDistance = MIN_DIST;
        controls.maxDistance = INTRO_FROM_DIST + 5;
        controls.rotateSpeed = 0.5;
        controls.zoomSpeed = 1.6;

        let targetRadius = INTRO_FROM_DIST;
        let userCanZoom = false;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const c = controls as any;
        c._dollyIn = (s: number) => {
            if (!userCanZoom) return;
            targetRadius = THREE.MathUtils.clamp(targetRadius * s, MIN_DIST, MAX_DIST);
        };
        c._dollyOut = (s: number) => {
            if (!userCanZoom) return;
            targetRadius = THREE.MathUtils.clamp(targetRadius / s, MIN_DIST, MAX_DIST);
        };

        const resize = () => {
            const w = container.clientWidth;
            const h = container.clientHeight;
            renderer.setSize(w, h);
            camera.aspect = w / h || 1;
            camera.updateProjectionMatrix();
        };
        resize();
        const ro = new ResizeObserver(resize);
        ro.observe(container);

        const raycaster = new THREE.Raycaster();
        const ndc = new THREE.Vector2();
        let pointerDown: { x: number; y: number } | null = null;
        const onPointerDown = (e: PointerEvent) => {
            pointerDown = { x: e.clientX, y: e.clientY };
        };
        const onPointerUp = (e: PointerEvent) => {
            if (!pointerDown) return;
            const dx = e.clientX - pointerDown.x;
            const dy = e.clientY - pointerDown.y;
            pointerDown = null;
            if (dx * dx + dy * dy > 100) return;
            if (!interactiveRef.current) return;
            const rect = renderer.domElement.getBoundingClientRect();
            ndc.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
            ndc.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
            raycaster.setFromCamera(ndc, camera);
            const hits = raycaster.intersectObject(globe);
            if (!hits.length) return;
            const local = globe.worldToLocal(hits[0].point.clone());
            onGuessRef.current(vec3ToLatLng(local));
        };
        renderer.domElement.addEventListener("pointerdown", onPointerDown);
        renderer.domElement.addEventListener("pointerup", onPointerUp);

        // Loading zoom-in intro
        const introStart = performance.now();
        const tickIntro = (now: number) => {
            const elapsed = now - introStart;
            if (elapsed >= INTRO_DURATION_MS) {
                targetRadius = DEFAULT_DIST;
                controls.maxDistance = MAX_DIST;
                userCanZoom = true;
                return false;
            }
            const t = elapsed / INTRO_DURATION_MS;
            targetRadius =
                INTRO_FROM_DIST + (DEFAULT_DIST - INTRO_FROM_DIST) * easeOutCubic(t);
            return true;
        };

        let introActive = true;
        let raf = 0;
        const loop = () => {
            const now = performance.now();
            if (introActive) introActive = tickIntro(now);

            // Slow drift toward the truth location, zooming in slightly
            const move = camMoveRef.current;
            if (move) {
                const t = THREE.MathUtils.clamp(
                    (now - move.startTime) / CAMERA_MOVE_MS,
                    0,
                    1,
                );
                const eased = easeOutCubic(t);
                const dir = slerpDir(move.fromDir, move.toDir, eased);
                const r = THREE.MathUtils.lerp(
                    move.fromRadius,
                    move.toRadius,
                    eased,
                );
                camera.position.copy(dir.multiplyScalar(r));
                // Keep the zoom lerp in sync so it doesn't fight the move.
                targetRadius = r;
                if (t >= 1) camMoveRef.current = null;
            }

            const currentRadius = controls.getDistance();
            if (Math.abs(currentRadius - targetRadius) > 0.0005) {
                const desired = THREE.MathUtils.lerp(
                    currentRadius,
                    targetRadius,
                    introActive ? 0.25 : 0.12,
                );
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (controls as any)._scale = desired / currentRadius;
            }
            controls.update();

            // Animate arc draw range
            const a = arcAnimRef.current;
            if (a) {
                const elapsed = now - a.startTime;
                const t = THREE.MathUtils.clamp(elapsed / ARC_DURATION_MS, 0, 1);
                const eased = easeOutCubic(t);
                const drawCount = Math.max(2, Math.ceil(eased * a.totalPoints));
                a.line.geometry.setDrawRange(0, drawCount);
                if (t >= 1) arcAnimRef.current = null;
            }

            renderer.render(scene, camera);
            raf = requestAnimationFrame(loop);
        };
        loop();

        sceneRef.current = {
            scene,
            camera,
            renderer,
            controls,
            globe,
            revealGroup,
            setTargetRadius: (r: number) => {
                targetRadius = r;
            },
            setUserCanZoom: (b: boolean) => {
                userCanZoom = b;
            },
        };

        return () => {
            cancelAnimationFrame(raf);
            ro.disconnect();
            renderer.domElement.removeEventListener("pointerdown", onPointerDown);
            renderer.domElement.removeEventListener("pointerup", onPointerUp);
            controls.dispose();
            tex.dispose();
            sphereGeom.dispose();
            material.dispose();
            renderer.dispose();
            if (renderer.domElement.parentNode === container) {
                container.removeChild(renderer.domElement);
            }
            sceneRef.current = null;
            arcAnimRef.current = null;
        };
    }, []);

    useEffect(() => {
        const s = sceneRef.current;
        if (!s) return;

        // Clear previous reveal artifacts and any pending timer
        while (s.revealGroup.children.length) {
            const c = s.revealGroup.children.pop()!;
            const mesh = c as THREE.Mesh & { material?: THREE.Material };
            mesh.geometry?.dispose?.();
            mesh.material?.dispose?.();
        }
        arcAnimRef.current = null;
        if (revealTimeoutRef.current) {
            clearTimeout(revealTimeoutRef.current);
            revealTimeoutRef.current = null;
        }
        camMoveRef.current = null;
        if (!reveal) return;

        const makePin = (
            pos: THREE.Vector3,
            color: number,
            opacity: number,
        ) => {
            const geom = new THREE.CylinderGeometry(
                PIN_RADIUS,
                PIN_RADIUS,
                PIN_HEIGHT,
                12,
            );
            geom.translate(0, PIN_HEIGHT / 2, 0);
            const mesh = new THREE.Mesh(
                geom,
                new THREE.MeshBasicMaterial({
                    color,
                    transparent: opacity < 1,
                    opacity,
                }),
            );
            mesh.position.copy(pos);
            const up = pos.clone().normalize();
            const q = new THREE.Quaternion().setFromUnitVectors(
                new THREE.Vector3(0, 1, 0),
                up,
            );
            mesh.quaternion.copy(q);
            return mesh;
        };

        // Step 1: drop the guess pin and start the arc heading toward the
        // (still-hidden) truth location immediately so the user sees motion.
        const guessPos = latLngToVec3(reveal.guess.lat, reveal.guess.lng, ARC_LIFT);
        s.revealGroup.add(makePin(guessPos, GUESS_PIN_COLOR, 1));

        const arcPoints = greatCircleVec3s(reveal.guess, reveal.truth);
        const arcGeom = new THREE.BufferGeometry().setFromPoints(arcPoints);
        const arcColor = scoreColor(reveal.score);
        const arcMat = new THREE.LineDashedMaterial({
            color: arcColor,
            dashSize: 0.025,
            gapSize: 0.025,
            linewidth: 1,
            transparent: true,
            opacity: 0.95,
        });
        const arc = new THREE.Line(arcGeom, arcMat);
        arc.computeLineDistances();
        arcGeom.setDrawRange(0, 2);
        s.revealGroup.add(arc);
        arcAnimRef.current = {
            line: arc,
            totalPoints: arcPoints.length,
            startTime: performance.now(),
        };

        // Step 2: slowly drift the camera toward the truth location, zooming
        // in slightly so it ends framed on the correct city.
        const truthDir = latLngToVec3(reveal.truth.lat, reveal.truth.lng).normalize();
        const fromDir = s.camera.position.clone().normalize();
        const fromRadius = s.camera.position.length();
        const toRadius = Math.max(MIN_DIST, fromRadius * CAMERA_ZOOM_FACTOR);
        camMoveRef.current = {
            fromDir,
            toDir: truthDir,
            fromRadius,
            toRadius,
            startTime: performance.now(),
        };

        // Step 3: after the delay, drop in the truth pin (grey, semi-transparent)
        revealTimeoutRef.current = setTimeout(() => {
            revealTimeoutRef.current = null;
            const truthPos = latLngToVec3(reveal.truth.lat, reveal.truth.lng, ARC_LIFT);
            s.revealGroup.add(makePin(truthPos, TRUTH_PIN_COLOR, TRUTH_PIN_OPACITY));
        }, REVEAL_DELAY_MS);
    }, [reveal]);

    return (
        <div
            ref={containerRef}
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100dvh",
                touchAction: "none",
            }}
        />
    );
}
