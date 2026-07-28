"use client";

import {
    Thermometer,
    Droplets,
    Wind,
    Eye,
} from "lucide-react";

import { StatCard } from "@/components/common/StatCard";
import type { Weather } from "@/types/weather";

type Props = {
    weather: Weather;
};

export function WeatherStats({
    weather,
}: Props) {

    return (

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

            <StatCard
                title="Temperature"
                value={`${weather.temperature.toFixed(1)}°C`}
                icon={Thermometer}
                variant="weather"
            />

            <StatCard
                title="Humidity"
                value={`${weather.humidity}%`}
                icon={Droplets}
                variant="weather"
            />

            <StatCard
                title="Wind Speed"
                value={`${weather.windSpeed} km/h`}
                icon={Wind}
                variant="weather"
            />

            <StatCard
                title="Visibility"
                value={`${weather.visibility} m`}
                icon={Eye}
                variant="weather"
            />

        </div>

    );

}