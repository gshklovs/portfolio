"use client"

import { motion } from "framer-motion";
import { profile } from "@/content/profile";

export default function Projects() {
  return (
    <section id="projects" className="container py-16">
      <h2 className="section-title">Projects</h2>
      <p className="mt-2 text-neutral-400">Selected projects and demos</p>
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        {profile.projects.map((project, idx) => (
          <motion.a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="group rounded-xl border border-neutral-800/80 bg-gradient-to-b from-neutral-900 to-neutral-950 p-5 hover:border-neutral-700"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-lg font-medium text-white group-hover:text-primary-300">
                  {project.title}
                </h3>
                {project.year && (
                  <span className="ml-2 align-middle text-xs text-neutral-400">
                    {project.year}
                  </span>
                )}
              </div>
            </div>
            <p className="mt-2 text-sm text-neutral-300">
              {project.description}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <span key={t} className="badge">
                  {t}
                </span>
              ))}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}