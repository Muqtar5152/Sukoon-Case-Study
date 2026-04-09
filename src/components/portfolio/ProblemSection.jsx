import SectionNumber from './SectionNumber';

export default function ProblemSection() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <SectionNumber number="02" label="The Problem" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Pull quote */}
          <div className="fade-up">
            <blockquote
              className="font-syne font-bold text-xl md:text-[28px] leading-snug pl-6"
              style={{
                borderLeft: '4px solid #6E5F46',
                color: '#2D2416',
              }}
            >
              "Muslims struggle in silence — not because they lack faith, but because they{' '}
              <span style={{ color: '#6E5F46' }}>lack tools</span>."
            </blockquote>
          </div>

          {/* Paragraphs */}
          <div className="fade-up space-y-5">
            <p className="font-dm text-[15px] leading-[1.85]" style={{ color: '#595959' }}>
              Muslims across the world maintain incredible spiritual discipline — 5 daily prayers, Quran recitation, dhikr, fasting — yet they do it without any intelligent system. Prayer times are managed through push notifications. Habit tracking is done through screenshots or notebooks. Reflection has no home.
            </p>
            <p className="font-dm text-[15px] leading-[1.85]" style={{ color: '#595959' }}>
              The result: inconsistency, guilt, isolation, and spiritual disconnection. A busy professional forgets Fajr. A student doesn't prioritize Quran. A convert feels overwhelmed and lost. The gap isn't faith — it's infrastructure.
            </p>
            <p className="font-dm text-[15px] leading-[1.85]" style={{ color: '#595959' }}>
              Existing Islamic apps either: (1) treat Islam like just another habit app, stripping away spiritual meaning, OR (2) overload users with ads, overwhelming UI, and non-Muslim-centered design. Neither serves the community authentically.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}