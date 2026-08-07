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
                        hidden
                        h-[calc(100vh-72px)]
                        w-72
                        shrink-0
                        border-r
                        bg-background
                        lg:block
                    "
                >
                    <DashboardSidebar />
                </aside>

                <main 
                    className="
                        min-w-0
                        flex-1
                        px-4
                        py-5
                        sm:px-6
                        sm:py-6
                        lg:p-8
                    "
                >
                    {children}
                </main>

            </div>

        </div>
    );
}