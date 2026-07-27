import type { ReactNode } from "react";

type InfoItemProps = {
    label: string;
    value: ReactNode;
};

export function InfoItem({
    label,
    value
}: InfoItemProps) {

    return (
        <div className="flex flex-col gap-1">
            <p className="text-sm text-muted-foreground">{label}</p>
            <p className="text-2xl font-semibold">{value}</p>
        </div>
    )
}