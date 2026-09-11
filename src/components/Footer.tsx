import { profile, navLinks } from '@/data';
import { Github, Linkedin, Mail, Terminal } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-navy-100 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-navy-800 to-brand-600 flex items-center justify-center">
              <Terminal className="w-4 h-4 text-white" strokeWidth={2.5} />
            </div>
            <div>
              <span className="text-[14px] font-bold text-navy-900">{profile.name}</span>
              <span className="block text-[11px] text-navy-400">
                {profile.role}
              </span>
            </div>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[12px] font-medium text-navy-500 hover:text-brand-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-lg border border-navy-200 text-navy-500 hover:text-navy-900 hover:border-navy-300 hover:bg-navy-50 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-lg border border-navy-200 text-navy-500 hover:text-navy-900 hover:border-navy-300 hover:bg-navy-50 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-3.5 h-3.5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="w-8 h-8 flex items-center justify-center rounded-lg border border-navy-200 text-navy-500 hover:text-navy-900 hover:border-navy-300 hover:bg-navy-50 transition-all"
              aria-label="Email"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-navy-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[12px] text-navy-400">
            (c) {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p className="text-[12px] text-navy-400">
            Built with React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
