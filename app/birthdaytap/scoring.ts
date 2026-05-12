export type LatLng = { lng: number; lat: number };

export const EARTH_RADIUS_KM = 6371;

export function haversineKm(a: LatLng, b: LatLng) {
    const toRad = (d: number) => (d * Math.PI) / 180;
    const dLat = toRad(b.lat - a.lat);
    const dLng = toRad(b.lng - a.lng);
    const x =
        Math.sin(dLat / 2) ** 2 +
        Math.cos(toRad(a.lat)) * Math.cos(toRad(b.lat)) * Math.sin(dLng / 2) ** 2;
    return 2 * EARTH_RADIUS_KM * Math.asin(Math.sqrt(x));
}

// Roughly tuned to the maptap-style accuracy curve
//   3→100, 29→99, 462→~93, 782→87, 1383→79, 5096→33
// with a flat 100-point zone inside PERFECT_RADIUS_KM for visible leeway.
const SCORE_C = 0.033;
const SCORE_P = 0.9;
export const PERFECT_RADIUS_KM = 40;

export function scoreFor(km: number): number {
    if (km <= PERFECT_RADIUS_KM) return 100;
    const penalty = SCORE_C * Math.pow(km - PERFECT_RADIUS_KM, SCORE_P);
    return Math.max(0, Math.round(100 - penalty));
}
