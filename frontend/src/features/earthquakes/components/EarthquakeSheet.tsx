"use client";

import { useRouter } from "next/navigation";
import type { Earthquake } from "@/types/earthquake";
import {
    Sheet,
    SheetContent,
    //SheetHeader,
    //SheetTitle,
    //SheetDescription,
} from "@/components/ui/sheet";
import { MetricHero } from "@/components/display/MetricHero";
import { StatusBadge } from "@/components/display/StatusBadge";
import { DetailRow } from "@/components/display/DetailRow";
import { Clock3, Copy, Globe2, MapPin, MapPinned, Mountain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatEarthquakeTime } from "@/utils/earthquake";

type EarthquakeSheetProps = {
    earthquake: Earthquake | null;
    open: boolean;
    onOpenChange: (open: boolean) => void;
};


export function EarthquakeSheet({
    earthquake,
    open,
    onOpenChange,
}: EarthquakeSheetProps) {

    const router = useRouter();

    if (!earthquake) return null;

    const handleCopyCoordinates = async () => {
        if (!earthquake) return;
        const coordinates =
            `${earthquake.position[0]}, ${earthquake.position[1]}`;

        await navigator.clipboard.writeText(
            coordinates
        );

    };

    const handleOpenMap = (id: string) => {

        if (!id) return;

        router.push(
            `/dashboard/map?earthquake=${id}`
        );

    };

    const severity =
        earthquake.magnitude >= 7
            ? {
                title: "Major Earthquake",
                color: "text-red-600",
            }
            : earthquake.magnitude >= 6
            ? {
                title: "Strong Earthquake",
                color: "text-orange-600",
            }
            : earthquake.magnitude >= 5
            ? {
                title: "Moderate Earthquake",
                color: "text-yellow-600",
            }
            : {
                title: "Light Earthquake",
                color: "text-green-600",
            };

    return (

        <Sheet
            open={open}
            onOpenChange={onOpenChange}
        >

            <SheetContent className="sm:max-w-xl p-0">
                <div className="h-full overflow-y-auto">
                    <div className="px-8 py-8">
                        <MetricHero
                            icon="🌍"
                            label="Magnitude"
                            value={earthquake.magnitude.toFixed(1)}
                            badge={
                                <StatusBadge
                                    magnitude={earthquake.magnitude}
                                />
                            }
                            subtitle={earthquake.location}
                            
                        />

                        <div className="mt-3 flex items-center justify-center">
                            <p className={`text-sm font-semibold ${severity.color}`}>
                                {severity.title}
                            </p>
                        </div>

                        <div className="mt-6">

                            <DetailRow
                                icon={MapPin}
                                label="Location"
                                value={earthquake.location}
                            />

                            <DetailRow
                                icon={Mountain}
                                label="Depth"
                                value={`${earthquake.depth.toFixed(1)} km`}
                            />

                            <DetailRow
                                icon={Clock3}
                                label="Time"
                                value={formatEarthquakeTime(earthquake.time)}
                            />

                            <DetailRow
                                icon={Globe2}
                                label="Coordinates"
                                value={`Lat:${earthquake.position[0]}, Long:${earthquake.position[1]}`}
                            />

                        </div>
                    </div>

                    <div className="bg-muted/30 px-5 pb-5">

                            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
                                Summary
                            </h3>

                            <p className="mt-3 leading-7 text-sm text-muted-foreground">

                                A magnitude{" "}
                                <span className="font-semibold text-foreground">
                                    {earthquake.magnitude.toFixed(1)}
                                </span>{" "}
                                earthquake occurred near{" "}
                                <span className="font-semibold text-foreground">
                                    {earthquake.location}
                                </span>
                                . The event was recorded at a depth of{" "}
                                <span className="font-semibold text-foreground">
                                    {earthquake.depth.toFixed(1)} km
                                </span>
                                .

                            </p>

                        </div>

                    <div className="border-t bg-background px-8 py-6">

                        <div className="flex flex-col gap-3 sm:flex-row">

                            <Button
                                className="flex-1"
                                onClick={() => handleOpenMap(earthquake.id)}
                            >
                                <MapPinned className="mr-2 h-4 w-4" />
                                Open on Map
                            </Button>

                            <Button
                                variant="outline"
                                className="flex-1"
                                onClick={handleCopyCoordinates}
                            >
                                <Copy className="mr-2 h-4 w-4" />
                                Copy Coordinates
                            </Button>
                        </div>

                    </div>
                </div>
            </SheetContent>

        </Sheet>

    );

}