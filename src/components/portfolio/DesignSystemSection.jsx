import SectionNumber from './SectionNumber';

const fontWeights = [
  { weight: 'Bold 700', use: 'Headings, spiritual statements & CTA' },
  { weight: 'Medium 500', use: 'Labels, nav, section intro' },
  { weight: 'Regular 400', use: 'Body copy, journal entries' },
  { weight: 'Light 300', use: 'Captions, metadata' },
];

const colors = [
  { hex: '#6E5F46', name: 'Earth Brown', use: 'Primary / Progress' },
  { hex: '#D4AF7A', name: 'Islamic Gold', use: 'Spiritual Highlights / Quotes' },
  { hex: '#2D2416', name: 'Deep Charcoal', use: 'Secondary / Headers' },
  { hex: '#1E1E1E', name: 'Charcoal', use: 'Text Primary' },
  { hex: '#FAFAF8', name: 'Warm Off-White', use: 'Page Background' },
];

export default function DesignSystemSection() {
  return (
    <section id="design-system" className="py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <SectionNumber number="07" label="Design System" />

        <h2 className="fade-up font-syne font-extrabold text-3xl md:text-[44px] leading-tight mb-12" style={{ color: '#2D2416' }}>
          Typography, Color & Islamic Design Language
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Typography card */}
          <div
            className="fade-up bg-white rounded-[20px] p-8"
            style={{ border: '1px solid rgba(0,0,0,0.07)' }}
          >
            <p className="font-syne font-extrabold text-[52px] leading-none mb-2" style={{ color: '#2D2416' }}>
              Syne
            </p>
            <p className="font-dm text-[10px] uppercase tracking-[0.12em] mb-8" style={{ color: '#888' }}>
              Primary Typeface
            </p>

            <div className="space-y-4">
              {fontWeights.map((f) => (
                <div key={f.weight} className="flex items-start gap-4">
                  <span className="font-syne font-bold text-sm shrink-0 w-28" style={{ color: '#2D2416' }}>
                    {f.weight}
                  </span>
                  <span className="font-dm text-sm" style={{ color: '#595959' }}>{f.use}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Color palette card */}
          <div
            className="fade-up bg-white rounded-[20px] p-8"
            style={{ border: '1px solid rgba(0,0,0,0.07)' }}
          >
            <p className="font-dm text-[10px] uppercase tracking-[0.12em] mb-6" style={{ color: '#888' }}>
              Color Palette
            </p>

            <div className="space-y-4">
              {colors.map((c) => (
                <div key={c.hex} className="flex items-center gap-4">
                  <div
                    className="w-11 h-11 rounded-[10px] shrink-0"
                    style={{
                      background: c.hex,
                      border: c.hex === '#FAFAF8' ? '1px solid rgba(0,0,0,0.1)' : 'none',
                    }}
                  />
                  <div>
                    <p className="font-syne font-bold text-sm" style={{ color: '#2D2416' }}>
                      {c.hex} · {c.name}
                    </p>
                    <p className="font-dm text-xs" style={{ color: '#888' }}>{c.use}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Geometric pattern note */}
        <p className="fade-up font-dm text-xs mt-8 max-w-2xl" style={{ color: '#888' }}>
          Subtle Islamic geometric patterns (1–2% opacity) used as page accents throughout — a nod to Islamic art without overwhelming the design. Applied behind section transitions, in card corners, and as visual breaks.
        </p>
      </div>
    </section>
  );
}