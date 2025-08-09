import { profile } from "../content/profile";
import { motion } from "framer-motion";

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

  const buildBase = (p: string) => p.replace(/\.(png|jpe?g|webp|avif)$/i, "");

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
                className="block"
              >
                {(() => {
                  const base = buildBase(m.src);
                  return (
                    <picture>
                      <source
                        srcSet={`${base}-800.avif 800w, ${base}-1200.avif 1200w, ${base}-1600.avif 1600w`}
                        type="image/avif"
                      />
                      <source
                        srcSet={`${base}-800.webp 800w, ${base}-1200.webp 1200w, ${base}-1600.webp 1600w`}
                        type="image/webp"
                      />
                      <img
                        src={`${base}-800.jpg`}
                        srcSet={`${base}-800.jpg 800w, ${base}-1200.jpg 1200w, ${base}-1600.jpg 1600w`}
                        sizes="(min-width: 640px) 50vw, 100vw"
                        alt={m.title}
                        className="h-64 w-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </picture>
                  );
                })()}
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
