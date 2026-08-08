import { LiveMapContainer } from "@/features/map/containers/LiveMapContainer";
import { Suspense } from "react";

export default function LiveMapPage() {

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <LiveMapContainer />;
        </Suspense>
    );

}