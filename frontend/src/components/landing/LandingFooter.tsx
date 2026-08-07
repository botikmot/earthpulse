"use client";

import Image from "next/image";
import Link from "next/link";

import {
    Globe2,
} from "lucide-react";

const modules = [
    {
        label: "Weather",
        href: "/dashboard/weather",
    },
    {
        label: "Earthquakes",
        href: "/dashboard/earthquake",
    },
    {
        label: "Wildfires",
        href: "/dashboard/wildfire",
    },
    {
        label: "Air Quality",
        href: "/dashboard/air-quality",
    },
    {
        label: "ISS Tracker",
        href: "/dashboard/iss",
    },
];

export function LandingFooter() {
    return (
        <footer
            id="resources"
            className="
                border-t
                border-white/10
                bg-[#01050d]
                text-white
            "
        >
            <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">

                <div
                    className="
                        grid
                        gap-10
                        md:grid-cols-2
                        lg:grid-cols-[1.5fr_1fr_1fr]
                    "
                >

                    {/* brand */}

                    <div>

                        <Link
                            href="/"
                            className="inline-flex items-center gap-3"
                        >
                            <Image
                                src="/images/earthpulse_logo2.png"
                                alt="ERRION"
                                width={48}
                                height={48}
                                className="h-11 w-11 object-contain"
                            />

                            <div>
                                <p className="text-lg font-bold tracking-wide">
                                    ERRION
                                </p>

                                <p className="text-xs text-cyan-300">
                                    Understanding Earth&apos;s Signals
                                </p>
                            </div>
                        </Link>

                        <p
                            className="
                                mt-5
                                max-w-md
                                text-sm
                                leading-7
                                text-slate-400
                            "
                        >
                            A unified Earth monitoring platform for weather,
                            earthquakes, wildfires, air quality, and
                            International Space Station tracking.
                        </p>

                    </div>

                    {/* modules */}

                    <div>

                        <h4 className="text-sm font-semibold text-white">
                            Monitoring
                        </h4>

                        <div className="mt-5 space-y-3">

                            {modules.map((item) => (
                                <Link
                                    key={item.href}
                                    href={item.href}
                                    className="
                                        block
                                        text-sm
                                        text-slate-400
                                        transition-colors
                                        hover:text-cyan-300
                                    "
                                >
                                    {item.label}
                                </Link>
                            ))}

                        </div>

                    </div>

                    {/* resources */}

                    <div>

                        <h4 className="text-sm font-semibold text-white">
                            Resources
                        </h4>

                        <div className="mt-5 space-y-3">

                            <Link
                                href="/dashboard"
                                className="
                                    flex
                                    items-center
                                    gap-2
                                    text-sm
                                    text-slate-400
                                    transition-colors
                                    hover:text-cyan-300
                                "
                            >
                                <Globe2 className="h-4 w-4" />
                                Mission Control
                            </Link>

                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noreferrer"
                                className="
                                    flex
                                    items-center
                                    gap-2
                                    text-sm
                                    text-slate-400
                                    transition-colors
                                    hover:text-cyan-300
                                "
                            >
                                
                                GitHub
                            </a>

                        </div>

                    </div>

                </div>

                <div
                    className="
                        mt-12
                        flex
                        flex-col
                        gap-3
                        border-t
                        border-white/10
                        pt-6
                        text-xs
                        text-slate-500

                        sm:flex-row
                        sm:items-center
                        sm:justify-between
                    "
                >
                    <p>
                        © 2026 ERRION. All rights reserved.
                    </p>

                    <p>
                        Understanding Earth&apos;s Signals.
                    </p>
                </div>

            </div>
        </footer>
    );
}