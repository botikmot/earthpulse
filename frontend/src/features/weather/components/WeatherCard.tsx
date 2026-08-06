import type { Weather } from "@/types/weather";
import { BaseCard } from "@/components/ui/BaseCard";
import { WeatherDetailRow } from "./WeatherDetailRow";
import { WeatherHero } from "./WeatherHero";
import { useSettingsStore } from "@/stores/settings.store";
import { 
    formatWindSpeed,
 } from "@/utils/unit";

type WeatherCardProps = {
    weather: Weather;
    city?: string;
};

export function WeatherCard({
    weather,
    city
}: WeatherCardProps) {

    const {
        distanceUnit,
    } = useSettingsStore();

    return (
        <BaseCard
            title="Weather Now"
            className="rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
        >
            <WeatherHero
                condition={weather.condition}
                temperature={weather.temperature}
                weatherCode={weather.weatherCode}
                location={city}
            />

            <div className="space-y-3">
                <WeatherDetailRow
                    label="Humidity"
                    value={`${weather.humidity}%`}
                />

                <WeatherDetailRow
                    label="Wind Speed"
                    value={`${formatWindSpeed(weather.windSpeed, distanceUnit)}`}
                />

                <WeatherDetailRow
                    label="Pressure"
                    value={`${weather.pressure} hPa`}
                />
            </div>
        </BaseCard>
    );

}