"use client";

import Link from "next/link";

import {
    Globe2,
    CloudSun,
    Mountain,
    Wind,
    Flame,
    Satellite,
} from "lucide-react";

const actions = [
    {
        title: "Live Map",
        href: "/live-map",
        icon: Globe2,
    },
    {
        title: "Weather",
        href: "/weather",
        icon: CloudSun,
    },
    {
        title: "Earthquakes",
        href: "/earthquakes",
        icon: Mountain,
    },
    {
        title: "Air Quality",
        href: "/air-quality",
        icon: Wind,
    },
    {
        title: "Wildfires",
        href: "/wildfires",
        icon: Flame,
    },
    {
        title: "ISS Tracker",
        href: "/iss",
        icon: Satellite,
    },
];

export function QuickActions() {

    return (

        <section className="mb-8">

            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                Quick Actions
            </h2>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">

                {actions.map((action) => {

                    const Icon = action.icon;

                    return (

                        <Link
                            key={action.title}
                            href={action.href}
                            className="
                                group
                                rounded-xl
                                border
                                bg-card
                                p-5
                                transition-all
                                hover:border-primary
                                hover:shadow-md
                                hover:-translate-y-1
                            "
                        >

                            <div className="flex items-center gap-4">
                                <div className="
                                    rounded-xl
                                    bg-primary/10
                                    p-3
                                    transition-colors
                                    group-hover:bg-primary
                                ">
                                    <Icon className="
                                        h-6
                                        w-6
                                        text-primary
                                        group-hover:text-white
                                    "/>
                                </div>

                                <div>
                                    <h3 className="font-semibold">
                                        {action.title}
                                    </h3>
                                    <p className="text-xs text-muted-foreground">
                                        Open module
                                    </p>
                                </div>

                            </div>

                        </Link>

                    );

                })}

            </div>

        </section>

    );

}