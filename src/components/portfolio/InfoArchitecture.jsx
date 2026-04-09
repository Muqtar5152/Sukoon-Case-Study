import SectionNumber from './SectionNumber';

export default function InfoArchitecture() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <SectionNumber number="08" label="How Users Move Through Sukoon" />

        <h2 className="fade-up font-syne font-extrabold text-3xl md:text-[44px] leading-tight mb-12" style={{ color: '#2D2416' }}>
          Information Architecture
        </h2>

        {/* Flow diagram */}
        <div className="fade-up mb-12">
          <p className="font-dm text-[10px] uppercase tracking-[0.12em] font-bold mb-4" style={{ color: '#6E5F46' }}>
            Primary Flows
          </p>
          <div className="space-y-3">
            {[
              'Signup → Onboarding (Beginner/Existing Muslim) → Customization → Home Dashboard',
              'Home → Quick Actions (Log Prayer, Start Dhikr, Read Quran, Journal)',
              'Prayer Reminder → Open App → Mark Salah Complete → Optional: Log Reflection',
            ].map((flow, i) => (
              <div
                key={i}
                className="flex items-center gap-3 font-dm text-sm p-4 rounded-xl bg-white"
                style={{ border: '1px solid rgba(0,0,0,0.07)', color: '#595959' }}
              >
                <span className="font-syne font-bold text-xs shrink-0" style={{ color: '#6E5F46' }}>{i + 1}.</span>
                {flow}
              </div>
            ))}
          </div>
        </div>

        {/* Sitemap */}
        <div
          className="fade-up bg-white rounded-2xl p-7 md:p-10"
          style={{ border: '1px solid rgba(0,0,0,0.07)' }}
        >
          <p className="font-dm text-[10px] uppercase tracking-[0.12em] font-bold mb-6" style={{ color: '#6E5F46' }}>
            Sitemap
          </p>
          <pre className="font-dm text-xs md:text-sm leading-loose overflow-x-auto" style={{ color: '#595959' }}>
{`Home Dashboard
├── Salah Tracker
│   ├── Prayer Times (auto-synced)
│   ├── Mark Prayer Complete
│   ├── Weekly Summary
│   └── Smart Reminders Settings
├── Quran Reader
│   ├── Surah List
│   ├── Tafsir & Translation
│   ├── Bookmark & Progress
│   └── Audio Recitation
├── Dhikr Sessions
│   ├── Morning Dhikr
│   ├── Evening Dhikr
│   ├── Custom Dhikr
│   ├── Tasbih Counter
│   └── Session History
├── Reflection Journal
│   ├── New Entry
│   ├── Past Entries
│   ├── Mood Log
│   └── Private (No sharing)
├── Spiritual Progress
│   ├── Weekly Summary
│   ├── Consistency Charts
│   ├── Badges & Milestones
│   └── Growth Timeline
└── Profile & Settings
    ├── Edit Profile
    ├── Prayer Preferences
    ├── Notification Settings
    ├── Language & Theme
    ├── Privacy & Data
    └── Support & Feedback`}
          </pre>
        </div>
      </div>
    </section>
  );
}