"use client";

import HomeHero from "@/components/home/HomeHero";
import WhatWeDoSection from "@/components/home/WhatWeDoSection";
import TechSection from "@/components/home/TechSection";
import CultureSection from "@/components/home/CultureSection";
import MemberSection from "@/components/home/MemberSection";
import JoinSection from "@/components/home/JoinSection";
import { Parallax } from "react-scroll-parallax";

export default function Home() {
  return (
    <main>
      <Parallax speed={-10}>
        <HomeHero />
      </Parallax>

      <Parallax speed={-6}>
        <WhatWeDoSection />
      </Parallax>

      <Parallax speed={-4}>
        <TechSection />
      </Parallax>

      <Parallax speed={-2}>
        <CultureSection />
      </Parallax>

      {/* <Parallax speed={-1}>
        <MemberSection />
      </Parallax>

      <Parallax speed={0}>
        <JoinSection />
      </Parallax> */}
    </main>
  );
}
