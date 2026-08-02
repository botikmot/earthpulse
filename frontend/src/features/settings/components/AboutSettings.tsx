"use client";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import {
    Globe,
    Code2,
    Server,
    Calendar,
    Info,
} from "lucide-react";

export function AboutSettings() {

    const apis = [
        "Open-Meteo",
        "USGS Earthquake",
        "NASA EONET",
        "OpenWeather",
        "Open Notify",
    ];

    return (

        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Info className="h-5 w-5" />
                    About EarthPulse
                </CardTitle>

                <CardDescription>
                    Application information and external services.
                </CardDescription>

            </CardHeader>

            <CardContent className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                    <InfoItem
                        icon={Globe}
                        label="Application"
                        value="EarthPulse"
                    />
                    <InfoItem
                        icon={Server}
                        label="Version"
                        value="v1.0.0"
                    />
                    <InfoItem
                        icon={Calendar}
                        label="Last Updated"
                        value={new Date().toLocaleDateString()}
                    />
                    <InfoItem
                        icon={Code2}
                        label="Developer"
                        value="Nxt Tasq"
                    />
                </div>

                <div className="space-y-2">
                    <h4 className="font-medium">
                        External APIs
                    </h4>

                    <ul className="space-y-1 text-sm text-muted-foreground">
                        {apis.map(api => (

                            <li key={api}>

                                • {api}

                            </li>

                        ))}
                    </ul>

                </div>

            </CardContent>

        </Card>

    );

}

type InfoItemProps = {
    icon: React.ElementType;
    label: string;
    value: string;
};

function InfoItem({
    icon: Icon,
    label,
    value,
}: InfoItemProps) {

    return (

        <div className="flex gap-3 items-start">
            <Icon className="h-5 w-5 mt-0.5 text-primary" />
            <div>
                <p className="text-sm text-muted-foreground">
                    {label}
                </p>

                <p className="font-medium">
                    {value}
                </p>
            </div>
        </div>

    );

}