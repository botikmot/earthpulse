import { useCallback, useEffect } from "react";
import {
    fetchAirQuality
} from "@/services/air-quality.service";
import { useAirQualityStore } from "@/stores/air-quality.store";
import { useAutoRefresh } from "./useAutoRefresh";
import { CACHE } from "@/constants/cache";


type UseAirQualityOptions = {
    latitude?:number;
    longitude?:number;
    city?:string;
    country?:string;
    enabled?:boolean;
};

export function useAirQuality({
    latitude,
    longitude,
    city,
    country,
    enabled = true,
}:UseAirQualityOptions){

    const {
        airQuality,
        loading,
        error,
        lastUpdated,
        setAirQuality,
        setLoading,
        setRefreshing,
        setError,
    } = useAirQualityStore();

    const loadAirQuality = useCallback(

        async(force=false)=>{
            if(
                !force &&
                airQuality &&
                lastUpdated &&
                Date.now() - lastUpdated < CACHE.AIR_QUALITY
            ){
                return;
            }

            try { 

                if(airQuality){
                    setRefreshing(true);
                }
                else{
                    setLoading(true);
                }

                setError(null);

                if (latitude === undefined || longitude === undefined || city === undefined || country === undefined) {
                    setError("Location unavailable.");
                    return;
                }

                const data = await fetchAirQuality(
                        latitude,
                        longitude,
                        city,
                        country
                    );

                setAirQuality(data);

            } catch(error){

                console.error(error );
                setError("Failed to load air quality.");
            }
            finally{
                setLoading(false);
                setRefreshing(false);
            }

        },
        [
            latitude,
            longitude,
            city,
            country,
            airQuality,
            lastUpdated,
            setAirQuality,
            setLoading,
            setRefreshing,
            setError,
        ]
    );

    const refreshAirQuality = useCallback(()=>{
        console.log(
            "AUTO REFRESH AIR QUALITY:",
            new Date()
            .toLocaleTimeString()
        );
        void loadAirQuality(true);
    },[loadAirQuality]);

    useEffect(() => {
        if(!enabled)
            return;
        void loadAirQuality();
    },[
        enabled,
        loadAirQuality
    ]);

    useAutoRefresh({
        enabled,
        interval: CACHE.AIR_QUALITY,
        callback: refreshAirQuality,
    });

    return {
        airQuality,
        loading,
        error,
        refetch: loadAirQuality,
    };
}