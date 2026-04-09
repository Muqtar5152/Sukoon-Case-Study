import SectionNumber from './SectionNumber';

const stats = [
  { label: 'My Role', value: 'Design Strategy + UX Research + Visual Design + User Testing' },
  { label: 'Duration', value: '4 Weeks' },
  { label: 'Tools', value: 'Figma · Miro · Google Forms' },
  { label: 'Platform', value: 'Mobile App (iOS & Android)' },
];

export default function ProjectSnapshot() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <SectionNumber number="01" label="Project Snapshot" />

        <div className="fade-up grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(0,0,0,0.07)' }}>
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="bg-white p-6 transition-all duration-300 hover:-translate-y-1"
              style={{
                borderRight: i < 3 ? '1px solid rgba(0,0,0,0.07)' : 'none',
                borderBottom: '1px solid rgba(0,0,0,0.07)',
              }}
            >
              <p className="font-dm text-[10px] uppercase tracking-[0.12em] mb-3" style={{ color: '#888' }}>
                {stat.label}
              </p>
              <p className="font-syne font-bold text-sm leading-relaxed" style={{ color: '#2D2416' }}>
                {stat.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}