import {
    Mountain,
    CloudSun,
    Flame,
    Wind,
} from "lucide-react";

import { DashboardStatCard } from "./DashboardStatCard";

export function DashboardStats() {

    return (

        <section className="mb-8">

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

                <DashboardStatCard
                    title="Earthquakes"
                    value="28"
                    description="Today's Earthquakes"
                    icon={<Mountain className="h-7 w-7 text-orange-600" />}
                    iconBackgroundClassName="bg-orange-100"
                />

                <DashboardStatCard
                    title="Weather Alerts"
                    value="6"
                    description="Active Alerts"
                    icon={<CloudSun className="h-7 w-7 text-sky-600" />}
                    iconBackgroundClassName="bg-sky-100"
                />

                <DashboardStatCard
                    title="Wildfires"
                    value="2"
                    description="Active Fires"
                    icon={<Flame className="h-7 w-7 text-red-600" />}
                    iconBackgroundClassName="bg-red-100"
                />

                <DashboardStatCard
                    title="Air Quality"
                    value="12"
                    description="Monitoring Stations"
                    icon={<Wind className="h-7 w-7 text-emerald-600" />}
                    iconBackgroundClassName="bg-emerald-100"
                />

            </div>

        </section>

    );

}