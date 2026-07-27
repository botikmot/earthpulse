import type { Activity } from "@/types/activity";

type ActivityItemProps = {
    activity: Activity;
    isLast?: boolean;
};

export function ActivityItem({
    activity,
    isLast = false,
}: ActivityItemProps) {

    const colors = {
        orange: "bg-orange-500",
        blue: "bg-blue-500",
        red: "bg-red-500",
        green: "bg-green-500",
    };

    return (

        <div className="flex gap-4">

            {/* Timeline */}

            <div className="flex flex-col items-center">

                <div
                    className={`h-3 w-3 rounded-full ${colors[activity.color]}`}
                />

                {!isLast && (
                    <div className="mt-1 h-full w-px bg-border" />
                )}

            </div>

            {/* Content */}

            <div className="flex-1 pb-6">

                <div className="flex items-center justify-between">

                    <h4 className="font-medium">
                        {activity.title}
                    </h4>

                    <span className="text-xs text-muted-foreground">
                        {activity.time}
                    </span>

                </div>

                <p className="mt-1 text-sm text-muted-foreground">
                    {activity.description}
                </p>

            </div>

        </div>

    );

}