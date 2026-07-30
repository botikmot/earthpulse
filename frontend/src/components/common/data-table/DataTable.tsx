"use client";

import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    getPaginationRowModel,
    getFilteredRowModel,
    getSortedRowModel,
    SortingState,
    useReactTable,
} from "@tanstack/react-table";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import { DataTablePagination } from "./DataTablePagination";
import { DataTableToolbar } from "./DataTableToolbar";
import { useState } from "react";

type Props<TData> = {
    columns: ColumnDef<TData>[];
    data: TData[];
    searchPlaceholder?: string;
    onRefresh?: () => void;
    onRowClick?: (row: TData) => void;
};

export function DataTable<TData>({
    columns,
    data,
    searchPlaceholder = "Search...",
    onRefresh,
    onRowClick,
}: Props<TData>) {

    const [globalFilter, setGlobalFilter] = useState("");
    const [sorting, setSorting] = useState<SortingState>([]);

    const table = useReactTable({
        data,
        columns,
        state: {
            globalFilter,
            sorting,
        },
        onGlobalFilterChange: setGlobalFilter,
        onSortingChange: setSorting,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        initialState: {
            pagination: {
                pageSize: 10,
            },
        },
    });

    return (

        <div className="space-y-4 mt-6">

            <DataTableToolbar
                search={globalFilter}
                onSearchChange={
                    setGlobalFilter
                }
                onRefresh={onRefresh}
                placeholder={searchPlaceholder}
            />

            <div className="rounded-lg border">

                <Table>

                    <TableHeader>

                        {table
                            .getHeaderGroups()
                            .map(headerGroup => (

                                <TableRow key={headerGroup.id}>

                                    {headerGroup.headers.map(header => (

                                        <TableHead key={header.id}>

                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}

                                        </TableHead>

                                    ))}

                                </TableRow>

                            ))}

                    </TableHeader>

                    <TableBody>

                        {table.getRowModel().rows.length ? (

                            table.getRowModel().rows.map((row) => (

                                <TableRow
                                    key={row.id}
                                    className="cursor-pointer"
                                    onClick={() =>
                                        onRowClick?.(
                                            row.original
                                        )
                                    }
                                >

                                    {row.getVisibleCells().map((cell) => (

                                        <TableCell key={cell.id}>

                                            {flexRender(
                                                cell.column.columnDef.cell,
                                                cell.getContext()
                                            )}

                                        </TableCell>

                                    ))}

                                </TableRow>

                            ))

                        ) : (

                            <TableRow>

                                <TableCell
                                    colSpan={columns.length}
                                    className="text-center py-10 text-muted-foreground"
                                >

                                    No results found.

                                </TableCell>

                            </TableRow>

                        )}

                    </TableBody>

                </Table>

            </div>

            <DataTablePagination table={table}/>

        </div>

    );
}