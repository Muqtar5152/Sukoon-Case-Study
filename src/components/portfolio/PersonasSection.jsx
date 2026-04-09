import SectionNumber from './SectionNumber';

const personas = [
  {
    initials: 'SC',
    name: 'Sara Chen',
    meta: '21 · Undergraduate · Student',
    struggle: "Juggling academics, social life, and deen. Misses salah due to distractions. Feels guilty. Doesn't have an accountability system.",
    needs: 'Gentle reminders · Salah tracker · Quran reading integration · Minimal guilt, maximum encouragement',
    quote: "I really want to pray on time, but I forget sometimes. I need something to gently guide me, not pressure me.",
  },
  {
    initials: 'YA',
    name: 'Yusuf Ahmad',
    meta: '29 · Project Manager · Corporate Professional',
    struggle: 'Long work hours disrupt prayer timing. Misses Fajr and Asr. Craves a distraction-free spiritual refuge away from corporate chaos.',
    needs: 'Minimal, ad-free interface · Subtle notifications · Reflection journaling · Privacy-first design · No data tracking',
    quote: "I miss prayers when meetings run over. I need something that fits into my daily flow without adding noise.",
  },
  {
    initials: 'FH',
    name: 'Fatima Hassan',
    meta: '25 · Recently Embraced Islam · Learner',
    struggle: "New to Islam. Overwhelmed by complex Islamic apps. Unsure of correct practices. Feels isolated and anxious about \"doing it right.\"",
    needs: 'Guided learning experience · Supportive reminders · Foundational education · Welcoming community · Non-intimidating interface',
    quote: "I want to do things right, but I'm still learning. I need something that feels welcoming and helps me grow at my own pace.",
  },
];

export default function PersonasSection() {
  return (
    <section id="personas" className="py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <SectionNumber number="04" label="User Personas" />

        <h2 className="fade-up font-syne font-extrabold text-3xl md:text-[44px] leading-tight mb-3" style={{ color: '#2D2416' }}>
          Three Muslims. Three different spiritual journeys.
        </h2>
        <p className="fade-up font-dm text-[15px] mb-12" style={{ color: '#595959' }}>
          Each persona shaped a core pillar of Sukoon's feature set.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {personas.map((p) => (
            <div
              key={p.initials}
              className="fade-up rounded-[20px] overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{
                border: '1px solid rgba(0,0,0,0.07)',
                boxShadow: '0 2px 12px rgba(0,0,0,0.04)',
              }}
            >
              {/* Header band */}
              <div className="p-5 flex items-center gap-4" style={{ background: '#2D2416' }}>
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center font-syne font-bold text-sm shrink-0"
                  style={{ background: 'rgba(110, 95, 70, 0.25)', color: '#D4AF7A' }}
                >
                  {p.initials}
                </div>
                <div>
                  <p className="font-syne font-bold text-[17px] text-white">{p.name}</p>
                  <p className="font-dm text-[11px]" style={{ color: 'rgba(255,255,255,0.6)' }}>{p.meta}</p>
                </div>
              </div>

              {/* Body */}
              <div className="bg-white p-6 space-y-5">
                <div>
                  <p className="font-dm text-[10px] uppercase tracking-[0.12em] font-bold mb-2" style={{ color: '#6E5F46' }}>
                    Core Struggle
                  </p>
                  <p className="font-dm text-sm leading-relaxed" style={{ color: '#595959' }}>{p.struggle}</p>
                </div>
                <div>
                  <p className="font-dm text-[10px] uppercase tracking-[0.12em] font-bold mb-2" style={{ color: '#6E5F46' }}>
                    What They Need
                  </p>
                  <p className="font-dm text-sm leading-relaxed" style={{ color: '#595959' }}>{p.needs}</p>
                </div>
                <blockquote
                  className="font-dm text-sm italic leading-relaxed pl-4"
                  style={{
                    borderLeft: '2px solid #D4AF7A',
                    color: '#595959',
                  }}
                >
                  "{p.quote}"
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}