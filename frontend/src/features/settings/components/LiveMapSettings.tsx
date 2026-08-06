"use client";

import {
    CloudSun,
    Activity,
    Flame,
    Map,
} from "lucide-react";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Switch } from "@/components/ui/switch";

import { useSettingsStore } from "@/stores/settings.store";

const layers = [
    {
        key: "weather",
        label: "Weather",
        description: "Display live weather conditions.",
        icon: CloudSun,
        color: "text-sky-500",
    },
    {
        key: "earthquake",
        label: "Earthquakes",
        description: "Show recent seismic activity.",
        icon: Activity,
        color: "text-orange-500",
    },
    /* {
        key: "airQuality",
        label: "Air Quality",
        description: "Display AQI monitoring layer.",
        icon: Wind,
        color: "text-emerald-500",
    }, */
    {
        key: "wildfire",
        label: "Wildfires",
        description: "Show active wildfire hotspots.",
        icon: Flame,
        color: "text-red-500",
    },
    /* {
        key: "iss",
        label: "ISS Tracker",
        description: "Display live ISS position.",
        icon: Satellite,
        color: "text-violet-500",
    }, */
] as const;

export function LiveMapSettings() {

    const {
        mapLayers,
        toggleLayer,
    } = useSettingsStore();

    return (

        <Card>

            <CardHeader>

                <CardTitle className="flex items-center gap-2">

                    <Map className="h-5 w-5" />

                    Live Map

                </CardTitle>

                <CardDescription>

                    Control which layers appear on the live world map.

                </CardDescription>

            </CardHeader>

            <CardContent>

                <div className="space-y-4">

                    {layers.map((layer) => {

                        const Icon = layer.icon;

                        return (

                            <div
                                key={layer.key}
                                className="
                                    flex
                                    items-center
                                    justify-between
                                    rounded-xl
                                    border
                                    p-4
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:border-primary/40
                                    hover:shadow-sm
                                "
                            >

                                <div className="flex items-center gap-4">

                                    <div className="rounded-xl bg-muted p-3">

                                        <Icon
                                            className={`h-5 w-5 ${layer.color}`}
                                        />

                                    </div>

                                    <div>

                                        <h4 className="font-medium">

                                            {layer.label}

                                        </h4>

                                        <p className="text-sm text-muted-foreground">

                                            {layer.description}

                                        </p>

                                    </div>

                                </div>

                                <Switch
                                    checked={
                                        mapLayers[layer.key]
                                    }
                                    onCheckedChange={() =>
                                        toggleLayer(layer.key)
                                    }
                                />

                            </div>

                        );

                    })}

                </div>

            </CardContent>

        </Card>

    );

}