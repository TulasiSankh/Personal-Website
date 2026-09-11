import { snapshotCards } from '@/data';
import Reveal from './Reveal';

export default function Snapshot() {
  return (
    <section className="relative -mt-8 pb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {snapshotCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <Reveal key={card.title} delay={i * 80}>
                <div className="group bg-white rounded-2xl border border-navy-100 shadow-card hover:shadow-lift hover:border-navy-200 transition-all duration-300 p-4 lg:p-5 h-full">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-100 flex items-center justify-center group-hover:bg-brand-100 transition-colors shrink-0">
                      <Icon className="w-5 h-5 text-brand-600" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="text-[13px] font-semibold text-navy-900 mb-1.5 leading-tight">
                        {card.title}
                      </h3>
                      <div className="flex flex-col gap-0.5">
                        {card.items.map((item) => (
                          <span key={item} className="text-[12px] text-navy-500 leading-snug">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
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
