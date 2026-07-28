import { create } from "zustand";
import type { UserAddress } from "@/services/reverseGeocode.service";

export type UserLocation = UserAddress & {
    latitude: number;
    longitude: number;
};

type LocationState = {
    location: UserLocation | null;
    loading: boolean;
    error: string | null;

    setLocation: (location: UserLocation) => void;
    setLoading: (loading: boolean) => void;
    setError: (error: string | null) => void;
};

export const useLocationStore = create<LocationState>((set) => ({

    location: null,

    loading: true,

    error: null,

    setLocation: (location) =>
        set({ location }),

    setLoading: (loading) =>
        set({ loading }),

    setError: (error) =>
        set({ error }),

}));