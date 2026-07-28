"use client";

import { RotateCw, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

type Props = {
    search: string;
    onSearchChange: (value: string) => void;
    conditionFilter: string;
    onConditionChange: (value: string) => void;
    sortBy: string;
    onSortChange: (value: string) => void;
    onRefresh: () => void;
};

export function WeatherToolbar({
    search,
    onSearchChange,
    conditionFilter,
    onConditionChange,
    sortBy,
    onSortChange,
    onRefresh,
}: Props) {

    return (

        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

            <div className="relative w-full lg:max-w-md">

                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"/>

                <Input
                    className="pl-10"
                    placeholder="Search location..."
                    value={search}
                    onChange={(e)=>
                        onSearchChange(
                            e.target.value
                        )
                    }
                />

            </div>

            <div className="flex flex-wrap items-center gap-3">

                <Select
                    value={conditionFilter}
                    onValueChange={(value)=>{
                        if(value){
                            onConditionChange(value);
                        }
                    }}
                >

                    <SelectTrigger className="w-[170px]">

                        <SelectValue placeholder="Condition"/>

                    </SelectTrigger>

                    <SelectContent>

                        <SelectItem value="all">
                            All
                        </SelectItem>

                        <SelectItem value="Clear">
                            Clear
                        </SelectItem>

                        <SelectItem value="Cloud">
                            Cloudy
                        </SelectItem>

                        <SelectItem value="Rain">
                            Rain
                        </SelectItem>

                        <SelectItem value="Snow">
                            Snow
                        </SelectItem>

                    </SelectContent>

                </Select>

                <Select
                    value={sortBy}
                    onValueChange={(value)=>{
                        if(value){
                            onSortChange(value);
                        }
                    }}
                >

                    <SelectTrigger className="w-[170px]">

                        <SelectValue placeholder="Sort"/>

                    </SelectTrigger>

                    <SelectContent>

                        <SelectItem value="temperature">
                            Temperature
                        </SelectItem>

                        <SelectItem value="humidity">
                            Humidity
                        </SelectItem>

                        <SelectItem value="wind">
                            Wind Speed
                        </SelectItem>

                    </SelectContent>

                </Select>

                <Button
                    variant="outline"
                    onClick={onRefresh}
                >

                    <RotateCw className="mr-2 h-4 w-4"/>

                    Refresh

                </Button>

            </div>

        </div>

    );

}