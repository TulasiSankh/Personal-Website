import { experiences } from '@/data';
import Reveal from './Reveal';
import { Building2, MapPin, Calendar, Briefcase } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <span className="text-[11px] font-semibold tracking-[0.14em] text-brand-600 uppercase">
              Professional Experience
            </span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-navy-900 tracking-tight">
              Where I've been building
            </h2>
          </div>
        </Reveal>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="relative pl-8 lg:pl-12 pb-8">
                {/* Timeline line */}
                <div className="absolute left-2 top-2 bottom-0 w-px bg-navy-200" />

                {/* Timeline dot */}
                <div className="absolute left-0 top-1.5 w-5 h-5 rounded-full bg-white border-2 border-brand-500 flex items-center justify-center shadow-soft">
                  <div className="w-2 h-2 rounded-full bg-brand-500" />
                </div>

                {/* Content card */}
                <div className="bg-white rounded-2xl border border-navy-100 shadow-card hover:shadow-lift transition-shadow p-5 lg:p-7 ml-2">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase className="w-4 h-4 text-brand-500" />
                        <h3 className="text-lg font-bold text-navy-900">{exp.role}</h3>
                        {exp.current && (
                          <span className="px-2 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-[10px] font-semibold text-emerald-700 uppercase tracking-wide">
                            Current
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] text-navy-500">
                        <span className="flex items-center gap-1.5 font-medium text-navy-700">
                          <Building2 className="w-3.5 h-3.5 text-navy-400" />
                          {exp.company}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-navy-400" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-50 border border-navy-100 text-[12px] font-medium text-navy-600">
                      <Calendar className="w-3.5 h-3.5 text-navy-400" />
                      {exp.period}
                    </span>
                  </div>

                  {/* Responsibilities */}
                  <ul className="mt-4 space-y-2.5">
                    {exp.responsibilities.map((r, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-400 mt-2 shrink-0" />
                        <span className="text-[13px] lg:text-[14px] text-navy-600 leading-relaxed">
                          {r}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}

          {/* Start marker */}
          <Reveal delay={200}>
            <div className="relative pl-8 lg:pl-12">
              <div className="absolute left-2 top-0 bottom-0 w-px bg-navy-200" />
              <div className="absolute left-0 top-0 w-5 h-5 rounded-full bg-navy-100 border-2 border-navy-300 flex items-center justify-center">
                <span className="text-[10px] font-bold text-navy-500">START</span>
              </div>
              <div className="ml-2 py-2">
                <p className="text-[13px] text-navy-400 font-medium italic">
                  Career began with a strong foundation in computer science and a passion for
                  building things for the web.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
