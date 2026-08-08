"use client";

import Link from "next/link";
import {
    ArrowRight,
    Rocket,
} from "lucide-react";

export function LandingCTA() {
    return (
        <section
            className="
                relative
                overflow-hidden
                bg-[#030712]
                py-24
                text-white
            "
        >
            {/* glow */}

            <div
                className="
                    pointer-events-none
                    absolute
                    left-1/2
                    top-1/2
                    h-[420px]
                    w-[850px]
                    -translate-x-1/2
                    -translate-y-1/2
                    rounded-full
                    bg-cyan-500/10
                    blur-[130px]
                "
            />

            <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

                <div
                    className="
                        relative
                        overflow-hidden
                        rounded-[32px]
                        border
                        border-white/10
                        bg-[#07111f]/90
                        px-6
                        py-16
                        text-center
                        shadow-[0_25px_80px_rgba(0,0,0,.35)]
                        backdrop-blur-xl

                        sm:px-10
                        lg:px-16
                        lg:py-20
                    "
                >
                    {/* inner glow */}

                    <div
                        className="
                            pointer-events-none
                            absolute
                            left-1/2
                            top-0
                            h-[260px]
                            w-[500px]
                            -translate-x-1/2
                            rounded-full
                            bg-sky-500/10
                            blur-[90px]
                        "
                    />

                    <div className="relative z-10">

                        <span
                            className="
                                inline-flex
                                items-center
                                gap-2
                                rounded-full
                                border
                                border-cyan-400/20
                                bg-cyan-400/5
                                px-4
                                py-1.5
                                text-xs
                                font-medium
                                text-cyan-300
                            "
                        >
                            <Rocket className="h-3.5 w-3.5" />
                            Mission Control Ready
                        </span>

                        <h2
                            className="
                                mx-auto
                                mt-6
                                max-w-3xl
                                text-3xl
                                font-bold
                                tracking-tight
                                sm:text-4xl
                                lg:text-5xl
                            "
                        >
                            Ready to explore
                            <span className="block text-cyan-400">
                                our planet in real-time?
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
                            Launch ERRION Mission Control and explore live
                            environmental data, global activity, and real-time
                            monitoring from one unified platform.
                        </p>

                        <div
                            className="
                                mt-9
                                flex
                                flex-col
                                justify-center
                                gap-3
                                sm:flex-row
                            "
                        >
                            <Link
                                href="/dashboard"
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
                                    rounded-lg
                                    border
                                    border-white/10
                                    bg-white/[0.04]
                                    px-6
                                    text-sm
                                    font-medium
                                    text-white
                                    backdrop-blur
                                    transition-all
                                    hover:-translate-y-0.5
                                    hover:border-white/20
                                    hover:bg-white/[0.07]
                                "
                            >
                                Explore Live Map
                            </Link>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}