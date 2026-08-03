import { useEarthquakes } from "@/hooks/useEarthquakes";
import { useWildfires } from "@/hooks/useWildfires";
import { useAirQuality } from "@/hooks/useAirQuality";
import { useLocationStore } from "@/stores/location.store";

export function useDashboardStats() {

    const location = useLocationStore(
        (state) => state.location
    );

    const {
        earthquakes,
    } = useEarthquakes();

    const {
        wildfires,
    } = useWildfires();

    const {
        airQuality,
    } = useAirQuality({
        latitude: location?.latitude,
        longitude: location?.longitude,
        city: location?.city,
        country: location?.country,
        enabled: !!location,
    });

    return {

        earthquakesCount:
            earthquakes.length,

        wildfiresCount:
            wildfires.length,

        weatherAlerts:
            earthquakes.filter(
                quake => quake.magnitude >= 5
            ).length,

        airQualityIndex:
            airQuality?.aqi ?? "--",

    };

}