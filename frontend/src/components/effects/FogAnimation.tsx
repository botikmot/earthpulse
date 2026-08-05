"use client";

import Image from "next/image";

type Props = {
    variant?: "page" | "marker";
};

export function FogAnimation({
    variant,
}: Props) {

    const size = variant === 'page' ? 180 : 20
    
    return (

        <div className="relative h-25 w-full">

            <Image 
                src="/images/weather/fog2.png"
                alt="Cloud"
                className="absolute left-0 top-0 text-slate-300 animate-cloudSlow"
                width={size}
                height={size}
            />


        </div>

    );

}