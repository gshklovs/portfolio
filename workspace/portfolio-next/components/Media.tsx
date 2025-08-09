"use client"

import { profile } from "@/content/profile";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Media() {
  const media = (profile as any).media as
    | {
        title: string;
        kind: "image" | "video";
        src: string;
        caption?: string;
        link?: string;
      }[]
    | undefined;
  if (!media || !media.length) return null;

  return (
    <section id="media" className="container py-16">
      <h2 className="section-title">Media</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {media.map((m, idx) => (
          <motion.div
            key={m.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="overflow-hidden rounded-xl border border-neutral-800/80 bg-neutral-900/60"
          >
            {m.kind === "image" ? (
              <a
                href={m.link}
                target={m.link ? "_blank" : undefined}
                rel={m.link ? "noreferrer" : undefined}
                className="block relative h-64 w-full"
              >
                <Image
                  src={m.src}
                  alt={m.title}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </a>
            ) : (
              // Keep video as is to avoid regressions
              <video src={m.src} controls className="h-64 w-full object-cover" />
            )}
            <div className="p-4">
              <div className="text-sm font-medium text-white">{m.title}</div>
              {m.caption && (
                <div className="mt-1 text-xs text-neutral-400">{m.caption}</div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}