"use client";

import type { AirQuality } from "@/types/air-quality";
import { DataTable } from "@/components/common/data-table/DataTable";
import { airQualityColumns } from "./air-quality.columns";

type Props = {
    airQuality: AirQuality;
};

export function AirQualityTable({
    airQuality,
}: Props) {

    return (
        <DataTable
            columns={airQualityColumns}
            data={[airQuality]}
        />
    );

}