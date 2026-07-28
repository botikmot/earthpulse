"use client";

import {
    Sheet,
    SheetContent,
} from "@/components/ui/sheet";

type MissionDrawerProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    children: React.ReactNode;
};

export function MissionDrawer({
    open,
    onOpenChange,
    children,
}: MissionDrawerProps) {

    return (

        <Sheet
            open={open}
            onOpenChange={onOpenChange}
        >

            <SheetContent
                side="right"
                className="w-[420px] sm:max-w-[420px] overflow-y-auto p-0"
            >

                {children}

            </SheetContent>

        </Sheet>

    );

}