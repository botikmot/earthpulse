"use client";

import { useEffect } from "react";
import { reverseGeocode } from "@/services/reverseGeocode.service";
import { getIPLocation } from "@/services/ipLocation.service";
import { DEFAULT_LOCATION } from "@/constants/defaultLocation";
import { useLocationStore } from "@/stores/location.store";


export function useUserLocation() {

    const {
        location,
        loading,
        error,
        setLocation,
        setLoading,
        setError,
    } = useLocationStore();
    
    useEffect(() => {

        async function loadLocation() {

            if (location) {
                setLoading(false);
                return;
            }

            if (!navigator.geolocation) {

                setLoading(false);
                return;

            }

            navigator.geolocation.getCurrentPosition(

                async (position) => {

                    try {

                        const latitude =
                            position.coords.latitude;

                        const longitude =
                            position.coords.longitude;

                        const address =
                            await reverseGeocode(
                                latitude,
                                longitude
                            );

                        setLocation({

                            latitude,
                            longitude,
                            ...address,

                        });

                    } catch {

                        setError(
                            "Unable to resolve your location."
                        );

                    } finally {

                        setLoading(false);

                    }

                },

                async () => {

                    try {
                        const ipLocation =
                            await getIPLocation();
                        setLocation(ipLocation);

                    } catch {
                        setLocation(DEFAULT_LOCATION);

                    } finally {
                        setLoading(false);
                    }

                }

            );

        }

        loadLocation();

    }, []);

    return {
        location,
        loading,
        error,
    };

}