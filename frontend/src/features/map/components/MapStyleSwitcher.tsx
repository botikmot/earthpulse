"use client";

import {
    useMapStyleStore,
    type MapStyle,
} from "@/stores/map-style.store";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export function MapStyleSwitcher() {

    const {
        style,
        setStyle,
    } = useMapStyleStore();

    return (

        <div
            className="
                flex
                items-center
                gap-2
                rounded-xl
                border
                bg-background/40
                p-2
                shadow-lg
                backdrop-blur-md

                sm:gap-3
                sm:p-3
            "
        >

            <span
                className="
                    hidden
                    text-xs
                    font-semibold

                    sm:block
                "
            >
                Map Style
            </span>

            <Select
                value={style}
                onValueChange={(value) =>
                    setStyle(value as MapStyle)
                }
            >

                <SelectTrigger
                    className="
                        h-8
                        w-[120px]
                        text-xs

                        sm:h-9
                        sm:w-[170px]
                        sm:text-sm
                    "
                >
                    <SelectValue />
                </SelectTrigger>

                <SelectContent className="z-[99999]">

                    <SelectItem value="street">
                        Street
                    </SelectItem>

                    <SelectItem value="satellite">
                        Satellite
                    </SelectItem>

                    <SelectItem value="terrain">
                        Terrain
                    </SelectItem>

                    <SelectItem value="dark">
                        Dark
                    </SelectItem>

                </SelectContent>

            </Select>

        </div>

    );
}