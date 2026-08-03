"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import { PulseLine } from "@/components/effects/PulseLine";

export function DashboardHero() {

    return (

        <Card className="mb-8 overflow-hidden">
            <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-green-500/10 to-transparent" />
                <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between p-8">
                    <div className="space-y-3">
                        <div className="flex items-center gap-3">

                            <div className="rounded-xl">
                                <Image
                                    src="/images/earthpulse_logo2.png"
                                    alt="EarthPulse"
                                    width={54}
                                    height={54}
                                />
                            </div>

                            <div>
                                <h2 className="text-3xl font-bold">

                                    EarthPulse
                                </h2>

                                <p className="text-muted-foreground">
                                    Real-Time Environmental Monitoring
                                </p>

                            </div>

                        </div>

                        <p className="text-sm text-muted-foreground max-w-2xl">
                            Monitor earthquakes, weather, wildfires,
                            air quality, and the International Space
                            Station from one unified dashboard.
                        </p>

                    </div>

                    <div className="mt-6 lg:mt-0 w-full lg:w-1/4 flex gap-6">

                        <PulseLine
                            className="
                                h-24
                                w-full
                                text-sky-500
                            "
                        />

                    </div>
                </div>
            </div>

        </Card>

    );

}