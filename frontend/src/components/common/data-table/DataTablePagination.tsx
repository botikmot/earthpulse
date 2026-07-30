"use client";

import type { Table } from "@tanstack/react-table";

import {
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";

type Props<TData> = {
    table: Table<TData>;
};

export function DataTablePagination<TData>({
    table,
}: Props<TData>) {

    return (

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

            <div className="text-sm text-muted-foreground">

                Showing{" "}

                <span className="font-medium">

                    {table.getRowModel().rows.length}

                </span>{" "}

                of{" "}

                <span className="font-medium">

                    {table.getFilteredRowModel().rows.length}

                </span>{" "}

                rows

            </div>

            <div className="flex items-center gap-4">

                <div className="flex items-center gap-2">

                    <span className="text-sm">

                        Rows

                    </span>

                    <Select
                        value={String(
                            table.getState().pagination.pageSize
                        )}
                        onValueChange={(value) =>
                            table.setPageSize(Number(value))
                        }
                    >

                        <SelectTrigger className="w-20">

                            <SelectValue />

                        </SelectTrigger>

                        <SelectContent>

                            <SelectItem value="10">
                                10
                            </SelectItem>

                            <SelectItem value="20">
                                20
                            </SelectItem>

                            <SelectItem value="50">
                                50
                            </SelectItem>

                            <SelectItem value="100">
                                100
                            </SelectItem>

                        </SelectContent>

                    </Select>

                </div>

                <div className="text-sm">

                    Page{" "}

                    <span className="font-medium">

                        {table.getState().pagination.pageIndex + 1}

                    </span>{" "}

                    of{" "}

                    <span className="font-medium">

                        {table.getPageCount()}

                    </span>

                </div>

                <div className="flex items-center gap-2">

                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => table.previousPage()}
                        disabled={!table.getCanPreviousPage()}
                    >

                        <ChevronLeft className="h-4 w-4"/>

                    </Button>

                    <Button
                        variant="outline"
                        size="icon"
                        onClick={() => table.nextPage()}
                        disabled={!table.getCanNextPage()}
                    >

                        <ChevronRight className="h-4 w-4"/>

                    </Button>

                </div>

            </div>

        </div>

    );

}