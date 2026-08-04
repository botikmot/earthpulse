
import { Card } from "@/components/ui/card";
import { SeismographCanvas } from "@/components/effects/SeismographCanvas";

import Image from "next/image";

export function EarthquakePageHero() {
    return (
        <Card className="mb-8 overflow-hidden">
            <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-orange-50 via-amber-50 to-red-50 dark:from-orange-950/20 dark:via-red-950/10 dark:to-transparent" />
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
                                    Earthquake Monitoring
                                </h2>

                                <p className="text-muted-foreground">
                                    Real-Time Seismic Activity
                                </p>

                            </div>

                        </div>

                        <p className="text-sm text-muted-foreground max-w-2xl">
                            Monitor earthquakes happening around the globe using
                            live seismic data from the USGS Earthquake API.
                            View magnitudes, depths, locations, and recent
                            seismic events as they happen.
                        </p>

                    </div>

                    <div className="mt-6 lg:mt-0 w-full lg:w-1/4 flex gap-6">

                        <div className="flex items-center justify-center w-full">
                            <SeismographCanvas />
                        </div>

                    </div>

                </div>
            </div>
        </Card>
    );
}