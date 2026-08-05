import { getWeatherType } from "@/utils/weather";

import { SunnyAnimation } from "@/components/effects/SunnyAnimation";
import { CloudyAnimation } from "@/components/effects/CloudyAnimation";
import { RainAnimation } from "@/components/effects/RainAnimation";
import { ThunderAnimation } from "@/components/effects/ThunderAnimation";
import { SnowAnimation } from "@/components/effects/SnowAnimation";
import { FogAnimation } from "@/components/effects/FogAnimation";

type Props = {
    weatherCode: number;
    variant?: "page" | "marker";
};

export function WeatherAnimation({
    weatherCode,
    variant
}: Props) {

    const type = getWeatherType(weatherCode);

    switch (type) {

        case "sunny":
            return <SunnyAnimation variant={variant} />;

        case "cloudy":
            return <CloudyAnimation variant={variant} />;

        case "rain":
            return <RainAnimation variant={variant} />;

        case "storm":
            return <ThunderAnimation variant={variant} />;

        case "snow":
            return <SnowAnimation variant={variant} />;

        case "fog":
            return <FogAnimation variant={variant} />;

        default:
            return <CloudyAnimation variant={variant}/>;

    }

}