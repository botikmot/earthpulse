import type { ReactNode } from "react";

type SectionHeaderProps = {
    title: string;
    description: string;
    icon?: ReactNode;
}

export function SectionHeader({
    title,
    description,
    icon,
}: SectionHeaderProps) {

    return (
        <div className="mb-4">
            <div className="flex items-center gap-2">
                {icon}

                <h2 className="text-2xl font-semibold tracking-tight">
                    {title}
                </h2>
            </div>

            {description && (
                <p className="mt-1 text-muted-foreground">
                    {description}
                </p>
            )}
        </div>
    );
}