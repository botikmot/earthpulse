import Image from "next/image";

export function CloudyAnimation(){

    return(

        <div className="relative h-25 w-full">

            <Image 
                src="/images/weather/cloud.png"
                alt="Cloud"
                className="absolute left-0 top-8 text-slate-300 animate-cloudSlow"
                width={100}
                height={34}
            />

            <Image 
                src="/images/weather/cloud.png"
                alt="Cloud"
                className="absolute right-0 top-2 text-slate-400 animate-cloudSlowReverse"
                width={100}
                height={34}
            />

            <Image 
                src="/images/weather/cloud.png"
                alt="Cloud"
                className="absolute left-20 bottom-2 text-slate-500 animate-cloudSlow"
                width={100}
                height={34}
            />

        </div>

    );

}