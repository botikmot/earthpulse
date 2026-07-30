"use client";

import type { ColumnDef } from "@tanstack/react-table";
import type { Wildfire } from "@/types/wildfire";

import { Badge } from "@/components/ui/badge";

export const wildfireColumns: ColumnDef<Wildfire>[] = [

    {
        accessorKey: "status",

        header: "Status",

        cell: ({ row }) => (

            <Badge
                variant={
                    row.original.status === "ACTIVE"
                        ? "destructive"
                        : "secondary"
                }
            >
                {row.original.status}
            </Badge>

        ),

    },

    {
        accessorKey: "title",

        header: "Wildfire",

        cell: ({ row }) => (

            <div className="space-y-1">

                <div className="font-medium">

                    {row.original.title}

                </div>

                {row.original.description && (

                    <div className="text-xs text-muted-foreground line-clamp-1">

                        {row.original.description}

                    </div>

                )}

            </div>

        ),

    },

    {
        accessorKey: "area",

        header: "Area",

        cell: ({ row }) => (

            row.original.area
                ? `${row.original.area.toLocaleString()} ${row.original.areaUnit}`
                : "-"

        ),

    },

    {
        accessorKey: "source",

        header: "Source",

        cell: ({ row }) => (

            row.original.source

        ),

    },

    {
        accessorKey: "date",

        header: "Date",

        cell: ({ row }) => (

            new Date(
                row.original.date
            ).toLocaleString()

        ),

    },

];