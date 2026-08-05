"use client";

import { useISS } from "@/hooks/useISS";
import { Loading } from "@/components/ui/Loading";
import { ErrorMessage } from "@/components/ui/ErrorMessage";
import { ISSCard } from "./ISSCard";
import { ISSHighlights } from "./ISSHighlights";
import { HeroSection } from "@/components/common/HeroSection";
import { ISSTrackerAnimation } from "@/components/effects/ISSTrackerAnimation";

export function ISSContainer() {

    const {
        iss,
        loading,
        error,
    } = useISS();

    if (loading) {
        return (
            <Loading
                text="Loading ISS Tracker..."
            />
        );

    }

    if (error) {
        return (
            <ErrorMessage
                message={error}
            />
        );

    }

    if (!iss) {
        return null;
    }

    return (

        <div className="space-y-6">

            <HeroSection 
                background="from-indigo-50 via-slate-50 to-sky-800 dark:from-indigo-950/30 dark:via-slate-950/20 dark:to-sky-950/20"
                title="ISS Tracker"
                subtitle="Real-Time International Space Station Tracking"
                description="Track the International Space Station in real time, monitor its orbital path, current location, speed, altitude, and upcoming passes over the Earth."
                animation={(
                        <ISSTrackerAnimation />
                )}
            />

            <ISSCard
                iss={iss}
            />
            <ISSHighlights iss={iss} />
        </div>

    );

}