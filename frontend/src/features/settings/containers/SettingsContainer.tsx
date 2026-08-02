"use client";

import { AppearanceSettings } from "../components/AppearanceSettings";
import { LiveMapSettings } from "../components/LiveMapSettings";
import { AutoRefreshSettings } from "../components/AutoRefreshSettings";
import { UnitSettings } from "../components/UnitSettings";
import { AboutSettings } from "../components/AboutSettings";

export function SettingsContainer() {

    return (
        <div className="space-y-6">
            <AppearanceSettings />
            <LiveMapSettings />
            <AutoRefreshSettings />
            <UnitSettings />
            <AboutSettings />
        </div>
    );

}