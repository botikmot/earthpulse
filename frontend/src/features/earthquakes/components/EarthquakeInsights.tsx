import type { Earthquake } from "@/types/earthquake";
import { BaseCard } from "@/components/ui/BaseCard";
import { TriangleAlert } from "lucide-react";

type Props = {
    earthquakes: Earthquake[];
};

export function EarthquakeInsights({
    earthquakes,
}: Props) {

    if (!earthquakes.length) {
        return null;
    }

    const strongest = [...earthquakes].sort(
        (a, b) => b.magnitude - a.magnitude
    )[0];

    const deepest = [...earthquakes].sort(
        (a, b) => b.depth - a.depth
    )[0];

    return (

        <BaseCard
            title="Quick Insights"
            className="mb-8"
        >

            <div className="grid gap-6 lg:grid-cols-2">

                <div className="rounded-xl border bg-orange-50 p-5 dark:bg-orange-950/20">

                    <div className="flex items-center gap-3">

                        <TriangleAlert className="h-6 w-6 text-orange-600" />

                        <div>

                            <p className="text-sm text-muted-foreground">
                                Strongest Earthquake
                            </p>

                            <h3 className="mt-1 text-xl font-bold">
                                M{strongest.magnitude.toFixed(1)}
                            </h3>

                            <p className="mt-2 text-sm">
                                {strongest.location}
                            </p>

                        </div>

                    </div>

                </div>

                <div className="rounded-xl border bg-sky-50 p-5 dark:bg-sky-950/20">

                    <p className="text-sm text-muted-foreground">
                        Deepest Event
                    </p>

                    <h3 className="mt-1 text-xl font-bold">
                        {deepest.depth.toFixed(1)} km
                    </h3>

                    <p className="mt-2 text-sm">
                        {deepest.location}
                    </p>

                </div>

            </div>

        </BaseCard>

    );

}