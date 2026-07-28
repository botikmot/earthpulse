import { BaseCard } from "@/components/ui/BaseCard";
import { DetailRow } from "@/components/display/DetailRow";
import { WeatherHero } from "./WeatherHero";
import { Droplets, Wind, Gauge, Eye } from "lucide-react";
import type { Weather } from "@/types/weather";
import { DEFAULT_LOCATION } from "@/constants/defaultLocation";

type Props = {
    weather: Weather;
};

export function LatestWeatherCard({
    weather,
}: Props) {

    return (

        <BaseCard
            title="Current Weather"
        >

            <WeatherHero
                temperature={weather.temperature}
                condition={weather.condition}
                location={DEFAULT_LOCATION.name}
            />

            <div className="space-y-3">

                <DetailRow
                    icon={Droplets}
                    label="Humidity"
                    value={`${weather.humidity}%`}
                />

                <DetailRow
                    icon={Wind}
                    label="Wind Speed"
                    value={`${weather.windSpeed} km/h`}
                />

                <DetailRow
                    icon={Gauge}
                    label="Pressure"
                    value={`${weather.pressure} hPa`}
                />

                <DetailRow
                    icon={Eye}
                    label="Visibility"
                    value={`${weather.visibility} m`}
                />

            </div>

        </BaseCard>

    );

}