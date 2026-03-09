"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionLayoutProps {
  id: string;
  label?: string;
  title: string;
  description?: string;
  children: ReactNode;
}

const variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function SectionLayout({
  id,
  label,
  title,
  description,
  children,
}: SectionLayoutProps) {
  return (
    <motion.section
      id={id}
      className="mx-auto max-w-6xl px-6 py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      variants={variants}
    >
      <header className="mb-10 max-w-3xl space-y-2">
        {label && (
          <p className="text-brand-default text-xs font-semibold tracking-[0.2em] uppercase">
            {label}
          </p>
        )}
        <h2 className="text-text-primary text-2xl font-semibold tracking-tight sm:text-3xl">
          {title}
        </h2>
        {description && (
          <p className="text-text-secondary text-sm">{description}</p>
        )}
      </header>
      {children}
    </motion.section>
  );
}
