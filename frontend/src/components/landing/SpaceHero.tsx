"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Globe2 } from "lucide-react";

import { StatCard } from "@/components/common/StatCard";

export function SpaceHero() {
    return (
        <section
            className="
                relative
                min-h-[720px]
                overflow-hidden
                bg-[#020617]
                text-white
            "
        >

            {/* =========================
                SPACE BACKGROUND
            ========================= */}

            <div
                className="
                    absolute
                    inset-0
                    bg-[radial-gradient(circle_at_70%_45%,rgba(14,165,233,0.18),transparent_32%),linear-gradient(135deg,#032f3e_0%,#041b2d_45%,#0b1740_100%)]
                "
            />

            {/* Stars */}

            <div className="stars stars-one" />
            <div className="stars stars-two" />
            <div className="stars stars-three" />

            {/* =========================
                GLOW BEHIND EARTH
            ========================= */}

            <div
                className="
                    absolute
                    right-[-5%]
                    top-[18%]
                    h-[500px]
                    w-[500px]
                    rounded-full
                    bg-cyan-400/10
                    blur-[100px]
                    sm:h-[650px]
                    sm:w-[650px]
                "
            />

            {/* =========================
                MAIN CONTENT
            ========================= */}

            <div
                className="
                    relative
                    z-20
                    mx-auto
                    flex
                    min-h-[720px]
                    max-w-7xl
                    items-center
                    px-6
                    py-20

                    sm:px-8
                    lg:px-10
                "
            >

                <div
                    className="
                        grid
                        w-full
                        items-center
                        gap-12

                        lg:grid-cols-[0.9fr_1.1fr]
                    "
                >

                    {/* =========================
                        LEFT CONTENT
                    ========================= */}

                    <div
                        className="
                            relative
                            z-30
                            max-w-2xl
                        "
                    >

                        {/* Logo */}

                        <Link
                            href="/"
                            className="
                                mb-8
                                inline-flex
                                items-center
                            "
                        >
                            <Image
                                src="/images/earthpulse_logo2.png"
                                alt="ERRION"
                                width={260}
                                height={80}
                                priority
                                className="
                                    h-auto
                                    w-[190px]
                                    sm:w-[220px]
                                "
                            />
                        </Link>

                        {/* Headline */}

                        <h1
                            className="
                                max-w-3xl
                                text-4xl
                                font-bold
                                leading-[1.05]
                                tracking-tight

                                sm:text-5xl

                                lg:text-6xl
                                xl:text-7xl
                            "
                        >
                            Monitor our planet
                            <span
                                className="
                                    block
                                    text-cyan-400
                                "
                            >
                                in real-time.
                            </span>
                        </h1>

                        {/* Description */}

                        <p
                            className="
                                mt-6
                                max-w-xl
                                text-sm
                                leading-7
                                text-slate-300

                                sm:text-base
                            "
                        >
                            ERRION combines weather, earthquakes,
                            wildfires, air quality, and International
                            Space Station tracking into one unified
                            monitoring platform.
                        </p>

                        {/* Buttons */}

                        <div
                            className="
                                mt-8
                                flex
                                flex-wrap
                                gap-3
                            "
                        >

                            <Link
                                href="/dashboard"
                                className="
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-lg
                                    bg-white
                                    px-5
                                    py-3
                                    text-sm
                                    font-semibold
                                    text-slate-950
                                    shadow-lg
                                    transition-all
                                    hover:-translate-y-0.5
                                    hover:bg-slate-100
                                "
                            >
                                Launch Mission Control

                                <ArrowRight className="h-4 w-4" />
                            </Link>

                            <Link
                                href="/"
                                className="
                                    inline-flex
                                    items-center
                                    gap-2
                                    rounded-lg
                                    border
                                    border-white/20
                                    bg-white/10
                                    px-5
                                    py-3
                                    text-sm
                                    font-medium
                                    text-white
                                    backdrop-blur-md
                                    transition-all
                                    hover:bg-white/15
                                "
                            >
                                <Globe2 className="h-4 w-4" />

                                View Live Map
                            </Link>

                        </div>

                    </div>


                    {/* =========================
                        EARTH SCENE
                    ========================= */}

                    <div
                        className="
                            relative
                            h-[420px]
                            min-w-0

                            sm:h-[500px]

                            lg:h-[650px]
                        "
                    >

                        <EarthScene />

                    </div>

                </div>

            </div>

        </section>
    );
}


/* =========================================================
   EARTH SCENE
========================================================= */

function EarthScene() {

    return (
        <div
            className="
                absolute
                inset-0
                flex
                items-center
                justify-center
            "
        >

            {/* Earth */}

            <div
                className="
                    earth-orbit
                    relative
                    h-[360px]
                    w-[360px]
                    sm:h-[470px]
                    sm:w-[470px]
                    lg:h-[620px]
                    lg:w-[620px]
                "
            >

                {/* Earth glow */}

                <div
                    className="
                        absolute
                        inset-[-10%]
                        rounded-full
                        bg-cyan-400/10
                        blur-3xl
                    "
                />

                {/* Earth image */}

                <div
                    className="
                        earth
                        relative
                        h-full
                        w-full
                        overflow-hidden
                        rounded-full
                    "
                >

                    <Image
                        src="/images/earth/earth.png"
                        alt="Earth"
                        fill
                        priority
                        className="
                            object-cover
                        "
                        sizes="
                            (max-width: 640px) 360px,
                            (max-width: 1024px) 470px,
                            620px
                        "
                    />

                </div>

                {/* ISS orbit */}

                <div
                    className="
                        iss-orbit
                        absolute
                        inset-[-14%]
                        rounded-full
                    "
                >

                    <div
                        className="
                            iss
                            absolute
                            left-1/2
                            top-0
                            -translate-x-1/2
                        "
                    >

                        <Image
                            src="/images/iss/iss.png"
                            alt="International Space Station"
                            width={80}
                            height={80}
                            className="
                                h-10
                                w-10
                                object-contain
                                drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]
                                sm:h-12
                                sm:w-12
                            "
                        />

                    </div>

                </div>

            </div>

        </div>
    );
}