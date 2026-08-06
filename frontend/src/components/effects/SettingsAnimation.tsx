"use client";

import {
    SlidersHorizontal,
    Settings,
} from "lucide-react";

export function SettingsAnimation() {

    return (

        <div className="relative flex h-25 w-full items-center justify-center">

            <Settings
                className="
                    h-20
                    w-20
                    text-violet-500
                    animate-[spin_18s_linear_infinite]
                "
            />

            <SlidersHorizontal
                className="
                    absolute
                    right-10
                    top-8
                    h-8
                    w-8
                    text-indigo-400
                    animate-pulse
                "
            />

            <SlidersHorizontal
                className="
                    absolute
                    left-10
                    bottom-10
                    h-8
                    w-8
                    text-violet-400
                    animate-pulse
                "
            />

        </div>

    );

}