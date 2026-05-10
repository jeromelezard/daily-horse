export const SCHNUK_START_DATE = new Date("2026-05-10T00:00:00");

export const SCHNUK_DAY_PLAN: readonly number[] = [1, 2, 1, 1, 2, 2] as const;

export const SCHNUK_TOTAL_IMAGES = SCHNUK_DAY_PLAN.reduce((a, b) => a + b, 0);

export function getSchnukDayIndices(dayIndex: number): number[] {
    if (dayIndex < 0 || dayIndex >= SCHNUK_DAY_PLAN.length) return [];
    let imagesBefore = 0;
    for (let i = 0; i < dayIndex; i++) imagesBefore += SCHNUK_DAY_PLAN[i];
    const count = SCHNUK_DAY_PLAN[dayIndex];
    return Array.from({ length: count }, (_, j) => imagesBefore + j + 1);
}
