import { RotateCw, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

type EarthquakeToolbarProps = {
    search: string;
    onSearchChange: (value: string) => void;
    magnitudeFilter: string;
    onMagnitudeFilterChange: (value: string) => void;
    sortBy: string;
    onSortChange: (value: string) => void;
    onRefresh: () => void;
};

export function EarthquakeToolbar({
    search,
    onSearchChange,
    magnitudeFilter,
    onMagnitudeFilterChange,
    sortBy,
    onSortChange,
    onRefresh,
}: EarthquakeToolbarProps) {

    return (
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

            {/* Search */}

            <div className="relative w-full lg:max-w-md">

                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

                <Input
                    placeholder="Search earthquakes..."
                    value={search}
                    onChange={(e) =>
                        onSearchChange(e.target.value)
                    }
                    className="pl-10"
                />

            </div>

            {/* Actions */}

            <div className="flex flex-wrap items-center gap-3">

                <Select
                    value={magnitudeFilter}
                    onValueChange={(value) => {
                        if (value) {
                            onMagnitudeFilterChange(value);
                        }
                    }}
                >

                    <SelectTrigger className="w-[150px]">

                        <SelectValue placeholder="Magnitude" />

                    </SelectTrigger>

                    <SelectContent>

                        <SelectItem value="all">
                            All
                        </SelectItem>

                        <SelectItem value="5">
                            M5+
                        </SelectItem>

                        <SelectItem value="6">
                            M6+
                        </SelectItem>

                        <SelectItem value="7">
                            M7+
                        </SelectItem>

                    </SelectContent>

                </Select>

                <Select
                    value={sortBy}
                    onValueChange={(value) => {
                        if (value) {
                            onSortChange(value);
                        }
                    }}
                >

                    <SelectTrigger className="w-[170px]">

                        <SelectValue placeholder="Sort" />

                    </SelectTrigger>

                    <SelectContent>

                        <SelectItem value="newest">
                            Newest
                        </SelectItem>

                        <SelectItem value="oldest">
                            Oldest
                        </SelectItem>

                        <SelectItem value="magnitude">
                            Strongest
                        </SelectItem>

                        <SelectItem value="depth">
                            Deepest
                        </SelectItem>

                    </SelectContent>

                </Select>

                <Button
                    variant="outline"
                    onClick={onRefresh}
                >
                    <RotateCw className="mr-2 h-4 w-4" />
                    Refresh
                </Button>

            </div>

        </div>
    );

}