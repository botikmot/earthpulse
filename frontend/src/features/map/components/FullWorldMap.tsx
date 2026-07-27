import { Card } from "@/components/ui/card";
import EarthquakeWorldMap from "@/features/earthquakes/components/EarthquakeWorldMap";

export function FullWorldMap() {

    return (

        <Card className="overflow-hidden">

            <div className="h-[650px]">

                <EarthquakeWorldMap className="h-[650px]" />

            </div>

        </Card>

    );

}