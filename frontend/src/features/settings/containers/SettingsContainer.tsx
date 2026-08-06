"use client";

import { AppearanceSettings } from "../components/AppearanceSettings";
import { LiveMapSettings } from "../components/LiveMapSettings";
import { AutoRefreshSettings } from "../components/AutoRefreshSettings";
import { UnitSettings } from "../components/UnitSettings";
import { AboutSettings } from "../components/AboutSettings";
import { HeroSection } from "@/components/common/HeroSection";
import { SettingsAnimation } from "@/components/effects/SettingsAnimation";
import { SettingsStats } from "../components/SettingsStats";

export function SettingsContainer() {

    return (
        <div className="space-y-6">

            <HeroSection
                background="from-violet-50 via-slate-50 to-indigo-50 dark:from-violet-950/30 dark:via-slate-950/20 dark:to-indigo-950/20"
                title="Settings"
                subtitle="Customize Your ERRION Experience"
                description="Personalize appearance, map layers, refresh intervals, units, and application preferences."
                animation={
                    <SettingsAnimation  />
                }
            />

            <SettingsStats />

            <div className="grid gap-6 xl:grid-cols-2">
                <AppearanceSettings />
                <LiveMapSettings />
                <AutoRefreshSettings />
                <UnitSettings />
            </div>

            <AboutSettings />
        </div>
    );

}