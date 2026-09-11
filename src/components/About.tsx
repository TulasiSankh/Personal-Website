import { aboutCards, profile } from '@/data';
import Reveal from './Reveal';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left: Heading + text */}
          <div className="lg:col-span-5">
            <Reveal>
              <span className="text-[11px] font-semibold tracking-[0.14em] text-brand-600 uppercase">
                About Me
              </span>
              <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-navy-900 tracking-tight leading-tight">
                Engineer focused on building{' '}
                <span className="gradient-text">practical, well-crafted interfaces.</span>
              </h2>
              <p className="mt-5 text-[15px] text-navy-600 leading-relaxed">
                I'm a Software Engineer with a strong focus on frontend development. I build
                responsive, accessible web applications with React.js and modern JavaScript,
                integrate REST APIs to power real business workflows, and collaborate closely
                with backend and database teams to deliver end-to-end functionality.
              </p>
              <p className="mt-4 text-[15px] text-navy-600 leading-relaxed">
                My approach is practical: clean component architecture, reusable code, and
                interfaces that are genuinely useful to the people who depend on them.
              </p>

              <div className="mt-6 flex flex-col gap-2.5">
                {[
                  'Currently building products at ClickCrawl Media',
                  'Frontend-first with full-stack awareness',
                  'Based in Bengaluru, open to opportunities',
                ].map((point) => (
                  <div key={point} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-brand-500 shrink-0" />
                    <span className="text-[13px] text-navy-700 font-medium">{point}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right: Cards */}
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-4">
              {aboutCards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <Reveal key={card.title} delay={i * 100}>
                    <div className="group bg-white rounded-2xl border border-navy-100 shadow-card hover:shadow-lift hover:border-brand-200 transition-all duration-300 p-5 lg:p-6 h-full">
                      <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-brand-50 to-accent-50 border border-brand-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5 text-brand-600" />
                      </div>
                      <h3 className="mt-4 text-[15px] font-semibold text-navy-900 leading-snug">
                        {card.title}
                      </h3>
                      <p className="mt-2 text-[13px] text-navy-500 leading-relaxed">
                        {card.description}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
