import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BaseCard } from "@/components/ui/BaseCard";
import { useState } from "react";
import type { Earthquake } from "@/types/earthquake";
import { EarthquakeSheet } from "./EarthquakeSheet";
import { EarthquakePagination } from "./EarthquakePagination";
import { DEFAULT_PAGE_SIZE } from "@/constants/pagination";
import { EarthquakeToolbar } from "./EarthquakeToolbar";
import { useEarthquakeStore } from "@/stores/earthquake.store";
import { MapPin } from "lucide-react";
import { formatEarthquakeTime } from "@/utils/earthquake";

type Props = {
    earthquakes: Earthquake[];
    refetch: () => void;
};

export function EarthquakeTable({
    earthquakes,
    refetch,
}: Props) {
    //const [selectedEarthquake, setSelectedEarthquake] = useState<Earthquake | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [search, setSearch] = useState("");
    const [magnitudeFilter, setMagnitudeFilter] = useState("all");
    const [sortBy, setSortBy] = useState("newest");

    const {
        selectedEarthquake,
        setSelectedEarthquake,
        clearSelectedEarthquake,
    } = useEarthquakeStore();

    function getSeverity(magnitude:number){
        if(magnitude>=7){
            return "Major";
        }

        if(magnitude>=6){
            return "Strong";
        }

        if(magnitude>=5){
            return "Moderate";
        }

        return "Light";
    }

    function getSeverityClass(magnitude:number){

        if(magnitude>=7){
            return `
                bg-red-100
                text-red-700
                border-red-200
                dark:bg-red-950/40
                dark:text-red-300
            `;
        }

        if(magnitude>=6){
            return `
                bg-orange-100
                text-orange-700
                border-orange-200
                dark:bg-orange-950/40
                dark:text-orange-300
            `;
        }

        if(magnitude>=5){
            return `
                bg-yellow-100
                text-yellow-700
                border-yellow-200
                dark:bg-yellow-950/40
                dark:text-yellow-300
            `;
        }

        return `
            bg-green-100
            text-green-700
            border-green-200
            dark:bg-green-950/40
            dark:text-green-300
        `;
    }

    const filteredEarthquakes = earthquakes.filter((earthquake) =>
        earthquake.location
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    const magnitudeFilteredEarthquakes =
        magnitudeFilter === "all"
            ? filteredEarthquakes
            : filteredEarthquakes.filter(
                (earthquake) =>
                    earthquake.magnitude >= Number(magnitudeFilter)
            );

    const sortedEarthquakes =
        [...magnitudeFilteredEarthquakes].sort((a, b) => {

            switch (sortBy) {

                case "oldest":
                    return a.time - b.time;

                case "magnitude":
                    return b.magnitude - a.magnitude;

                case "depth":
                    return b.depth - a.depth;

                default:
                    return b.time - a.time;
            }

        });

    const totalPages = Math.ceil(sortedEarthquakes.length / DEFAULT_PAGE_SIZE);

    const paginatedEarthquakes = sortedEarthquakes.slice(
        (currentPage - 1) * DEFAULT_PAGE_SIZE,
        currentPage * DEFAULT_PAGE_SIZE
    );

    return (
        <BaseCard title="Latest Earthquakes" className="mb-8">

            <EarthquakeToolbar
                search={search}
                onSearchChange={setSearch}
                magnitudeFilter={magnitudeFilter}
                onMagnitudeFilterChange={setMagnitudeFilter}
                sortBy={sortBy}
                onSortChange={setSortBy}
                onRefresh={refetch}
            />

            <Table>

                <TableHeader>

                    <TableRow>

                        <TableHead>Magnitude</TableHead>

                        <TableHead>Location</TableHead>

                        <TableHead>Depth</TableHead>

                        <TableHead>Time</TableHead>

                        <TableHead>Status</TableHead>

                        <TableHead></TableHead>

                    </TableRow>

                </TableHeader>

                <TableBody>

                    {paginatedEarthquakes.map((earthquake) => (

                        <TableRow key={earthquake.id}>

                            <TableCell className="font-semibold">
                                M{earthquake.magnitude}
                            </TableCell>

                            <TableCell className="flex items-center gap-2">
                                <MapPin className="h-4 w-4 text-muted-foreground" /> {earthquake.location}
                            </TableCell>

                            <TableCell>
                                {earthquake.depth} km
                            </TableCell>

                            <TableCell>
                                {formatEarthquakeTime(earthquake.time)}
                            </TableCell>

                            <TableCell>

                                <Badge
                                    variant="outline"
                                    className={getSeverityClass(
                                        earthquake.magnitude
                                    )}
                                >
                                    {getSeverity(
                                        earthquake.magnitude
                                    )}
                                </Badge>

                            </TableCell>

                            <TableCell>

                                <Button
                                    className="cursor-pointer"
                                    variant="outline"
                                    size="sm"
                                    onClick={()=> setSelectedEarthquake(earthquake)}
                                >
                                    View
                                </Button>

                            </TableCell>

                        </TableRow>

                    ))}

                </TableBody>

            </Table>

            <EarthquakePagination
                currentPage={currentPage}
                totalPages={totalPages}
                totalItems={sortedEarthquakes.length}
                pageSize={DEFAULT_PAGE_SIZE}
                onPageChange={setCurrentPage}
            />

            <EarthquakeSheet
                earthquake={selectedEarthquake}
                open={!!selectedEarthquake}
                onOpenChange={(open)=>{
                    if(!open){
                        clearSelectedEarthquake()
                    }
                }}
            />

        </BaseCard>
    )
}