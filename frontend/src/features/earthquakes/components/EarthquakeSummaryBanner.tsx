import { BaseCard } from "@/components/ui/BaseCard";
import type { Earthquake } from "@/types/earthquake";
import { Activity } from "lucide-react";

type Props = {
    earthquakes: Earthquake[];
};

export function EarthquakeSummaryBanner({
    earthquakes,
}: Props) {

    if (!earthquakes.length) {
        return null;
    }

    const latest = earthquakes[0];

    return (

        <BaseCard className="mb-8 border-primary/20 bg-primary/5 pt-0">

            <div className="flex items-center gap-4">

                <div className="rounded-full bg-primary/10 p-3">

                    <Activity className="h-6 w-6 text-primary" />

                </div>

                <div>

                    <p className="text-sm text-muted-foreground">

                        Latest Recorded Event

                    </p>

                    <h3 className="mt-1 text-lg font-bold">

                        Magnitude {latest.magnitude.toFixed(1)} near{" "}
                        {latest.location}

                    </h3>

                </div>

            </div>

        </BaseCard>

    );

}