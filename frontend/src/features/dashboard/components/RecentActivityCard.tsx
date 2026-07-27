import { BaseCard } from "@/components/ui/BaseCard";
import { recentActivities } from "@/data/activity";
import { ActivityItem } from "./ActivityItem";

export function RecentActivityCard() {

    return (

        <BaseCard title="Recent Activity">

            <div className="space-y-6">

                {recentActivities.map((activity, index) => (

                    <ActivityItem
                        key={activity.id}
                        activity={activity}
                        isLast={index === recentActivities.length - 1}
                    />

                ))}

            </div>

        </BaseCard>

    );

}