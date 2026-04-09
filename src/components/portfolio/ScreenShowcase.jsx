import SectionNumber from './SectionNumber';

const screens = [
  { src: 'https://picsum.photos/seed/sukoon-screen-1/600/1200', label: 'Splash Screen' },
  { src: 'https://picsum.photos/seed/sukoon-screen-2/600/1200', label: 'Welcome Onboarding' },
  { src: 'https://picsum.photos/seed/sukoon-screen-3/600/1200', label: 'Quran Intro' },
  { src: 'https://picsum.photos/seed/sukoon-screen-4/600/1200', label: 'Tasbih Intro' },
  { src: 'https://picsum.photos/seed/sukoon-screen-5/600/1200', label: 'Radio Intro' },
  { src: 'https://picsum.photos/seed/sukoon-screen-6/600/1200', label: 'Home - Quran List' },
  { src: 'https://picsum.photos/seed/sukoon-screen-7/600/1200', label: 'Home - Quran Detail' },
  { src: 'https://picsum.photos/seed/sukoon-screen-8/600/1200', label: 'Surah Details' },
  { src: 'https://picsum.photos/seed/sukoon-screen-9/600/1200', label: 'Al-Fatiha Verses' },
  { src: 'https://picsum.photos/seed/sukoon-screen-10/600/1200', label: 'Hadith Screen' },
  { src: 'https://picsum.photos/seed/sukoon-screen-11/600/1200', label: 'Azkar & Tasbih' },
  { src: 'https://picsum.photos/seed/sukoon-screen-12/600/1200', label: 'Quran Radio' },
  { src: 'https://picsum.photos/seed/sukoon-screen-13/600/1200', label: 'Prayer Times' },
  { src: 'https://picsum.photos/seed/sukoon-screen-14/600/1200', label: 'Namaz Timings' },
];

export default function ScreenShowcase() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <SectionNumber number="09" label="Bringing It to Life" />

        <h2 className="fade-up font-syne font-extrabold text-3xl md:text-[44px] leading-tight mb-3" style={{ color: '#2D2416' }}>
          Complete Design System in Action
        </h2>
        <p className="fade-up font-dm text-[15px] mb-12" style={{ color: '#595959' }}>
          Explore the full prototype and interactive flows. Every screen reflects the principles outlined above.
        </p>

        {/* Screen grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-12">
          {screens.map((s) => (
            <div
              key={s.label}
              className="fade-up group rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{ border: '1px solid rgba(0,0,0,0.07)', background: '#1a1a1a' }}
            >
              <img
                src={s.src}
                alt={s.label}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                loading="lazy"
              />
              <div className="p-3 text-center" style={{ background: 'white' }}>
                <p className="font-dm text-[11px] font-medium" style={{ color: '#595959' }}>{s.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Final CTA */}
        <div
          className="fade-up rounded-2xl p-8 md:p-12 text-center"
          style={{ background: 'rgba(110, 95, 70, 0.06)', border: '1px solid rgba(110, 95, 70, 0.15)' }}
        >
          <h3 className="font-syne font-bold text-xl md:text-2xl mb-3" style={{ color: '#2D2416' }}>
            Final UI Screens
          </h3>
          <p className="font-dm text-sm mb-6 max-w-xl mx-auto" style={{ color: '#595959' }}>
            Explore the complete high-fidelity prototype and interactive flows. Every screen embodies Sukoon's commitment to spiritual clarity and user-centered Islamic design.
          </p>
          <a
            href="https://www.figma.com/design/RQNPzsQcZdIlOlc0m8re84/Sukoon-Cs-and-UI?node-id=0-1&t=Wme6wZOdytCOg9gN-1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-syne font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-[1.02]"
            style={{ background: '#6E5F46', color: '#FAFAF8' }}
          >
            View Prototype <span className="text-base">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}