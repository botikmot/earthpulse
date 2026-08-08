"use client";

import type { ISS } from "@/types/iss";
import type { LucideIcon } from "lucide-react";

import {
    Clock3,
    Globe2,
    Rocket,
    Radar,
    Sun,
    Moon,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";

type Props = {
    iss: ISS;
};

const ORBIT_PERIOD = 92;
const ORBITS_PER_DAY = (
    24 * 60
) / ORBIT_PERIOD;

export function ISSHighlights({
    iss,
}: Props) {

    const updated = new Date(
        iss.timestamp * 1000
    );

    return (

        <div className="rounded-xl border bg-card p-6">
            <h2 className="text-lg font-semibold mb-6">
                Mission Highlights
            </h2>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

                <HighlightItem
                    icon={Clock3}
                    title="Orbit Period"
                    value={`${ORBIT_PERIOD} Minutes`}
                />

                <HighlightItem
                    icon={Globe2}
                    title="Earth Orbits / Day"
                    value={`${ORBITS_PER_DAY.toFixed(1)} Orbits`}
                />

                <HighlightItem
                    icon={Rocket}
                    title="Current Speed"
                    value={`${Math.round(
                        iss.velocity ?? 0
                    ).toLocaleString()} km/h`}
                />

                <HighlightItem
                    icon={Radar}
                    title="Footprint"
                    value={`${Math.round(
                        iss.footprint ?? 0
                    ).toLocaleString()} km`}
                />

                <div className="space-y-2">

                    <p className="text-sm text-muted-foreground">

                        Visibility

                    </p>

                    <Badge
                        variant="secondary"
                    >

                        {iss.visibility === "DAYLIGHT"
                            ? (
                                <>
                                    <Sun className="mr-2 h-4 w-4"/>

                                    Daylight
                                </>
                            )
                            : (
                                <>
                                    <Moon className="mr-2 h-4 w-4"/>

                                    Eclipse
                                </>
                            )}

                    </Badge>

                </div>

                <div className="space-y-2">

                    <p className="text-sm text-muted-foreground">

                        Last Updated

                    </p>

                    <p className="font-semibold">

                        {updated.toLocaleTimeString()}

                    </p>

                </div>

            </div>

        </div>

    );

}

type HighlightItemProps = {
    icon: LucideIcon;
    title: string;
    value: string;
};

function HighlightItem({
    icon: Icon,
    title,
    value,
}: HighlightItemProps) {

    return (
        <div className="flex items-start gap-3">
            <div className="rounded-lg bg-violet-100 p-2 dark:bg-violet-950">
                <Icon className="h-5 w-5 text-violet-600 dark:text-violet-400"/>
            </div>
            <div>
                <p className="text-sm text-muted-foreground">
                    {title}
                </p>

                <p className="font-semibold">
                    {value}
                </p>
            </div>
        </div>
    );

}