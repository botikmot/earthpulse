"use client";

import { useISS } from "@/hooks/useISS";
import { Loading } from "@/components/ui/Loading";
import { ErrorMessage } from "@/components/ui/ErrorMessage";
import { ISSCard } from "./ISSCard";
import { ISSHighlights } from "./ISSHighlights";

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
            <ISSCard
                iss={iss}
            />
            <ISSHighlights iss={iss} />
        </div>

    );

}