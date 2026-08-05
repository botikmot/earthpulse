"use client";

import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import Image from "next/image";
import type { ReactNode } from "react";

type LocationAddress = {
    city?: string;
    country?: string;
}

type HeroProps = {
    background?: string;
    title: string;
    subtitle?: string;
    description?: string;
    animation?: ReactNode;
    value?: number;
    temperature?: number;
    location?: LocationAddress;
    status?: string;
}

export function HeroSection({
   background,
   title,
   subtitle,
   description,
   animation,
   value,
   temperature,
   location,
   status,
}: HeroProps) {
    return (
    
            <Card className="mb-8 overflow-hidden">
                <div className="relative">
                    <div className={`absolute inset-0 bg-gradient-to-r ${background}`}/>
                    <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between p-8">
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
    
                                <div className="rounded-xl">
                                    <Image
                                        src="/images/earthpulse_logo2.png"
                                        alt="EarthPulse"
                                        width={54}
                                        height={54}
                                    />
                                </div>
    
                                <div>
                                    <h2 className="text-3xl font-bold">
                                        {title}
                                    </h2>
    
                                    <p className="text-muted-foreground">
                                        {subtitle}
                                    </p>
    
                                </div>
    
                            </div>
    
                            <p className="text-sm text-muted-foreground max-w-2xl">
                                {description}
                            </p>
    
                        </div>
    
                        <div className="relative mt-6 lg:mt-0 w-full lg:w-1/4 flex gap-6">
    
                            {animation}

                            <div className="absolute -bottom-4 right-0">
                                {temperature && (
                                    <h2 className="text-2xl font-bold tracking-tight text-right">
                                        {temperature.toFixed(1)}°
                                    </h2>
                                )}

                                {location && (
                                    <div className="flex items-center gap-1 text-sm text-gray-800 justify-end">
                                        <MapPin className="h-4 w-4"/>
                                        {location.city}, {" "} {location.country}
                                    </div>
                                )}
                            </div>

                        </div>
                    </div>
                </div>
    
            </Card>
    
        );
}