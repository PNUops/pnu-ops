"use client";

import { motion } from "framer-motion";
import SectionLayout from "@/components/common/SectionLayout";

const items = [
  {
    title: "Product Development",
    body: "We design web services and ship them every semester.",
    tags: ["Web", "App", "Product"],
  },
  {
    title: "Internal Tools & Ops",
    body: "We build dashboards and tools to run the club itself.",
    tags: ["Dashboards", "Automation"],
  },
  {
    title: "Campus Tech Services",
    body: "We plan and operate services that are actually used on campus.",
    tags: ["Campus", "Service", "System"],
  },
  {
    title: "Learning & Sharing",
    body: "We grow together through studies, seminars, and code reviews.",
    tags: ["Study", "Seminar", "Review"],
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
