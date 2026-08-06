"use client";

import { StatCard } from "@/components/common/StatCard";
import {
    Palette,
    Layers3,
    Ruler,
    RefreshCw,
} from "lucide-react";

import { useSettingsStore } from "@/stores/settings.store";

export function SettingsStats() {

    const {
        appearance,
        temperatureUnit,
        mapLayers,
    } = useSettingsStore();

    const enabledLayers =
        Object.values(mapLayers).filter(Boolean).length;

    return (

        <div className="mb-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            <StatCard
                title="Theme"
                value={
                    appearance.charAt(0).toUpperCase() +
                    appearance.slice(1)
                }
                icon={Palette}
                variant="settings"
            />

            <StatCard
                title="Enabled Layers"
                value={enabledLayers}
                icon={Layers3}
                variant="settings"
            />

            <StatCard
                title="Temperature"
                value={`°${temperatureUnit}`}
                icon={Ruler}
                variant="settings"
            />

            <StatCard
                title="Auto Refresh"
                value="Enabled"
                icon={RefreshCw}
                variant="settings"
            />

        </div>

    );

}