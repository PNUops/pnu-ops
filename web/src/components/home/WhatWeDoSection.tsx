"use client";

import { motion } from "framer-motion";
import SectionLayout from "@/components/common/SectionLayout";

const items = [
  {
    title: "서비스 기획·개발",
    body: "학기마다 실제로 배포되는 웹 서비스와 내부 시스템을 만들어요.",
    tags: ["웹 서비스", "런칭", "운영"],
  },
  {
    title: "동아리 운영 시스템",
    body: "동아리 개발 운영을 자동화하는 도구를 만들어요.",
    tags: ["대시보드", "자동화"],
  },
  {
    title: "캠퍼스 IT 서비스",
    body: "부산대 학생들이 실제로 사용하는 캠퍼스 서비스를 기획·운영해요.",
    tags: ["캠퍼스", "서비스", "시스템"],
  },
  {
    title: "함께 배움·나눔",
    body: "스터디, 세미나, 코드 리뷰로 서로의 성장을 도와요.",
    tags: ["스터디", "세미나", "리뷰"],
  },
];

export default function WhatWeDoSection() {
  return (
    <SectionLayout
      id="what-we-do"
      label="What we do"
      title="We build and operate software systems."
      description="Everyone works with real users and real operations in mind."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <motion.article
            key={item.title}
            className="group border-border-subtle bg-bg-subtle/60 rounded-2xl border p-5 shadow-sm backdrop-blur-sm"
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <h3 className="text-text-primary font-sans! text-base font-semibold">
              {item.title}
            </h3>
            <p className="text-text-secondary mt-2 text-sm">{item.body}</p>
            <div className="mt-4 flex flex-wrap gap-1.5 text-[11px] font-medium tracking-[0.15em] uppercase">
              {item.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-bg-elevated text-text-secondary group-hover:bg-brand-default/10 group-hover:text-brand-default rounded-full px-2.5 py-1 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </SectionLayout>
  );
}
