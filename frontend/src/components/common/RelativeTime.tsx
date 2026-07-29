"use client";

import { useEffect, useState } from "react";
import { formatLastUpdated } from "@/lib/date";

type RelativeTimeProps = {
    timestamp: number | null;
    className?: string;
};

export function RelativeTime({
    timestamp,
    className,
}: RelativeTimeProps) {

    const [, rerender] = useState(0);

    useEffect(() => {

        const id = window.setInterval(() => {

            rerender((value) => value + 1);

        }, 60000);

        return () => clearInterval(id);

    }, []);

    return (

        <span className={className}>

            {formatLastUpdated(timestamp)}

        </span>

    );

}