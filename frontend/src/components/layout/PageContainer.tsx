import type { ReactNode } from "react";

type PageContainerProps = {
    children: ReactNode;
    className?: string;
};

export function PageContainer({
    children,
    className = "",
}: PageContainerProps) {

    return (
        <main
            className={`mx-auto max-w-7xl px-6 py-8 ${className}`}
        >
            {children}
        </main>
    );

}