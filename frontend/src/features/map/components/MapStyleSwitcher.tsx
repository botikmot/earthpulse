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

        <div className="flex items-center gap-3 rounded-xl border bg-background/40 backdrop-blur-md shadow-lg p-3">

            <span className="text-xs font-semibold">
                Map Style
            </span>

            <Select
                value={style}
                onValueChange={(value) =>
                    setStyle(value as MapStyle)
                }
            >

                <SelectTrigger className="w-[170px]">
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