import { BaseCard } from "@/components/ui/BaseCard";
import type { Earthquake } from "@/types/earthquake";
import { TriangleAlert } from "lucide-react";

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

        <BaseCard 
            className="
                mb-8
                overflow-hidden
                border-orange-500/20
                bg-gradient-to-r
                from-orange-500/10
                via-orange-500/5
                to-transparent
                pt-0
                "
        >

            <div className="flex items-center gap-4">
                <div
                    className="
                        rounded-xl
                        bg-orange-500/15
                        p-3
                        border
                        border-orange-500/20
                    "
                >
                    <TriangleAlert className="h-6 w-6 text-orange-500" />
                </div>

                <div>
                   <p className="text-sm font-medium uppercase tracking-wide text-orange-600 dark:text-orange-400">
                        Latest Seismic Activity
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