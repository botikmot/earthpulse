import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useSettingsStore } from "@/stores/settings.store";

export function LiveMapLegend() {

    const {
        mapLayers,
        toggleLayer,
    } = useSettingsStore();

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
                            mapLayers.earthquake
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
                                !mapLayers.earthquake
                                    ? "opacity-40"
                                    : ""
                            }
                        `}
                        onClick={() =>
                            toggleLayer("earthquake")
                        }
                    >
                        <Image
                            src="/images/animation/pulse-loader.gif"
                            alt="Pulse"
                            width="18"
                            height="18"
                        />
                        Earthquakes
                    </Badge>

                    <Badge
                        variant={
                            mapLayers.weather
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
                                !mapLayers.weather
                                    ? "opacity-40"
                                    : ""
                            }
                        `}
                        onClick={() =>
                            toggleLayer("weather")
                        }
                    >
                        <Image
                            src="/images/weather/cloud.png"
                            alt="Cloud"
                            width="18"
                            height="18"
                        />

                        Weather
                    </Badge>

                    <Badge
                        variant={
                            mapLayers.wildfire
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
                            !mapLayers.wildfire
                                ? "opacity-40"
                                : ""
                        }`}
                        onClick={() =>
                            toggleLayer("wildfire")
                        }
                    >
                        <Image
                            src="/images/animation/fire-flame.gif"
                            alt="Fire"
                            width="12"
                            height="12"
                        />
                        Wildfires
                    </Badge>
                </div>

                {/* RIGHT */}
                {/* <MapStyleSwitcher /> */}

            </div>
            
        </div>

    );

}