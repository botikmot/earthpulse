"use client";

import type { Wildfire } from "@/types/wildfire";

import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
} from "@/components/ui/drawer";

type Props = {
    wildfire: Wildfire | null;
    open: boolean;
    onOpenChange: (open: boolean) => void;
};

export function WildfireDetailsDrawer({
    wildfire,
    open,
    onOpenChange,
}: Props) {

    if (!wildfire) return null;

    return (

        <Drawer
            open={open}
            onOpenChange={onOpenChange}
        >

            <DrawerContent>

                <DrawerHeader>

                    <DrawerTitle>

                        {wildfire.title}

                    </DrawerTitle>

                </DrawerHeader>

                <div className="space-y-4 p-6">

                    <div>

                        <strong>Status</strong>

                        <p>{wildfire.status}</p>

                    </div>

                    <div>

                        <strong>Description</strong>

                        <p>

                            {wildfire.description || "-"}

                        </p>

                    </div>

                    <div>

                        <strong>Area</strong>

                        <p>

                            {wildfire.area}

                            {" "}

                            {wildfire.areaUnit}

                        </p>

                    </div>

                    <div>

                        <strong>Source</strong>

                        <p>

                            {wildfire.source}

                        </p>

                    </div>

                    <div>

                        <strong>Date</strong>

                        <p>

                            {new Date(
                                wildfire.date
                            ).toLocaleString()}

                        </p>

                    </div>

                </div>

            </DrawerContent>

        </Drawer>

    );

}