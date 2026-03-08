"use client";

import { motion } from "framer-motion";
import SectionLayout from "@/components/common/SectionLayout";

const members = [
  {
    name: "Member A",
    role: "Backend · Infra",
    focus: "Distributed systems, observability",
  },
  {
    name: "Member B",
    role: "Frontend · Product",
    focus: "UX, design systems",
  },
  {
    name: "Member C",
    role: "Product Designer",
    focus: "Interaction, product thinking",
  },
  {
    name: "Member D",
    role: "PM · Ops",
    focus: "Roadmap, execution",
  },
];

export default function MemberSection() {
  return (
    <SectionLayout
      id="members"
      label="Members"
      title="Builders who run the systems."
      description="PNUops는 역할이 나뉘어 있지만, 모두가 제품과 유저에 책임을 집니다."
    >
      <div className="grid gap-4 md:grid-cols-4">
        {members.map((m) => (
          <motion.article
            key={m.name}
            className="group border-border-subtle bg-bg-elevated/80 flex flex-col items-start gap-2 rounded-2xl border p-4 text-left backdrop-blur-sm"
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <div className="bg-brand-default/15 text-brand-default flex h-10 w-10 items-center justify-center rounded-full text-xs font-semibold">
              {m.name.at(0)}
            </div>
            <div>
              <h3 className="text-text-primary text-sm font-semibold">
                {m.name}
              </h3>
              <p className="text-text-secondary text-xs">{m.role}</p>
              <p className="text-text-tertiary mt-1 text-[11px]">{m.focus}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionLayout>
  );
}
