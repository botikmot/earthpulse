"use client";

import Link from "next/link";

import {
    CloudSun,
    Flame,
    Gauge,
    Mountain,
    Satellite,
} from "lucide-react";

const stats = [
    {
        title: "Earthquakes",
        value: "227",
        subtitle: "Last 24 Hours",
        icon: Mountain,
        color: "text-orange-500",
        stroke: "#f97316",
        href: "/dashboard/earthquake",
    },
    {
        title: "Weather",
        value: "27°C",
        subtitle: "Current",
        icon: CloudSun,
        color: "text-sky-400",
        stroke: "#38bdf8",
        href: "/dashboard/weather",
    },
    {
        title: "Wildfires",
        value: "191",
        subtitle: "Active",
        icon: Flame,
        color: "text-red-500",
        stroke: "#ef4444",
        href: "/dashboard/wildfire",
    },
    {
        title: "Air Quality",
        value: "AQI 12",
        subtitle: "Excellent",
        icon: Gauge,
        color: "text-emerald-400",
        stroke: "#34d399",
        href: "/dashboard/air-quality",
    },
    {
        title: "ISS",
        value: "LIVE",
        subtitle: "Orbiting Earth",
        icon: Satellite,
        color: "text-violet-400",
        stroke: "#a855f7",
        href: "/dashboard/iss",
    },
];

export function LandingStats() {
    return (
        <section
            className="
                relative
                z-30
                -mt-20
                pb-4
            "
        >
            {/* Dark background starts halfway behind the cards */}
            <div
                className="
                    pointer-events-none
                    absolute
                    inset-x-0
                    top-20
                    bottom-0
                    -z-10
                    bg-[#030712]
                "
            />

            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

                <div
                    className="
                        grid
                        gap-4
                        sm:grid-cols-2
                        xl:grid-cols-5
                    "
                >
                    {stats.map((item) => {
                        const Icon = item.icon;

                        return (
                            <Link
                                key={item.title}
                                href={item.href}
                                className="
                                    group
                                    relative
                                    min-h-[190px]
                                    overflow-hidden
                                    rounded-2xl
                                    border
                                    border-white/10
                                    bg-[#07111f]/90
                                    p-5
                                    text-white
                                    shadow-[0_12px_40px_rgba(0,0,0,.28)]
                                    backdrop-blur-xl
                                    transition-all
                                    duration-300

                                    hover:-translate-y-1.5
                                    hover:border-white/20
                                    hover:shadow-[0_18px_50px_rgba(0,0,0,.38)]
                                "
                            >

                                {/* subtle top glow */}
                                <div
                                    className="
                                        pointer-events-none
                                        absolute
                                        inset-x-0
                                        top-0
                                        h-px
                                        bg-gradient-to-r
                                        from-transparent
                                        via-white/15
                                        to-transparent
                                    "
                                />

                                <div className="relative z-10">

                                    {/* top row */}

                                    <div className="flex items-start justify-between">

                                        <div className="flex items-center gap-3">

                                            <Icon
                                                className={`h-6 w-6 ${item.color}`}
                                                strokeWidth={2}
                                            />

                                            <span className="text-sm font-medium text-slate-300">
                                                {item.title}
                                            </span>

                                        </div>

                                        <div
                                            className="
                                                flex
                                                h-12
                                                w-12
                                                items-center
                                                justify-center
                                                rounded-xl
                                                bg-white/[0.06]
                                                ring-1
                                                ring-white/[0.04]
                                            "
                                        >
                                            <Icon
                                                className={`h-6 w-6 ${item.color}`}
                                                strokeWidth={2}
                                            />
                                        </div>

                                    </div>

                                    {/* value */}

                                    <h3
                                        className="
                                            mt-4
                                            text-3xl
                                            font-semibold
                                            tracking-tight
                                            text-white
                                        "
                                    >
                                        {item.value}
                                    </h3>

                                    {/* subtitle */}

                                    <p className="mt-1 text-sm text-slate-400">
                                        {item.subtitle}
                                    </p>

                                    {/* sparkline */}

                                    <div
                                        className="
                                            absolute
                                            bottom-[-3px]
                                            right-0
                                            h-12
                                            w-24
                                            opacity-95
                                        "
                                    >
                                        <MiniSparkline
                                            stroke={item.stroke}
                                            variant={item.title}
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


type SparklineProps = {
    stroke: string;
    variant: string;
};

function MiniSparkline({
    stroke,
    variant,
}: SparklineProps) {

    const paths: Record<string, string> = {
        Earthquakes:
            "M2 30 L14 24 L26 29 L38 36 L50 33 L62 39 L74 27 L88 22",

        Weather:
            "M2 26 L16 24 L30 25 L44 32 L56 38 L68 35 L80 24 L94 18",

        Wildfires:
            "M2 29 L15 27 L28 24 L41 31 L54 35 L67 29 L80 24 L94 20",

        "Air Quality":
            "M2 30 L15 26 L28 28 L41 35 L54 38 L66 31 L78 25 L94 20",

        ISS:
            "M2 34 L14 27 L26 30 L38 37 L51 31 L64 29 L76 23 L94 18",
    };

    return (
        <svg
            viewBox="0 0 96 48"
            className="h-full w-full"
            fill="none"
            aria-hidden="true"
        >

            <path
                d={paths[variant]}
                stroke={stroke}
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
            />

            <defs>
                <linearGradient
                    id={`spark-${variant.replace(/\s/g, "-")}`}
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                >
                    <stop
                        offset="0%"
                        stopColor={stroke}
                        stopOpacity=".20"
                    />

                    <stop
                        offset="100%"
                        stopColor={stroke}
                        stopOpacity="0"
                    />
                </linearGradient>
            </defs>

        </svg>
    );
}