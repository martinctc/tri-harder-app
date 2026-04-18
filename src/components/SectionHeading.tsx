"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="mb-12 text-center"
    >
      {badge && (
        <span className="mb-4 inline-block rounded-full bg-blue-600/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-blue-400">
          {badge}
        </span>
      )}
      <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-400">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
