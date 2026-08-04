import { Badge } from "@/components/ui/badge";
import { useLiveMapStore } from "@/stores/liveMap.store";
//import { MapStyleSwitcher } from "./MapStyleSwitcher";
import { CloudSun, Flame } from "lucide-react";

export function LiveMapLegend() {

    const {
        layers,
        toggleLayer,
    } = useLiveMapStore();

    return (

        <div className="mb-4 rounded-xl border bg-background/40 backdrop-blur-md shadow-lg p-4">

            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

                {/* LEFT */}
                <div className="flex flex-wrap items-center gap-3">

                    <span className="text-xs font-semibold">
                        Layers
                    </span>

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
                        <span
                            className="
                                h-3
                                w-3
                                rounded-full
                                border-2
                                border-white
                                bg-orange-500
                                shadow
                            "
                        />
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
                        <CloudSun className="h-4 w-4 text-sky-400" />

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
                        <Flame className="h-4 w-4 text-red-400" />
                        Wildfires
                    </Badge>
                </div>

                {/* RIGHT */}
                {/* <MapStyleSwitcher /> */}

            </div>
            
        </div>

    );

}