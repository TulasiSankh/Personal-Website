import { projects } from '@/data';
import Reveal from './Reveal';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-20 lg:py-28 bg-gradient-to-b from-navy-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <span className="text-[11px] font-semibold tracking-[0.14em] text-brand-600 uppercase">
              Featured Projects
            </span>
            <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-navy-900 tracking-tight">
              Things I've designed and built
            </h2>
            <p className="mt-4 text-[15px] text-navy-600 leading-relaxed">
              A selection of projects spanning document management, HR platforms and business
              applications.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-3 lg:grid-rows-2 gap-4 lg:gap-5 auto-rows-fr">
          {projects.map((project, i) => {
            const Icon = project.icon;
            if (project.featured) {
              return (
                <Reveal key={project.title} delay={0} className={project.cardClass}>
                  <div
                    className={
                      'group relative h-full overflow-hidden rounded-2xl bg-gradient-to-br ' +
                      project.gradient +
                      ' shadow-card hover:shadow-lift transition-all duration-500 p-6 lg:p-8 flex flex-col'
                    }
                  >
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white blur-3xl" />
                      <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-white blur-3xl" />
                    </div>

                    <div className="relative flex flex-col h-full">
                      <div className="flex items-start justify-between mb-5">
                        <div className="w-14 h-14 rounded-2xl bg-white/15 border border-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Icon className="w-7 h-7 text-white" />
                        </div>
                        <span className="px-3 py-1 rounded-full bg-white/15 border border-white/20 backdrop-blur-sm text-[11px] font-semibold text-white uppercase tracking-wide">
                          Featured
                        </span>
                      </div>

                      <h3 className="text-2xl lg:text-3xl font-bold text-white tracking-tight">
                        {project.title}
                      </h3>
                      <p className="mt-1.5 text-[14px] text-white/80 font-medium">
                        {project.tagline}
                      </p>
                      <p className="mt-4 text-[14px] text-white/75 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="mt-5 grid grid-cols-2 gap-2">
                        {project.features?.map((feature) => (
                          <div key={feature} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-white/60 shrink-0" />
                            <span className="text-[12px] text-white/80">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="mt-auto pt-6 flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className={
                              'px-2.5 py-1 rounded-lg border ' +
                              project.badgeBg +
                              ' ' +
                              project.badgeBorder +
                              ' ' +
                              project.badgeText +
                              ' text-[11px] font-medium backdrop-blur-sm'
                            }
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            }

            return (
              <Reveal key={project.title} delay={i * 80} className={project.cardClass}>
                <div className="group bg-white rounded-2xl border border-navy-100 shadow-card hover:shadow-lift hover:border-navy-200 transition-all duration-300 p-5 lg:p-6 h-full flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div
                      className={
                        'w-11 h-11 rounded-xl bg-gradient-to-br ' +
                        project.gradient +
                        ' flex items-center justify-center shadow-soft group-hover:scale-105 transition-transform'
                      }
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-navy-300 group-hover:text-brand-500 group-hover:rotate-45 transition-all" />
                  </div>

                  <h3 className="text-[17px] font-bold text-navy-900 leading-snug">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-[12px] font-medium text-brand-600">{project.tagline}</p>

                  <p className="mt-3 text-[13px] text-navy-500 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-navy-100 flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className={
                          'px-2 py-0.5 rounded-md border ' +
                          project.badgeBg +
                          ' ' +
                          project.badgeBorder +
                          ' ' +
                          project.badgeText +
                          ' text-[11px] font-medium'
                        }
                      >
                        {t}
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
