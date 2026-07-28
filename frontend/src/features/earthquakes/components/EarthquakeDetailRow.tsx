import { ReactNode } from "react";

type EarthquakeDetailRowProps = {
    label: string;
    value: ReactNode;
    icon?: ReactNode;
};

export function EarthquakeDetailRow({
    label,
    value,
    icon,
}: EarthquakeDetailRowProps) {

    return (

        <div className="flex items-center justify-between border-t pt-3">

            <div className="flex items-center gap-3">
                {icon && (
                    <div className="text-primary">
                        {icon}
                    </div>
                )}
                <span className="text-sm text-muted-foreground">
                    {label}
                </span>
            </div>

            <span className="font-semibold text-right">
                {value}
            </span>

        </div>

    );

}