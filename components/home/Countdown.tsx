"use client";
import { useEffect, useState } from "react";

function getTimeUntilMidnight() {
    const now = new Date();
    const tomorrow = new Date();
    tomorrow.setHours(24, 0, 0, 0); // next midnight
    const diff = tomorrow.getTime() - now.getTime();

    const hours = Math.floor(diff / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return { hours, minutes, seconds };
}

function formatTime(num: number) {
    return num.toString().padStart(2, "0");
}

export default function CountdownToMidnight() {
    const [timeLeft, setTimeLeft] = useState<{ hours: number; minutes: number; seconds: number } | null>(null);

    useEffect(() => {
        // initialize on mount (avoids hydration mismatch)
        setTimeLeft(getTimeUntilMidnight());

        const timer = setInterval(() => {
            setTimeLeft(getTimeUntilMidnight());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    if (!timeLeft) {
        // render nothing (or "00:00:00") during SSR + first paint
        return null;
    }

    return (
        <div className="text-lg font-mono text-center">
            {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:{formatTime(timeLeft.seconds)}
        </div>
    );
}
