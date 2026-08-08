"use client";

import { LandingHero } from "./LandingHero";
//import { LandingStats } from "./LandingStats";
import { LandingModules } from "./LandingModules";
import { Earth3D } from "../effects/Earth3D";
import { DashboardStats } from "@/features/dashboard/components/DashboardStats";

export function LandingSpaceIntro() {
    return (
        <div
            className="
                relative
                overflow-hidden
                bg-[#01050d]
                text-white
            "
        >
            {/* =========================
                BASE SPACE BACKGROUND
            ========================= */}

            <div className="absolute inset-0 bg-[#01050d]" />

            {/* Deep blue space glow */}

            <div
                className="
                    pointer-events-none
                    absolute
                    inset-0
                    bg-[radial-gradient(circle_at_73%_24%,rgba(30,64,175,0.24),transparent_33%)]
                "
            />

            {/* Milky Way haze */}

            <div
                className="
                    pointer-events-none
                    absolute
                    right-[20%]
                    top-[5%]
                    h-[650px]
                    w-[850px]
                    rotate-[-20deg]
                    rounded-full
                    bg-[radial-gradient(ellipse,rgba(59,130,246,0.14)_0%,rgba(37,99,235,0.07)_35%,transparent_70%)]
                    blur-[80px]
                "
            />

            {/* =========================
                STARS
            ========================= */}

            <div className="errion-stars errion-stars-small" />
            <div className="errion-stars errion-stars-medium" />
            <div className="errion-stars errion-stars-large" />

            {/* =========================
                EARTH
            ========================= */}

            <div
                className="
                    pointer-events-none
                    absolute
                    right-[-70px]
                    top-[100px]
                    z-[2]
                    
                    h-[760px]
                    w-[760px]

                    xl:right-[-40px]
                    xl:top-[100px]
                    xl:h-[850px]
                    xl:w-[850px]

                    2xl:right-[2%]
                    2xl:h-[920px]
                    2xl:w-[920px]
                "
            >
                {/* atmosphere glow */}

                    <div
                        className="
                            absolute
                            inset-[-2%]
                            rounded-full
                            bg-sky-500/10
                            blur-[45px]
                        "
                    />

                    {/* <div
                        className="
                            absolute
                            inset-0
                            rounded-full
                            shadow-[0_0_45px_rgba(56,189,248,.45),0_0_100px_rgba(37,99,235,.20)]
                            
                        "
                    /> */}
                
                    <Earth3D />
            </div>

                            

            {/* =========================
                LEFT READABILITY GRADIENT
            ========================= */}

            <div
                className="
                    pointer-events-none
                    absolute
                    left-0
                    top-0
                    z-[4]
                    h-[850px]
                    w-[58%]
                    bg-gradient-to-r
                    from-[#01050d]
                    via-[#01050d]/90
                    to-transparent
                "
            />

            {/* =========================
                CONTENT
            ========================= */}

            <div className="relative z-10">

                <LandingHero />

                {/* <LandingStats /> */}
                <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
                    <DashboardStats />
                </div>

                <LandingModules />

            </div>

        </div>
    );
}