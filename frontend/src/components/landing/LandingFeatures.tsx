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
            "Access weather, earthquakes, wildfires, air quality, and ISS tracking from a single modern mission control platform.",
        color: "text-sky-500",
    },
    {
        icon: Activity,
        title: "Real-Time Intelligence",
        description:
            "Powered by trusted global data providers to deliver continuously updated environmental information and live monitoring.",
        color: "text-emerald-500",
    },
    {
        icon: ShieldCheck,
        title: "Built for Awareness",
        description:
            "Designed for researchers, students, responders, and everyday users who need reliable Earth monitoring at a glance.",
        color: "text-orange-500",
    },
];

export function LandingFeatures() {
    return (

        <section className="py-28">

            <div className="mx-auto max-w-7xl px-6">

                <div className="mb-16 text-center">

                    <span
                        className="
                            rounded-full
                            bg-primary/10
                            px-4
                            py-1.5
                            text-sm
                            font-medium
                            text-primary
                        "
                    >
                        Why ERRION
                    </span>

                    <h2 className="mt-6 text-4xl font-bold tracking-tight">

                        One Platform.
                        <br />
                        Every Earth Signal.

                    </h2>

                    <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-muted-foreground">

                        ERRION brings together multiple global monitoring
                        systems into one beautiful mission control interface,
                        helping users understand what is happening across our
                        planet in real time.

                    </p>

                </div>

                <div className="grid gap-8 lg:grid-cols-3">

                    {features.map((feature) => {

                        const Icon = feature.icon;

                        return (

                            <div
                                key={feature.title}
                                className="
                                    group
                                    rounded-3xl
                                    border
                                    bg-card
                                    p-8
                                    transition-all
                                    duration-300
                                    hover:-translate-y-2
                                    hover:border-primary/30
                                    hover:shadow-xl
                                "
                            >

                                <div
                                    className="
                                        mb-6
                                        flex
                                        h-16
                                        w-16
                                        items-center
                                        justify-center
                                        rounded-2xl
                                        bg-muted
                                    "
                                >

                                    <Icon
                                        className={`h-8 w-8 ${feature.color}`}
                                    />

                                </div>

                                <h3 className="text-2xl font-bold">

                                    {feature.title}

                                </h3>

                                <p className="mt-4 leading-7 text-muted-foreground">

                                    {feature.description}

                                </p>

                            </div>

                        );

                    })}

                </div>

            </div>

        </section>

    );
}