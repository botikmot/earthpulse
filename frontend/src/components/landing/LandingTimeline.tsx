"use client";

import {
    Activity,
    CloudSun,
    Flame,
    Gauge,
    Satellite,
} from "lucide-react";

const timeline = [
    {
        icon: Activity,
        color: "text-orange-500",
        title: "Earthquake Detected",
        location: "Japan",
        time: "09:42 UTC",
    },
    {
        icon: Satellite,
        color: "text-violet-500",
        title: "ISS Passed Over",
        location: "Philippines",
        time: "09:40 UTC",
    },
    {
        icon: Flame,
        color: "text-red-500",
        title: "Wildfire Updated",
        location: "California",
        time: "09:35 UTC",
    },
    {
        icon: Gauge,
        color: "text-emerald-500",
        title: "AQI Refreshed",
        location: "Manila",
        time: "09:31 UTC",
    },
    {
        icon: CloudSun,
        color: "text-sky-500",
        title: "Weather Forecast Updated",
        location: "Singapore",
        time: "09:25 UTC",
    },
];

export function LandingTimeline() {

    return (

        <section className="py-28">

            <div className="mx-auto max-w-6xl px-6">

                <div className="mb-14 text-center">

                    <span className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">

                        Mission Timeline

                    </span>

                    <h2 className="mt-6 text-4xl font-bold">

                        Recent Global Activity

                    </h2>

                    <p className="mt-5 text-lg text-muted-foreground">

                        Stay informed with the latest environmental events
                        monitored across Earth.

                    </p>

                </div>

                <div className="relative">

                    <div className="absolute left-7 top-0 bottom-0 w-px bg-border" />

                    <div className="space-y-8">

                        {timeline.map((item, index) => {

                            const Icon = item.icon;

                            return (

                                <div
                                    key={index}
                                    className="relative flex gap-6"
                                >

                                    <div
                                        className="
                                            relative
                                            z-10
                                            flex
                                            h-14
                                            w-14
                                            items-center
                                            justify-center
                                            rounded-full
                                            border
                                            bg-background
                                            shadow
                                        "
                                    >

                                        <Icon
                                            className={`h-6 w-6 ${item.color}`}
                                        />

                                    </div>

                                    <div className="flex-1 rounded-2xl border bg-card p-6 transition-all duration-300 hover:shadow-md">

                                        <div className="flex items-center justify-between">

                                            <div>

                                                <h3 className="font-semibold">

                                                    {item.title}

                                                </h3>

                                                <p className="text-sm text-muted-foreground">

                                                    {item.location}

                                                </p>

                                            </div>

                                            <span className="text-xs text-muted-foreground">

                                                {item.time}

                                            </span>

                                        </div>

                                    </div>

                                </div>

                            );

                        })}

                    </div>

                </div>

            </div>

        </section>

    );

}