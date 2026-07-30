import type { Wildfire } from "@/types/wildfire";

type Props = {
    wildfires: Wildfire[];
};

export function WildfireSummaryBanner({
    wildfires,
}: Props) {

    return (

        <div className="rounded-lg border p-4">
            <p>
                Monitoring {wildfires.length} wildfire events.
            </p>
        </div>

    );

}