"use client";

import { Badge } from "@/components/ui/badge";
import type { Wildfire } from "@/types/wildfire";

type Props = {
    wildfire: Wildfire;
};

export function WildfirePopup({
    wildfire,
}: Props) {

    return (

        <div className="w-72 space-y-4">

            <div className="space-y-2">

                <div className="flex items-center gap-2">

                    <span className="text-xl">
                        🔥
                    </span>

                    <h3 className="font-semibold text-base">
                        Wildfire
                    </h3>

                </div>

                <Badge
                    variant="destructive"
                >
                    {wildfire.status}
                </Badge>

            </div>

            <div>

                <div className="font-semibold leading-snug">

                    {wildfire.title}

                </div>

            </div>

            <div className="space-y-3 text-sm">

                <div>

                    <div className="font-medium">
                        📍 Location
                    </div>

                    <div className="text-muted-foreground">

                        {wildfire.description ??
                            "No description available"}

                    </div>

                </div>

                <div>

                    <div className="font-medium">
                        🌲 Burned Area
                    </div>

                    <div>

                        {wildfire.area
                            ? `${wildfire.area.toLocaleString()} ${wildfire.areaUnit}`
                            : "Unknown"}

                    </div>

                </div>

                <div>

                    <div className="font-medium">
                        📅 Detected
                    </div>

                    <div>

                        {new Date(
                            wildfire.date
                        ).toLocaleString()}

                    </div>

                </div>

                <div>

                    <div className="font-medium">
                        🛰 Source
                    </div>

                    <div>

                        {wildfire.source}

                    </div>

                </div>

            </div>

            <a
                href={wildfire.link}
                target="_blank"
                rel="noopener noreferrer"
                className="
                    inline-flex
                    text-sm
                    text-orange-600
                    hover:text-orange-700
                    font-medium
                "
            >
                View NASA Event →
            </a>
        </div>

    );

}