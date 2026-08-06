import { Badge } from "@/components/ui/badge";
import {
    getSeverityLabel,
    getSeverityVariant,
} from "@/utils/earthquakeSeverity";
import { MapPin } from "lucide-react";
import { SeismographCanvas } from "@/components/effects/SeismographCanvas";

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

    
    return (

        <div className="mb-8 flex flex-col items-center text-center">

            <div className="w-1/2">
                <SeismographCanvas />
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