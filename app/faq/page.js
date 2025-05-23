import PageLayout from "@/template/PageLayout";
import FAQSection from "../components/FAQSection";

export const metadata = {
title: "Hookik FAQ for Creators – Get Answers to All Your Questions",
description:
    "Find answers to frequently asked questions about using Hookik as a creator. Learn how to earn, collaborate with brands, and grow your influence authentically.",
};

export default function FaqPage() {
  return (
    <PageLayout footBanner={false}>
      <FAQSection />
    </PageLayout>
  );
}
