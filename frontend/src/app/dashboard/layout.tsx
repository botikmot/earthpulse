import MissionHeader from "@/components/layout/MissionHeader";
import DashboardSidebar from "@/features/dashboard/components/DashboardSidebar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-background">

            <MissionHeader />

            <div className="flex">

                <aside
                    className="
                        sticky
                        top-[72px]
                        h-[calc(100vh-72px)]
                        w-72
                        shrink-0
                        border-r
                        bg-background
                    "
                >
                    <DashboardSidebar />
                </aside>

                <main className="flex-1 p-8">
                    {children}
                </main>

            </div>

        </div>
    );
}