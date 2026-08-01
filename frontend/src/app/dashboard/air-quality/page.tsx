import { PageContainer } from "@/components/layout/PageContainer";
import { PageHeader } from "@/components/layout/PageHeader";
import { AirQualityContainer } from "@/features/air-quality/components/AirQualityContainer";


export default function AirQualityPage() {

    return (
        <PageContainer>
            <PageHeader
                title="Air Quality"
                description="Monitor global air quality conditions and pollution levels."
            />

            <AirQualityContainer />
        </PageContainer>
    );

}