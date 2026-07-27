import {
    Search,
    Layers3,
    Map,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

export function LiveMapControls() {

    return (

        <div className="flex flex-col gap-4 rounded-lg border bg-card p-4 lg:flex-row lg:items-center">

            <div className="relative flex-1">

                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />

                <Input
                    placeholder="Search location..."
                    className="pl-10"
                />

            </div>

            <Select>

                <SelectTrigger className="w-[180px]">

                    <Map className="mr-2 h-4 w-4" />

                    <SelectValue
                        placeholder="Map Style"
                    />

                </SelectTrigger>

                <SelectContent>

                    <SelectItem value="street">
                        Street
                    </SelectItem>

                    <SelectItem value="terrain">
                        Terrain
                    </SelectItem>

                    <SelectItem value="satellite">
                        Satellite
                    </SelectItem>

                </SelectContent>

            </Select>

            <Button
                variant="outline"
                className="gap-2"
            >
                <Layers3 className="h-4 w-4" />
                Layers
            </Button>

        </div>

    );

}