"use client";

import { motion } from "framer-motion";
import SectionLayout from "@/components/common/SectionLayout";

const steps = [
  {
    title: "1. 지원서 작성",
    body: "간단한 자기소개와 함께, 관심 있는 트랙과 이유를 적습니다.",
  },
  {
    title: "2. 과제 또는 포트폴리오",
    body: "실력을 보여줄 수 있는 작은 과제 또는 기존 작업물을 제출합니다.",
  },
  {
    title: "3. 인터뷰",
    body: "함께 일할 수 있는지, 어떤 경험을 쌓고 싶은지 대화합니다.",
  },
];

export default function JoinSection() {
  return (
    <SectionLayout
      id="join"
      label="Join us"
      title="Join the team that operates real products."
      description="모집은 학기별로 진행됩니다. 아직 준비 중이라면, 지금은 PNUops가 어떤 팀인지 먼저 살펴보세요."
    >
      <div className="grid gap-8 md:grid-cols-[2fr,1.4fr]">
        <div className="space-y-4">
          {steps.map((s, index) => (
            <motion.div
              key={s.title}
              className="border-border-subtle bg-bg-subtle/80 flex gap-3 rounded-2xl border px-4 py-3 backdrop-blur-sm"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.35, delay: index * 0.08 }}
            >
              <div className="bg-brand-default/15 text-brand-default mt-1 h-6 w-6 flex-none rounded-full text-center text-[11px] font-semibold">
                {index + 1}
              </div>
              <div>
                <h3 className="text-text-primary text-sm font-semibold">
                  {s.title}
                </h3>
                <p className="text-text-secondary text-xs">{s.body}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="border-border-subtle bg-bg-elevated/80 flex flex-col justify-between rounded-2xl border p-5 backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45 }}
        >
          <div>
            <p className="text-text-tertiary text-xs font-semibold tracking-[0.18em] uppercase">
              Tracks
            </p>
            <p className="text-text-primary mt-1 text-sm font-medium">
              Backend · Frontend · Infra · Product Design · PM
            </p>
            <p className="text-text-secondary mt-3 text-xs">
              트랙은 고정이 아니라, 실제 프로젝트에서 맡게 될 책임과 역할을
              의미합니다.
            </p>
          </div>

          <div className="text-text-secondary mt-6 space-y-3 text-xs">
            <p>
              자세한 모집 일정과 과제 안내는 PNUops 공식 채널(예: 인스타그램,
              GitHub, Notion)을 통해 공지됩니다.
            </p>
            <motion.a
              href="/member"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-brand-default hover:bg-brand-hover text-text-inverse inline-flex w-full items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition-colors"
            >
              2026 모집 공고 알림 받기
            </motion.a>
          </div>
        </motion.div>
      </div>
    </SectionLayout>
  );
}
