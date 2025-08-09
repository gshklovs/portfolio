"use client"

import { useEffect, useState } from "react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { profile } from "@/content/profile";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const socials = profile.socials;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? "border-b border-neutral-800/80 bg-neutral-950/80 backdrop-blur"
          : "bg-transparent"
      }`}
    >
      <nav className="container flex h-14 items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight">
          {profile.name}
        </a>
        <div className="hidden items-center gap-6 text-sm text-neutral-300 sm:flex">
          <a className="hover:text-white" href="#projects">
            Projects
          </a>
          <a className="hover:text-white" href="#skills">
            Skills
          </a>
          <a className="hover:text-white" href="#experience">
            Experience
          </a>
          <a className="hover:text-white" href="#publications">
            Publications
          </a>
          <a className="hover:text-white" href="#awards">
            Awards
          </a>
          <a className="hover:text-white" href="#media">
            Media
          </a>
          <a className="hover:text-white" href="#contact">
            Contact
          </a>
        </div>
        <div className="flex items-center gap-3 text-neutral-300">
          {socials.find((s) => s.label === "GitHub") && (
            <a
              className="hover:text-white"
              href={socials.find((s) => s.label === "GitHub")!.href}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>
          )}
          {socials.find((s) => s.label === "LinkedIn") && (
            <a
              className="hover:text-white"
              href={socials.find((s) => s.label === "LinkedIn")!.href}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={20} />
            </a>
          )}
        </div>
      </nav>
    </header>
  );
}