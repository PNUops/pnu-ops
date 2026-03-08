"use client";

import { Parallax } from "react-scroll-parallax";
import Image from "next/image";
import SectionLayout from "@/components/common/SectionLayout";
import {
  dockerImg,
  gradleImg,
  javaImg,
  mysqlImg,
  reactImg,
  zustandImg,
  figmaImg,
} from "@/assets/icons/tech";

export default function TechSection() {
  return (
    <SectionLayout
      id="projects"
      label="Tech Stack"
      title="How we build and operate."
      description="We design, build, and operate real products with diverse stacks across roles."
    >
      <div className="grid gap-8 md:grid-cols-2">
        <div className="border-border-subtle bg-bg-elevated/90 relative -rotate-2 overflow-hidden rounded-3xl border p-6 shadow-[0_18px_40px_rgba(15,23,42,0.16)] md:-rotate-1">
          <Parallax
            speed={-6}
            className="mb-4 flex items-center justify-between"
          >
            <div>
              <p className="text-brand-default text-xs font-semibold tracking-[0.2em] uppercase">
                Infra Engineer
              </p>
              <h3 className="text-text-primary mt-1 text-lg font-semibold">
                Reliable service operations
              </h3>
              <p className="text-text-secondary mt-1 text-sm">
                Design and operate service infrastructure with containers,
                CI/CD, and observability.
              </p>
            </div>
            <Image
              src={dockerImg}
              alt="Docker"
              className="h-55 w-55 object-contain drop-shadow-[0_16px_40px_rgba(15,23,42,0.55)] md:h-65 md:w-65 lg:h-80 lg:w-[320px]"
            />
          </Parallax>
          <p className="text-text-tertiary text-xs">
            Stack · Docker · GitHub Actions · Linux · Monitoring/Logging
          </p>
        </div>

        {/* 프론트엔드 엔지니어 */}
        <div className="border-border-subtle bg-bg-elevated/90 relative rotate-[1.5deg] overflow-hidden rounded-3xl border p-6 shadow-[0_18px_40px_rgba(15,23,42,0.16)] md:rotate-[0.5deg]">
          <Parallax
            speed={-4}
            className="mb-4 flex items-center justify-between"
          >
            <div>
              <p className="text-brand-default text-xs font-semibold tracking-[0.2em] uppercase">
                Frontend Engineer
              </p>
              <h3 className="text-text-primary mt-1 text-lg font-semibold">
                Focused on user experience
              </h3>
              <p className="text-text-secondary mt-1 text-sm">
                Build real web experiences with React and modern state
                management.
              </p>
            </div>
            <div className="relative flex h-55 w-55 items-center justify-center md:h-65 md:w-65 lg:h-80 lg:w-[320px]">
              <Image
                src={reactImg}
                alt="Java"
                className="absolute top-6 left-2 h-24 w-24 object-contain drop-shadow-[0_16px_40px_rgba(15,23,42,0.6)] md:h-32 md:w-32"
              />
              <Image
                src={zustandImg}
                alt="MySQL"
                className="absolute right-4 bottom-4 h-24 w-24 object-contain drop-shadow-[0_16px_40px_rgba(15,23,42,0.6)] md:h-32 md:w-32"
              />
            </div>
          </Parallax>
          <p className="text-text-tertiary text-xs">
            Stack · React · Zustand · TypeScript · Next.js
          </p>
        </div>

        {/* 백엔드 엔지니어 */}
        <div className="border-border-subtle bg-bg-elevated/90 relative -rotate-1 overflow-hidden rounded-3xl border p-6 shadow-[0_18px_40px_rgba(15,23,42,0.16)] md:-rotate-[0.5deg]">
          <Parallax
            speed={-3}
            className="mb-4 flex items-center justify-between"
          >
            <div>
              <p className="text-brand-default text-xs font-semibold tracking-[0.2em] uppercase">
                Backend Engineer
              </p>
              <h3 className="text-text-primary mt-1 text-lg font-semibold">
                Data and business logic
              </h3>
              <p className="text-text-secondary mt-1 text-sm">
                Implement APIs, batch jobs, and internal systems with Java and
                relational databases.
              </p>
            </div>
            <div className="relative flex h-55 w-55 items-center justify-center md:h-65 md:w-65 lg:h-80 lg:w-[320px]">
              <Image
                src={javaImg}
                alt="Java"
                className="absolute top-6 left-2 h-24 w-24 object-contain drop-shadow-[0_16px_40px_rgba(15,23,42,0.6)] md:h-32 md:w-32"
              />
              <Image
                src={mysqlImg}
                alt="MySQL"
                className="absolute right-4 bottom-4 h-24 w-24 object-contain drop-shadow-[0_16px_40px_rgba(15,23,42,0.6)] md:h-32 md:w-32"
              />
            </div>
          </Parallax>
          <p className="text-text-tertiary text-xs">
            Stack · Java · MySQL · Gradle · REST API
          </p>
        </div>

        {/* 디자이너 */}
        <div className="border-border-subtle bg-bg-elevated/90 relative rotate-2 overflow-hidden rounded-3xl border p-6 shadow-[0_18px_40px_rgba(15,23,42,0.16)] md:rotate-1">
          <Parallax
            speed={-2}
            className="mb-4 flex items-center justify-between"
          >
            <div>
              <p className="text-brand-default text-xs font-semibold tracking-[0.2em] uppercase">
                Designer
              </p>
              <h3 className="text-text-primary mt-1 text-lg font-semibold">
                Designing product experiences
              </h3>
              <p className="text-text-secondary mt-1 text-sm">
                Collaborate with engineers using design systems and prototypes
                to ship products.
              </p>
            </div>
            <Image
              src={figmaImg}
              alt="Design"
              className="h-55 w-55 object-contain drop-shadow-[0_16px_40px_rgba(15,23,42,0.55)] md:h-65 md:w-65 lg:h-80 lg:w-[320px]"
            />
          </Parallax>
          <p className="text-text-tertiary text-xs">
            Stack · Design System · Figma · Prototyping
          </p>
        </div>
      </div>
    </SectionLayout>
  );
}
