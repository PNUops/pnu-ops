"use client";

import { motion } from "framer-motion";
import SectionLayout from "@/components/common/SectionLayout";

const steps = [
  {
    title: "1. 지원서 작성",
    body: "어떤 사람인지, 어떤 트랙에 관심이 있는지 간단히 알려주세요.",
  },
  {
    title: "2. 과제 또는 포트폴리오",
    body: "본인의 강점을 가장 잘 보여주는 과제나 포트폴리오를 제출합니다.",
  },
  {
    title: "3. 인터뷰",
    body: "함께 어떻게 일하고 싶은지, 무엇을 배우고 싶은지 편하게 이야기합니다.",
  },
];

export default function JoinSection() {
  return (
    <SectionLayout
      id="join"
      label="지원 방법"
      title="실제 서비스를 함께 운영할 팀에 합류하세요."
      description="모집은 학기마다 진행됩니다. 아직 준비가 안 됐다면, 지금은 PNUops가 어떤 팀인지 구경만 해도 좋아요."
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
              모집 트랙
            </p>
            <p className="text-text-primary mt-1 text-sm font-medium">
              Backend · Frontend · Infra · Product Design · PM
            </p>
            <p className="text-text-secondary mt-3 text-xs">
              트랙은 고정된 전공이 아니라, 실제 프로젝트에서 맡게 될 역할과
              책임을 설명하는 이름입니다.
            </p>
          </div>

          <div className="text-text-secondary mt-6 space-y-3 text-xs">
            <p>
              모집 일정과 과제 여부 등 세부 정보는 PNUops 공식 채널 (Instagram,
              GitHub, Notion)을 통해 안내됩니다.
            </p>
            <motion.a
              href="/member"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-brand-default hover:bg-brand-hover text-text-inverse inline-flex w-full items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition-colors"
            >
              2026 모집 소식 먼저 받기
            </motion.a>
          </div>
        </motion.div>
      </div>
    </SectionLayout>
  );
}
