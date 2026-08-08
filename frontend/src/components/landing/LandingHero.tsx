"use client";

import Link from "next/link";
import {
    ArrowRight,
    Globe2,
} from "lucide-react";

import { LandingHeader } from "./LandingHeader";

export function LandingHero() {
    return (
        <section
            className="
                relative
                min-h-[700px]
                text-white
            "
        >
            <LandingHeader />

            <div
                className="
                    relative
                    mx-auto
                    flex
                    min-h-[700px]
                    max-w-7xl
                    items-center
                    px-5
                    pb-28
                    pt-32

                    sm:px-8
                    lg:px-10
                    lg:pt-36
                "
            >
                <div className="max-w-2xl">

                    <div
                        className="
                            mb-7
                            inline-flex
                            items-center
                            gap-2
                            rounded-full
                            border
                            border-cyan-400/30
                            bg-cyan-400/5
                            px-4
                            py-2
                            text-xs
                            font-medium
                            text-slate-200
                            backdrop-blur-md
                        "
                    >
                        <span
                            className="
                                h-2
                                w-2
                                rounded-full
                                bg-emerald-400
                                shadow-[0_0_10px_rgba(52,211,153,1)]
                            "
                        />

                        Real-time Planet Monitoring
                    </div>

                    <h1
                        className="
                            max-w-[760px]
                            text-5xl
                            font-bold
                            leading-[1.02]
                            tracking-[-0.04em]

                            sm:text-6xl
                            lg:text-7xl
                            xl:text-[76px]
                        "
                    >
                        Monitor our planet

                        <span
                            className="
                                mt-1
                                block
                                bg-gradient-to-r
                                from-cyan-300
                                via-cyan-400
                                to-sky-500
                                bg-clip-text
                                text-transparent
                            "
                        >
                            in real-time.
                        </span>
                    </h1>

                    <p
                        className="
                            mt-8
                            max-w-xl
                            text-base
                            leading-8
                            text-slate-300
                            sm:text-lg
                        "
                    >
                        ERRION combines weather, earthquakes,
                        wildfires, air quality, and International
                        Space Station tracking into one unified
                        monitoring platform.
                    </p>

                    <div className="mt-9 flex flex-wrap gap-3">

                        <Link
                            href="/dashboard"
                            className="
                                inline-flex
                                h-12
                                items-center
                                justify-center
                                gap-3
                                rounded-lg
                                border
                                border-cyan-400/40
                                bg-[#071521]/80
                                px-6
                                text-sm
                                font-semibold
                                text-white
                                backdrop-blur-md
                                transition-all
                                hover:-translate-y-0.5
                                hover:border-cyan-300/70
                            "
                        >
                            Launch Mission Control

                            <ArrowRight className="h-4 w-4" />
                        </Link>

                        <Link
                            href="/dashboard/map"
                            className="
                                inline-flex
                                h-12
                                items-center
                                justify-center
                                gap-2
                                rounded-lg
                                bg-white
                                px-6
                                text-sm
                                font-semibold
                                text-slate-950
                                transition-all
                                hover:-translate-y-0.5
                                hover:bg-slate-100
                            "
                        >
                            <Globe2 className="h-4 w-4" />

                            View Live Map
                        </Link>

                    </div>

                </div>

            </div>

        </section>
    );
}