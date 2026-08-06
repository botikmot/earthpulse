"use client";

import Link from "next/link";
import Image from "next/image";
import {
    ArrowRight,
    Rocket,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export function LandingCTA() {

    return (

        <section className="py-28">

            <div className="mx-auto max-w-7xl px-6">

                <div
                    className="
                        relative
                        overflow-hidden
                        rounded-[36px]
                        border
                        bg-gradient-to-br
                        from-sky-950
                        via-cyan-950
                        to-blue-950
                        p-16
                        text-center
                        shadow-2xl
                    "
                >

                    {/* glow */}

                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,.12),transparent_60%)]" />

                    <div className="relative">

                        <Image
                            src="/images/earthpulse_logo2.png"
                            alt="EarthPulse"
                            width={80}
                            height={80}
                            className="mx-auto mb-8"
                        />

                        <h2 className="text-5xl font-bold text-white">

                            Ready to Explore Earth?

                        </h2>

                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">

                            Launch the ERRION Mission Control and
                            monitor global environmental activity in
                            real time.

                        </p>

                        <div className="mt-12 flex flex-wrap justify-center gap-5">

                            <Button
                                size="lg"
                            >

                                <Link href="/dashboard">

                                    <Rocket className="mr-2 h-5 w-5"/>

                                    Launch Mission Control

                                    <ArrowRight className="ml-2 h-4 w-4"/>

                                </Link>

                            </Button>

                            <Button
                                variant="secondary"
                                size="lg"
                            >

                                <Link href="#modules">

                                    Explore Features

                                </Link>

                            </Button>

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}