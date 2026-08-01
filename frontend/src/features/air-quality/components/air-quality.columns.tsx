"use client";

import type { ColumnDef } from "@tanstack/react-table";
import type { AirQuality } from "@/types/air-quality";

import { Badge } from "@/components/ui/badge";

const CATEGORY_COLORS = {
    GOOD: "bg-green-500",
    MODERATE: "bg-yellow-500",
    UNHEALTHY_SENSITIVE: "bg-orange-400",
    UNHEALTHY: "bg-orange-600",
    VERY_UNHEALTHY: "bg-red-600",
    HAZARDOUS: "bg-purple-700",
};

export const airQualityColumns: ColumnDef<AirQuality>[] = [
    {
        accessorKey: "city",
        header: "Location",
        cell: ({ row }) => (

            <div>
                <div className="font-medium">
                    {row.original.city}
                </div>

                <div className="text-xs text-muted-foreground">
                    {row.original.country}
                </div>
            </div>
        ),
    },
    {
        accessorKey: "aqi",
        header: "AQI",
    },
    {
        accessorKey: "category",
        header: "Category",
        cell: ({ row }) => (
            <Badge
                className={
                    CATEGORY_COLORS[
                        row.original.category
                    ]
                }
            >
                {
                    row.original.category
                        .replaceAll(
                            "_",
                            " "
                        )
                }
            </Badge>
        ),
    },
    {
        accessorKey: "pm25",
        header: "PM2.5",
        cell: ({ row }) =>
            row.original.pm25?.toFixed(1) ?? "-",
    },
    {
        accessorKey: "pm10",
        header: "PM10",
        cell: ({ row }) =>
            row.original.pm10?.toFixed(1) ?? "-",
    },
    {
        accessorKey: "updatedAt",
        header: "Updated",
        cell: ({ row }) =>
            new Date(
                row.original.updatedAt
            ).toLocaleString(),
    },
];