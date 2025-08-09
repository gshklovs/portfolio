import { motion } from "framer-motion";
import { profile } from "../content/profile";

const YC_IMG = new URL("../assets/IMG_3457.PNG", import.meta.url).href;

export default function Hero() {
  return (
    <section
      id="home"
      className="relative container flex min-h-[80svh] items-center overflow-hidden pt-20"
    >
      {/* Right-aligned background photo with left fade */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-3 top-16 bottom-3 hidden w-[48%] md:block overflow-hidden"
      >
        <img
          src={YC_IMG}
          alt="YC demo background"
          className="h-full w-full object-cover object-center mask-fade-edges"
        />
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

        {/* Mobile-friendly photo presentation */}
        <div className="md:hidden">
          <div className="relative -mx-4 mt-8 h-56 overflow-hidden">
            <img
              src={YC_IMG}
              alt="YC demo background"
              loading="lazy"
              decoding="async"
              className="absolute inset-0 h-full w-full object-cover object-center mask-fade-edges"
            />
            {/* Keep subtle left fade for consistency and add bottom fade for seamless blend */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-transparent via-neutral-950/20 to-neutral-950/50" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-neutral-950 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
