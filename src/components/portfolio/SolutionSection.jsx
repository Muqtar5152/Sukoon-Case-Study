const features = [
  {
    icon: '🤲',
    title: 'Prayer & Salah Tracking',
    body: "Smart prayer reminders synced to your location and timezone. Track all 5 daily prayers with visual progress. Get gentle nudges before you miss a prayer — not after it's too late.",
  },
  {
    icon: '📖',
    title: 'Unified Quran & Dhikr',
    body: 'Access Quranic recitations, translations, and tafsir in one place. Build dhikr habits with guided morning and evening sessions. Every action feeds into your spiritual score and weekly summary.',
  },
  {
    icon: '📓',
    title: 'Reflection & Journaling',
    body: "A sacred space to log your spiritual reflections, duas, and personal growth. Track your emotional and spiritual well-being over time. No algorithms — just your authentic journey.",
  },
];

export default function SolutionSection() {
  return (
    <section id="solution" className="py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div
          className="fade-up rounded-3xl px-6 md:px-12 lg:px-16 py-16 md:py-20"
          style={{ background: '#2D2416' }}
        >
          {/* Section label */}
          <p className="text-center font-syne font-bold text-xs uppercase tracking-[0.15em] mb-6" style={{ color: '#D4AF7A' }}>
            05 — The Solution
          </p>

          <h2 className="text-center font-syne font-extrabold text-3xl md:text-[46px] leading-tight mb-5 text-white max-w-3xl mx-auto">
            A spiritual hub designed for{' '}
            <span style={{ color: '#D4AF7A' }}>Muslims</span>, by{' '}
            <span style={{ color: '#D4AF7A' }}>Muslims</span>
          </h2>

          <p className="text-center font-dm text-sm md:text-base max-w-2xl mx-auto mb-14" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Sukoon brings together prayer tracking, Quran reading, dhikr, journaling, and community — in one unified, spiritually resonant experience. No ads. No judgment. Only peace.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl p-7 transition-all duration-300 group hover:border-t-[3px] hover:border-t-gold"
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl mb-5"
                  style={{ background: 'rgba(212, 175, 122, 0.15)' }}
                >
                  {f.icon}
                </div>
                <p className="font-syne font-bold text-lg text-white mb-3">{f.title}</p>
                <p className="font-dm text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
                  {f.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}