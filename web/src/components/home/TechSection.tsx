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
                안정적인 서비스 운영
              </h3>
              <p className="text-text-secondary mt-1 text-sm">
                컨테이너, CI/CD, 모니터링으로 안정적인 서비스 인프라를
                설계·운영합니다.
              </p>
            </div>
            <Image
              src={dockerImg}
              alt="Docker"
              className="h-55 w-55 object-contain drop-shadow-[0_16px_40px_rgba(15,23,42,0.55)] md:h-65 md:w-65 lg:h-80 lg:w-[320px]"
            />
          </Parallax>
          <p className="text-text-tertiary text-xs">
            Docker · GitHub Actions · Linux · Monitoring/Logging
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
                사용자 경험에 집중하는 UI
              </h3>
              <p className="text-text-secondary mt-1 text-sm">
                React와 현대적인 상태 관리 라이브러리로 실제 웹 경험을 만듭니다.
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
            React · Zustand · TypeScript
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
                데이터와 비즈니스 로직
              </h3>
              <p className="text-text-secondary mt-1 text-sm">
                Java와 관계형 데이터베이스로 API, 배치 작업, 내부 시스템을
                구현합니다.
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
            Java · MySQL · Gradle · REST API
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
                Product Designer
              </p>
              <h3 className="text-text-primary mt-1 text-lg font-semibold">
                서비스 경험을 설계하는 디자이너
              </h3>
              <p className="text-text-secondary mt-1 text-sm">
                디자인 시스템과 프로토타입으로 엔지니어와 함께 제품을
                만들어갑니다.
              </p>
            </div>
            <Image
              src={figmaImg}
              alt="Design"
              className="h-55 w-55 object-contain drop-shadow-[0_16px_40px_rgba(15,23,42,0.55)] md:h-65 md:w-65 lg:h-80 lg:w-[320px]"
            />
          </Parallax>
          <p className="text-text-tertiary text-xs">
            Design System · Figma · Prototyping
          </p>
        </div>
      </div>
    </SectionLayout>
  );
}
