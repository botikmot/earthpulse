"use client";

export function DashboardGreeting() {

    const now = new Date();

    const hour = now.getHours();

    let greeting = "Good Evening";

    if (hour < 12) {
        greeting = "Good Morning";
    } else if (hour < 18) {
        greeting = "Good Afternoon";
    }

    const formattedDate =
        now.toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric",
        });

    return (

        <div className="mt-3">

            <p className="text-lg font-medium">
                {greeting} 👋
            </p>

            <p className="text-sm text-muted-foreground">
                {formattedDate}
            </p>

        </div>

    );

}