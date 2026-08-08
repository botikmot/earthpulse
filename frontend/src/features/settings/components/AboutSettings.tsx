"use client";

import {
    Calendar,
    Code2,
    Globe,
    Rocket,
    Satellite,
    Server,
    ShieldCheck,
    Waves,
    Flame,
    CloudSun,
} from "lucide-react";

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";

import Image from "next/image";

const providers = [
    {
        name: "Open-Meteo",
        description: "Weather Forecast",
        icon: CloudSun,
        color: "text-sky-500",
    },
    {
        name: "USGS",
        description: "Earthquake Monitoring",
        icon: Waves,
        color: "text-orange-500",
    },
    {
        name: "NASA EONET",
        description: "Wildfire Events",
        icon: Flame,
        color: "text-red-500",
    },
    {
        name: "OpenWeather",
        description: "Air Quality Data",
        icon: Globe,
        color: "text-emerald-500",
    },
    {
        name: "Open Notify",
        description: "ISS Position",
        icon: Satellite,
        color: "text-violet-500",
    },
];

const roadmap = [
    "Volcano Monitoring",
    "Tropical Cyclone Tracker",
    "Flood Monitoring",
    "Lightning Detection",
];

export function AboutSettings() {

    return (

        <Card>

            <CardHeader>

                <CardTitle className="flex items-center gap-2">

                    <ShieldCheck className="h-5 w-5" />

                    About EarthPulse

                </CardTitle>

                <CardDescription>

                    Mission information, data providers, and platform details.

                </CardDescription>

            </CardHeader>

            <CardContent className="space-y-10">

                {/* Mission */}

                <div className="flex flex-col items-center text-center space-y-4">

                    <Image
                        src="/images/earthpulse_logo2.png"
                        alt="ERRION"
                        width={72}
                        height={72}
                    />

                    <div>

                        <h3 className="text-2xl font-bold">

                            ERRION

                        </h3>

                        <p className="text-muted-foreground">

                            Understanding Earth&apos;s Signals

                        </p>

                    </div>

                    <p className="max-w-3xl text-sm text-muted-foreground leading-6">

                        ERRION is a real-time Earth monitoring platform
                        that combines weather, earthquakes, air quality,
                        wildfire activity, and International Space Station
                        tracking into a unified mission dashboard designed
                        for awareness, monitoring, and decision support.

                    </p>

                </div>

                {/* System */}

                <div>

                    <h4 className="mb-4 font-semibold">

                        System Information

                    </h4>

                    <div className="grid gap-4 md:grid-cols-2">

                        <InfoItem
                            icon={Server}
                            label="Version"
                            value="v1.0.0"
                        />

                        <InfoItem
                            icon={Code2}
                            label="Developer"
                            value="Nxt Tasq"
                        />

                        <InfoItem
                            icon={Calendar}
                            label="Last Updated"
                            value={new Date().toLocaleDateString()}
                        />

                        <InfoItem
                            icon={Rocket}
                            label="Framework"
                            value="Next.js + NestJS"
                        />

                    </div>

                </div>

                {/* Providers */}

                <div>

                    <h4 className="mb-4 font-semibold">

                        Data Providers

                    </h4>

                    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">

                        {providers.map((provider) => {

                            const Icon = provider.icon;

                            return (

                                <div
                                    key={provider.name}
                                    className="
                                        rounded-xl
                                        border
                                        p-4
                                        transition-all
                                        duration-300
                                        hover:-translate-y-1
                                        hover:border-primary/40
                                        hover:shadow-sm
                                    "
                                >

                                    <div className="flex items-center gap-3">

                                        <div className="rounded-lg bg-muted p-2">

                                            <Icon
                                                className={`h-5 w-5 ${provider.color}`}
                                            />

                                        </div>

                                        <div>

                                            <p className="font-medium">

                                                {provider.name}

                                            </p>

                                            <p className="text-xs text-muted-foreground">

                                                {provider.description}

                                            </p>

                                        </div>

                                    </div>

                                </div>

                            );

                        })}

                    </div>

                </div>

                {/* Roadmap */}

                <div>

                    <h4 className="mb-4 font-semibold">

                        Upcoming Features

                    </h4>

                    <div className="grid gap-3 md:grid-cols-2">

                        {roadmap.map((feature) => (

                            <div
                                key={feature}
                                className="
                                    rounded-lg
                                    border
                                    bg-muted/40
                                    px-4
                                    py-3
                                    text-sm
                                    font-medium
                                "
                            >

                                🚀 {feature}

                            </div>

                        ))}

                    </div>

                </div>

            </CardContent>

        </Card>

    );

}

type InfoItemProps = {
    icon: LucideIcon;
    label: string;
    value: string;
};

function InfoItem({
    icon: Icon,
    label,
    value,
}: InfoItemProps) {

    return (

        <div className="flex gap-3 rounded-xl border p-4">

            <div className="rounded-lg bg-primary/10 p-2 h-fit">

                <Icon className="h-5 w-5 text-primary" />

            </div>

            <div>

                <p className="text-xs text-muted-foreground">

                    {label}

                </p>

                <p className="font-medium">

                    {value}

                </p>

            </div>

        </div>

    );

}