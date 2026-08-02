import { PageContainer } from "@/components/layout/PageContainer";
import { PageHeader } from "@/components/layout/PageHeader";

import { SettingsContainer } from "@/features/settings/containers/SettingsContainer";

export default function SettingsPage() {

    return (

        <PageContainer>

            <PageHeader
                title="Settings"
                description="Customize your EarthPulse experience."
            />

            <SettingsContainer />

        </PageContainer>

    );

}