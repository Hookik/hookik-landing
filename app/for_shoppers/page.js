import PageLayout from "@/template/PageLayout";
import Hero from "./components/Hero";
import WhyShopThroughHookikSection from "./components/WhyShopThroughHookikSection";
import HowHookikShoppingWorksSection from "./components/HowHookikShoppingWorksSection";

export default function for_shoppers() {
  return (
    <>
      <PageLayout
        title="Ready to Shop Products You'll Actually Love?"
        description="Join thousands of shoppers discovering products through authentic creator recommendations."
        btnLabel="Start Shopping"
      >
        <Hero />
        <WhyShopThroughHookikSection />
        <HowHookikShoppingWorksSection />
      </PageLayout>
    </>
  );
}
