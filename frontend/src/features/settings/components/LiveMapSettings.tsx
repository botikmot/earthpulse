"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Map } from "lucide-react";
import { useSettingsStore } from "@/stores/settings.store";

export function LiveMapSettings() {

    const {
        mapLayers,
        toggleLayer,
    } = useSettingsStore();

    return (

        <Card>

            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Map className="h-5 w-5" />
                    Live Map
                </CardTitle>

                <CardDescription>
                    Enable or disable map layers.
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-5">

                <LayerSwitch
                    label="Weather"
                    checked={mapLayers.weather}
                    onCheckedChange={() =>
                        toggleLayer("weather")
                    }
                />

                <LayerSwitch
                    label="Air Quality"
                    checked={mapLayers.airQuality}
                    onCheckedChange={() =>
                        toggleLayer("airQuality")
                    }
                />

                <LayerSwitch
                    label="Earthquakes"
                    checked={mapLayers.earthquake}
                    onCheckedChange={() =>
                        toggleLayer("earthquake")
                    }
                />

                <LayerSwitch
                    label="Wildfires"
                    checked={mapLayers.wildfire}
                    onCheckedChange={() =>
                        toggleLayer("wildfire")
                    }
                />

                <LayerSwitch
                    label="ISS Tracker"
                    checked={mapLayers.iss}
                    onCheckedChange={() =>
                        toggleLayer("iss")
                    }
                />

            </CardContent>

        </Card>

    );

}

type LayerSwitchProps = {
    label: string;
    checked: boolean;
    onCheckedChange: () => void;
};

function LayerSwitch({
    label,
    checked,
    onCheckedChange,
}: LayerSwitchProps) {

    return (
        <div className="flex items-center justify-between">
            <Label>
                {label}
            </Label>

            <Switch
                checked={checked}
                onCheckedChange={onCheckedChange}
            />
        </div>
    );

}