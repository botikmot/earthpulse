import { BaseCard } from "@/components/ui/BaseCard";
import EarthquakeWorldMap from "./EarthquakeWorldMap";

export function EarthquakeMapPreview() {

    return (

        <BaseCard

            title="Latest Earthquakes Map"

        >

            <div className="h-[450px] overflow-hidden rounded-xl">

                <EarthquakeWorldMap className="h-[450px]"/>

            </div>

        </BaseCard>

    );

}