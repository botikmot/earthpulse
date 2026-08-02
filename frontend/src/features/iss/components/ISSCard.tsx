"use client";

import type { ISS } from "@/types/iss";
import {
    Rocket,
    Gauge,
    Mountain,
    Eye,
    Map,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { StatCard } from "@/components/common/StatCard";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

type Props = {
    iss: ISS;
};

export function ISSCard({
    iss,
}: Props) {

    const router = useRouter();

    return (

        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <div>
                    <h2 className="text-2xl font-bold">
                        International Space Station
                    </h2>
                    <p className="text-muted-foreground">
                        Real-time orbital information
                    </p>
                </div>

                <Badge>
                    {iss.visibility}
                </Badge>

            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                <StatCard
                    title="Altitude"
                    value={`${Math.round(
                        iss.altitude ?? 0
                    )} km`}
                    icon={Mountain}
                    variant="iss"
                />

                <StatCard
                    title="Velocity"
                    value={`${Math.round(
                        iss.velocity ?? 0
                    ).toLocaleString()} km/h`}
                    icon={Gauge}
                    variant="iss"
                />

                <StatCard
                    title="Latitude"
                    value={iss.latitude.toFixed(2)}
                    icon={Rocket}
                    variant="iss"
                />

                <StatCard
                    title="Longitude"
                    value={iss.longitude.toFixed(2)}
                    icon={Eye}
                    variant="iss"
                />
            </div>

            <div className="flex justify-end">
                <Button
                    onClick={() =>
                        router.push(
                            "/dashboard/map?iss=true"
                        )
                    }
                >
                    <Map className="mr-2 h-4 w-4" />
                    View on Live Map
                </Button>
            </div>

        </div>

    );

}