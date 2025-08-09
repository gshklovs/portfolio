import { profile } from '@/content/profile'

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800/80 py-10">
      <div className="container flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
        <p className="text-sm text-neutral-400">© {new Date().getFullYear()} {profile.name}</p>
        <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-300">
          {profile.socials.map((s) => (
            <a key={s.label} className="hover:text-white" href={s.href} target="_blank" rel="noreferrer">
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}