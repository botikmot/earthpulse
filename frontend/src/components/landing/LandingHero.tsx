"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Globe2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ISSTrackerAnimation } from "../effects/ISSTrackerAnimation";

export function LandingHero() {
    return (
        <section className="relative overflow-hidden">

            {/* Background */}

            <div className="absolute inset-0 bg-gradient-to-br from-sky-950 via-cyan-950 to-blue-950" />

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_55%)]" />

            <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-center px-6 py-20">

                <div className="grid w-full gap-14 lg:grid-cols-2 lg:items-center">

                    {/* LEFT */}

                    <div>

                        <div className="mb-8 flex items-center gap-4">

                            <Image
                                src="/images/earthpulse_logo2.png"
                                alt="ERRION"
                                width={72}
                                height={72}
                            />

                            <div>

                                <p className="text-4xl font-bold text-white">
                                    ERRION
                                </p>

                                <p className="text-cyan-200">
                                    Understanding Earth&apos;s Signals
                                </p>

                            </div>

                        </div>

                        <h1 className="max-w-2xl text-6xl font-extrabold leading-tight text-white">

                            Monitor our planet

                            <span className="block bg-gradient-to-r from-cyan-300 to-sky-400 bg-clip-text text-transparent">

                                in real-time.

                            </span>

                        </h1>

                        <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">

                            ERRION combines weather, earthquakes,
                            wildfires, air quality, and International
                            Space Station tracking into one unified
                            monitoring platform.

                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">

                            <Button
                                size="lg"
                                className="flex"
                            >

                                <Link href="/dashboard" className="flex items-center">

                                    Launch Mission Control

                                    <ArrowRight className="ml-2 h-4 w-4" />

                                </Link>

                            </Button>

                            <Button
                                variant="secondary"
                                size="lg"
                            >

                                <Link href="/dashboard/map" className="flex items-center">
                                    <Globe2 className="mr-2 h-4 w-4" />
                                    View Live Map
                                </Link>

                            </Button>

                        </div>

                    </div>

                    {/* RIGHT */}

                    <div className="flex justify-center">

                        <div className="relative">

                            <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-3xl" />

                            <Image
                                src="/images/weather/earth.png"
                                alt="Earth"
                                width={420}
                                height={420}
                                className="animate-spin-slow"
                            />

                            {/* <div className="absolute inset-0">

                                <ISSTrackerAnimation />

                            </div> */}

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}