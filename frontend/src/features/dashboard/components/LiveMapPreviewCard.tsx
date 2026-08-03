"use client";

import Link from "next/link";
import { Globe2, ArrowRight } from "lucide-react";

import { BaseCard } from "@/components/ui/BaseCard";
import { Button } from "@/components/ui/button";

export function LiveMapPreviewCard() {

    return (

        <BaseCard
            title="Live Map"
            //description="Explore real-time environmental events."
        >

            <div className="flex flex-col items-center justify-center py-12 text-center">

                <div className="mb-4 rounded-full bg-primary/10 p-6">
                    <Globe2 className="h-12 w-12 text-primary"/>
                </div>

                <h3 className="text-lg font-semibold">
                    Interactive Earth Map
                </h3>

                <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                    View earthquakes, weather, air quality,
                    wildfires, and the ISS in one interactive map.
                </p>

                <Button
                    //asChild
                    className="mt-6"
                >

                    <Link href="/live-map">
                        Open Live Map
                        <ArrowRight className="ml-2 h-4 w-4"/>
                    </Link>
                </Button>

            </div>

        </BaseCard>

    );

}