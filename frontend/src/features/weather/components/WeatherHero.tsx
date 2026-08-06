
import { MapPin } from "lucide-react";

import { useSettingsStore } from "@/stores/settings.store";
import { 
    formatTemperature,
 } from "@/utils/unit";
 import { WeatherAnimation } from "./WeatherAnimation";


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

    const {
        temperatureUnit,
    } = useSettingsStore();

    return (

        <div className="mb-8 flex flex-col items-center text-center">

            <div className="w-1/2">
                <WeatherAnimation weatherCode={weatherCode} variant="page"/>
            </div>

            <p className="text-lg font-medium text-muted-foreground">
                Current Weather
            </p>

            <h2 className="mt-2 text-6xl font-bold tracking-tight">
                {formatTemperature(temperature, temperatureUnit)}
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