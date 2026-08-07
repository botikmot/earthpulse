import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { useSettingsStore } from "@/stores/settings.store";

export function LiveMapLegend() {

    const {
        mapLayers,
        toggleLayer,
    } = useSettingsStore();

    return (

        <div
            className="
                rounded-xl
                border
                bg-background/40
                p-2.5
                shadow-lg
                backdrop-blur-md
                sm:p-4
            "
        >

            <div
                className="
                    flex
                    flex-col
                    gap-2

                    sm:gap-3

                    lg:flex-row
                    lg:items-center
                    lg:justify-between
                "
            >

                <div
                    className="
                        flex
                        flex-wrap
                        items-center
                        gap-1.5

                        sm:gap-3
                    "
                >

                    <span
                        className="
                            mr-1
                            text-[11px]
                            font-semibold

                            sm:text-xs
                        "
                    >
                        Layers
                    </span>

                    <Badge
                        variant={
                            mapLayers.earthquake
                                ? "default"
                                : "outline"
                        }
                        className={`
                            cursor-pointer
                            gap-1.5
                            px-2
                            py-1
                            text-[10px]
                            transition-all
                            duration-200
                            hover:scale-105

                            sm:gap-2
                            sm:px-2.5
                            sm:text-xs

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
                            width={18}
                            height={18}
                            className="h-4 w-4 object-contain"
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
                            cursor-pointer
                            gap-1.5
                            px-2
                            py-1
                            text-[10px]
                            transition-all
                            duration-200
                            hover:scale-105

                            sm:gap-2
                            sm:px-2.5
                            sm:text-xs

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
                            width={18}
                            height={18}
                            className="h-4 w-4 object-contain"
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
                            cursor-pointer
                            gap-1.5
                            px-2
                            py-1
                            text-[10px]
                            transition-all
                            duration-200
                            hover:scale-105

                            sm:gap-2
                            sm:px-2.5
                            sm:text-xs

                            ${
                                !mapLayers.wildfire
                                    ? "opacity-40"
                                    : ""
                            }
                        `}
                        onClick={() =>
                            toggleLayer("wildfire")
                        }
                    >

                        <Image
                            src="/images/animation/fire-flame.gif"
                            alt="Fire"
                            width={12}
                            height={12}
                            className="h-3.5 w-3.5 object-contain sm:h-4 sm:w-4"
                        />

                        Wildfires

                    </Badge>

                </div>

            </div>

        </div>

    );
}