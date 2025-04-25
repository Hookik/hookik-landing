import GradientBackground from "@/components/GradientBackground";
import PageLayout from "@/template/PageLayout";
import Image from "next/image";

export default function about() {
  return (
    <>
      <PageLayout footBanner={false}>
        <GradientBackground>
          <div className="flex flex-col gap-y-10 mx-auto max-w-[1200px] px-4">
            <div className="flex flex-col items-center gap-y-5">
              <h1 className="font-bold text-center text-4xl">About Hookik</h1>
              <p className="text-center opacity-60">
                Connecting creators and brands for authentic marketing
                partnerships
              </p>
            </div>

            <div className="w-full md:w-[80%] mx-auto">
              <Image
                src={`/images/about.jpeg`}
                alt="Hero Banner"
                width={5000}
                height={250}
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>

            <div className="flex flex-col gap-y-5">
              <p className="text-2xl font-semibold">Our Mission</p>
              <p className="text-sm opacity-60">
                At Hookik, we believe in the power of authentic connections
                between creators and brands. Our mission is to build a platform
                that enables meaningful collaborations that benefit both parties
                and deliver genuine value to audiences around the world.
              </p>
            </div>

            <div className="flex flex-col gap-y-5">
              <p className="text-2xl font-semibold">Our Story</p>
              <p className="text-sm opacity-60">
                Founded in 2023, Hookik was born from a simple observation: both
                creators and brands were struggling to find the right
                partnerships. Creators wanted to work with brands they actually
                believed in, while brands wanted authentic promotion that
                resonated with audiences.
              </p>
              <p className="text-sm opacity-60">
                Our founders, who had experience on both sides of the equation,
                set out to build a platform that made these connections easier,
                more transparent, and more effective.
              </p>
            </div>

            <div className="flex flex-col gap-y-5">
              <p className="text-2xl font-semibold">Our Values</p>
              <div className="flex flex-col gap-y-3">
                <p className="text-sm font-medium opacity-60">
                  Authenticity: We encourage genuine connections and honest
                  content.
                </p>
                <p className="text-sm font-medium opacity-60">
                  Transparency: Clear terms, fair compensation, and open
                  communication.
                </p>

                <p className="text-sm font-medium opacity-60">
                  Innovation: Constantly improving our platform to serve our
                  users better.
                </p>
                <p className="text-sm font-medium opacity-60">
                  Inclusivity: Supporting creators of all sizes and backgrounds.
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-14">
            <button className="px-10 py-3 w-64 justify-center items-center bg-[#8937CE] flex font-medium text-sm text-white rounded-full gap-x-2">
              Join Our Team
            </button>
          </div>
        </GradientBackground>
      </PageLayout>
    </>
  );
}
