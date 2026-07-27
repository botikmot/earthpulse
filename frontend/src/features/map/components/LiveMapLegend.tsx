import { Badge } from "@/components/ui/badge";

export function LiveMapLegend() {

    return (

        <div className="flex flex-wrap gap-3 rounded-lg border bg-card p-4">

            <Badge
                variant="secondary"
                className="gap-2"
            >
                <span className="h-3 w-3 rounded-full bg-orange-500" />
                Earthquakes
            </Badge>

            <Badge
                variant="secondary"
                className="gap-2"
            >
                <span className="h-3 w-3 rounded-full bg-blue-500" />
                Weather
            </Badge>

            <Badge
                variant="secondary"
                className="gap-2"
            >
                <span className="h-3 w-3 rounded-full bg-red-500" />
                Wildfires
            </Badge>

            <Badge
                variant="secondary"
                className="gap-2"
            >
                <span className="h-3 w-3 rounded-full bg-green-500" />
                Air Quality
            </Badge>

        </div>

    );

}