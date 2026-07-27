type EarthquakeDetailRowProps = {
    label: string;
    value: string;
};

export function EarthquakeDetailRow({
    label,
    value,
}: EarthquakeDetailRowProps) {

    return (

        <div className="flex items-center justify-between border-t pt-3">

            <span className="text-sm text-muted-foreground">
                {label}
            </span>

            <span className="font-semibold text-right">
                {value}
            </span>

        </div>

    );

}