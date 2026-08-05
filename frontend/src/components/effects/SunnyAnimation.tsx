import Image from "next/image";

export function SunnyAnimation(){

    return(

        <div className="relative h-36 w-full">

            <Image 
                src="/images/weather/sun.png"
                alt="Cloud"
                className="absolute right-15 top-2"
                width={100}
                height={105}
            />

            <Image 
                src="/images/weather/cloud.png"
                alt="Cloud"
                className="absolute left-5 bottom-8 text-slate-300 animate-cloudSlow"
                width={100}
                height={34}
            />

            <Image 
                src="/images/weather/cloud.png"
                alt="Cloud"
                className="absolute right-0 bottom-3 text-slate-300 animate-cloudSlowReverse"
                width={100}
                height={34}
            />

        </div>

    );

}