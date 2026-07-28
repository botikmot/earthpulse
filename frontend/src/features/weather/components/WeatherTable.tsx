"use client";

import { useState } from "react";

import { BaseCard } from "@/components/ui/BaseCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

import {
    Table,
    TableHeader,
    TableHead,
    TableRow,
    TableBody,
    TableCell,
} from "@/components/ui/table";

import type { Weather } from "@/types/weather";
import { WeatherToolbar } from "./WeatherToolbar";

type Props = {
    weather: Weather;
    onRefresh: () => void;
};

export function WeatherTable({
    weather,
    onRefresh,
}: Props) {

    const [search, setSearch] = useState("");

    const [conditionFilter, setConditionFilter] =
        useState("all");

    const [sortBy, setSortBy] =
        useState("temperature");

    const rows = [
        {
            id: 1,
            location: "Butuan City",
            temperature: weather.temperature,
            humidity: weather.humidity,
            windSpeed: weather.windSpeed,
            condition: weather.condition,
            updated: "Just now",
        },
    ];

    return (

        <BaseCard
            title="Weather Details"
            className="mt-6"
        >

            <WeatherToolbar
                search={search}
                onSearchChange={setSearch}
                conditionFilter={conditionFilter}
                onConditionChange={setConditionFilter}
                sortBy={sortBy}
                onSortChange={setSortBy}
                onRefresh={onRefresh}
            />

            <Table>

                <TableHeader>

                    <TableRow>

                        <TableHead>
                            Location
                        </TableHead>

                        <TableHead>
                            Temperature
                        </TableHead>

                        <TableHead>
                            Humidity
                        </TableHead>

                        <TableHead>
                            Wind
                        </TableHead>

                        <TableHead>
                            Condition
                        </TableHead>

                        <TableHead>
                            Updated
                        </TableHead>

                        <TableHead />

                    </TableRow>

                </TableHeader>

                <TableBody>

                    {rows.map((row) => (

                        <TableRow
                            key={row.id}
                        >

                            <TableCell>

                                {row.location}

                            </TableCell>

                            <TableCell>

                                {row.temperature.toFixed(1)}°C

                            </TableCell>

                            <TableCell>

                                {row.humidity}%

                            </TableCell>

                            <TableCell>

                                {row.windSpeed} km/h

                            </TableCell>

                            <TableCell>

                                <Badge>

                                    {row.condition}

                                </Badge>

                            </TableCell>

                            <TableCell>

                                {row.updated}

                            </TableCell>

                            <TableCell>

                                <Button
                                    size="sm"
                                    variant="outline"
                                >

                                    View

                                </Button>

                            </TableCell>

                        </TableRow>

                    ))}

                </TableBody>

            </Table>

        </BaseCard>

    );

}