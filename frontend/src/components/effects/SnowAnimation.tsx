"use client";

import Image from "next/image";

export function SnowAnimation() {

    return (

        <div className="relative h-28 w-full overflow-hidden rounded-xl">

            {Array.from({ length: 35 }).map((_, i) => (

                <span
                    key={i}
                    className="absolute rounded-full bg-white animate-snow"
                    style={{
                        left: `${(i * 13) % 100}%`,
                        width: `${2 + (i % 4)}px`,
                        height: `${2 + (i % 4)}px`,
                        animationDelay: `${(i % 8) * 0.4}s`,
                        animationDuration: `${4 + (i % 5) * 0.4}s`,
                    }}
                />

            ))}

            <Image 
                src="/images/weather/cloud.png"
                alt="Cloud"
                className="absolute right-0 top-0 text-slate-300 animate-cloudSlowReverse"
                width={120}
                height={34}
            />

            <Image 
                src="/images/weather/cloud.png"
                alt="Cloud"
                className="absolute left-0 top-0 text-slate-300 animate-cloudSlow"
                width={100}
                height={34}
            />

        </div>

    );

}