import PageLayout from "@/template/PageLayout";
import Hero from "./components/Hero";
import WhyBrandsChooseHookikSection from "./components/WhyBrandsChooseHookikSection";
import HowItWorksForBrandsSection from "./components/HowItWorksForBrandsSection";
import BrandSuccessStories from "./components/BrandSuccessStories";
import { APP_URL } from "@/lib/contsants";

export const metadata = {
  title: "Hookik for Brands – Drive Growth with Creator Marketing",
  description: "Join hundreds of brands already achieving results through authentic creator partnerships powered by Hookik.",
};

export default function BrandsPage() {
  return (
    <PageLayout
      title="Ready to Amplify Your Brand with Creator Marketing?"
      description="Join hundreds of brands already seeing measurable results from authentic creator partnerships."
      btnLabel="Join as Brand"
      route={`${APP_URL}/client/signup`}
    >
      <Hero />
      <WhyBrandsChooseHookikSection />
      <HowItWorksForBrandsSection />
      {/* <BrandSuccessStories /> */}
    </PageLayout>
  );
}
