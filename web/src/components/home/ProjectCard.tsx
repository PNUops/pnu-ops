"use client";

import { motion } from "framer-motion";

export type ProjectStatus = "Live" | "Beta" | "Experimental";

export interface ProjectCardProps {
  project: {
    name: string;
    description: string;
    role: string;
    stack: string[];
    status: ProjectStatus;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const statusStyles: Record<ProjectStatus, string> = {
    Live: "bg-status-success/10 text-status-success border-status-success/40",
    Beta: "bg-status-info/10 text-status-info border-status-info/40",
    Experimental:
      "bg-border-subtle/40 text-text-secondary border-border-subtle/60",
  };

  return (
    <motion.article
      className="group border-border-subtle bg-bg-elevated/90 h-full rounded-2xl border p-5 shadow-sm backdrop-blur-sm"
      whileHover={{ y: -6, rotateX: 1.2, rotateY: -1.2 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <div className="mb-3 flex items-center justify-between gap-2">
        <h3 className="text-text-primary text-sm font-semibold">
          {project.name}
        </h3>
        <span
          className={`rounded-full border px-2 py-0.5 text-[10px] font-semibold tracking-[0.18em] uppercase ${statusStyles[project.status]}`}
        >
          {project.status}
        </span>
      </div>
      <p className="text-text-secondary mb-3 text-xs">{project.description}</p>
      <p className="text-text-tertiary mb-3 text-[11px] font-medium">
        {project.role}
      </p>
      <div className="flex flex-wrap gap-1.5 text-[10px] font-medium tracking-[0.16em] uppercase">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="bg-bg-subtle text-text-secondary group-hover:bg-brand-default/15 group-hover:text-brand-default rounded-full px-2 py-1 transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
