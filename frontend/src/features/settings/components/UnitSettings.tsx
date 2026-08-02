"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    RadioGroup,
    RadioGroupItem,
} from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Ruler } from "lucide-react";
import { useSettingsStore } from "@/stores/settings.store";

export function UnitSettings() {

    const {
        temperatureUnit,
        distanceUnit,
        setTemperatureUnit,
        setDistanceUnit,
    } = useSettingsStore();

    return (

        <Card>

            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Ruler className="h-5 w-5"/>
                    Units
                </CardTitle>

                <CardDescription>
                    Select your preferred measurement units.
                </CardDescription>
            </CardHeader>

            <CardContent className="space-y-8">
                <div className="space-y-3">
                    <Label className="font-medium">
                        Temperature
                    </Label>

                    <RadioGroup
                        value={temperatureUnit}
                        onValueChange={(value) =>
                            setTemperatureUnit(
                                value as "C" | "F"
                            )
                        }
                    >
                        <div className="flex items-center gap-2">
                            <RadioGroupItem
                                value="C"
                                id="temp-c"
                            />
                            <Label htmlFor="temp-c">
                                Celsius (°C)
                            </Label>
                        </div>

                        <div className="flex items-center gap-2">
                            <RadioGroupItem
                                value="F"
                                id="temp-f"
                            />
                            <Label htmlFor="temp-f">
                                Fahrenheit (°F)
                            </Label>
                        </div>

                    </RadioGroup>

                </div>

                <div className="space-y-3">
                    <Label className="font-medium">
                        Distance
                    </Label>

                    <RadioGroup
                        value={distanceUnit}
                        onValueChange={(value) =>
                            setDistanceUnit(
                                value as "km" | "mi"
                            )
                        }
                    >
                        <div className="flex items-center gap-2">
                            <RadioGroupItem
                                value="km"
                                id="dist-km"
                            />
                            <Label htmlFor="dist-km">
                                Kilometers
                            </Label>
                        </div>

                        <div className="flex items-center gap-2">
                            <RadioGroupItem
                                value="mi"
                                id="dist-mi"
                            />
                            <Label htmlFor="dist-mi">
                                Miles
                            </Label>
                        </div>

                    </RadioGroup>

                </div>

            </CardContent>

        </Card>

    );

}