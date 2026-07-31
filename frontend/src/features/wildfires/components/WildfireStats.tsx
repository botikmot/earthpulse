"use client";

import type { Wildfire } from "@/types/wildfire";

import {
    Flame,
    Trees,
    Satellite,
    CalendarDays,
} from "lucide-react";

import { StatCard } from "@/components/common/StatCard";

type Props = {
    wildfires: Wildfire[];
};

export function WildfireStats({
    wildfires,
}: Props) {

    const totalArea = wildfires.reduce(
        (sum, wildfire) => sum + (wildfire.area ?? 0),
        0
    );

    const sources = new Set(
        wildfires.map(
            (wildfire) => wildfire.source
        )
    );

    const latestDate =
        wildfires.length > 0
            ? new Date(
                Math.max(
                    ...wildfires.map(
                        (wildfire) =>
                            new Date(
                                wildfire.date
                            ).getTime()
                    )
                )
            ).toLocaleDateString()
            : "-";

    return (

        <div
            className="
                grid
                gap-4
                md:grid-cols-2
                xl:grid-cols-4
                mb-6
            "
        >

            <StatCard
                title="Active Fires"
                value={wildfires.length}
                subtitle="Last 30 Days"
                icon={Flame}
                variant="wildfire"
            />

            <StatCard
                title="Burned Area"
                value={
                    totalArea
                        ? totalArea.toLocaleString()
                        : "-"
                }
                subtitle="Estimated Acres"
                icon={Trees}
                variant="wildfire"
            />

            <StatCard
                title="Sources"
                value={sources.size}
                subtitle="Monitoring Systems"
                icon={Satellite}
                variant="wildfire"
            />

            <StatCard
                title="Latest Detection"
                value={latestDate}
                subtitle="Most Recent Event"
                icon={CalendarDays}
                variant="wildfire"
            />

        </div>

    );

}