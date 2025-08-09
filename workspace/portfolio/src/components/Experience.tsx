import { motion } from 'framer-motion'
import { profile } from '../content/profile'

export default function Experience() {
  if (!profile.experience.length) return null
  return (
    <section id="experience" className="container py-16">
      <h2 className="section-title">Experience</h2>
      <div className="mt-6 space-y-6">
        {profile.experience.map((role, idx) => (
          <motion.div
            key={role.title + role.company}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
            className="rounded-xl border border-neutral-800/80 bg-neutral-900/60 p-5"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <div className="text-white">
                <span className="font-medium">{role.title}</span>
                <span className="text-neutral-400"> · {role.company}</span>
              </div>
              <div className="text-sm text-neutral-400">
                {role.start} – {role.end}
              </div>
            </div>
            {role.location && (
              <div className="mt-1 text-sm text-neutral-400">{role.location}</div>
            )}
            <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-neutral-300">
              {role.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  )
}