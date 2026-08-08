import {
    Mountain,
    Flame,
    Wind,
    CloudSun,
} from "lucide-react";

import { useEarthquakes } from "@/hooks/useEarthquakes";
import { useWildfires } from "@/hooks/useWildfires";
import { useWeather } from "@/hooks/useWeather";
import { useAirQuality } from "@/hooks/useAirQuality";
import { useLocationStore } from "@/stores/location.store";

export function useDashboardActivity() {

    const location = useLocationStore(
        (state) => state.location
    );

    const { earthquakes } = useEarthquakes();

    const { wildfires } = useWildfires();

    const { weather } = useWeather({
        latitude: location?.latitude,
        longitude: location?.longitude,
        enabled: !!location,
    });

    const { airQuality } = useAirQuality({
        latitude: location?.latitude,
        longitude: location?.longitude,
        city: location?.city,
        country: location?.country,
        enabled: !!location,
    });

    const activities = [];

    if (earthquakes.length > 0) {

        activities.push({
            id: "earthquake",
            icon: Mountain,
            color: "bg-orange-500",
            title: "Earthquake Detected",
            description: `Magnitude ${earthquakes[0].magnitude} near ${earthquakes[0].location}`,
            time: new Date(earthquakes[0].time).toISOString(),
            glow: "bg-orange-400",
            textColor: "text-orange-400",
        });

    }

    if (weather) {

        activities.push({
            id: "weather",
            icon: CloudSun,
            color: "bg-blue-500",
            title: "Weather Updated",
            description: `${weather.temperature}°C in ${location?.city}`,
            time: new Date().toISOString(),
            glow: "bg-sky-400",
            textColor: "text-sky-400",
        });

    }

    if (wildfires.length > 0) {

        activities.push({
            id: "wildfire",
            icon: Flame,
            color: "bg-red-500",
            title: "Wildfire Reported",
            description: `${wildfires[0].area} ${wildfires[0].areaUnit} ${wildfires[0].title}`,
            time: new Date(wildfires[0].date).toISOString(),
            glow: "bg-red-400",
            textColor: "text-red-400",
        });

    }

    if (airQuality) {

        activities.push({
            id: "aqi",
            icon: Wind,
            color: "bg-green-500",
            title: "Air Quality Updated",
            description: `AQI level ${airQuality.aqi}`,
            time: new Date(airQuality.updatedAt).toISOString(),
            glow: "bg-emerald-400",
            textColor: "text-emerald-400",
        });

    }

    return activities;

}