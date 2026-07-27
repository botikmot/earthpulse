import type { Earthquake } from "@/types/earthquake";

type EarthquakeSheetProps = {
    earthquake: Earthquake | null;
    open: boolean;
    onOpenChange: (open: boolean) => void;
};

import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetDescription,
} from "@/components/ui/sheet";

import { InfoItem } from "@/components/ui/InfoItem";

export function EarthquakeSheet({
    earthquake,
    open,
    onOpenChange,
}: EarthquakeSheetProps) {

    if (!earthquake) return null;

    return (

        <Sheet
            open={open}
            onOpenChange={onOpenChange}
        >

            <SheetContent className="sm:max-w-lg overflow-y-auto">

                <SheetHeader>

                    <SheetTitle>

                        Earthquake Details

                    </SheetTitle>

                    <SheetDescription>

                        Detailed seismic information.

                    </SheetDescription>

                </SheetHeader>

                <div className="mt-8 space-y-6">

                    <InfoItem
                        label="Magnitude"
                        value={`M${earthquake.magnitude}`}
                    />

                    <InfoItem
                        label="Location"
                        value={earthquake.location}
                    />

                    <InfoItem
                        label="Depth"
                        value={`${earthquake.depth} km`}
                    />

                    <InfoItem
                        label="Time"
                        value={earthquake.time}
                    />

                </div>

            </SheetContent>

        </Sheet>

    );

}