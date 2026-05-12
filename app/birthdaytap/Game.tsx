"use client";
import { useEffect, useRef, useState } from "react";
import Globe from "./Globe";
import { LOCATIONS } from "./locations";
import { haversineKm, scoreFor, type LatLng } from "./scoring";

type Result = {
    distanceKm: number;
    score: number;
    baseScore: number;
    multiplier: number;
    guess: LatLng;
};

const PANEL_DELAY_MS = 1200;
const MULTIPLIERS = [1, 1, 2, 3, 3];
const MAX_TOTAL = MULTIPLIERS.reduce((s, m) => s + m * 100, 0);

export default function Game() {
    const [roundIndex, setRoundIndex] = useState(0);
    const [phase, setPhase] = useState<"guessing" | "revealing" | "finished">("guessing");
    const [results, setResults] = useState<Result[]>([]);
    const [reveal, setReveal] = useState<
        { guess: LatLng; truth: LatLng; score: number } | null
    >(null);
    const [showRevealPanel, setShowRevealPanel] = useState(false);
    const panelTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const audioRef = useRef<{
        ping: HTMLAudioElement;
        pong: HTMLAudioElement;
    } | null>(null);

    const target = LOCATIONS[roundIndex];

    useEffect(() => {
        const ping = new Audio("/sounds/ping.mp3");
        const pong = new Audio("/sounds/pong.mp3");
        ping.preload = "auto";
        pong.preload = "auto";
        audioRef.current = { ping, pong };
        return () => {
            if (panelTimerRef.current) clearTimeout(panelTimerRef.current);
        };
    }, []);

    function playSound(name: "ping" | "pong") {
        const a = audioRef.current?.[name];
        if (!a) return;
        a.currentTime = 0;
        a.play().catch(() => {});
    }

    function clearPanelTimer() {
        if (panelTimerRef.current) {
            clearTimeout(panelTimerRef.current);
            panelTimerRef.current = null;
        }
    }

    function handleGuess(p: LatLng) {
        if (phase !== "guessing") return;
        // "Anywhere" rounds: the truth collapses to the user's own guess so
        // distance is zero, the score is 100, and the reveal disc/arc land
        // exactly where they tapped.
        const truth = target.anywhere
            ? { lat: p.lat, lng: p.lng }
            : { lat: target.lat, lng: target.lng };
        const distanceKm = haversineKm(p, truth);
        const baseScore = scoreFor(distanceKm);
        const multiplier = MULTIPLIERS[roundIndex] ?? 1;
        const score = baseScore * multiplier;
        setResults((r) => [...r, { distanceKm, score, baseScore, multiplier, guess: p }]);
        // Arc colour grades on the base 0..100 score, not the multiplied total
        setReveal({ guess: p, truth, score: baseScore });
        setPhase("revealing");
        setShowRevealPanel(false);
        clearPanelTimer();
        playSound("ping");
        panelTimerRef.current = setTimeout(() => {
            setShowRevealPanel(true);
            playSound("pong");
            panelTimerRef.current = null;
        }, PANEL_DELAY_MS);
    }

    function handleNext() {
        clearPanelTimer();
        setShowRevealPanel(false);
        if (roundIndex >= LOCATIONS.length - 1) {
            setPhase("finished");
            setReveal(null);
            return;
        }
        setRoundIndex((i) => i + 1);
        setReveal(null);
        setPhase("guessing");
    }

    function handleRestart() {
        clearPanelTimer();
        setShowRevealPanel(false);
        setRoundIndex(0);
        setResults([]);
        setReveal(null);
        setPhase("guessing");
    }

    const total = results.reduce((s, r) => s + r.score, 0);
    const last = results[results.length - 1];
    const currentMultiplier = MULTIPLIERS[roundIndex] ?? 1;
    const difficultyLabel =
        currentMultiplier === 1 ? "Easy" : currentMultiplier === 2 ? "Medium" : "Hard";

    // Date is computed client-side to avoid SSR/hydration mismatch.
    const [todayLabel, setTodayLabel] = useState<string>("");
    useEffect(() => {
        setTodayLabel(
            new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
            }),
        );
    }, []);

    return (
        <div
            className="fixed top-0 left-0 z-50 bg-black text-white overflow-hidden"
            style={{
                width: "100vw",
                height: "100vh",
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                ...({ height: "100dvh" } as any),
            }}
        >
            <Globe
                onGuess={handleGuess}
                reveal={reveal}
                interactive={phase === "guessing"}
            />

            <div
                className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
                style={{ width: "352px", maxWidth: "100vw" }}
            >
                <div className="bg-cyan-400 text-black px-3 py-2 flex justify-between items-center text-xs font-medium pointer-events-auto">
                    <button className="flex items-center gap-1 active:opacity-70">
                        <span className="text-base leading-none">≡</span>
                        <span>Menu</span>
                    </button>
                    <div className="font-bold text-sm">
                        BirthdayTap #{roundIndex + 1}
                    </div>
                    <div className="tabular-nums">{todayLabel || " "}</div>
                </div>

                {phase !== "finished" && (
                    <div className="flex gap-2 px-2 pt-2">
                        <div className="border-2 border-cyan-400 bg-black/85 backdrop-blur rounded-md px-2.5 py-1 text-center pointer-events-auto self-start">
                            <div className="text-cyan-400 text-[10px] font-bold uppercase tracking-widest">
                                Score
                            </div>
                            <div className="text-white text-2xl font-bold tabular-nums leading-tight">
                                {String(total).padStart(3, "0")}
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col rounded-md overflow-hidden pointer-events-auto">
                            <div className="bg-cyan-200 text-black text-center py-1 text-xs font-medium">
                                {difficultyLabel} - {currentMultiplier}x Multiplier
                            </div>
                            <div className="flex-1 flex items-center justify-center bg-zinc-800/90 backdrop-blur text-white px-3 py-2 text-center text-sm leading-snug">
                                Tap as close as you can to {target.name}
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {phase === "revealing" && showRevealPanel && last && (
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 flex justify-center">
                    <div className="bg-black/70 backdrop-blur px-4 py-3 sm:px-6 sm:py-4 rounded-lg flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-6 w-full max-w-md sm:w-auto sm:max-w-none">
                        <div className="flex justify-between sm:block gap-6">
                            <div>
                                <div className="text-[10px] sm:text-xs uppercase tracking-wide opacity-70">
                                    Distance
                                </div>
                                <div className="text-lg sm:text-xl font-semibold">
                                    {Math.round(last.distanceKm).toLocaleString()} km
                                </div>
                            </div>
                            <div className="sm:hidden">
                                <div className="text-[10px] uppercase tracking-wide opacity-70">
                                    Score
                                </div>
                                <div className="text-lg font-semibold">
                                    {last.baseScore} / 100
                                </div>
                            </div>
                        </div>
                        <div className="hidden sm:block">
                            <div className="text-xs uppercase tracking-wide opacity-70">
                                Score
                            </div>
                            <div className="text-xl font-semibold">
                                {last.baseScore} / 100
                            </div>
                        </div>
                        <button
                            onClick={handleNext}
                            className="px-5 py-3 sm:py-2 bg-white text-black rounded-md font-semibold hover:bg-zinc-200 active:bg-zinc-300"
                        >
                            {roundIndex >= LOCATIONS.length - 1 ? "See results" : "Next"}
                        </button>
                    </div>
                </div>
            )}

            {phase === "finished" && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/70 p-4">
                    <div className="bg-zinc-900 p-6 sm:p-8 rounded-xl max-w-md w-full border border-white/10">
                        <h2 className="text-2xl sm:text-3xl font-bold mb-1">Done!</h2>
                        <p className="text-base sm:text-lg opacity-80 mb-4">
                            You scored {total} / {MAX_TOTAL}
                        </p>
                        <ul className="space-y-2 mb-6">
                            {LOCATIONS.map((loc, i) => (
                                <li
                                    key={loc.name}
                                    className="flex justify-between border-b border-white/10 pb-1 text-sm"
                                >
                                    <span>{loc.name}</span>
                                    <span className="opacity-80">
                                        {Math.round(results[i].distanceKm).toLocaleString()} km · {results[i].baseScore} / 100
                                    </span>
                                </li>
                            ))}
                        </ul>
                        <button
                            onClick={handleRestart}
                            className="w-full px-5 py-3 bg-white text-black rounded-md font-semibold hover:bg-zinc-200 active:bg-zinc-300"
                        >
                            Play again
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
