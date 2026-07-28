import { Badge } from "@/components/ui/badge";

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

            <div className="mb-3 text-6xl">
                🌍
            </div>

            <p className="text-lg font-medium text-muted-foreground">
                Magnitude
            </p>

            <h2 className="mt-2 text-6xl font-bold tracking-tight">
                {magnitude.toFixed(1)}
            </h2>

            {severity && (
                <Badge className="mt-3">
                    {severity}
                </Badge>
            )}

            {location && (
                <p className="mt-4 text-lg font-medium">
                    {location}
                </p>
            )}

            <p className="mt-2 text-sm text-muted-foreground">
                {subtitle}
            </p>

        </div>

    );

}