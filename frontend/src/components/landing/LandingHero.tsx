"use client";

import Image from "next/image";
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
                min-h-[760px]
                overflow-hidden
                bg-[#01050d]
                text-white
            "
        >

            <LandingHeader />

            {/* =========================
                SPACE BACKGROUND
            ========================= */}

            <div className="absolute inset-0 bg-[#01050d]" />

            <div
                className="
                    absolute
                    bottom-0
                    right-0
                    h-[45%]
                    w-[50%]
                    bg-[radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.95),transparent_70%)]
                    pointer-events-none
                "
            />

            {/* Very subtle blue space glow */}
            <div
                className="
                    absolute
                    inset-0
                    bg-[radial-gradient(circle_at_72%_42%,rgba(30,64,175,0.20),transparent_38%)]
                "
            />

            {/* Milky-way style haze */}
            <div
                className="
                    pointer-events-none
                    absolute
                    right-[15%]
                    top-[5%]
                    h-[520px]
                    w-[700px]
                    rotate-[-18deg]
                    rounded-full
                    bg-[radial-gradient(ellipse,rgba(37,99,235,0.18)_0%,rgba(59,130,246,0.08)_35%,transparent_70%)]
                    blur-3xl
                "
            />

            {/* Stars */}
            <div className="errion-stars errion-stars-small" />
            <div className="errion-stars errion-stars-medium" />
            <div className="errion-stars errion-stars-large" />

            {/* =========================
                EARTH + ISS
            ========================= */}

            <div
                className="
                    absolute
                    inset-y-0
                    right-0
                    z-10
                    hidden
                    w-[62%]
                    
                    lg:block
                "
            >
                <LandingEarthScene />
            </div>

            {/* Mobile Earth */}
            <div
                className="
                    pointer-events-none
                    absolute
                    right-[-130px]
                    top-[310px]
                    z-0
                    h-[420px]
                    w-[420px]
                    opacity-55

                    sm:right-[-100px]
                    sm:top-[260px]
                    sm:h-[500px]
                    sm:w-[500px]

                    lg:hidden
                "
            >
                <div className="relative h-full w-full">
                    <div className="absolute inset-[-6%] rounded-full bg-sky-500/20 blur-3xl" />

                    <Image
                        src="/images/weather/earth4.png"
                        alt=""
                        fill
                        priority
                        className="landing-earth-spin object-contain"
                        sizes="500px"
                    />
                </div>
            </div>

            {/* Dark overlay behind content */}
            <div
                className="
                    pointer-events-none
                    absolute
                    inset-y-0
                    left-0
                    z-[11]
                    w-full
                    bg-gradient-to-r
                    from-[#01050d]
                    via-[#01050d]/95
                    to-transparent

                    lg:w-[65%]
                "
            />

            {/* =========================
                CONTENT
            ========================= */}

            <div
                className="
                    relative
                    z-20
                    mx-auto
                    flex
                    min-h-[760px]
                    max-w-7xl
                    items-center
                    px-5
                    pb-36
                    pt-32

                    sm:px-8
                    sm:pb-40

                    lg:px-10
                    lg:pb-44
                    lg:pt-36
                "
            >

                <div className="max-w-2xl mt-6">

                    {/* Small badge */}

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
                            shadow-[0_0_25px_rgba(6,182,212,0.10)]
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

                    {/* Headline */}

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

                    {/* Description */}

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

                    {/* CTA */}

                    <div
                        className="
                            mt-9
                            flex
                            flex-col
                            gap-3

                            xs:flex-row
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
                                gap-3
                                rounded-lg
                                border
                                border-cyan-400/40
                                bg-[#071521]/85
                                px-6
                                text-sm
                                font-semibold
                                text-white
                                shadow-[0_0_25px_rgba(6,182,212,0.15)]
                                backdrop-blur-md
                                transition-all
                                hover:-translate-y-0.5
                                hover:border-cyan-300/70
                                hover:shadow-[0_0_35px_rgba(6,182,212,0.25)]
                            "
                        >
                            Launch Mission Control
                            <ArrowRight className="h-4 w-4" />
                        </Link>

                        <Link
                            href="/dashboard/live-map"
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


/* ======================================================
   EARTH SCENE
====================================================== */

function LandingEarthScene() {
    return (
        <div className="relative h-full w-full">

            {/* Atmospheric glow */}

            <div
                className="
                    absolute
                    right-[-10%]
                    top-[11%]
                    h-[760px]
                    w-[760px]
                    rounded-full
                    bg-blue-500/10
                    blur-[90px]
                "
            />

            {/* Earth */}

            <div
                className="
                    absolute
                    bottom-[-560px]
                    right-[-220px]
                    h-[980px]
                    w-[980px]

                    xl:bottom-[-560px]
                    xl:right-[-200px]
                    xl:h-[1100px]
                    xl:w-[1100px]
                "
            >
                {/* Blue atmosphere halo */}
                <div
                    className="
                        absolute
                        inset-[-.5%]
                        rounded-full
                        border-[5px]
                        border-sky-400/40
                        shadow-[0_0_45px_rgba(56,189,248,0.55),0_0_100px_rgba(37,99,235,0.30)]
                    "
                />

                <Image
                    src="/images/weather/earth6.gif"
                    alt="Earth"
                    fill
                    priority
                    className="
                        opacity-50
                        object-contain
                        drop-shadow-[0_0_35px_rgba(59,130,246,0.28)]
                    "
                    sizes="980px"
                />
            </div>

            {/* Orbit path */}

            {/* <div
                className="
                    absolute
                    right-[3%]
                    top-[13%]
                    h-[430px]
                    w-[780px]
                    rotate-[-19deg]
                    rounded-[50%]
                    border-t
                    border-sky-400/35
                "
            /> */}

            {/* ISS */}

            <div
                className="
                    landing-iss-flight
                    absolute
                    left-[34%]
                    top-[23%]
                    z-20
                "
            >
                <Image
                    src="/images/ISS.png"
                    alt="International Space Station"
                    width={180}
                    height={90}
                    priority
                    className="
                        h-auto
                        w-[115px]
                        object-contain
                        drop-shadow-[0_0_15px_rgba(255,255,255,0.35)]

                        xl:w-[145px]
                    "
                />
            </div>

        </div>
    );
}