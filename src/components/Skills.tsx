import { skillCategories, skillThemeMap } from '@/data';
import Reveal from './Reveal';

export default function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-28 bg-gradient-to-b from-white to-navy-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <span className="text-[11px] font-semibold tracking-[0.14em] text-brand-600 uppercase">
              Skills & Technologies
            </span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-navy-900 tracking-tight">
              A well-rounded toolkit across the stack
            </h2>
            <p className="mt-4 text-[15px] text-navy-600 leading-relaxed">
              Grouped by category — focused on frontend, supported by backend, databases and
              modern tooling.
            </p>
          </div>
        </Reveal>

        {/* Skill categories */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
          {skillCategories.map((cat, i) => {
            const theme = skillThemeMap[cat.theme];
            const Icon = cat.icon;
            return (
              <Reveal key={cat.name} delay={i * 80}>
                <div
                  className={`group bg-white rounded-2xl border border-navy-100 shadow-card hover:shadow-lift ${theme.border} transition-all duration-300 p-5 lg:p-6 h-full`}
                >
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-10 h-10 rounded-xl ${theme.iconBg} flex items-center justify-center shrink-0`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-[15px] font-semibold text-navy-900">{cat.name}</h3>
                      <span className="text-[11px] text-navy-400 font-medium">
                        {cat.skills.length} technologies
                      </span>
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-2.5 py-1.5 rounded-lg border ${theme.badge} text-[12px] font-medium transition-all hover:scale-105`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
