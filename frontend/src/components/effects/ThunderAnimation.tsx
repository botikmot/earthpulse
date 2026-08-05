"use client";

import Image from "next/image";

type Props = {
    variant?: "page" | "marker";
};

export function ThunderAnimation({
    variant,
}: Props) {

    const size = variant === 'page' ? 120 : 20
    const size2 = variant === 'page' ? 100 : 20
    const image1 = variant === 'page' ? 'left-0 top-0' : 'left-3 -top-1'
    const image2 = variant === 'page' ? 'right-0 top-0' : 'left-0 top-0'
    const thunderwidth = variant === 'page' ? 'h-26 w-full' : 'w-[50px]'

    return (

        <div className={`relative ${thunderwidth} rounded-xl`}>

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
                src="/images/weather/storm-cloud.png"
                alt="Cloud"
                className={`absolute ${image2} text-slate-300 animate-cloudSlowReverse`}
                width={size}
                height={size}
            />

            <Image 
                src="/images/weather/storm-cloud.png"
                alt="Cloud"
                className={`absolute ${image1} text-slate-300 animate-cloudSlow`}
                width={size2}
                height={size2}
            />

            <div className="lightningFlash"/>

        </div>

    );
}