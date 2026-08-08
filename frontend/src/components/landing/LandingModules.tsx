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
            "Track current weather, forecasts, humidity, wind speed, visibility, and atmospheric conditions in real time.",
        icon: CloudSun,
        color: "text-sky-400",
        glow: "from-sky-500/20 via-cyan-500/10 to-transparent",
        href: "/dashboard/weather",
    },
    {
        title: "Earthquake Monitoring",
        description:
            "Monitor global seismic activity with live magnitude, depth, coordinates, and recent event history.",
        icon: Mountain,
        color: "text-orange-400",
        glow: "from-orange-500/20 via-amber-500/10 to-transparent",
        href: "/dashboard/earthquakes",
    },
    {
        title: "Wildfire Detection",
        description:
            "Observe active wildfire incidents, affected regions, satellite detections, and event activity.",
        icon: Flame,
        color: "text-red-400",
        glow: "from-red-500/20 via-orange-500/10 to-transparent",
        href: "/dashboard/wildfires",
    },
    {
        title: "Air Quality",
        description:
            "Monitor AQI, particulate matter, atmospheric pollutants, and real-time air quality conditions.",
        icon: Gauge,
        color: "text-emerald-400",
        glow: "from-emerald-500/20 via-teal-500/10 to-transparent",
        href: "/dashboard/air-quality",
    },
    {
        title: "ISS Tracker",
        description:
            "Track the International Space Station's live position, altitude, speed, and orbital information.",
        icon: Satellite,
        color: "text-violet-400",
        glow: "from-violet-500/20 via-indigo-500/10 to-transparent",
        href: "/dashboard/iss",
    },
];

export function LandingModules() {
    return (
        <section
            id="modules"
            className="
                relative
                overflow-hidden
                py-28
                text-white
            "
        >
            {/* background glow */}

            <div
                className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-0
                    h-[420px]
                    w-[900px]
                    -translate-x-1/2
                    rounded-full
                    bg-cyan-500/5
                    blur-[120px]
                "
            />

            <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

                {/* Header */}

                <div className="mx-auto mb-16 max-w-3xl text-center">

                    <span
                        className="
                            inline-flex
                            rounded-full
                            border
                            border-white/10
                            bg-white/[0.03]
                            px-4
                            py-1.5
                            text-xs
                            font-medium
                            text-cyan-300
                            backdrop-blur
                        "
                    >
                        Core Monitoring Modules
                    </span>

                    <h2
                        className="
                            mt-6
                            text-3xl
                            font-bold
                            tracking-tight
                            sm:text-4xl
                            lg:text-5xl
                        "
                    >
                        Explore Every Module
                    </h2>

                    <p
                        className="
                            mx-auto
                            mt-5
                            max-w-2xl
                            text-sm
                            leading-7
                            text-slate-400
                            sm:text-base
                        "
                    >
                        ERRION brings multiple real-time Earth monitoring
                        systems into one unified mission control platform.
                    </p>

                </div>

                {/* Cards */}

                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

                    {modules.map((module) => {

                        const Icon = module.icon;

                        return (
                            <Link
                                key={module.title}
                                href={module.href}
                                className="
                                    group
                                    relative
                                    overflow-hidden
                                    rounded-3xl
                                    border
                                    border-white/10
                                    bg-white/[0.03]
                                    p-7
                                    backdrop-blur-xl
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1.5
                                    hover:border-white/20
                                    hover:bg-white/[0.05]
                                    hover:shadow-[0_20px_60px_rgba(0,0,0,.30)]
                                "
                            >

                                {/* module glow */}

                                <div
                                    className={`
                                        pointer-events-none
                                        absolute
                                        inset-0
                                        bg-gradient-to-br
                                        opacity-70
                                        ${module.glow}
                                    `}
                                />

                                <div className="relative z-10">

                                    <div
                                        className="
                                            mb-8
                                            flex
                                            h-14
                                            w-14
                                            items-center
                                            justify-center
                                            rounded-2xl
                                            border
                                            border-white/10
                                            bg-white/[0.05]
                                        "
                                    >
                                        <Icon
                                            className={`h-7 w-7 ${module.color}`}
                                        />
                                    </div>

                                    <h3 className="text-xl font-semibold">
                                        {module.title}
                                    </h3>

                                    <p
                                        className="
                                            mt-3
                                            min-h-[84px]
                                            text-sm
                                            leading-7
                                            text-slate-400
                                        "
                                    >
                                        {module.description}
                                    </p>

                                    <div
                                        className="
                                            mt-7
                                            flex
                                            items-center
                                            gap-2
                                            text-sm
                                            font-medium
                                            text-white
                                        "
                                    >
                                        Open Module

                                        <ArrowRight
                                            className="
                                                h-4
                                                w-4
                                                transition-transform
                                                duration-300
                                                group-hover:translate-x-1.5
                                            "
                                        />
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