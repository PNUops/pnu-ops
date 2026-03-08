"use client";

import { motion } from "framer-motion";
import SectionLayout from "@/components/common/SectionLayout";

const steps = [
  {
    title: "1. Application form",
    body: "Tell us briefly who you are and which track you’re interested in.",
  },
  {
    title: "2. Assignment or portfolio",
    body: "Share a small assignment or portfolio that best shows your skills.",
  },
  {
    title: "3. Interview",
    body: "We talk about how we might work together and what you want to learn.",
  },
];

export default function JoinSection() {
  return (
    <SectionLayout
      id="join"
      label="Join us"
      title="Join the team that operates real products."
      description="Recruitment happens each semester. If you’re not ready yet, explore what kind of team PNUops is for now."
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
              Tracks are not rigid labels; they describe the responsibilities
              you’ll take on in real projects.
            </p>
          </div>

          <div className="text-text-secondary mt-6 space-y-3 text-xs">
            <p>
              Detailed timelines and assignment info are announced via PNUops
              official channels (Instagram, GitHub, Notion).
            </p>
            <motion.a
              href="/member"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-brand-default hover:bg-brand-hover text-text-inverse inline-flex w-full items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition-colors"
            >
              Get notified about 2026 recruitment
            </motion.a>
          </div>
        </motion.div>
      </div>
    </SectionLayout>
  );
}
