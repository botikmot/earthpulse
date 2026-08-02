"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Palette } from "lucide-react";
import { useSettingsStore } from "@/stores/settings.store";

export function AppearanceSettings() {

    const {
        appearance,
        setAppearance,
    } = useSettingsStore();

    return (

        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Palette className="h-5 w-5" />
                    Appearance
                </CardTitle>

                <CardDescription>
                    Customize the application&apos;s appearance.
                </CardDescription>
            </CardHeader>

            <CardContent>
                <Select
                    value={appearance}
                    onValueChange={(value) =>
                        setAppearance(
                            value as
                                | "system"
                                | "light"
                                | "dark"
                        )
                    }
                >
                    <SelectTrigger className="w-[220px]">
                        <SelectValue />
                    </SelectTrigger>

                    <SelectContent>
                        <SelectItem value="system">
                            System
                        </SelectItem>
                        <SelectItem value="light">
                            Light
                        </SelectItem>
                        <SelectItem value="dark">
                            Dark
                        </SelectItem>
                    </SelectContent>
                </Select>
            </CardContent>
        </Card>

    );

}