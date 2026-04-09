import SectionNumber from './SectionNumber';

const insights = [
  {
    icon: '🤲',
    stat: '90%',
    title: 'Struggle with consistency',
    body: "Even the most disciplined users miss prayers, skip Quran, or forget dhikr. The barrier isn't intention — it's no intelligent reminders or tracking system.",
  },
  {
    icon: '📱',
    stat: '65%',
    title: 'Use 3+ apps for spirituality',
    body: 'Prayer apps + Quran readers + reminder apps + journaling tools. No unified Islamic experience. Users waste time context-switching instead of focusing on worship.',
  },
  {
    icon: '🕌',
    stat: '88%',
    title: 'Want a Muslim-centered app',
    body: "Generic productivity apps feel soul-less. Muslims want an app that *understands* Islamic concepts, respects privacy, includes authentic Islamic content, and feels spiritually uplifting — not clinical.",
  },
];

const quotes = [
  {
    text: "I want to pray on time, but I forget. My phone reminds me about meetings but not salah. It's backwards.",
    label: '6 of 8 interviews · Research Q1',
  },
  {
    text: "I read Quran randomly, but I have no system. I don't track progress or understand what I'm learning. I need a guide, not just a reader.",
    label: '7 of 8 interviews · Research Q2',
  },
  {
    text: "Spiritual apps feel like they're designed for non-Muslims. Where are the duas? Where's the respect for Islam? I want something that *gets* my faith.",
    label: 'Direct feedback · Interview Q4',
  },
];

export default function ResearchSection() {
  return (
    <section id="research" className="py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <SectionNumber number="03" label="Research & Insights" />

        <h2 className="fade-up font-syne font-extrabold text-3xl md:text-[52px] leading-tight mb-4 max-w-3xl" style={{ color: '#2D2416' }}>
          What 29 Muslims told us about their spiritual struggles
        </h2>
        <p className="fade-up font-dm text-[15px] mb-4 max-w-2xl" style={{ color: '#595959' }}>
          Interviews + surveys revealed patterns the community has been experiencing for years.
        </p>
        <p className="fade-up font-dm text-xs mb-12" style={{ color: '#888' }}>
          29 respondents · 8 in-depth interviews · 21 survey responses · 4 geographic regions · Age range 18–45
        </p>

        {/* Insight cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {insights.map((card) => (
            <div
              key={card.title}
              className="fade-up bg-white rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 group"
              style={{
                border: '1px solid rgba(0,0,0,0.07)',
              }}
            >
              <div className="text-2xl mb-4">{card.icon}</div>
              <p className="font-syne font-extrabold text-[44px] leading-none mb-3" style={{ color: '#6E5F46' }}>
                {card.stat}
              </p>
              <p className="font-syne font-bold text-base mb-2" style={{ color: '#2D2416' }}>
                {card.title}
              </p>
              <p className="font-dm text-sm leading-relaxed" style={{ color: '#595959' }}>
                {card.body}
              </p>
              {/* Gold top accent on hover */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gold rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Quote bubbles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {quotes.map((q, i) => (
            <div
              key={i}
              className="fade-up rounded-2xl p-6 pl-7"
              style={{
                background: 'rgba(110, 95, 70, 0.06)',
                border: '1px solid rgba(110, 95, 70, 0.15)',
                borderLeft: '3px solid #D4AF7A',
              }}
            >
              <p className="font-dm text-sm italic leading-relaxed mb-4" style={{ color: '#595959' }}>
                "{q.text}"
              </p>
              <p className="font-dm text-[10px] uppercase tracking-[0.1em] font-bold" style={{ color: '#6E5F46' }}>
                {q.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}