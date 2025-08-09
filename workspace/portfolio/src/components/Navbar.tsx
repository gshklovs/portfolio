import { useEffect, useState } from 'react'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { profile } from '../content/profile'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const socials = profile.socials

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? 'border-b border-neutral-800/80 bg-neutral-950/80 backdrop-blur' : 'bg-transparent'
      }`}
    >
      <nav className="container flex h-14 items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight">
          {profile.name}
        </a>
        <div className="flex items-center gap-3 text-neutral-300">
          {socials.find((s) => s.label === 'GitHub') && (
            <a
              className="hover:text-white"
              href={socials.find((s) => s.label === 'GitHub')!.href}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>
          )}
          {socials.find((s) => s.label === 'LinkedIn') && (
            <a
              className="hover:text-white"
              href={socials.find((s) => s.label === 'LinkedIn')!.href}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={20} />
            </a>
          )}
          <a
            href="#contact"
            className="ml-2 rounded-md bg-primary-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-primary-500"
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  )
}