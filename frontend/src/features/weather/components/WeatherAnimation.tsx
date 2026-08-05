import { getWeatherType } from "@/utils/weather";

import { SunnyAnimation } from "@/components/effects/SunnyAnimation";
import { CloudyAnimation } from "@/components/effects/CloudyAnimation";
import { RainAnimation } from "@/components/effects/RainAnimation";
import { ThunderAnimation } from "@/components/effects/ThunderAnimation";
import { SnowAnimation } from "@/components/effects/SnowAnimation";
import { FogAnimation } from "@/components/effects/FogAnimation";

type Props = {
    weatherCode: number;
};

export function WeatherAnimation({
    weatherCode,
}: Props) {

    const type = getWeatherType(weatherCode);

    switch (type) {

        case "sunny":
            return <SunnyAnimation />;

        case "cloudy":
            return <CloudyAnimation />;

        case "rain":
            return <RainAnimation />;

        case "storm":
            return <ThunderAnimation />;

        case "snow":
            return <SnowAnimation />;

        case "fog":
            return <FogAnimation />;

        default:
            return <CloudyAnimation />;

    }

}