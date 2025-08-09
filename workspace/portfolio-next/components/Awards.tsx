"use client"

import { motion } from "framer-motion";
import { profile } from "@/content/profile";

export default function Awards() {
  if (!("awards" in profile) || !profile.awards.length) return null;
  return (
    <section id="awards" className="container py-16">
      <h2 className="section-title">Awards</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {profile.awards.map((award, idx) => (
          <motion.a
            key={award.title + (award.year || "")}
            href={award.link}
            target={award.link ? "_blank" : undefined}
            rel={award.link ? "noreferrer" : undefined}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="group rounded-xl border border-neutral-800/80 bg-neutral-900/60 p-5 hover:border-neutral-700"
          >
            <div className="flex items-baseline justify-between">
              <h3 className="text-white">{award.title}</h3>
              {award.year && (
                <span className="text-sm text-neutral-400">{award.year}</span>
              )}
            </div>
            {(award.org || award.description) && (
              <p className="mt-2 text-sm text-neutral-300">
                {award.org}
                {award.org && award.description ? " · " : ""}
                {award.description}
              </p>
            )}
          </motion.a>
        ))}
      </div>
    </section>
  );
}