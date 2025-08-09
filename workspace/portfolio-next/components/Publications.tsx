"use client"

import { motion } from "framer-motion";
import { profile } from "@/content/profile";

export default function Publications() {
  if (!("publications" in profile) || !profile.publications.length) return null;
  return (
    <section id="publications" className="container py-16">
      <h2 className="section-title">Publications</h2>
      <div className="mt-6 space-y-6">
        {profile.publications.map((pub, idx) => (
          <motion.a
            key={pub.title + (pub.year || "")}
            href={pub.link}
            target={pub.link ? "_blank" : undefined}
            rel={pub.link ? "noreferrer" : undefined}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="block rounded-xl border border-neutral-800/80 bg-neutral-900/60 p-5 hover:border-neutral-700"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div className="text-white">
                <span className="font-medium">{pub.title}</span>
                {pub.venue && (
                  <span className="text-neutral-400"> · {pub.venue}</span>
                )}
              </div>
              {(pub.year || pub.authors) && (
                <div className="text-sm text-neutral-400">
                  {pub.authors && <span className="mr-2">{pub.authors}</span>}
                  {pub.year}
                </div>
              )}
            </div>
            {pub.description && (
              <p className="mt-2 text-sm text-neutral-300">{pub.description}</p>
            )}
          </motion.a>
        ))}
      </div>
    </section>
  );
}