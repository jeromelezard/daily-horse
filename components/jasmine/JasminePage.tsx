"use client";

import SecondTest from "./SecondTest";

export default function JasminePage() {
    return (
        <div className="flex justify-center items-center flex-col gap-3">
            <div className="flex flex-col items-center justify-center text-center">
                <span>Well done!</span>
                <span>You got the when...</span>
                <span>But can you get the where?</span>
            </div>
            <SecondTest />
        </div>
    );
}
