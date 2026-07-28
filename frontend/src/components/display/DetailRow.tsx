import { LucideIcon } from "lucide-react";

type DetailRowProps = {
    icon: LucideIcon;
    label: string;
    value: string;
};

export function DetailRow({
    icon: Icon,
    label,
    value,
}: DetailRowProps) {

    return (

        <div className="flex items-start gap-4 border-t py-5">
            <Icon className="mt-1 h-5 w-5 text-muted-foreground shrink-0" />
            <div className="flex-1">
                <p className="text-sm text-muted-foreground">
                    {label}
                </p>

                <p className="mt-1 text-base font-semibold leading-relaxed">
                    {value}
                </p>
            </div>
        </div>

    );

}