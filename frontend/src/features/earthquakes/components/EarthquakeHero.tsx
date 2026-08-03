import { Badge } from "@/components/ui/badge";
import {
    getSeverityLabel,
    getSeverityVariant,
    getEarthquakeSeverityIcon,
} from "@/utils/earthquakeSeverity";
import { MapPin } from "lucide-react";
import { createElement } from "react";

type EarthquakeHeroProps = {
    magnitude: number;
    location?: string;
    severity?: string;
    subtitle?: string;
};

export function EarthquakeHero({
    magnitude,
    location,
    severity,
    subtitle = "Latest Recorded Event",
}: EarthquakeHeroProps) {

    const icon = getEarthquakeSeverityIcon(magnitude);

    return (

        <div className="mb-8 flex flex-col items-center text-center">

           <div className="
                mb-4
                rounded-full
                bg-orange-100
                p-5
                dark:bg-orange-950
            ">

                {createElement(icon, {
                    className: `
                        h-12
                        w-12
                        text-sky-600
                        dark:text-sky-400
                    `,
                })}

            </div>

            <p className="text-lg font-medium text-muted-foreground">
                Magnitude
            </p>

            <h2 className="mt-2 text-6xl font-bold tracking-tight">
                {magnitude.toFixed(1)}
            </h2>

            {severity && (
                <Badge
                    variant={
                        getSeverityVariant(
                            magnitude
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        ) as any
                    }
                    className="mt-3"
                >

                    {getSeverityLabel(
                        magnitude
                    )}

                </Badge>
            )}

            {location && (
                <div className="mt-3 flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4"/>
                    {location}
                </div>
            )}

            <p className="mt-2 text-sm text-muted-foreground">
                {subtitle}
            </p>

        </div>

    );

}