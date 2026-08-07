"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function LandingHeader() {
    return (
        <header
            className="
                absolute
                left-0
                right-0
                top-0
                z-40
            "
        >
            <div
                className="
                    mx-auto
                    flex
                    h-24
                    max-w-7xl
                    items-center
                    justify-between
                    px-5
                    sm:px-8
                    lg:px-10
                "
            >

                {/* Brand */}

                <Link
                    href="/"
                    className="flex items-center gap-3"
                >
                    <Image
                        src="/images/earthpulse_logo2.png"
                        alt="ERRION"
                        width={54}
                        height={54}
                        priority
                        className="h-11 w-11 object-contain sm:h-12 sm:w-12"
                    />

                    <div>
                        <h2
                            className="
                                text-lg
                                font-bold
                                tracking-wide
                                text-white
                                sm:text-xl
                            "
                        >
                            ERRION
                        </h2>

                        <p
                            className="
                                hidden
                                text-xs
                                text-cyan-300
                                sm:block
                            "
                        >
                            Understanding Earth&apos;s Signals
                        </p>
                    </div>
                </Link>

                {/* Desktop Navigation */}

                <nav
                    className="
                        hidden
                        items-center
                        gap-9
                        lg:flex
                    "
                >
                    <Link
                        href="#modules"
                        className="
                            text-sm
                            text-slate-300
                            transition-colors
                            hover:text-white
                        "
                    >
                        Features
                    </Link>

                    <Link
                        href="#live-map"
                        className="
                            text-sm
                            text-slate-300
                            transition-colors
                            hover:text-white
                        "
                    >
                        Live Map
                    </Link>

                    <Link
                        href="#about"
                        className="
                            text-sm
                            text-slate-300
                            transition-colors
                            hover:text-white
                        "
                    >
                        About
                    </Link>

                    <Link
                        href="#resources"
                        className="
                            text-sm
                            text-slate-300
                            transition-colors
                            hover:text-white
                        "
                    >
                        Resources
                    </Link>

                    <Link
                        href="/dashboard"
                        className="
                            inline-flex
                            h-11
                            items-center
                            gap-2
                            rounded-xl
                            border
                            border-cyan-400/25
                            bg-white/[0.04]
                            px-5
                            text-sm
                            font-medium
                            text-white
                            shadow-[0_0_25px_rgba(6,182,212,0.10)]
                            backdrop-blur-md
                            transition-all
                            hover:border-cyan-300/50
                            hover:bg-white/[0.08]
                            hover:shadow-[0_0_30px_rgba(6,182,212,0.18)]
                        "
                    >
                        Launch App

                        <ArrowRight className="h-4 w-4" />
                    </Link>
                </nav>

                {/* Mobile */}

                <Link
                    href="/dashboard"
                    className="
                        inline-flex
                        h-10
                        items-center
                        gap-2
                        rounded-lg
                        border
                        border-cyan-400/25
                        bg-white/[0.05]
                        px-3
                        text-xs
                        font-medium
                        text-white
                        backdrop-blur-md
                        lg:hidden
                    "
                >
                    Launch

                    <ArrowRight className="h-3.5 w-3.5" />
                </Link>

            </div>
        </header>
    );
}