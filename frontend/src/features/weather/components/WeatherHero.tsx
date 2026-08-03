import { getWeatherIcon } from "@/utils/weatherIcon";
import { MapPin } from "lucide-react";
import { createElement } from "react";


type WeatherHeroProps = {
    temperature: number;
    condition: string;
    location?: string;
    weatherCode: number;
};

export function WeatherHero({
    temperature,
    location,
    weatherCode,
}: WeatherHeroProps) {
    
     const icon = getWeatherIcon(weatherCode);

    return (

        <div className="mb-8 flex flex-col items-center text-center">

            <div
                className="
                    mb-4
                    rounded-full
                    bg-sky-100
                    p-5
                    dark:bg-sky-950
                "
            >
                {createElement(icon, {
                    className: `
                        h-12
                        w-12
                        text-sky-600
                        dark:text-sky-400
                    `,
                })}
            </div>

            <p className="text-lg font-medium text-muted-foreground">
                Current Weather
            </p>

            <h2 className="mt-2 text-6xl font-bold tracking-tight">
                {temperature.toFixed(1)}°
            </h2>

                        
            {location && (

                <div className="mt-3 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4"/>
                    {location}
                </div>
            )}
           

        </div>

    );

}