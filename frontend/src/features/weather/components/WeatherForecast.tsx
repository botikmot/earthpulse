import { ForecastCard } from "./ForecastCard";
import type { WeatherForecast } from "@/types/weather";

type Props = {
    forecast: WeatherForecast[];
};

export function WeatherForecast({
    forecast,
}: Props) {

    return (

        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
            {forecast.slice(0,5).map((item) => (

                <ForecastCard

                    key={item.date}

                    day={
                        new Date(item.date)
                            .toLocaleDateString(
                                "en-US",
                                {
                                    weekday: "short",
                                }
                            )
                    }

                    max={item.maxTemperature}

                    min={item.minTemperature}

                    condition={item.condition}
                    weatherCode={item.weatherCode}
                />

            ))}
        </div>

    );

}