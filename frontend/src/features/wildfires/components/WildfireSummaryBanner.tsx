"use client";

import type { Wildfire } from "@/types/wildfire";
import { Flame, Trees, Satellite, CalendarDays } from "lucide-react";

type Props = {
    wildfires: Wildfire[];
};

export function WildfireSummaryBanner({
    wildfires,
}: Props) {

    if (!wildfires.length) return null;

    const largestFire = [...wildfires].sort(
        (a, b) => (b.area ?? 0) - (a.area ?? 0)
    )[0];

    const latestFire = [...wildfires].sort(
        (a, b) =>
            new Date(b.date).getTime() -
            new Date(a.date).getTime()
    )[0];

    const sourceCounts = wildfires.reduce(
        (acc, wildfire) => {
            acc[wildfire.source] =
                (acc[wildfire.source] ?? 0) + 1;
            return acc;
        },
        {} as Record<string, number>
    );

    const topSource =
        Object.entries(sourceCounts).sort(
            (a, b) => b[1] - a[1]
        )[0]?.[0] ?? "-";

    return (

        <div
            className="
                rounded-xl
                border
                bg-gradient-to-r
                from-red-600
                via-orange-600
                to-red-700
                p-6
                text-white
                shadow-lg
                mb-6
            "
        >

            <div className="flex items-center gap-3">

                <Flame className="h-8 w-8" />

                <div>

                    <h2 className="text-xl font-bold">
                        Global Wildfire Situation
                    </h2>

                    <p className="text-red-100">

                        {wildfires.length} active wildfire events are currently being monitored.

                    </p>

                </div>

            </div>

            <div
                className="
                    mt-6
                    grid
                    gap-4
                    md:grid-cols-3
                "
            >

                <div className="rounded-lg bg-white/10 p-4">

                    <div className="flex items-center gap-2">

                        <Trees className="h-5 w-5" />

                        <span className="font-semibold">

                            Largest Fire

                        </span>

                    </div>

                    <div className="mt-2 text-sm">

                        {largestFire.title}

                    </div>

                    <div className="text-xs text-red-100">

                        {largestFire.area
                            ? `${largestFire.area.toLocaleString()} ${largestFire.areaUnit}`
                            : "Unknown"}

                    </div>

                </div>

                <div className="rounded-lg bg-white/10 p-4">

                    <div className="flex items-center gap-2">

                        <Satellite className="h-5 w-5" />

                        <span className="font-semibold">

                            Main Source

                        </span>

                    </div>

                    <div className="mt-2 text-sm">

                        {topSource}

                    </div>

                </div>

                <div className="rounded-lg bg-white/10 p-4">

                    <div className="flex items-center gap-2">

                        <CalendarDays className="h-5 w-5" />

                        <span className="font-semibold">

                            Latest Detection

                        </span>

                    </div>

                    <div className="mt-2 text-sm">

                        {new Date(
                            latestFire.date
                        ).toLocaleString()}

                    </div>

                </div>

            </div>

        </div>

    );

}