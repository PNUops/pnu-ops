"use client";

import { motion } from "framer-motion";
import SectionLayout from "@/components/common/SectionLayout";

const principles = [
  {
    title: "실제 사용자를 위한 서비스",
    body: "PNUops는 실제 사용자를 위한 서비스를 만들고 배포해왔습니다. 2026년 기준, 부산대학교 SW프로젝트관리시스템은 사용자 270명을 기록했어요!",
  },
  {
    title: "개발과 운영을 함께",
    body: "만들기만 하고 끝나지 않아요. 개발부터 사용자에게 닿기까지 직접 운영하는 것을 중요하게 생각해요.",
  },
  {
    title: "혼자보다는 협업",
    body: "작은 팀이 함께 문제를 해결하는 방식을 더 중요하게 생각해요.",
  },
  {
    title: "배운 것을 공유하기",
    body: "문서와 발표로 배운 것을 나누며 함께 성장해요.",
  },
];

export default function CultureSection() {
  return (
    <SectionLayout
      id="culture"
      label="Club culture"
      title="We work like a small product team."
      description="PNUops is a student club, but we work like a real product team."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {principles.map((p) => (
          <motion.div
            key={p.title}
            className="group border-border-subtle bg-bg-subtle/70 rounded-2xl border px-4 py-4 backdrop-blur-sm"
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 260, damping: 22 }}
          >
            <p className="text-text-tertiary text-[11px] font-semibold tracking-[0.18em] uppercase">
              Principle
            </p>
            <h3 className="text-text-primary mt-1 font-sans! text-sm font-semibold">
              {p.title}
            </h3>
            <p className="text-text-secondary mt-1 font-sans! text-xs">
              {p.body}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionLayout>
  );
}
