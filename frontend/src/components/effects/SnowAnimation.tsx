"use client";

import Image from "next/image";

type Props = {
    variant?: "page" | "marker";
};

export function SnowAnimation({
    variant,
}: Props) {

    const size = variant === 'page' ? 120 : 20
    const size2 = variant === 'page' ? 100 : 20
    const image1 = variant === 'page' ? 'left-0 top-0' : 'left-3 -top-1'
    const image2 = variant === 'page' ? 'right-0 top-0' : 'left-0 top-0'
    const snowwidth = variant === 'page' ? 'h-25 w-full' : 'w-[50px]'

    return (

        <div className={`relative ${snowwidth} rounded-xl`}>

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
                className={`absolute ${image2} text-slate-300 animate-cloudSlowReverse`}
                width={size}
                height={size}
            />

            <Image 
                src="/images/weather/cloud.png"
                alt="Cloud"
                className={`absolute ${image1} text-slate-300 animate-cloudSlow`}
                width={size2}
                height={size2}
            />

        </div>

    );

}