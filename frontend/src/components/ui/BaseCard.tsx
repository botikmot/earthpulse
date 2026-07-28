import type { ReactNode } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

type BaseCardProps = {
    title?: string;
    children: ReactNode;
    className?: string;
}

export function BaseCard({
    title,
    children,
    className,
}: BaseCardProps) {

    return(
        <Card className={className}>
            <CardHeader>
                <CardTitle>
                    {title}
                </CardTitle>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
        </Card>
    )

}