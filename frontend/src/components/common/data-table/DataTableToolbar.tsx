"use client";

import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    ArrowUpDown,
} from "lucide-react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

type FilterOption = {
    label: string;
    value: string;
};

type Filter = {
    key: string;
    label: string;
    value: string;
    options: FilterOption[];
};

type Props = {
    search: string;
    onSearchChange: (value: string) => void;
    sort: string;
    onSortChange: (value: string) => void;
    filters?: Filter[];
    onFilterChange?: (
        key: string,
        value: string
    ) => void;
    onResetFilters?: () => void;
    onRefresh?: () => void;
    placeholder?: string;
};

export function DataTableToolbar({
    search,
    onSearchChange,
    sort,
    onSortChange,
    filters = [],
    onFilterChange,
    onResetFilters,
    //onRefresh,
    placeholder = "Search...",
}: Props) {

    return (

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

            <div className="relative w-full md:max-w-sm">

                <Search
                    className="
                        absolute
                        left-3
                        top-1/2
                        -translate-y-1/2
                        h-4
                        w-4
                        text-muted-foreground
                    "
                />

                <Input
                    value={search}
                    placeholder={placeholder}
                    onChange={(event) =>
                        onSearchChange(
                            event.target.value
                        )
                    }
                    className="pl-10"
                />

            </div>

            {filters.map((filter) => (

                <Select
                    key={filter.key}
                    value={filter.value}
                    onValueChange={(value) =>
                        onFilterChange?.(
                            filter.key,
                            value ?? "all"
                        )
                    }
                >

                    <SelectTrigger className="w-[170px]">

                        <SelectValue
                            placeholder={filter.label}
                        />

                    </SelectTrigger>

                    <SelectContent>

                        {filter.options.map((option) => (

                            <SelectItem
                                key={option.value}
                                value={option.value}
                            >
                                {option.label}
                            </SelectItem>

                        ))}

                    </SelectContent>

                </Select>

            ))}

            <Select
                value={sort}
                onValueChange={(value) => {
                    if (value) {
                        onSortChange(value);
                    }
                }}
            >

                <SelectTrigger
                    className="w-[180px]"
                >

                    <ArrowUpDown className="mr-2 h-4 w-4" />

                    <SelectValue />

                </SelectTrigger>

                <SelectContent>

                    <SelectItem value="latest">
                        Latest First
                    </SelectItem>

                    <SelectItem value="oldest">
                        Oldest First
                    </SelectItem>

                    <SelectItem value="largest">
                        Largest Area
                    </SelectItem>

                    <SelectItem value="smallest">
                        Smallest Area
                    </SelectItem>

                    <SelectItem value="alphabetical">
                        A → Z
                    </SelectItem>

                </SelectContent>

            </Select>

            {onResetFilters && (

                <Button
                    variant="ghost"
                    onClick={onResetFilters}
                >
                    Reset
                </Button>

            )}

            {/* {onRefresh && (

                <Button
                    variant="outline"
                    onClick={onRefresh}
                >

                    Refresh

                </Button>

            )} */}

        </div>

    );

}