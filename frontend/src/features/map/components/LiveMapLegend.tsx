import { Badge } from "@/components/ui/badge";
import { useLiveMapStore } from "@/stores/liveMap.store";

export function LiveMapLegend() {

    const {
        layers,
        toggleLayer,
    } = useLiveMapStore();

    return (

        <div className="flex flex-wrap gap-3 rounded-lg border bg-card p-4">

            <Badge
                variant={
                    layers.earthquake
                        ? "default"
                        : "outline"
                }
                className={`
                    gap-2
                    cursor-pointer
                    transition-all
                    duration-200
                    hover:scale-105
                    ${
                        !layers.earthquake
                            ? "opacity-40"
                            : ""
                    }
                `}
                onClick={() =>
                    toggleLayer("earthquake")
                }
            >
                <span className="h-3 w-3 rounded-full bg-orange-500" />

                Earthquakes
            </Badge>

            <Badge
                variant={
                    layers.weather
                        ? "default"
                        : "outline"
                }
                className={`
                    gap-2
                    cursor-pointer
                    transition-all
                    duration-200
                    hover:scale-105
                    ${
                        !layers.weather
                            ? "opacity-40"
                            : ""
                    }
                `}
                onClick={() =>
                    toggleLayer("weather")
                }
            >
                <span className="h-3 w-3 rounded-full bg-blue-500" />

                Weather
            </Badge>

            <Badge
                variant={
                    layers.wildfire
                        ? "default"
                        : "outline"
                }
                className={`
                    gap-2 
                    cursor-pointer
                    transition-all
                    duration-200
                    hover:scale-105
                    ${
                    !layers.wildfire
                        ? "opacity-40"
                        : ""
                }`}
                onClick={() =>
                    toggleLayer("wildfire")
                }
            >
                <span className="h-3 w-3 rounded-full bg-red-500" />
                Wildfires
            </Badge>
            
            <Badge
                variant="secondary"
                className="gap-2 opacity-40"
            >
                <span className="h-3 w-3 rounded-full bg-green-500" />
                Air Quality
            </Badge>

        </div>

    );

}