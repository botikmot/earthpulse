"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { RefreshCw } from "lucide-react";
import { CACHE } from "@/constants/cache";

const refreshItems = [
    {
        label: "Weather",
        value: CACHE.WEATHER,
    },
    {
        label: "Earthquakes",
        value: CACHE.EARTHQUAKES,
    },
    {
        label: "Wildfires",
        value: CACHE.WILDFIRES,
    },
    {
        label: "Air Quality",
        value: CACHE.AIR_QUALITY,
    },
    {
        label: "ISS Tracker",
        value: CACHE.ISS,
    },
];

function formatDuration(milliseconds: number) {

    const seconds = milliseconds / 1000;

    if (seconds < 60) {
        return `${seconds} sec`;
    }

    const minutes = seconds / 60;

    return `${minutes} mins`;

}

export function AutoRefreshSettings() {

    return (

        <Card>

            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <RefreshCw className="h-5 w-5" />
                    Auto Refresh
                </CardTitle>

                <CardDescription>
                    Current refresh interval for each module.
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-4">

                {refreshItems.map((item) => (

                    <div
                        key={item.label}
                        className="flex items-center justify-between"
                    >
                        <span>
                            {item.label}
                        </span>

                        <span className="text-sm text-muted-foreground">
                            {formatDuration(item.value)}
                        </span>
                    </div>

                ))}

            </CardContent>

        </Card>

    );

}