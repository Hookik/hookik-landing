import PageLayout from "@/template/PageLayout";
import Hero from "./components/Hero";
import WhyCreatorsLoveHookikSection from "./components/WhyCreatorsLoveHookikSection";
import HowItWorksForCreatorsSection from "./components/HowItWorksForCreatorsSection";
import CreatorSuccessStoriesSection from "./components/CreatorSuccessStoriesSection";
import { APP_URL } from "@/lib/contsants";

export const metadata = {
  title: "Hookik for Creators – Monetize Your Influence Authentically",
  description: "Join thousands of creators already using Hookik to grow their brand and income through real product partnerships.",
};

export default function CreatorsPage() {
  return (
    <PageLayout
      title="Ready to Turn Your Influence Into Income?"
      description="Join thousands of creators already using Hookik to build their brand and income through authentic partnerships."
      btnLabel="Apply as Creator"
      route={`${APP_URL}creator/signup`}
    >
      <Hero />
      <WhyCreatorsLoveHookikSection />
      <HowItWorksForCreatorsSection />
      {/* <CreatorSuccessStoriesSection /> */}
    </PageLayout>
  );
}
