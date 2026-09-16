import { profile } from '@/data';
import Reveal from './Reveal';
import { Mail, Github, Linkedin, MapPin, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-gradient-to-b from-white to-navy-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-navy-950 border border-navy-800 shadow-lift">
          {/* Decorative */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-brand-600/30 to-accent-600/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-brand-600/20 to-transparent rounded-full blur-3xl" />
          </div>

          <div className="relative p-8 lg:p-14">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              {/* Left: CTA */}
              <Reveal>
                <div>
                  <span className="text-[11px] font-semibold tracking-[0.14em] text-brand-300 uppercase">
                    Get In Touch
                  </span>
                  <h2 className="mt-3 text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                    Let's build something together.
                  </h2>
                  <p className="mt-4 text-[15px] text-navy-300 leading-relaxed max-w-md">
                    I'm open to frontend and full-stack opportunities. Whether you have a role
                    in mind or just want to connect, I'd love to hear from you.
                  </p>

                  <div className="mt-6 flex flex-col gap-3">
                    <a
                      href={`mailto:${profile.email}`}
                      className="inline-flex items-center gap-2 text-[14px] text-white hover:text-brand-300 transition-colors group w-fit"
                    >
                      <Mail className="w-4 h-4 text-brand-400" />
                      <span className="font-medium">{profile.email}</span>
                      <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </a>
                    <div className="flex items-center gap-2 text-[14px] text-navy-300">
                      <MapPin className="w-4 h-4 text-brand-400" />
                      <span>{profile.location}</span>
                    </div>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={`mailto:${profile.email}`}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white text-navy-900 text-[14px] font-semibold hover:bg-brand-50 transition-all shadow-soft group"
                    >
                      <Mail className="w-4 h-4" />
                      Send Email
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </a>
                    <a
                      href={profile.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white text-[14px] font-semibold hover:bg-white/15 transition-all"
                    >
                      <Github className="w-4 h-4" />
                      View GitHub
                    </a>
                  </div>
                </div>
              </Reveal>

              {/* Right: Social links */}
              <Reveal delay={150}>
                <div className="flex flex-col gap-3">
                  <SocialCard
                    href={profile.linkedin}
                    icon={<Linkedin className="w-5 h-5 text-brand-400" />}
                    label="LinkedIn"
                    value="/in/tulasi-sugandhi"
                    description="Professional profile & connections"
                  />
                  <SocialCard
                    href={profile.github}
                    icon={<Github className="w-5 h-5 text-brand-400" />}
                    label="GitHub"
                    value="@TulasiSankh"
                    description="Code, projects & contributions"
                  />
                  <SocialCard
                    href={`mailto:${profile.email}`}
                    icon={<Mail className="w-5 h-5 text-brand-400" />}
                    label="Email"
                    value={profile.email}
                    description="Direct — usually replies within a day"
                  />
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SocialCard({
  href,
  icon,
  label,
  value,
  description,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  description: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="group flex items-center gap-4 p-4 lg:p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all"
    >
      <div className="w-11 h-11 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="text-[14px] font-semibold text-white">{label}</span>
          <ArrowRight className="w-3.5 h-3.5 text-navy-400 group-hover:text-brand-300 group-hover:translate-x-0.5 transition-all" />
        </div>
        <div className="text-[13px] text-brand-300 font-medium truncate">{value}</div>
        <div className="text-[12px] text-navy-400">{description}</div>
      </div>
    </a>
  );
}
