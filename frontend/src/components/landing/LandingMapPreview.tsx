"use client";

import Link from "next/link";
import {
    Activity,
    ArrowRight,
    CloudSun,
    Flame,
    Gauge,
    Satellite,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import WorldMapLoader from "@/features/map/components/WorldMapLoader";
import { useLiveMapStore } from "@/stores/liveMap.store";

export function LandingMapPreview() {

    const layers = useLiveMapStore(
        (state) => state.layers
    );

    return (
        <section
            id="live-map"
            className="
                relative
                overflow-hidden
                bg-[#030712]
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
                    top-1/2
                    h-[700px]
                    w-[1000px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-sky-500/5
                    blur-[140px]
                "
            />

            <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

                {/* heading */}

                <div className="mx-auto mb-14 max-w-3xl text-center">

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
                        "
                    >
                        Live Global Monitoring
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
                        Observe Earth
                        <span className="block text-cyan-400">
                            in Real-Time
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
                        Explore live environmental activity through one
                        interactive map with multiple monitoring layers.
                    </p>

                </div>

                {/* map shell */}

                <div
                    className="
                        relative
                        overflow-hidden
                        rounded-[28px]
                        border
                        border-white/10
                        bg-white/[0.025]
                        p-2
                        shadow-[0_25px_80px_rgba(0,0,0,.35)]
                        backdrop-blur-xl

                        sm:p-3
                    "
                >

                    {/* map */}

                    <div
                        className="
                            relative
                            h-[430px]
                            overflow-hidden
                            rounded-[22px]

                            sm:h-[520px]
                            lg:h-[620px]
                        "
                    >

                        <WorldMapLoader
                            className="h-full"
                            layers={layers}
                        />

                        {/* top fade */}

                        <div
                            className="
                                pointer-events-none
                                absolute
                                inset-x-0
                                top-0
                                z-[500]
                                h-24
                                bg-gradient-to-b
                                from-black/30
                                to-transparent
                            "
                        />

                        {/* floating status */}

                        <div
                            className="
                                absolute
                                left-3
                                top-3
                                z-[700]
                                w-[190px]
                                rounded-2xl
                                border
                                border-white/10
                                bg-[#06111d]/85
                                p-4
                                shadow-xl
                                backdrop-blur-xl

                                sm:left-5
                                sm:top-5
                                sm:w-[220px]
                            "
                        >

                            <div className="mb-4 flex items-center gap-2">

                                <span
                                    className="
                                        h-2
                                        w-2
                                        rounded-full
                                        bg-emerald-400
                                        shadow-[0_0_10px_rgba(52,211,153,1)]
                                    "
                                />

                                <span className="text-xs font-semibold text-white">
                                    Live Monitoring
                                </span>

                            </div>

                            <div className="space-y-3">

                                <MapStatus
                                    icon={Activity}
                                    label="Earthquakes"
                                    value="227"
                                    color="text-orange-400"
                                />

                                <MapStatus
                                    icon={CloudSun}
                                    label="Weather"
                                    value="27°C"
                                    color="text-sky-400"
                                />

                                <MapStatus
                                    icon={Flame}
                                    label="Wildfires"
                                    value="191"
                                    color="text-red-400"
                                />

                                <MapStatus
                                    icon={Gauge}
                                    label="Air Quality"
                                    value="AQI 12"
                                    color="text-emerald-400"
                                />

                                <MapStatus
                                    icon={Satellite}
                                    label="ISS"
                                    value="LIVE"
                                    color="text-violet-400"
                                />

                            </div>

                        </div>

                        {/* bottom fade */}

                        <div
                            className="
                                pointer-events-none
                                absolute
                                inset-x-0
                                bottom-0
                                z-[500]
                                h-28
                                bg-gradient-to-t
                                from-black/40
                                to-transparent
                            "
                        />

                    </div>

                </div>

                {/* CTA */}

                <div className="mt-10 flex justify-center">

                    <Button
                        size="lg"
                        className="
                            border
                            border-cyan-400/30
                            bg-[#071521]
                            text-white
                            hover:bg-[#0b1d2d]
                        "
                    >
                        <Link href="/dashboard/live-map">

                            Open Full Live Map

                            <ArrowRight className="ml-2 h-4 w-4" />

                        </Link>
                    </Button>

                </div>

            </div>

        </section>
    );
}

type MapStatusProps = {
    icon: React.ElementType;
    label: string;
    value: string;
    color: string;
};

function MapStatus({
    icon: Icon,
    label,
    value,
    color,
}: MapStatusProps) {
    return (
        <div className="flex items-center justify-between gap-4">

            <div className="flex min-w-0 items-center gap-2">

                <Icon className={`h-4 w-4 shrink-0 ${color}`} />

                <span className="truncate text-xs text-slate-300">
                    {label}
                </span>

            </div>

            <span className="text-xs font-semibold text-white">
                {value}
            </span>

        </div>
    );
}