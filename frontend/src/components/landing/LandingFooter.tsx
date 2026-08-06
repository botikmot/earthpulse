"use client";

import Link from "next/link";
import Image from "next/image";

import {
    Globe,
    Heart,
} from "lucide-react";

export function LandingFooter() {

    return (

        <footer className="border-t">

            <div className="mx-auto max-w-7xl px-6 py-16">

                <div className="grid gap-10 lg:grid-cols-3">

                    {/* Brand */}

                    <div>

                        <div className="flex items-center gap-4">

                            <Image
                                src="/images/earthpulse_logo2.png"
                                alt="ERRION"
                                width={56}
                                height={56}
                            />

                            <div>

                                <h3 className="text-xl font-bold">

                                    ERRION

                                </h3>

                                <p className="text-sm text-muted-foreground">

                                    Understanding Earth&apos;s Signals

                                </p>

                            </div>

                        </div>

                        <p className="mt-6 max-w-sm text-sm leading-7 text-muted-foreground">

                            A unified environmental monitoring platform
                            providing real-time information about our
                            planet through trusted global data sources.

                        </p>

                    </div>

                    {/* Modules */}

                    <div>

                        <h4 className="mb-5 font-semibold">

                            Modules

                        </h4>

                        <div className="space-y-3 text-sm">

                            <Link href="/dashboard/weather" className="block hover:text-primary">

                                Weather

                            </Link>

                            <Link href="/dashboard/earthquake" className="block hover:text-primary">

                                Earthquakes

                            </Link>

                            <Link href="/dashboard/wildfire" className="block hover:text-primary">

                                Wildfires

                            </Link>

                            <Link href="/dashboard/air-quality" className="block hover:text-primary">

                                Air Quality

                            </Link>

                            <Link href="/dashboard/iss" className="block hover:text-primary">

                                ISS Tracker

                            </Link>

                        </div>

                    </div>

                    {/* Resources */}

                    <div>

                        <h4 className="mb-5 font-semibold">

                            Resources

                        </h4>

                        <div className="space-y-3 text-sm">

                            <a
                                href="https://github.com"
                                target="_blank"
                                className="flex items-center gap-2 hover:text-primary"
                            >

                                 GitHub

                            </a>

                            <a
                                href="https://open-meteo.com/"
                                target="_blank"
                                className="flex items-center gap-2 hover:text-primary"
                            >

                                <Globe className="h-4 w-4"/>

                                API Providers

                            </a>

                        </div>

                    </div>

                </div>

                <div className="mt-14 flex flex-col gap-3 border-t pt-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">

                    <span>

                        © 2026 ERRION. All rights reserved.

                    </span>

                    <span className="flex items-center gap-2">

                        Built with

                        <Heart className="h-4 w-4 fill-current text-red-500"/>

                        using Next.js & NestJS

                    </span>

                </div>

            </div>

        </footer>

    );

}