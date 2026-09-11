import { ArrowRight, FileDown, MapPin, Sparkles, Code2, Server, Database, GitBranch, Zap } from 'lucide-react';
import { profile, heroTechBadges } from '@/data';

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 pb-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-60" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-brand-100/40 via-accent-100/30 to-transparent rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-navy-100/40 to-transparent rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text */}
          <div className="flex flex-col gap-6 animate-fade-up">
            {/* Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-50 border border-brand-200 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-500 animate-pulse-slow" />
              <span className="text-[11px] font-semibold tracking-[0.12em] text-brand-700 uppercase">
                Software Engineer • Frontend Developer
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-navy-900 leading-[1.1] tracking-tight text-balance">
              Building modern web experiences with{' '}
              <span className="gradient-text">clean, practical engineering.</span>
            </h1>

            {/* Description */}
            <p className="text-[15px] lg:text-base text-navy-600 leading-relaxed max-w-xl">
              {profile.description}
            </p>

            {/* Location */}
            <div className="flex items-center gap-2 text-[13px] text-navy-500">
              <MapPin className="w-4 h-4 text-brand-500" />
              <span className="font-medium">{profile.location}</span>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => scrollTo('#projects')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-navy-900 text-white text-[14px] font-semibold hover:bg-navy-800 transition-all shadow-soft hover:shadow-lift group"
              >
                View My Projects
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>
              <button
                onClick={() => scrollTo('#contact')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-navy-800 text-[14px] font-semibold border border-navy-200 hover:border-navy-300 hover:bg-navy-50 transition-all shadow-soft"
              >
                <FileDown className="w-4 h-4" />
                Download Resume
              </button>
            </div>

            {/* Let's Connect */}
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[13px] font-medium text-brand-600 hover:text-brand-700 transition-colors w-fit group"
            >
              <Sparkles className="w-3.5 h-3.5" />
              Let's Connect
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right: Abstract developer visual */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative w-full max-w-[480px] mx-auto lg:max-w-none">
      {/* Main code editor card */}
      <div className="relative rounded-2xl bg-navy-950 border border-navy-800 shadow-lift overflow-hidden">
        {/* Window bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-navy-800 bg-navy-900">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400/80" />
            <div className="w-3 h-3 rounded-full bg-amber-400/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
          </div>
          <div className="flex-1 text-center">
            <span className="text-[11px] font-mono text-navy-400">tulasi-portfolio.tsx</span>
          </div>
        </div>

        {/* Code content */}
        <div className="p-5 font-mono text-[12px] leading-relaxed">
          <div className="flex gap-4">
            {/* Line numbers */}
            <div className="flex flex-col gap-1 text-navy-600 select-none">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                <span key={n}>{n}</span>
              ))}
            </div>
            {/* Code */}
            <div className="flex flex-col gap-1 flex-1">
              <code><span className="text-accent-400">const</span> <span className="text-brand-300">developer</span> <span className="text-navy-400">=</span> {'{'}</code>
              <code className="pl-4"><span className="text-emerald-400">name</span><span className="text-navy-400">:</span> <span className="text-amber-300">'Tulasi Sugandhi'</span>,</code>
              <code className="pl-4"><span className="text-emerald-400">role</span><span className="text-navy-400">:</span> <span className="text-amber-300">'Software Engineer'</span>,</code>
              <code className="pl-4"><span className="text-emerald-400">stack</span><span className="text-navy-400">:</span> [</code>
              <code className="pl-8"><span className="text-amber-300">'React.js'</span>, <span className="text-amber-300">'Next.js'</span>,</code>
              <code className="pl-8"><span className="text-amber-300">'Java'</span>, <span className="text-amber-300">'Spring Boot'</span></code>
              <code className="pl-4">],</code>
              <code className="pl-4"><span className="text-emerald-400">location</span><span className="text-navy-400">:</span> <span className="text-amber-300">'Bengaluru, IN'</span>,</code>
              <code className="pl-4"><span className="text-emerald-400">available</span><span className="text-navy-400">:</span> <span className="text-brand-400">true</span>,</code>
              <code>{'}'}</code>
            </div>
          </div>
        </div>
      </div>

      {/* Floating cards */}
      <div className="absolute -top-4 -right-4 sm:-right-6 animate-float-slow">
        <div className="bg-white rounded-xl border border-navy-200 shadow-lift p-3 flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-brand-100 flex items-center justify-center">
            <Code2 className="w-4 h-4 text-brand-600" />
          </div>
          <div>
            <div className="text-[10px] font-semibold text-navy-900">Frontend</div>
            <div className="text-[9px] text-navy-500">React • Next.js</div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-4 -left-4 sm:-left-6 animate-float-slow" style={{ animationDelay: '1s' }}>
        <div className="bg-white rounded-xl border border-navy-200 shadow-lift p-3 flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-accent-100 flex items-center justify-center">
            <Server className="w-4 h-4 text-accent-600" />
          </div>
          <div>
            <div className="text-[10px] font-semibold text-navy-900">Backend</div>
            <div className="text-[9px] text-navy-500">Java • Spring Boot</div>
          </div>
        </div>
      </div>

      <div className="absolute top-1/2 -right-6 sm:-right-10 animate-float-slow" style={{ animationDelay: '2s' }}>
        <div className="bg-white rounded-xl border border-navy-200 shadow-lift p-3 flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center">
            <Database className="w-4 h-4 text-emerald-600" />
          </div>
          <div>
            <div className="text-[10px] font-semibold text-navy-900">Database</div>
            <div className="text-[9px] text-navy-500">SQL • PostgreSQL</div>
          </div>
        </div>
      </div>

      {/* Tech badges row */}
      <div className="mt-6 flex flex-wrap gap-2 justify-center lg:justify-start">
        {heroTechBadges.map((tech, i) => (
          <span
            key={tech}
            className="px-3 py-1.5 rounded-lg bg-white border border-navy-200 text-[12px] font-medium text-navy-700 shadow-soft hover:border-brand-300 hover:text-brand-700 transition-colors animate-fade-up"
            style={{ animationDelay: `${0.4 + i * 0.08}s` }}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
