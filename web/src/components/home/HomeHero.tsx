"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Parallax } from "react-scroll-parallax";

import { cursorHandIcon } from "@/assets/icons/ui";

const HERO_TEXT = "PNUops";

export default function HomeHero() {
  const [typed, setTyped] = useState("");

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      setTyped(HERO_TEXT.slice(0, i + 1));
      i += 1;
      if (i === HERO_TEXT.length) clearInterval(id);
    }, 120);

    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-12 md:flex-row md:items-center">
        <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex flex-col items-start gap-3 space-y-3">
            <h1 className="text-text-primary font-mono text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              <span className="text-brand-default">$</span>{" "}
              <span className="text-text-primary">{typed}</span>
              <span className="hero-cursor text-text-brand ml-1">|</span>
            </h1>
            <div className="border-border-subtle bg-bg-elevated/80 text-text-secondary inline-flex shrink-0 items-center rounded-full border px-3 py-1 text-[11px] font-medium tracking-[0.18em] text-nowrap uppercase backdrop-blur">
              <span>
                Pusan National University · Computing & Developers Club
              </span>
            </div>
          </div>
        </motion.div>

        <Parallax speed={-10} className="flex-1">
          <motion.div
            className="border-border-subtle bg-bg-elevated/90 relative overflow-hidden rounded-3xl border px-5 py-4 shadow-[0_24px_60px_rgba(15,23,42,0.12)] backdrop-blur"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          >
            <div className="bg-brand-default/10 pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full blur-2xl" />

            <div className="text-text-secondary mb-3 flex items-center gap-2 text-xs">
              <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
              <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
              <span className="h-2 w-2 rounded-full bg-[#28c840]" />
              <span className="text-text-tertiary ml-3 font-mono text-[11px]">
                pnuops@ops: ~ /systems
              </span>
            </div>

            <div className="text-text-primary space-y-1 font-mono text-xs">
              <p className="text-brand-default">
                ${" "}
                <span className="text-text-primary">
                  ls services/production
                </span>
              </p>
              <p className="text-status-success">
                project-hub/ internal-tools/ campus-service/
              </p>
              <p className="text-brand-default mt-2">
                ${" "}
                <span className="text-text-primary">
                  status --env=prod --club=PNUops
                </span>
              </p>
              <p className="text-status-success">
                ✔ 2 active products · 18 operators · uptime &gt; 99.9%
              </p>
            </div>
          </motion.div>
        </Parallax>
      </div>

      <div className="text-text-tertiary pointer-events-none absolute bottom-6 left-1/2 flex -translate-x-1/2 animate-pulse flex-col items-center text-[10px] tracking-[0.24em] uppercase">
        <span>Scroll</span>
        <span className="bg-border-subtle mt-1 h-8 w-px" />
      </div>
    </section>
  );
}
