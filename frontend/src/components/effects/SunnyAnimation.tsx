import Image from "next/image";

type Props = {
    variant?: "page" | "marker";
};

export function SunnyAnimation({
    variant,
}: Props) {

    const size = variant === 'page' ? 100 : 20
    const height = variant === 'page' ? 105 : 20
    const image1 = variant === 'page' ? 'right-15 top-2' : 'left-0 -top-3'
    const image2 = variant === 'page' ? 'left-5 bottom-8' : 'left-0 top-2'
    const image3 = variant === 'page' ? 'right-0 bottom-3' : 'left-2 top-3'

    return(

        <div className="relative h-25 w-full">

            <Image 
                src="/images/weather/sun.png"
                alt="Cloud"
                className={`absolute ${image1}`}
                width={size}
                height={height}
            />

            <Image 
                src="/images/weather/cloud.png"
                alt="Cloud"
                className={`absolute ${image2} text-slate-300 animate-cloudSlow`}
                width={size}
                height={size}
            />

            <Image 
                src="/images/weather/cloud.png"
                alt="Cloud"
                className={`absolute ${image3} text-slate-300 animate-cloudSlowReverse`}
                width={size}
                height={size}
            />

        </div>

    );

}