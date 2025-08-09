import { motion } from 'framer-motion'
import { profile } from '../content/profile'

export default function Hero() {
  return (
    <section id="home" className="container flex min-h-[80svh] items-center pt-20">
      <div className="max-w-3xl">
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
            href={profile.socials.find((s) => s.label === 'Devpost')?.href || '#'}
            target="_blank"
            rel="noreferrer"
            className="rounded-md border border-neutral-800 bg-neutral-900 px-4 py-2 font-medium hover:bg-neutral-800"
          >
            Devpost
          </a>
        </div>
      </div>
    </section>
  )
}