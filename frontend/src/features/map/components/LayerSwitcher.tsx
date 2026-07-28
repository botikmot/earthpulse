"use client";

import { Button } from "@/components/ui/button";

type Props = {
    value: string;
    onValueChange: (value: string) => void;
};

export function LayerSwitcher({
    value,
    onValueChange,
}: Props) {

    return (

        <div className="inline-flex rounded-lg border p-1">

            <Button
                variant={
                    value === "earthquake"
                        ? "default"
                        : "ghost"
                }
                onClick={() =>
                    onValueChange("earthquake")
                }
            >
                🌍 Earthquakes
            </Button>

            <Button
                variant={
                    value === "weather"
                        ? "default"
                        : "ghost"
                }
                onClick={() =>
                    onValueChange("weather")
                }
            >
                🌤 Weather
            </Button>

        </div>

    );

}