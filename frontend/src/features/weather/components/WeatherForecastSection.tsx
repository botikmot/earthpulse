import { BaseCard } from "@/components/ui/BaseCard";
import { ForecastCard } from "./ForecastCard";
import type { WeatherForecast } from "@/types/weather";

type Props = {
    forecast: WeatherForecast[];
};

export function WeatherForecastSection({
    forecast,
}: Props) {
    return (
        <BaseCard
            title="5-Day Forecast"
            className="mt-6"
        >
            <div className="grid gap-4 grid-cols-2 lg:grid-cols-5">

                {forecast.slice(0, 5).map((item) => (
                    <ForecastCard
                        key={item.date}
                        day={new Date(item.date).toLocaleDateString(
                            "en-US",
                            { weekday: "short" }
                        )}
                        max={item.maxTemperature}
                        min={item.minTemperature}
                        condition={item.condition}
                    />
                ))}

            </div>
        </BaseCard>
    );
}