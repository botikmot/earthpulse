import type { ReactNode } from "react";

type PageHeaderProps = {
    title: string;
    description: string;

    badge?: ReactNode;
}

export function PageHeader({
    title,
    description,
    badge,
}: PageHeaderProps) {

    return (
        <header className="mb-8">

            <div className="flex items-center gap-3">

                <h1 className="text-4xl font-bold tracking-tight">
                    {title}
                </h1>

                {badge}

            </div>

            <p className="mt-2 text-muted-foreground">
                {description}
            </p>

        </header>
    );

}