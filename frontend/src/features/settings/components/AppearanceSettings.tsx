"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Palette, Sun, Moon, Monitor, Check } from "lucide-react";
import { useTheme } from "next-themes";
import { useSettingsStore, type AppearanceMode } from "@/stores/settings.store";

const themes = [
    {
        id: "light",
        label: "Light",
        description: "Bright interface",
        icon: Sun,
    },
    {
        id: "dark",
        label: "Dark",
        description: "Dark interface",
        icon: Moon,
    },
    {
        id: "system",
        label: "System",
        description: "Follow device theme",
        icon: Monitor,
    },
] as const;

export function AppearanceSettings() {

    const {
        appearance,
        setAppearance,
    } = useSettingsStore();

    const {
        setTheme,
    } = useTheme();

    function handleTheme(mode: AppearanceMode) {

        setAppearance(mode);

        setTheme(mode);

    }

    return (

        <Card>

            <CardHeader>

                <CardTitle className="flex items-center gap-2">

                    <Palette className="h-5 w-5" />

                    Appearance

                </CardTitle>

                <CardDescription>

                    Choose how EarthPulse looks.

                </CardDescription>

            </CardHeader>

            <CardContent>

                <div className="grid gap-4">

                    {themes.map((theme) => {

                        const Icon = theme.icon;

                        const active =
                            appearance === theme.id;

                        return (

                            <button
                                key={theme.id}
                                onClick={() =>
                                    handleTheme(theme.id)
                                }
                                className={`
                                    group
                                    relative
                                    rounded-xl
                                    border
                                    p-4
                                    text-left
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:shadow-md

                                    ${
                                        active
                                            ? "border-primary bg-primary/5"
                                            : "hover:border-primary/40"
                                    }
                                `}
                            >

                                <div className="flex items-start justify-between">

                                    <div className="flex gap-4">

                                        <div
                                            className={`
                                                rounded-xl
                                                p-3

                                                ${
                                                    active
                                                        ? "bg-primary text-primary-foreground"
                                                        : "bg-muted"
                                                }
                                            `}
                                        >

                                            <Icon className="h-5 w-5" />

                                        </div>

                                        <div>

                                            <h4 className="font-semibold">

                                                {theme.label}

                                            </h4>

                                            <p className="text-sm text-muted-foreground">

                                                {theme.description}

                                            </p>

                                        </div>

                                    </div>

                                    {active && (

                                        <Check
                                            className="
                                                h-5
                                                w-5
                                                text-primary
                                            "
                                        />

                                    )}

                                </div>

                            </button>

                        );

                    })}

                </div>

            </CardContent>

        </Card>

    );

}