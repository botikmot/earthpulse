"use client";

import Link from "next/link";
import {
    ArrowRight,
    Globe2,
    Activity,
    Flame,
    CloudSun,
    Satellite,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import WorldMap from "@/features/map/components/WorldMap";

export function LandingMapPreview() {

    return (

        <section className="py-28">

            <div className="mx-auto max-w-7xl px-6">

                <div className="mb-14 text-center">

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
                        Live Global Monitoring
                    </span>

                    <h2 className="mt-6 text-4xl font-bold">

                        Observe Earth
                        <br />
                        in Real-Time

                    </h2>

                    <p className="mx-auto mt-5 max-w-3xl text-lg text-muted-foreground">

                        Visualize environmental activity around the globe
                        through one interactive monitoring platform.

                    </p>

                </div>

                <div
                    className="
                        relative
                        overflow-hidden
                        rounded-3xl
                        border
                        shadow-xl
                    "
                >

                    {/* Floating Status */}

                    <div
                        className="
                            absolute
                            left-6
                            top-6
                            z-[1000]
                            rounded-2xl
                            border
                            bg-background/90
                            p-5
                            backdrop-blur-xl
                            shadow-lg
                        "
                    >

                        <div className="space-y-3">

                            <StatusRow
                                icon={Activity}
                                color="text-orange-500"
                                label="Earthquakes"
                                value="227"
                            />

                            <StatusRow
                                icon={CloudSun}
                                color="text-sky-500"
                                label="Weather"
                                value="27°C"
                            />

                            <StatusRow
                                icon={Flame}
                                color="text-red-500"
                                label="Wildfires"
                                value="191"
                            />

                            <StatusRow
                                icon={Satellite}
                                color="text-violet-500"
                                label="ISS"
                                value="LIVE"
                            />

                        </div>

                    </div>

                    {/* Map */}

                    <div className="h-[650px]">

                        {/* <WorldMap /> */}

                    </div>

                </div>

                <div className="mt-12 flex justify-center">

                    <Button
                        size="lg"
                    >

                        <Link href="/dashboard">

                            Launch Mission Control

                            <ArrowRight className="ml-2 h-4 w-4"/>

                        </Link>

                    </Button>

                </div>

            </div>

        </section>

    );

}

type StatusRowProps = {
    icon: React.ElementType;
    label: string;
    value: string;
    color: string;
};

function StatusRow({
    icon: Icon,
    label,
    value,
    color,
}: StatusRowProps){

    return(

        <div className="flex items-center justify-between gap-8">

            <div className="flex items-center gap-3">

                <Icon className={`h-5 w-5 ${color}`} />

                <span className="text-sm">

                    {label}

                </span>

            </div>

            <span className="font-semibold">

                {value}

            </span>

        </div>

    );

}