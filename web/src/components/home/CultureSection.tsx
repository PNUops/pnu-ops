"use client";

import { motion } from "framer-motion";
import SectionLayout from "@/components/common/SectionLayout";

const principles = [
  {
    title: "Ship to real users",
    body: "We don't work on projects that don't assume real users.",
  },
  {
    title: "Operate what you build",
    body: "We aim for a culture where builders also operate what they ship.",
  },
  {
    title: "No lone heroes",
    body: "We value small-team collaboration over individual heroics.",
  },
  {
    title: "Learn in public",
    body: "We share what we learn through docs and talks so everyone grows.",
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
