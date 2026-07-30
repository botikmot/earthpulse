import type { Wildfire } from "@/types/wildfire";

type Props = {
    wildfires: Wildfire[];
};

export function WildfireStats({
    wildfires,
}: Props) {

    return (

        <div className="mb-6">
            <h2 className="text-lg font-semibold">
                Active Wildfires
            </h2>
            <p className="text-muted-foreground">
                {wildfires.length} wildfire events found.
            </p>
        </div>

    );

}