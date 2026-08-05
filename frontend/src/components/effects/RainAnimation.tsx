"use client";

import Image from "next/image";

export function RainAnimation() {
    return (
        <div className="relative h-28 w-full overflow-hidden rounded-xl">

            {Array.from({ length: 45 }).map((_, i) => (
                <span
                    key={i}
                    className="absolute h-5 w-[2px] rounded-full bg-white animate-rain"
                    style={{
                        left: `${(i * 7) % 100}%`,
                        animationDelay: `${(i % 10) * 0.2}s`,
                        animationDuration: `${0.8 + (i % 5) * 0.15}s`,
                    }}
                />
            ))}

            <Image 
                src="/images/weather/rain-cloud.png"
                alt="Cloud"
                className="absolute right-0 top-0 text-slate-300 animate-cloudSlowReverse"
                width={120}
                height={34}
            />

            <Image 
                src="/images/weather/rain-cloud.png"
                alt="Cloud"
                className="absolute left-0 top-0 text-slate-300 animate-cloudSlow"
                width={100}
                height={34}
            />

        </div>
    );
}