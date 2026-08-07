import { LandingHero } from "@/components/landing/LandingHero";
import { LandingStats } from "@/components/landing/LandingStats";
import { LandingModules } from "@/components/landing/LandingModules";
import { LandingFeatures } from "@/components/landing/LandingFeatures";
import { LandingMapPreview } from "@/components/landing/LandingMapPreview";
import { LandingTimeline } from "@/components/landing/LandingTimeline";
import { LandingCTA } from "@/components/landing/LandingCTA";
import { LandingFooter } from "@/components/landing/LandingFooter";
//import { SpaceHero } from "@/components/landing/SpaceHero";

export default function HomePage() {
  return (
    <main className="bg-background">

      <LandingHero />

      <LandingStats />

      <LandingModules />

      <LandingFeatures />

      <LandingMapPreview />

      <LandingTimeline />

      <LandingCTA />

      <LandingFooter />

    </main>
  );
}