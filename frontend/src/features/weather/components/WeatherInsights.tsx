import {
    Thermometer,
    Droplets,
    Gauge,
    Eye,
    Wind,
} from "lucide-react";

import { BaseCard } from "@/components/ui/BaseCard";
import { WeatherMetric } from "./WeatherMetric";
import type { Weather } from "@/types/weather";

type Props = {
    weather: Weather;
};

export function WeatherInsights({
    weather,
}: Props) {

    return(

        <BaseCard
            title="Weather Insights"
            className="mt-6"
        >

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

                <WeatherMetric

                    icon={Thermometer}

                    label="Feels Like"

                    value={`${weather.feelsLike.toFixed(1)}°C`}

                />

                <WeatherMetric

                    icon={Droplets}

                    label="Humidity"

                    value={`${weather.humidity}%`}

                />

                <WeatherMetric

                    icon={Wind}

                    label="Wind"

                    value={`${weather.windSpeed} km/h`}

                />

                <WeatherMetric

                    icon={Eye}

                    label="Visibility"

                    value={`${(weather.visibility/1000).toFixed(1)} km`}

                />

                <WeatherMetric

                    icon={Gauge}

                    label="Pressure"

                    value={`${weather.pressure} hPa`}

                />

            </div>

        </BaseCard>

    );

}