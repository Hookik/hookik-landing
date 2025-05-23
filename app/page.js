import PageLayout from "@/template/PageLayout";
import Hero from "./components/Hero";
import HowItWorksSection from "./components/HowItWorksSection";
import WhyChooseHookikSection from "./components/WhyChooseHookikSection";
import CategorySection from "./components/CategorySection";
import HowHookikWorks from "./components/HowHookikWorks";
import WorkWithCreatorsSection from "./components/WorkWithCreatorsSection";
import SuccessStoriesSection from "./components/SuccessStoriesSection";
import FAQSection from "./components/FAQSection";
import LatestBlogsSection from "./components/LatestBlogsSection";
import { getLatestPosts } from "@/lib/api";
import { APP_URL } from "@/lib/contsants";

export const metadata = {
  title: "Hookik – The Future of Creator Marketing",
  description:
    "Discover Hookik: Where creators, brands, and shoppers connect through authentic recommendations. Grow your brand, monetize your influence, or shop smarter.",
  keywords: [
    "Hookik",
    "creator marketing",
    "brand partnerships",
    "influencer marketing",
    "authentic product recommendations",
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/images/main_logo.png",
  },
  openGraph: {
    title: "Hookik – The Future of Creator Marketing",
    description:
      "Creators monetize, brands grow, and shoppers discover. Hookik connects the ecosystem through trusted, creator-led marketing.",
    url: "https://hookik.com",
    siteName: "Hookik",
    images: [
      {
        url: "/images/main_logo.png",
        width: 1200,
        height: 630,
        alt: "Hookik – Creator Marketing Platform",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hookik – The Future of Creator Marketing",
    description:
      "Discover a better way to connect creators, brands, and shoppers through trusted recommendations.",
    images: ["/images/main_logo.png"],
  },
};

export default async function Home() {
  const latestPosts = await getLatestPosts();

  return (
    <>
      <PageLayout
        title="Ready to Transform Your Marketing Strategy?"
        description="Join thousands of successful creators and brands already using hookik to create authentic connections and drive measurable results."
        btnLabel="Get Started"
        route={`${APP_URL}signup`}
      >
        <Hero />
        <CategorySection />
        <HowHookikWorks />
        <WhyChooseHookikSection />
        <HowItWorksSection />
        <WorkWithCreatorsSection />
        {/* <SuccessStoriesSection /> */}
        <FAQSection />
        {latestPosts && latestPosts?.data?.length > 0 && (
          <LatestBlogsSection posts={latestPosts?.data} />
        )}
      </PageLayout>
    </>
  );
}
