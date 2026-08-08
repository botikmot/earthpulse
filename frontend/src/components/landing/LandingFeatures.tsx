"use client";

import {
    Activity,
    Globe2,
    ShieldCheck,
} from "lucide-react";

const features = [
    {
        icon: Globe2,
        title: "Unified Earth Monitoring",
        description:
            "Monitor weather, earthquakes, wildfires, air quality, and the International Space Station from one unified platform.",
        color: "text-cyan-400",
        glow: "bg-cyan-400/10",
    },
    {
        icon: Activity,
        title: "Real-Time Intelligence",
        description:
            "Stay updated with continuously refreshed environmental data powered by trusted global monitoring services.",
        color: "text-emerald-400",
        glow: "bg-emerald-400/10",
    },
    {
        icon: ShieldCheck,
        title: "Built for Awareness",
        description:
            "Designed to make complex Earth activity easier to understand through clear visuals, live maps, and focused insights.",
        color: "text-orange-400",
        glow: "bg-orange-400/10",
    },
];

export function LandingFeatures() {
    return (
        <section
            id="features"
            className="
                relative
                overflow-hidden
                bg-[#07101c]
                py-28
                text-white
            "
        >
            {/* background accents */}

            <div
                className="
                    pointer-events-none
                    absolute
                    left-[-180px]
                    top-[10%]
                    h-[420px]
                    w-[420px]
                    rounded-full
                    bg-cyan-500/5
                    blur-[120px]
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute
                    bottom-[-180px]
                    right-[-120px]
                    h-[500px]
                    w-[500px]
                    rounded-full
                    bg-blue-500/5
                    blur-[130px]
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
                            bg-white/[0.04]
                            px-4
                            py-1.5
                            text-xs
                            font-medium
                            text-cyan-300
                        "
                    >
                        Why ERRION
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
                        One Platform.
                        <span className="block text-cyan-400">
                            Every Earth Signal.
                        </span>
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
                        ERRION brings multiple global monitoring systems
                        together into one clear and accessible mission
                        control experience.
                    </p>

                </div>

                {/* Feature cards */}

                <div className="grid gap-5 lg:grid-cols-3">

                    {features.map((feature) => {

                        const Icon = feature.icon;

                        return (
                            <div
                                key={feature.title}
                                className="
                                    group
                                    relative
                                    overflow-hidden
                                    rounded-3xl
                                    border
                                    border-white/10
                                    bg-white/[0.025]
                                    p-8
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1.5
                                    hover:border-white/20
                                    hover:bg-white/[0.045]
                                    hover:shadow-[0_20px_60px_rgba(0,0,0,.25)]
                                "
                            >

                                <div
                                    className={`
                                        absolute
                                        -right-10
                                        -top-10
                                        h-32
                                        w-32
                                        rounded-full
                                        blur-3xl
                                        ${feature.glow}
                                    `}
                                />

                                <div className="relative z-10">

                                    <div
                                        className="
                                            mb-7
                                            flex
                                            h-14
                                            w-14
                                            items-center
                                            justify-center
                                            rounded-2xl
                                            border
                                            border-white/10
                                            bg-white/[0.04]
                                        "
                                    >
                                        <Icon
                                            className={`h-7 w-7 ${feature.color}`}
                                        />
                                    </div>

                                    <h3 className="text-xl font-semibold">
                                        {feature.title}
                                    </h3>

                                    <p
                                        className="
                                            mt-4
                                            text-sm
                                            leading-7
                                            text-slate-400
                                        "
                                    >
                                        {feature.description}
                                    </p>

                                </div>

                            </div>
                        );
                    })}

                </div>

            </div>
        </section>
    );
}