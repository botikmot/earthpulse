import MissionHeader from "@/components/layout/MissionHeader";
import DashboardSidebar from "@/features/dashboard/components/DashboardSidebar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen flex flex-col">

            <MissionHeader />

            <div className="flex flex-1">

                <aside className="w-72 border-r bg-background">
                    <DashboardSidebar />
                </aside>

                <main className="flex-1 overflow-auto">
                    {children}
                </main>

            </div>

        </div>
    );
}