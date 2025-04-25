import PageLayout from "@/template/PageLayout";
import Hero from "./components/Hero";
import WhyBrandsChooseHookikSection from "./components/WhyBrandsChooseHookikSection";
import HowItWorksForBrandsSection from "./components/HowItWorksForBrandsSection";
import BrandSuccessStories from "./components/BrandSuccessStories";

export default function for_brands() {
  return (
    <>
      <PageLayout
        title="Ready to Amplify Your Brand with Creator Marketing?"
        description="Join hundreds of brands already seeing measurable results from authentic creator partnerships."
        btnLabel="Join as Brand"
      >
        <Hero />
        <WhyBrandsChooseHookikSection />
        <HowItWorksForBrandsSection />
        <BrandSuccessStories/>
      </PageLayout>
    </>
  );
}
