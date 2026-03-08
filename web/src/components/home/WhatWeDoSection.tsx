"use client";

import { motion } from "framer-motion";
import SectionLayout from "@/components/common/SectionLayout";

const items = [
  {
    title: "Product Development",
    body: "웹 서비스를 설계하고, 학기마다 실제로 배포합니다.",
    tags: ["Web", "App", "Product"],
  },
  {
    title: "Internal Tools & Ops",
    body: "동아리 운영을 위한 대시보드를 직접 만듭니다.",
    tags: ["Dashboards", "Automation"],
  },
  {
    title: "Campus Tech Services",
    body: "캠퍼스에서 실제로 사용되는 서비스를 기획하고 운영합니다.",
    tags: ["Campus", "Service", "System"],
  },
  {
    title: "Learning & Sharing",
    body: "스터디·세미나·코드리뷰를 통해 함께 성장합니다.",
    tags: ["Study", "Seminar", "Review"],
  },
];

export default function WhatWeDoSection() {
  return (
    <SectionLayout
      id="what-we-do"
      label="What we do"
      title="We build and operate software systems."
      description="모두가 열정을 가지고, 실제 사용자와 운영을 전제로 한 시스템을 다뤄요."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((item) => (
          <motion.article
            key={item.title}
            className="group border-border-subtle bg-bg-subtle/60 rounded-2xl border p-5 shadow-sm backdrop-blur-sm"
            whileHover={{ y: -4, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <h3 className="text-text-primary text-base font-semibold">
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
