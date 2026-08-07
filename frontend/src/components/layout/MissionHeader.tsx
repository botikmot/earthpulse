"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

import DashboardSidebar from "@/features/dashboard/components/DashboardSidebar";
import { useState } from "react";

export default function MissionHeader() {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <header
            className="
                sticky
                top-0
                z-50
                h-[72px]
                border-b
                bg-background/95
                backdrop-blur
            "
        >

            <div
                className="
                    flex
                    h-full
                    items-center
                    justify-between
                    gap-4
                    px-4
                    sm:px-6
                    lg:px-8
                "
            >

                {/* Left */}

                <div className="flex min-w-0 items-center gap-2 sm:gap-3">

                    {/* Mobile Menu */}

                    <Sheet
                        open={sidebarOpen}
                        onOpenChange={setSidebarOpen}
                    >

                        <SheetTrigger
                            className="
                                inline-flex
                                h-9
                                w-9
                                shrink-0
                                items-center
                                justify-center
                                rounded-lg
                                border
                                bg-background
                                transition-colors
                                hover:bg-muted
                                lg:hidden
                            "
                            aria-label="Open navigation"
                        >
                            <Menu className="h-5 w-5" />
                        </SheetTrigger>

                        <SheetContent
                            side="left"
                            className="
                                z-[2000]
                                w-[280px]
                                p-0
                                sm:w-72
                            "
                        >

                            <SheetHeader className="border-b px-5 py-4">

                                <SheetTitle className="flex items-center gap-3">

                                    <Image
                                        src="/images/earthpulse_logo2.png"
                                        alt="ERRION"
                                        width={40}
                                        height={40}
                                    />

                                    <div className="text-left">

                                        <p className="text-sm font-semibold">
                                            ERRION
                                        </p>

                                        <p className="text-xs font-normal text-muted-foreground">
                                            Mission Control
                                        </p>

                                    </div>

                                </SheetTitle>

                            </SheetHeader>

                            <div className="flex h-[calc(100vh-81px)] flex-col">

                                <DashboardSidebar onNavigate={() => setSidebarOpen(false)} />

                            </div>

                        </SheetContent>

                    </Sheet>

                    {/* Logo */}

                    <Link
                        href="/"
                        className="shrink-0"
                    >
                        <Image
                            src="/images/earthpulse_logo2.png"
                            alt="ERRION"
                            width={54}
                            height={54}
                            className="
                                h-11
                                w-11
                                object-contain
                                sm:h-12
                                sm:w-12
                            "
                        />
                    </Link>

                    {/* Title */}

                    <div className="min-w-0">

                        <h1
                            className="
                                truncate
                                text-sm
                                font-semibold
                                tracking-tight
                                sm:text-base
                                lg:text-lg
                            "
                        >
                            ERRION Mission Control
                        </h1>

                        <p
                            className="
                                hidden
                                text-xs
                                text-muted-foreground
                                sm:block
                            "
                        >
                            Monitor. Inform. Protect.
                        </p>

                    </div>

                </div>

                {/* Right */}

                <div
                    className="
                        shrink-0
                        text-[10px]
                        text-muted-foreground
                        sm:text-xs
                    "
                >
                    <span className="hidden sm:inline">
                        Build 1.0.0
                    </span>

                    <span className="sm:hidden">
                        v1.0
                    </span>
                </div>

            </div>

        </header>
    );
}