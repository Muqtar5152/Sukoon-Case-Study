import SectionNumber from './SectionNumber';

const screens = [
  { src: '/images/sukoon/screen-01-splash.png', label: 'Splash Screen' },
  { src: '/images/sukoon/screen-02-welcome-onboarding.png', label: 'Welcome Onboarding' },
  { src: '/images/sukoon/screen-03-quran-intro.png', label: 'Quran Intro' },
  { src: '/images/sukoon/screen-04-tasbih-intro.png', label: 'Tasbih Intro' },
  { src: '/images/sukoon/screen-05-radio-intro.png', label: 'Radio Intro' },
  { src: '/images/sukoon/screen-06-home-quran-list.png', label: 'Home - Quran List' },
  { src: '/images/sukoon/screen-07-home-quran-detail.png', label: 'Home - Quran Detail' },
  { src: '/images/sukoon/screen-08-surah-details.png', label: 'Surah Details' },
  { src: '/images/sukoon/screen-09-al-fatiha-verses.png', label: 'Al-Fatiha Verses' },
  { src: '/images/sukoon/screen-10-hadith.png', label: 'Hadith Screen' },
  { src: '/images/sukoon/screen-11-azkar-tasbih.png', label: 'Azkar & Tasbih' },
  { src: '/images/sukoon/screen-12-quran-radio.png', label: 'Quran Radio' },
  { src: '/images/sukoon/screen-13-prayer-times.png', label: 'Prayer Times' },
  { src: '/images/sukoon/screen-14-namaz-timings.png', label: 'Namaz Timings' },
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