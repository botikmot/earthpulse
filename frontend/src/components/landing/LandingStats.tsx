"use client";

import Link from "next/link";

import {
    CloudSun,
    Flame,
    Gauge,
    Mountain,
    Satellite,
    ArrowRight,
} from "lucide-react";

const stats = [
    {
        title: "Earthquakes",
        value: "227",
        subtitle: "Last 24 Hours",
        icon: Mountain,
        color: "text-orange-500",
        href: "/dashboard/earthquake",
    },
    {
        title: "Weather",
        value: "27°C",
        subtitle: "Current",
        icon: CloudSun,
        color: "text-sky-500",
        href: "/dashboard/weather",
    },
    {
        title: "Wildfires",
        value: "191",
        subtitle: "Active",
        icon: Flame,
        color: "text-red-500",
        href: "/dashboard/wildfire",
    },
    {
        title: "Air Quality",
        value: "AQI 12",
        subtitle: "Excellent",
        icon: Gauge,
        color: "text-emerald-500",
        href: "/dashboard/air-quality",
    },
    {
        title: "ISS",
        value: "LIVE",
        subtitle: "Orbiting Earth",
        icon: Satellite,
        color: "text-violet-500",
        href: "/dashboard/iss",
    },
];

export function LandingStats() {
    return (
        <section className="relative -mt-20 z-20">

            <div className="mx-auto max-w-7xl px-6">

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">

                    {stats.map((item) => {

                        const Icon = item.icon;

                        return (

                            <Link
                                key={item.title}
                                href={item.href}
                                className="
                                    group
                                    rounded-2xl
                                    border
                                    bg-background/90
                                    backdrop-blur-md
                                    p-6
                                    shadow-lg
                                    transition-all
                                    duration-300
                                    hover:-translate-y-2
                                    hover:border-primary/40
                                    hover:shadow-xl
                                "
                            >

                                <div className="flex items-center justify-between">

                                    <div>

                                        <p className="text-sm text-muted-foreground">

                                            {item.title}

                                        </p>

                                        <h3 className="mt-2 text-3xl font-bold">

                                            {item.value}

                                        </h3>

                                        <p className="mt-1 text-xs text-muted-foreground">

                                            {item.subtitle}

                                        </p>

                                    </div>

                                    <div
                                        className="
                                            rounded-xl
                                            bg-muted
                                            p-3
                                        "
                                    >

                                        <Icon
                                            className={`h-6 w-6 ${item.color}`}
                                        />

                                    </div>

                                </div>

                                <div
                                    className="
                                        mt-5
                                        flex
                                        items-center
                                        text-sm
                                        font-medium
                                        text-primary
                                        opacity-0
                                        transition-all
                                        group-hover:opacity-100
                                    "
                                >

                                    Explore

                                    <ArrowRight className="ml-2 h-4 w-4" />

                                </div>

                            </Link>

                        );

                    })}

                </div>

            </div>

        </section>
    );
}