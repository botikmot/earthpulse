import { BaseCard } from "@/components/ui/BaseCard";
import { WeatherHero } from "./WeatherHero";
import { WeatherConditionBadge } from "./WeatherConditionBadge";
import type { Weather } from "@/types/weather";

type Props = {
    weather: Weather;
    location: string;
};

export function WeatherSummaryBanner({
    weather,
    location,
}: Props) {

    return (

        <BaseCard>

            <WeatherHero
                temperature={weather.temperature}
                condition={weather.condition}
                location={location}
                weatherCode={weather.weatherCode}
            />

            <div className="flex justify-center">

                <WeatherConditionBadge
                    condition={weather.condition}
                />

            </div>

        </BaseCard>

    );

}