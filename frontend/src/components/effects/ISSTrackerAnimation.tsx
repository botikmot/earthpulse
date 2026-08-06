"use client";

import Image from "next/image";

export function ISSTrackerAnimation() {
    return (

        <div className="relative h-25 w-full overflow-hidden">

            {/* Stars */}

            {Array.from({ length: 18 }).map((_, i) => (
                <span
                    key={i}
                    className="iss-star"
                    style={{
                        left: `${(i * 17) % 100}%`,
                        top: `${(i * 29) % 100}%`,
                        animationDelay: `${i * .35}s`,
                    }}
                />
            ))}

            {/* Earth */}

            <Image
                src="/images/weather/earth.png"
                alt="Earth"
                width={80}
                height={80}
                className="earth-image"
                priority
            />

            {/* Orbit */}

            <div className="iss-orbit">

                <div className="iss-satellite text-lg">
                    🛰️
                </div>

            </div>

        </div>

    );
}