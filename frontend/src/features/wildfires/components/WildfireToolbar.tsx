"use client";

import { Search, RotateCw } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

type Props = {
    search: string;
    onSearchChange: (
            value: string
        ) => void;
    status: string;
    onStatusChange: (
            value: string
        ) => void;
    source: string;
    onSourceChange: (
            value: string
        ) => void;
    sort: string;
    onSortChange: (
            value: string
        ) => void;
    statuses: string[];
    sources: string[];
    onRefresh?: () => void;
};

export function WildfireToolbar({
    search,
    onSearchChange,
    status,
    onStatusChange,
    source,
    onSourceChange,
    sort,
    onSortChange,
    statuses,
    sources,
    onRefresh,
}: Props) {

    return (

        <div
            className="
                flex
                flex-wrap
                gap-3
                items-center
                justify-between
            "
        >

            <div
                className="
                    flex
                    flex-wrap
                    gap-3
                    items-center
                "
            >

                <div className="relative">

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
                        className="pl-10 w-[240px]"
                        placeholder="Search wildfire..."
                        value={search}
                        onChange={(event)=>
                            onSearchChange(
                                event.target.value
                            )
                        }
                    />

                </div>

                <Select
                    value={status}
                    onValueChange={(value) => {
                        if (value) {
                            onStatusChange(value);
                        }
                    }}
                >

                    <SelectTrigger className="w-[160px]">

                        <SelectValue />

                    </SelectTrigger>

                    <SelectContent>

                        <SelectItem value="ALL">
                            All Status
                        </SelectItem>

                        {statuses.map((item)=>(

                            <SelectItem
                                key={item}
                                value={item}
                            >
                                {item}
                            </SelectItem>

                        ))}

                    </SelectContent>

                </Select>

                <Select
                    value={source}
                     onValueChange={(value) => {
                        if (value) {
                            onSourceChange(value);
                        }
                    }}
                >

                    <SelectTrigger className="w-[180px]">

                        <SelectValue />

                    </SelectTrigger>

                    <SelectContent>

                        <SelectItem value="ALL">
                            All Sources
                        </SelectItem>

                        {sources.map((item)=>(

                            <SelectItem
                                key={item}
                                value={item}
                            >
                                {item}
                            </SelectItem>

                        ))}

                    </SelectContent>

                </Select>

                <Select
                    value={sort}
                    onValueChange={(value) => {
                        if (value) {
                            onSortChange(value);
                        }
                    }}
                >

                    <SelectTrigger className="w-[180px]">

                        <SelectValue />

                    </SelectTrigger>

                    <SelectContent>

                        <SelectItem value="latest">
                            Latest
                        </SelectItem>

                        <SelectItem value="oldest">
                            Oldest
                        </SelectItem>

                        <SelectItem value="largest">
                            Largest Area
                        </SelectItem>

                        <SelectItem value="smallest">
                            Smallest Area
                        </SelectItem>

                        <SelectItem value="alphabetical">
                            A-Z
                        </SelectItem>

                    </SelectContent>

                </Select>

            </div>

            {onRefresh && (

                <Button
                    variant="outline"
                    onClick={onRefresh}
                >

                    <RotateCw className="mr-2 h-4 w-4"/>

                    Refresh

                </Button>

            )}

        </div>

    );

}