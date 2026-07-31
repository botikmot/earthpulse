"use client";

import type { Wildfire } from "@/types/wildfire";

import {
    Activity,
    CalendarDays,
    Flame,
    BarChart3,
} from "lucide-react";

type Props = {
    wildfires: Wildfire[];
};

export function WildfireInsights({
    wildfires,
}: Props) {

    if (!wildfires.length)
        return null;

    const firesWithArea =
        wildfires.filter(
            (wildfire) => wildfire.area !== null
        );

    const averageArea =
        firesWithArea.length > 0
            ? firesWithArea.reduce(
                  (sum, wildfire) =>
                      sum + (wildfire.area ?? 0),
                  0
              ) / firesWithArea.length
            : 0;

    const currentTime = new Date();

    const averageAge =
        wildfires.reduce((sum, wildfire) => {

            const detected =
                new Date(
                    wildfire.date
                ).getTime();

            const age =
                (
                    currentTime.getTime() -
                    detected
                ) /
                (1000 * 60 * 60 * 24);

            return sum + age;

        }, 0) / wildfires.length;

    const active =
        wildfires.filter(
            (wildfire) =>
                wildfire.status === "ACTIVE"
        ).length;

    const coverage =
        (
            firesWithArea.length /
            wildfires.length
        ) * 100;

    return (

        <div
            className="
                grid
                gap-4
                md:grid-cols-2
                xl:grid-cols-4
            "
        >

            <InsightCard
                icon={Activity}
                title="Average Fire Size"
                value={`${averageArea.toFixed(0)} Acres`}
            />

            <InsightCard
                icon={CalendarDays}
                title="Average Fire Age"
                value={`${averageAge.toFixed(1)} Days`}
            />

            <InsightCard
                icon={Flame}
                title="Currently Active"
                value={active}
            />

            <InsightCard
                icon={BarChart3}
                title="Area Coverage"
                value={`${coverage.toFixed(0)}%`}
            />

        </div>

    );

}

type InsightCardProps = {

    icon: React.ElementType;

    title: string;

    value: string | number;

};

function InsightCard({

    icon: Icon,

    title,

    value,

}: InsightCardProps) {

    return (

        <div
            className="
                rounded-xl
                border
                bg-card
                p-5
                shadow-sm
                hover:shadow-md
                transition-all
            "
        >

            <div className="flex items-center gap-3">

                <div
                    className="
                        rounded-lg
                        bg-orange-100
                        p-3
                        text-orange-600
                        dark:bg-orange-950
                    "
                >

                    <Icon className="h-5 w-5"/>

                </div>

                <div>

                    <div
                        className="
                            text-sm
                            text-muted-foreground
                        "
                    >

                        {title}

                    </div>

                    <div
                        className="
                            text-xl
                            font-bold
                        "
                    >

                        {value}

                    </div>

                </div>

            </div>

        </div>

    );

}