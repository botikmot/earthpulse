type WeatherDetailRowProps = {
    label: string;
    value: string;
};

export function WeatherDetailRow({
    label,
    value,
}: WeatherDetailRowProps) {

    return (

        <div className="flex items-center justify-between border-t pt-3">

            <span className="text-sm text-muted-foreground">
                {label}
            </span>

            <span className="font-semibold">
                {value}
            </span>

        </div>

    );

}