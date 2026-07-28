"use client";

import { useUserLocation } from "@/hooks/useUserLocation";

export function LocationProvider({
    children,
}: {
    children: React.ReactNode;
}) {

    // Initialize location once
    useUserLocation();

    return <>{children}</>;
}