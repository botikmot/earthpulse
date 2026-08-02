import { PageContainer } from "@/components/layout/PageContainer";
import { PageHeader } from "@/components/layout/PageHeader";

import { ISSContainer } from "@/features/iss/components/ISSContainer";

export default function ISSPage() {

    return (

        <PageContainer>

            <PageHeader
                title="ISS Tracker"
                description="Track the International Space Station in real time."
            />

            <ISSContainer />

        </PageContainer>

    );

}