import {
    CheckCircle2,
    Satellite,
    Activity,
} from "lucide-react";

export function LiveMapStatus() {

    return (

        <div className="flex flex-wrap items-center mb-6 gap-3">

            <div className="flex items-center gap-2 rounded-full border bg-green-50 px-3 py-1 dark:bg-green-950/30">

                <CheckCircle2 className="h-4 w-4 text-green-600" />

                <span className="text-xs font-semibold text-green-700 dark:text-green-400">
                    Operational
                </span>

            </div>

            <div className="flex items-center gap-2 rounded-full border px-3 py-1">

                <Activity className="h-4 w-4 text-primary" />

                <span className="text-xs font-medium">
                    Live Feeds
                </span>

            </div>

            <div className="flex items-center gap-2 rounded-full border px-3 py-1">

                <Satellite className="h-4 w-4 text-violet-500" />

                <span className="text-xs font-medium">
                    ISS Tracking
                </span>

            </div>

        </div>

    );

}