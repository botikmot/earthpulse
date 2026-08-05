"use client";

import Image from "next/image";

export function FogAnimation() {

    return (

        <div className="relative h-25 w-full overflow-hidden">

            <Image 
                src="/images/weather/fog2.png"
                alt="Cloud"
                className="absolute left-0 top-0 text-slate-300 animate-cloudSlow"
                width={180}
                height={14}
            />


        </div>

    );

}