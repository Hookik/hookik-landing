import GradientBackground from "@/components/GradientBackground";
import PageLayout from "@/template/PageLayout";
import { FiSearch } from "react-icons/fi";
import FeaturedPostSection from "./components/FeaturedPostSection";
import LatestArticles from "./components/LatestArticles";

export default function blog() {
  return (
    <>
      <PageLayout footBanner={false}>
        <GradientBackground>
          <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center px-4 py-16 gap-y-8">
            <p className="text-4xl font-bold text-center">Hookik Blog</p>
            <p className="text-sm opacity-75 text-center">
              Insights, tips, and resources for creators and brands
            </p>
            <div className="flex items-center justify-center w-full gap-x-6">
              <div className="div w-full mx-auto flex items-center  md:w-[60%]">
                <FiSearch className="text-2xl ml-6 absolute text-[#9CA3AF]" />
                <input
                  type="text"
                  className="py-3 px-8 pl-16 border w-full font-medium text-sm rounded-full border-[#D1D5DB] placeholder:text-[#9CA3AF] focus:outline-[#8937CE]"
                  placeholder="Search articles..."
                />
              </div>
            </div>
          </div>
        </GradientBackground>
        <FeaturedPostSection />
        <LatestArticles />
      </PageLayout>
    </>
  );
}
