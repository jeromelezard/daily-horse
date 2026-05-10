import type { ReactNode } from "react";
import { SCHNUK_DAY_PLAN } from "./schnuk";

export const SCHNUK_DAY_CONTENT: readonly ReactNode[] = [
    <>
        <h1 className="text-center text-xl">
            <b>Happy birthday week!!! ❤️</b>
        </h1>
        <p>
            One year of bliss and pure happiness is captured in this picture, and there is one thought present in mind at this moment:
            <br />
            <br /> How did I become <b>the luckiest man in the entire world?</b>
            <br />
            <br /> While we count down the days to your birthday, lets also take a journey back through time into how this came to be. See you tomorrow x
        </p>
    </>,
    <>
        <h1 className="text-center text-xl">
            <b>Day 2 - Paradise with pookie</b>
        </h1>
        <p>
            I never realised how comfortable I could be around a person, truly, until this holiday. You made my heart so full with love I didnt know
            how to expel it. While staying in a true paradise of a place I couldn't believe my luck I got to experience an even greater paradise every
            single night, falling asleep holing the person I love most dearly in my arms. How lucky I am, but we are not close to the beginning yet…
        </p>
    </>,
    <>
        <h1 className="text-center text-xl">
            <b>Day 3 - Home time</b>
        </h1>
        <p>
            Coming home to England was never going to be easy, and yet effortlessly, you made it so. I dread to think of the person I would be if I
            didn't have you to come back to, and luckily, I dont have to. This is when our life together truly started, but we still have more to
            explore on how I became the luckiest man in the world. <br /> <br />
            Lets go to where it all began…
        </p>
    </>,
    <>
        <h1 className="text-center text-xl">
            <b>Day 4 - 最后，我的女朋友</b>
        </h1>
        <p>
            Theres a reason it only took 4 days to realise I had to make you mine. Maybe it was your smile, maybe it was you buying me Chinese
            McDonalds while I was ill in your hotel room, or maybe it was your reels feed. All I know is after 4 days I couldn't stand the idea that I
            would keep on travelling not knowing where you would be in my life.
            <br />
            <br />
            This is where it all began. This point is where I first thought to myself I am the luckiest man in the world… and yet its not the
            beginning, so what was?
        </p>
    </>,
    <>
        <h1 className="text-center text-xl">
            <b>Day 5 - Right place, right time</b>
        </h1>
        <p>
            You could say it started from a spontaneous instagram message, but in my opinion it really started here, in Port Barton. <br />
            <br /> I only came here because you told me to, and it's here that we went from nothing to something. The gruelling journey from Puerto
            Princesa always had one silver lining that beat any pristine beach I was about to come across: the opportunity to message you again. This
            magical place could easily be traced as the true origin to me being the luckiest man in the world, but its a lie…
        </p>
    </>,
    <>
        <p>
            HAPPY BIRTHDAY
            <strong>Day 6(7) - Destined.</strong> TODO.
        </p>
    </>,
];

export function getSchnukDayForImageIndex(imageIndex: number | null | undefined): number {
    if (imageIndex === null || imageIndex === undefined) return -1;
    let cumulative = 0;
    for (let day = 0; day < SCHNUK_DAY_PLAN.length; day++) {
        cumulative += SCHNUK_DAY_PLAN[day];
        if (imageIndex <= cumulative) return day;
    }
    return -1;
}
