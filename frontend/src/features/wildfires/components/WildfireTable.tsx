"use client";

import { DataTable } from "@/components/common/data-table/DataTable";
import { wildfireColumns } from "./wildfire.columns";
import type { Wildfire } from "@/types/wildfire";
import { useRouter } from "next/navigation";

type Props = {
    wildfires: Wildfire[];
    refetch: () => void;
};

export function WildfireTable({
    wildfires,
    refetch,
}: Props) {

    const router = useRouter();

    const handleOpenMap = (id: string) => {
        if (!id) return;
        router.push(
            `/dashboard/map?wildfire=${id}`
        );
    };

    return (
        <>
            <DataTable
                columns={wildfireColumns}
                data={wildfires}
                searchPlaceholder="Search wildfire..."
                onRefresh={refetch}
                onRowClick={(wildfire) => {
                    handleOpenMap(wildfire.id)
                }}
            />
        </>
    );

}