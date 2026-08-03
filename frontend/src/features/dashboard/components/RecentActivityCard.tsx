import { BaseCard } from "@/components/ui/BaseCard";
import { useDashboardActivity } from "@/hooks/useDashboardActivity";
import { getRelativeTime } from "@/lib/date";

export function RecentActivityCard() {

    const activities = useDashboardActivity();

    return (

        <BaseCard title="Recent Activity">

            <div className="space-y-6">

                {activities.map((activity) => {

                    const Icon = activity.icon;

                    return (
                        <div
                            key={activity.id}
                            className="flex items-start gap-4 py-3"
                        >
                            <div
                                className={`mt-1 rounded-full p-2 text-white ${activity.color}`}
                            >
                                <Icon className="h-4 w-4"/>

                            </div>

                            <div className="flex-1">
                                <p className="font-medium">
                                    {activity.title}
                                </p>

                                <p className="text-sm text-muted-foreground">
                                    {activity.description}
                                </p>

                            </div>

                            <div className="text-xs text-muted-foreground whitespace-nowrap">
                                {getRelativeTime(activity.time)}
                            </div>
                        </div>
                    );

                })}

                {activities.length === 0 && (

                    <div className="py-10 text-center text-muted-foreground">
                        No recent events.
                    </div>

                )}

            </div>

        </BaseCard>

    );

}