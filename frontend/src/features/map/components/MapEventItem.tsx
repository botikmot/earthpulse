type MapEventItemProps = {
    color: string;
    title: string;
    subtitle: string;
    location: string;
    time: string;
};

export function MapEventItem({
    color,
    title,
    subtitle,
    location,
    time,
}: MapEventItemProps) {

    return (

        <div className="flex items-start gap-4">

            <div
                className={`mt-2 h-3 w-3 rounded-full ${color}`}
            />

            <div className="flex-1">

                <div className="flex items-center justify-between">

                    <h4 className="font-medium">
                        {title}
                    </h4>

                    <span className="text-xs text-muted-foreground">
                        {time}
                    </span>

                </div>

                <p className="text-sm text-muted-foreground">
                    {subtitle}
                </p>

                <p className="text-sm font-medium">
                    {location}
                </p>

            </div>

        </div>

    );

}