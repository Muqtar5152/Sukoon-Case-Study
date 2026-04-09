export default function HeroSection() {
  const tags = [
    'UX Research', 'Islamic Product', 'Habit Tracker',
    'Mobile App', '4 Weeks', 'Faith-Centric Design'
  ];

  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center pt-14 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto w-full">
        {/* Top label */}
        <p className="fade-up font-dm text-[11px] uppercase tracking-[0.15em] mb-6" style={{ color: '#888' }}>
          Case Study — 01 · UX / Product Design
        </p>

        {/* Giant headline */}
        <h1
          className="fade-up font-syne font-extrabold leading-none mb-5"
          style={{
            fontSize: 'clamp(64px, 10vw, 130px)',
            letterSpacing: '-4px',
            color: '#2D2416',
          }}
        >
          Sukoon
        </h1>

        {/* Subheadline */}
        <p className="fade-up font-syne font-normal text-lg md:text-2xl mb-8 max-w-2xl" style={{ color: '#595959' }}>
          Designing mindfulness for Muslims — where faith meets daily habit.
        </p>

        {/* Tag pills */}
        <div className="fade-up flex flex-wrap gap-2.5 mb-12">
          {tags.map((tag) => (
            <span
              key={tag}
              className="font-dm text-[11px] uppercase tracking-[0.05em] px-4 py-2 rounded-full"
              style={{
                border: '1px solid rgba(110, 95, 70, 0.3)',
                background: 'rgba(110, 95, 70, 0.08)',
                color: '#2D2416',
              }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Preview image */}
        <div className="fade-up mb-8">
          <img
            src="https://picsum.photos/seed/sukoon-preview/1600/900"
            alt="Sukoon app preview showing multiple screens"
            className="w-full max-w-4xl rounded-2xl"
            style={{ border: '1px solid rgba(0,0,0,0.07)' }}
          />
        </div>

        {/* CTA */}
        <a
          href="https://www.figma.com/design/RQNPzsQcZdIlOlc0m8re84/Sukoon-Cs-and-UI?node-id=0-1&t=Wme6wZOdytCOg9gN-1"
          target="_blank"
          rel="noopener noreferrer"
          className="fade-up inline-flex items-center gap-2 font-syne font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-[1.02]"
          style={{
            background: '#6E5F46',
            color: '#FAFAF8',
          }}
        >
          View Prototype <span className="text-base">↗</span>
        </a>
      </div>
    </section>
  );
}