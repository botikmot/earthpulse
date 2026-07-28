import { PageContainer } from "@/components/layout/PageContainer";
import { PageHeader } from "@/components/layout/PageHeader";
import { WeatherContainer } from "@/features/weather/containers/WeatherContainer";

export default function WeatherPage() {

    return (

        <PageContainer>

            <PageHeader
                title="Weather"
                description="Monitor current weather conditions and forecasts."
            />

            <WeatherContainer />

        </PageContainer>

    );

}