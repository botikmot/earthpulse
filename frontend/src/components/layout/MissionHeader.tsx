"use client";

import Image from "next/image";

export default function MissionHeader() {
    return (
        <header className="sticky top-0 z-50 h-[72px] border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
            <div className="mx-auto flex h-full items-center justify-between px-6">

                {/* Left */}

                <div className="flex items-center gap-3">

                    <div className="rounded-lg text-primary-foreground">

                        <Image
                            src="/images/earthpulse_logo2.png"
                            alt="EarthPulse"
                            width={54}
                            height={54}
                        />

                    </div>

                    <div>

                        <h1 className="text-lg font-semibold tracking-tight">
                            EarthPulse Mission Control
                        </h1>

                        <p className="text-xs text-muted-foreground">
                            Monitor. Inform. Protect.{/* Real-Time Earth Monitoring Platform */}
                        </p>

                    </div>

                </div>

                {/* Right */}

                <div className="text-xs text-muted-foreground">

                    Build 1.0.0

                </div>

            </div>
        </header>
    );
}