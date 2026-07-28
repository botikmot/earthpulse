"use client";

import { useState } from "react";
import type { Weather } from "@/types/weather";
import { fetchWeather } from "@/services/weather.service";

export function useMapWeather() {

    const [weather, setWeather] =
        useState<Weather | null>(null);

    const [loading, setLoading] =
        useState(false);

    async function loadWeather(
        latitude:number,
        longitude:number,
    ){

        try{
            setLoading(true);
            const result =
                await fetchWeather(
                    latitude,
                    longitude,
                );
            setWeather(result);

        }

        finally{
            setLoading(false);
        }

    }

    return{
        weather,
        loading,
        loadWeather,
    };

}