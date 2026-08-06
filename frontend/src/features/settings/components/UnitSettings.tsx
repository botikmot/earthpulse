"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

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

                    <Ruler className="h-5 w-5" />

                    Units

                </CardTitle>

                <CardDescription>

                    Choose your preferred measurement units for the Weather module.
                    Scientific modules such as Earthquakes and ISS Tracker always use
                    standard international units.

                </CardDescription>

            </CardHeader>

            <CardContent className="space-y-8">

                {/* Temperature */}

                <div>

                    <h4 className="mb-3 text-sm font-medium">

                        Temperature

                    </h4>

                    <div className="flex rounded-xl border bg-muted p-1">

                        <button
                            onClick={() =>
                                setTemperatureUnit("C")
                            }
                            className={`
                                flex-1
                                rounded-lg
                                py-2
                                text-sm
                                font-medium
                                transition-all

                                ${
                                    temperatureUnit === "C"
                                        ? "bg-background shadow-sm"
                                        : "text-muted-foreground"
                                }
                            `}
                        >
                            Celsius (°C)
                        </button>

                        <button
                            onClick={() =>
                                setTemperatureUnit("F")
                            }
                            className={`
                                flex-1
                                rounded-lg
                                py-2
                                text-sm
                                font-medium
                                transition-all

                                ${
                                    temperatureUnit === "F"
                                        ? "bg-background shadow-sm"
                                        : "text-muted-foreground"
                                }
                            `}
                        >
                            Fahrenheit (°F)
                        </button>

                    </div>

                </div>

                {/* Distance */}

                <div>

                    <h4 className="mb-3 text-sm font-medium">

                        Distance

                    </h4>

                    <div className="flex rounded-xl border bg-muted p-1">

                        <button
                            onClick={() =>
                                setDistanceUnit("km")
                            }
                            className={`
                                flex-1
                                rounded-lg
                                py-2
                                text-sm
                                font-medium
                                transition-all

                                ${
                                    distanceUnit === "km"
                                        ? "bg-background shadow-sm"
                                        : "text-muted-foreground"
                                }
                            `}
                        >
                            Kilometers
                        </button>

                        <button
                            onClick={() =>
                                setDistanceUnit("mi")
                            }
                            className={`
                                flex-1
                                rounded-lg
                                py-2
                                text-sm
                                font-medium
                                transition-all

                                ${
                                    distanceUnit === "mi"
                                        ? "bg-background shadow-sm"
                                        : "text-muted-foreground"
                                }
                            `}
                        >
                            Miles
                        </button>

                    </div>

                </div>

            </CardContent>

        </Card>

    );

}