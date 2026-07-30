"use client";

import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type Props = {
    search: string;
    onSearchChange: (value: string) => void;

    onRefresh?: () => void;

    placeholder?: string;
};

export function DataTableToolbar({
    search,
    onSearchChange,
    onRefresh,
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

            {onRefresh && (

                <Button
                    variant="outline"
                    onClick={onRefresh}
                >

                    Refresh

                </Button>

            )}

        </div>

    );

}