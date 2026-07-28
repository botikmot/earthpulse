import type { Weather } from "@/types/weather";
import { BaseCard } from "@/components/ui/BaseCard";
import { WeatherDetailRow } from "./WeatherDetailRow";
import { WeatherHero } from "./WeatherHero";

type WeatherCardProps = {
    weather: Weather;
};

export function WeatherCard({
    weather
}: WeatherCardProps) {

    return (
        <BaseCard
            title="Weather Now"
            className="rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
        >
            <WeatherHero
                condition={weather.condition}
                temperature={weather.temperature}
            />

            <div className="space-y-3">
                <WeatherDetailRow
                    label="Humidity"
                    value={`${weather.humidity}%`}
                />

                <WeatherDetailRow
                    label="Wind Speed"
                    value={`${weather.windSpeed} km/h`}
                />

                <WeatherDetailRow
                    label="Pressure"
                    value={`${weather.pressure} hPa`}
                />
            </div>
        </BaseCard>
    );

}