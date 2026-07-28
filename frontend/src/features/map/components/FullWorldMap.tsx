import { Card } from "@/components/ui/card";
import EarthquakeWorldMap from "@/features/earthquakes/components/EarthquakeWorldMap";
import { useEarthquakes } from "@/hooks/useEarthquakes";

type Props = {
    selectedEarthquakeId?: string | null;
};

export function FullWorldMap({
    selectedEarthquakeId
}: Props) {

    const {
        earthquakes,
    } = useEarthquakes();

    const selectedEarthquake =
        earthquakes.find(

            earthquake =>
                earthquake.id ===
                selectedEarthquakeId

        ) ?? null;

    return (

        <Card className="overflow-hidden">

            <div className="h-[650px]">

                <EarthquakeWorldMap className="h-[650px]" selectedEarthquake={selectedEarthquake}/>

            </div>

        </Card>

    );

}