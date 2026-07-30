import type { Wildfire } from "@/types/wildfire";

type Props = {
    wildfires: Wildfire[];
};

export function WildfireInsights({
    wildfires,
}: Props) {

    return (

        <div className="rounded-lg border p-4 mt-6">
            <h3 className="font-semibold">
                Insights
            </h3>

            <p className="text-muted-foreground">
                Wildfire analytics will appear here.
            </p>
        </div>

    );

}