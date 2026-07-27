type LegendItemProps = {
    color: string;
    label: string;
};

function LegendItem({
    color,
    label,
}: LegendItemProps) {
    return (
        <div className="flex items-center gap-2">
            <div
                className={`h-3 w-3 rounded-full ${color}`}
            />

            <span className="text-sm text-muted-foreground">
                {label}
            </span>
        </div>
    );
}

export function MapLegend() {

    return (

        <div className="flex flex-wrap gap-6 rounded-lg border bg-card p-4">

            <LegendItem
                color="bg-orange-500"
                label="Earthquakes"
            />

            <LegendItem
                color="bg-blue-500"
                label="Weather"
            />

            <LegendItem
                color="bg-red-500"
                label="Wildfires"
            />

            <LegendItem
                color="bg-green-500"
                label="Air Quality"
            />

        </div>

    );

}