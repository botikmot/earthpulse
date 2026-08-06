"use client";

import Link from "next/link";

import {
    ArrowRight,
    CloudSun,
    Flame,
    Gauge,
    Mountain,
    Satellite,
} from "lucide-react";

const modules = [
    {
        title: "Weather Monitoring",
        description:
            "Track current weather, forecasts, humidity, wind speed, visibility and atmospheric conditions in real time.",
        icon: CloudSun,
        color: "text-sky-500",
        background:
            "from-sky-50 to-blue-100 dark:from-sky-950/20 dark:to-blue-950/20",
        href: "/dashboard/weather",
    },
    {
        title: "Earthquake Monitoring",
        description:
            "Monitor global seismic activity with live magnitude, depth, coordinates and event history.",
        icon: Mountain,
        color: "text-orange-500",
        background:
            "from-orange-50 to-amber-100 dark:from-orange-950/20 dark:to-amber-950/20",
        href: "/dashboard/earthquake",
    },
    {
        title: "Wildfire Detection",
        description:
            "Observe active wildfire incidents, affected areas and detection sources from NASA EONET.",
        icon: Flame,
        color: "text-red-500",
        background:
            "from-red-50 to-orange-100 dark:from-red-950/20 dark:to-orange-950/20",
        href: "/dashboard/wildfire",
    },
    {
        title: "Air Quality",
        description:
            "Monitor PM2.5, PM10, AQI and environmental pollutants with real-time air quality data.",
        icon: Gauge,
        color: "text-emerald-500",
        background:
            "from-emerald-50 to-green-100 dark:from-emerald-950/20 dark:to-green-950/20",
        href: "/dashboard/air-quality",
    },
    {
        title: "ISS Tracker",
        description:
            "Track the International Space Station's live position, velocity and orbital information.",
        icon: Satellite,
        color: "text-violet-500",
        background:
            "from-violet-50 to-indigo-100 dark:from-violet-950/20 dark:to-indigo-950/20",
        href: "/dashboard/iss",
    },
];

export function LandingModules() {
    return (
        <section className="py-24">

            <div className="mx-auto max-w-7xl px-6">

                <div className="mb-14 text-center">

                    <h2 className="text-4xl font-bold">

                        Explore Every Module

                    </h2>

                    <p className="mt-4 text-muted-foreground max-w-3xl mx-auto">

                        ERRION combines multiple environmental
                        monitoring systems into one modern mission control
                        platform.

                    </p>

                </div>

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                    {modules.map((module) => {

                        const Icon = module.icon;

                        return (

                            <Link
                                key={module.title}
                                href={module.href}
                                className="
                                    group
                                    overflow-hidden
                                    rounded-3xl
                                    border
                                    bg-card
                                    transition-all
                                    duration-300
                                    hover:-translate-y-2
                                    hover:shadow-xl
                                "
                            >

                                <div
                                    className={`
                                        h-44
                                        bg-gradient-to-br
                                        ${module.background}
                                        flex
                                        items-center
                                        justify-center
                                    `}
                                >

                                    <Icon
                                        className={`
                                            h-24
                                            w-24
                                            ${module.color}
                                            transition-transform
                                            duration-500
                                            group-hover:scale-110
                                            group-hover:rotate-6
                                        `}
                                    />

                                </div>

                                <div className="space-y-4 p-8">

                                    <h3 className="text-2xl font-bold">

                                        {module.title}

                                    </h3>

                                    <p className="text-muted-foreground leading-7">

                                        {module.description}

                                    </p>

                                    <div className="flex items-center font-medium text-primary">

                                        Open Module

                                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-2" />

                                    </div>

                                </div>

                            </Link>

                        );

                    })}

                </div>

            </div>

        </section>
    );
}