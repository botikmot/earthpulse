import { Card } from "@/components/ui/card";

import WorldMap from "./WorldMap";

export function FullWorldMap() {

    return (

        <Card className="overflow-hidden">

            <div className="h-[650px]">

                <WorldMap />

            </div>

        </Card>

    );

}