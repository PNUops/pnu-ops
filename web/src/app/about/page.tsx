import AboutIntro from "@/components/about/AboutIntro";

export default function AboutPage() {
  return (
    <main className="mt-20 space-y-10 md:mt-24 md:space-y-12 lg:space-y-16">
      <section className="flex max-w-3xl flex-col gap-4 md:gap-6">
        <h1 className="text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
          PNUops 소개
        </h1>
        <p className="text-text-secondary text-base md:text-lg">
          PNUops가 어떤 동아리인지, 어떤 방식으로 일하고 운영하는지 소개합니다.
        </p>
      </section>
      <AboutIntro />
    </main>
  );
}
