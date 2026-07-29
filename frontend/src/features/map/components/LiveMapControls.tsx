import {
    Search,
    Layers3,
    Map,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { useLiveMapStore } from "@/stores/liveMap.store";


export function LiveMapControls() {

    const {
        layers,
        toggleLayer,
    } = useLiveMapStore();

    return (

        <div className="flex flex-col gap-4 rounded-lg border bg-card p-4 lg:flex-row lg:items-center">

            <div className="relative flex-1">

                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />

                <Input
                    placeholder="Search location..."
                    className="pl-10"
                />

            </div>

            <Select>

                <SelectTrigger className="w-[180px]">

                    <Map className="mr-2 h-4 w-4" />

                    <SelectValue
                        placeholder="Map Style"
                    />

                </SelectTrigger>

                <SelectContent>

                    <SelectItem value="street">
                        Street
                    </SelectItem>

                    <SelectItem value="terrain">
                        Terrain
                    </SelectItem>

                    <SelectItem value="satellite">
                        Satellite
                    </SelectItem>

                </SelectContent>

            </Select>

            <Popover>

                <PopoverTrigger className="inline-flex items-center text-sm">
                    <Layers3 className="mr-2 h-4 w-4" />
                    Layers
                </PopoverTrigger>

                <PopoverContent
                    className="w-52"
                >

                    <div className="space-y-4">

                        <div className="flex items-center justify-between">

                            <span>Earthquakes</span>

                            <Checkbox

                                checked={layers.earthquake}

                                onCheckedChange={() =>
                                    toggleLayer("earthquake")
                                }

                            />

                        </div>

                        <div className="flex items-center justify-between">

                            <span>Weather</span>

                            <Checkbox

                                checked={layers.weather}

                                onCheckedChange={() =>
                                    toggleLayer("weather")
                                }

                            />

                        </div>

                        <div className="flex items-center justify-between">

                            <span>Volcanoes</span>

                            <Checkbox

                                checked={layers.volcano}

                                onCheckedChange={() =>
                                    toggleLayer("volcano")
                                }

                            />

                        </div>

                        <div className="flex items-center justify-between">

                            <span>Wildfires</span>

                            <Checkbox

                                checked={layers.wildfire}

                                onCheckedChange={() =>
                                    toggleLayer("wildfire")
                                }

                            />

                        </div>

                    </div>

                </PopoverContent>

            </Popover>

        </div>

    );

}