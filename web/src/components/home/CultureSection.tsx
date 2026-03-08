"use client";

import { motion } from "framer-motion";
import SectionLayout from "@/components/common/SectionLayout";

const principles = [
  {
    title: "Ship to real users",
    body: "실제 사용자를 상정하지 않은 프로젝트는 하지 않습니다.",
  },
  {
    title: "Operate what you build",
    body: "만든 사람이 운영까지 책임지는 문화를 지향합니다.",
  },
  {
    title: "No lone heroes",
    body: "개인 플레이보다 작은 팀 단위 협업을 중요하게 생각합니다.",
  },
  {
    title: "Learn in public",
    body: "배운 것은 문서와 세미나로 공유하며 함께 성장합니다.",
  },
];

export default function CultureSection() {
  return (
    <SectionLayout
      id="culture"
      label="Club culture"
      title="We work like a small product team."
      description="PNUops는 동아리이지만, 실제 프로덕트 팀에 가깝게 일합니다."
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
            <h3 className="text-text-primary mt-1 text-sm font-semibold">
              {p.title}
            </h3>
            <p className="text-text-secondary mt-1 text-xs">{p.body}</p>
          </motion.div>
        ))}
      </div>
    </SectionLayout>
  );
}
