import { useEffect, useState } from 'react';
import { Github, Linkedin, Menu, X, Terminal } from 'lucide-react';
import { navLinks, profile } from '@/data';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const sections = navLinks.map((l) => l.href.slice(1));
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-xl border-b border-navy-100 shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('#home')}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-navy-800 to-brand-600 flex items-center justify-center shadow-soft group-hover:shadow-lift transition-shadow">
              <Terminal className="w-5 h-5 text-white" strokeWidth={2.5} />
            </div>
            <span className="font-bold text-navy-900 text-[15px] tracking-tight hidden sm:block">
              {profile.name}
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`px-3.5 py-2 rounded-lg text-[13px] font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-brand-700 bg-brand-50'
                      : 'text-navy-600 hover:text-navy-900 hover:bg-navy-50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex w-9 h-9 items-center justify-center rounded-lg border border-navy-200 text-navy-600 hover:text-navy-900 hover:border-navy-300 hover:bg-navy-50 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex w-9 h-9 items-center justify-center rounded-lg border border-navy-200 text-navy-600 hover:text-navy-900 hover:border-navy-300 hover:bg-navy-50 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden w-9 h-9 flex items-center justify-center rounded-lg border border-navy-200 text-navy-700"
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden pb-4 pt-2 border-t border-navy-100 bg-white/95 backdrop-blur-xl rounded-b-xl">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="px-3 py-2.5 rounded-lg text-left text-[14px] font-medium text-navy-700 hover:bg-navy-50 transition-colors"
                >
                  {link.label}
                </button>
              ))}
              <div className="flex gap-2 mt-2 px-1">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg border border-navy-200 text-navy-700 text-[13px] font-medium"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg border border-navy-200 text-navy-700 text-[13px] font-medium"
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              </div>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="mt-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-navy-900 text-white text-[13px] font-medium"
              >
                Contact Me
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
