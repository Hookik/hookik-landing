import PageLayout from "@/template/PageLayout";
import Hero from "./components/Hero";
import WhyCreatorsLoveHookikSection from "./components/WhyCreatorsLoveHookikSection";
import HowItWorksForCreatorsSection from "./components/HowItWorksForCreatorsSection";
import CreatorSuccessStoriesSection from "./components/CreatorSuccessStoriesSection";

export default function for_creators() {
  return (
    <>
      <PageLayout
        title="Ready to Turn Your Influence Into Income?"
        description="Join thousands of creators already using hookik to build their brand and income through authentic partnerships."
        btnLabel="Apply as Creator"
      >
        <Hero />
        <WhyCreatorsLoveHookikSection />
        <HowItWorksForCreatorsSection />
        <CreatorSuccessStoriesSection />
      </PageLayout>
    </>
  );
}
