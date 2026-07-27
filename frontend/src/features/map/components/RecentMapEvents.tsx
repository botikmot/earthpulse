import { BaseCard } from "@/components/ui/BaseCard";
import { MapEventItem } from "./MapEventItem";

export function RecentMapEvents() {

    return (

        <BaseCard
            title="Recent Map Events"
        >

            <div className="space-y-6">

                <MapEventItem

                    color="bg-orange-500"

                    title="Earthquake"

                    subtitle="Magnitude 5.2"

                    location="Tokyo, Japan"

                    time="2 mins ago"

                />

                <MapEventItem

                    color="bg-blue-500"

                    title="Weather Update"

                    subtitle="Partly Cloudy"

                    location="Butuan City"

                    time="4 mins ago"

                />

                <MapEventItem

                    color="bg-red-500"

                    title="Wildfire"

                    subtitle="2 Active Fires"

                    location="California"

                    time="9 mins ago"

                />

                <MapEventItem

                    color="bg-green-500"

                    title="Air Quality"

                    subtitle="AQI Moderate"

                    location="Singapore"

                    time="12 mins ago"

                />

            </div>

        </BaseCard>

    );

}