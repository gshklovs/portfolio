import { motion } from "framer-motion";
import { profile } from "../content/profile";

const YC_IMG_BASE = "/img/IMG_3457";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative container flex min-h-[80svh] items-center overflow-hidden pt-20"
    >
      {/* Right-aligned background photo with left fade */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-3 top-16 bottom-3 hidden w-[48%] rounded-xl md:block overflow-hidden shadow-2xl ring-1 ring-white/5"
      >
        <picture>
          <source
            srcSet={`${YC_IMG_BASE}-800.avif 800w, ${YC_IMG_BASE}-1200.avif 1200w, ${YC_IMG_BASE}-1600.avif 1600w`}
            type="image/avif"
          />
          <source
            srcSet={`${YC_IMG_BASE}-800.webp 800w, ${YC_IMG_BASE}-1200.webp 1200w, ${YC_IMG_BASE}-1600.webp 1600w`}
            type="image/webp"
          />
          <img
            src={`${YC_IMG_BASE}-1200.jpg`}
            srcSet={`${YC_IMG_BASE}-800.jpg 800w, ${YC_IMG_BASE}-1200.jpg 1200w, ${YC_IMG_BASE}-1600.jpg 1600w`}
            sizes="(min-width: 768px) 48vw, 100vw"
            alt="YC demo background"
            className="h-full w-full object-cover object-center"
            loading="eager"
            decoding="async"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-neutral-950/40 to-neutral-950" />
      </div>

      <div className="relative z-10 max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-semibold tracking-tight sm:text-5xl"
        >
          {profile.name}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-2 text-lg text-neutral-300"
        >
          {profile.headline}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 max-w-prose text-neutral-300"
        >
          {profile.summary}
        </motion.p>
        <div className="mt-8 flex gap-3">
          <a
            href="#projects"
            className="rounded-md bg-primary-600 px-4 py-2 font-medium text-white hover:bg-primary-500"
          >
            View projects
          </a>
          <a
            href={
              profile.socials.find((s) => s.label === "Devpost")?.href || "#"
            }
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-neutral-800 bg-neutral-900 px-4 py-2 font-medium hover:bg-neutral-800"
          >
            Devpost
          </a>
        </div>
      </div>
    </section>
  );
}
