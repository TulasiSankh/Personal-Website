import { education } from '@/data';
import Reveal from './Reveal';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <span className="text-[11px] font-semibold tracking-[0.14em] text-brand-600 uppercase">
              Education
            </span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-navy-900 tracking-tight">
              Academic background
            </h2>
          </div>
        </Reveal>

        <div className="max-w-4xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {education.map((edu, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="group bg-white rounded-2xl border border-navy-100 shadow-card hover:shadow-lift hover:border-brand-200 transition-all duration-300 p-5 lg:p-6 h-full">
                <div className="w-11 h-11 rounded-xl bg-navy-50 border border-navy-100 flex items-center justify-center group-hover:bg-brand-50 group-hover:border-brand-100 transition-colors">
                  <GraduationCap className="w-5 h-5 text-navy-600 group-hover:text-brand-600 transition-colors" />
                </div>

                <h3 className="mt-4 text-[15px] font-bold text-navy-900 leading-snug">
                  {edu.degree}
                </h3>
                <p className="mt-1 text-[13px] text-brand-600 font-medium">{edu.field}</p>
                <p className="mt-2 text-[13px] text-navy-500">{edu.institution}</p>

                <div className="mt-4 pt-3 border-t border-navy-100 flex flex-col gap-1.5">
                  <span className="flex items-center gap-1.5 text-[12px] text-navy-500">
                    <Calendar className="w-3.5 h-3.5 text-navy-400" />
                    {edu.period}
                  </span>
                  <span className="flex items-center gap-1.5 text-[12px] text-navy-500">
                    <MapPin className="w-3.5 h-3.5 text-navy-400" />
                    {edu.location}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
