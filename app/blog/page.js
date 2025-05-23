// app/blog/page.jsx
import GradientBackground from "@/components/GradientBackground";
import PageLayout from "@/template/PageLayout";
import FeaturedPostSection from "./components/FeaturedPostSection";
import LatestArticles from "./components/LatestArticles";
import SearchForm from "./components/SearchForm";
import { getBlogs, getCategories, getFeaturedPost } from "@/lib/api";

export const metadata = {
  title: "Hookik Blog – Insights for Creators and Brands",
  description: "Explore tips, success stories, and strategies on creator marketing. Stay informed with the latest from the Hookik Blog.",
};

export default async function BlogPage({ searchParams }) {
  const search = await searchParams?.search || "";
  const category = await searchParams?.category || "";

  const [blogs, categories, featuredPosts] = await Promise.all([
    getBlogs({ search, category }),
    getCategories(),
    getFeaturedPost(),
  ]);

  return (
    <PageLayout footBanner={false}>
      <GradientBackground>
        <div className="w-full max-w-[1200px] mx-auto flex flex-col items-center px-4 py-16 gap-y-8">
          <p className="text-4xl font-bold text-center">Hookik Blog</p>
          <p className="text-sm opacity-75 text-center">
            Insights, tips, and resources for creators and brands
          </p>
          <SearchForm categories={categories?.data || []} />
        </div>
      </GradientBackground>

      {!search && !category && (
        <FeaturedPostSection featuredPosts={featuredPosts?.data} isLoading={false} />
      )}

      <LatestArticles posts={blogs?.data} />
    </PageLayout>
  );
}
