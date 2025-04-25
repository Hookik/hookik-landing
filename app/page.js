import PageLayout from "@/template/PageLayout";
import Hero from "./components/Hero";
import HowItWorksSection from "./components/HowItWorksSection";
import WhyChooseHookikSection from "./components/WhyChooseHookikSection";
import CategorySection from "./components/CategorySection";
import HowHookikWorks from "./components/HowHookikWorks";
import WorkWithCreatorsSection from "./components/WorkWithCreatorsSection";
import SuccessStoriesSection from "./components/SuccessStoriesSection";
import FAQSection from "./components/FAQSection";

export default function Home() {
  return (
    <>
      <PageLayout
        title="Ready to Transform Your Marketing Strategy?"
        description="Join thousands of successful creators and brands already using hookik to create authentic connections and drive measurable results."
        btnLabel="Get Started"
      >
        <Hero />
        <CategorySection />
        <HowHookikWorks />
        <WhyChooseHookikSection />
        <HowItWorksSection />
        <WorkWithCreatorsSection />
        <SuccessStoriesSection />
        <FAQSection />
      </PageLayout>
    </>
  );
}
