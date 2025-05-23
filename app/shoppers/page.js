import PageLayout from "@/template/PageLayout";
import Hero from "./components/Hero";
import WhyShopThroughHookikSection from "./components/WhyShopThroughHookikSection";
import HowHookikShoppingWorksSection from "./components/HowHookikShoppingWorksSection";
import { SHOP_URL } from "@/lib/contsants";

export const metadata = {
  title: "Shop Through Hookik – Discover Products You’ll Love",
  description: "Join thousands of shoppers finding amazing products through real creator recommendations on Hookik.",
};

export default function ShoppersPage() {
  return (
    <>
      <PageLayout
        title="Ready to Shop Products You'll Actually Love?"
        description="Join thousands of shoppers discovering products through authentic creator recommendations."
        btnLabel="Start Shopping"
        route={SHOP_URL}
      >
        <Hero />
        <WhyShopThroughHookikSection />
        <HowHookikShoppingWorksSection />
      </PageLayout>
    </>
  );
}
