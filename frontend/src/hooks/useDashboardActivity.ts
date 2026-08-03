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
            description: `Magnitude ${earthquakes[0].magnitude}`,
            time: new Date(earthquakes[0].time).toISOString(),
        });

    }

    if (weather) {

        activities.push({
            id: "weather",
            icon: CloudSun,
            color: "bg-blue-500",
            title: "Weather Updated",
            description: weather.condition,
            time: new Date().toISOString(),
        });

    }

    if (wildfires.length > 0) {

        activities.push({
            id: "wildfire",
            icon: Flame,
            color: "bg-red-500",
            title: "Wildfire Alert",
            description: `${wildfires.length} Active Fires`,
            time: new Date(wildfires[0].date).toISOString(),
        });

    }

    if (airQuality) {

        activities.push({
            id: "aqi",
            icon: Wind,
            color: "bg-green-500",
            title: "Air Quality Updated",
            description: `AQI ${airQuality.aqi}`,
            time: new Date(airQuality.updatedAt).toISOString(),
        });

    }

    return activities;

}