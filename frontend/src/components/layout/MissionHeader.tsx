"use client";

import { Globe2 } from "lucide-react";

export default function MissionHeader() {
    return (
        <header className="sticky top-0 z-50 h-[72px] border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
            <div className="mx-auto flex h-full items-center justify-between px-6">

                {/* Left */}

                <div className="flex items-center gap-3">

                    <div className="rounded-lg bg-primary p-2 text-primary-foreground">

                        <Globe2 className="h-5 w-5" />

                    </div>

                    <div>

                        <h1 className="text-lg font-semibold tracking-tight">
                            EarthPulse Mission Control
                        </h1>

                        <p className="text-xs text-muted-foreground">
                            Real-Time Earth Monitoring Platform
                        </p>

                    </div>

                </div>

                {/* Right */}

                <div className="text-xs text-muted-foreground">

                    EarthPulse v1.0.0

                </div>

            </div>
        </header>
    );
}