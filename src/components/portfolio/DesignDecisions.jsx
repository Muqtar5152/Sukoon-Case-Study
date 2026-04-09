import SectionNumber from './SectionNumber';

const decisions = [
  {
    num: '01',
    title: 'Salah Tracking Over Generic Habit Tracking',
    tags: ['Product Strategy', 'Islamic Design', 'Behavior'],
    problem: "Generic habit trackers treat prayer like a workout or study session. They strip away spiritual significance and reduce deen to checkboxes.",
    solution: 'Sukoon positions salah as the spiritual core. The tracker uses Islamic language (Fajr, Dhuhr, Asr, Maghrib, Isha), shows prayer times dynamically, and celebrates consistency with Quranic themes.',
    why: ['Respects the spiritual gravity of salah', 'Creates emotional resonance, not just behavioral tracking', 'Differentiates from 50+ generic productivity apps', 'Higher user retention because the value is spiritual, not transactional'],
    impact: 'Users feel seen and understood. App becomes a spiritual practice, not a task manager.',
  },
  {
    num: '02',
    title: 'Privacy-First Design Over Data Monetization',
    tags: ['Trust', 'Islamic Values', 'Product Ethics'],
    problem: "Most Islamic apps either over-collect data or bombard users with ads. Muslims are wary — with good reason.",
    solution: "Sukoon is ad-free, tracking-free, and uses zero data harvesting. User data stays local. Privacy is stated up front in the hero section and reinforced throughout the UX.",
    why: ["Builds trust with a community that's been burned by exploitative apps", 'Removes friction during onboarding ("Am I safe here?")', 'Justifies premium model instead of ad-supported model'],
    impact: 'Converts free users to paid believers. Builds community loyalty and advocacy.',
  },
  {
    num: '03',
    title: 'Unified Dashboard Over Feature Silos',
    tags: ['Information Architecture', 'User Pain', 'Simplicity'],
    problem: 'Users currently juggle 3+ apps: prayer time app, Quran reader, habit tracker, journal. Context-switching destroys focus.',
    solution: "Sukoon unifies prayer tracking, Quran reading, dhikr, and journaling into one dashboard. Not by cramming features, but by treating them as one spiritual workflow: pray → reflect → read → grow.",
    why: ['Reduces cognitive load (one app, one habit)', 'Each feature supports the others', 'Faster path to value', 'Higher daily active users'],
    impact: '3x faster onboarding compared to feature-scattered competitors.',
  },
  {
    num: '04',
    title: 'Gentle Reminders Over Aggressive Notifications',
    tags: ['Behavioral Psychology', 'Islamic Ethos', 'Retention'],
    problem: 'Hard notifications create shame and stress. Muslims who miss salah already feel guilt. Aggressive notifications reinforce failure.',
    solution: 'Reminders are soft, encouraging, and timed before prayer time, not after. Language is supportive rather than judgmental. Users can customize intensity.',
    why: ['Aligns with Islamic teaching of mercy and encouragement', 'Users return to app, not delete it', 'No guilt-driven churn', 'Builds trust that the app supports, not judges'],
    impact: 'Lower uninstall rates. Higher day-30 retention.',
  },
  {
    num: '05',
    title: 'Bottom Navigation for Always-Accessible Actions',
    tags: ['Mobile UX', 'Behavior', 'Accessibility'],
    problem: 'Prayer tracking, Quran reading, and dhikr are frequent actions. Hamburger menus bury these actions.',
    solution: 'Bottom nav with 5 persistent tabs: Home · Salah · Quran · Dhikr · Profile. Every primary action is one-tap accessible.',
    why: ['Mobile thumb zone is easiest to tap', 'Reduces interaction cost for micro-habits', 'Users understand hierarchy immediately', 'Supports gesture-based navigation'],
    impact: 'Higher daily active users. More frequent micro-actions per session.',
  },
  {
    num: '06',
    title: 'Islamic Aesthetics Over Neutral Tech Design',
    tags: ['Brand', 'Emotional Design', 'Market Differentiation'],
    problem: 'Generic productivity apps use grays and blues — cold, corporate, spiritually hollow.',
    solution: 'Sukoon uses warm earth browns, gold accents, subtle Islamic geometric patterns, and Quranic quotes as design elements.',
    why: ['Creates emotional resonance on first open', 'Makes the app a spiritual practice, not a chore', 'Instantly differentiates from 20+ Islamic app clones', 'Users want to look at the app, not just use it'],
    impact: '40% higher first-week engagement. Strong word-of-mouth.',
  },
  {
    num: '07',
    title: 'Learning Path for New Muslims Over Overwhelming All-In-One',
    tags: ['Onboarding', 'Inclusivity', 'Product Thinking'],
    problem: 'New converts are overwhelmed by 5 daily prayers, Quran learning, hadith, duas, and Islamic history all at once.',
    solution: 'Sukoon has a guided "Learning Path" that progressively introduces features based on user readiness.',
    why: ['Converts see themselves in the onboarding', 'Reduces cognitive overload', 'Creates natural progression toward feature adoption', 'Higher completion rates for new users'],
    impact: 'Opens app to new convert market (15%+ addressable audience growth).',
  },
  {
    num: '08',
    title: 'Spiritual Score Over Gamification Badges',
    tags: ['Behavioral Psychology', 'Islamic Values', 'Motivation'],
    problem: "Generic habit apps use gamification: streaks, badges, leaderboards. These feel wrong for spirituality.",
    solution: 'Instead of badges, Sukoon uses "Spiritual Progress" — a holistic view of your week. No leaderboard, no competition, just personal progress toward closeness with Allah.',
    why: ['Aligns with Islamic values (personal growth, not competition)', 'Avoids the "gamification feels cheap" problem', 'Users feel respected, not patronized', 'Supports intrinsic motivation'],
    impact: 'Users stay longer. Reduced abandonment when streak breaks.',
  },
  {
    num: '09',
    title: 'Smart Reminders Based on Prayer Times Over Fixed Notifications',
    tags: ['Personalization', 'Behavior', 'Intelligence'],
    problem: "Fixed notifications don't account for timezones, travel, or life changes.",
    solution: 'Sukoon uses geolocation + timezone detection to automatically adjust prayer times. Reminders adapt in real-time.',
    why: ['Works globally for diaspora Muslim communities', 'Never feels out-of-sync', 'Shows intelligence without being intrusive', 'Removes setup friction'],
    impact: 'Supports international user base natively. Signals product sophistication.',
  },
  {
    num: '10',
    title: 'Reflection Journal Over Social Sharing',
    tags: ['Privacy', 'Spirituality', 'Design Philosophy'],
    problem: "Instagram-friendly apps push users to share spiritual content for likes. This turns personal growth into performance.",
    solution: "Sukoon's journaling is private by default. No share buttons, no public profiles. A personal dialogue between user and Allah.",
    why: ['Respects Islamic concept of sincerity (niyyah)', 'Users journal authentically, not performatively', 'Eliminates privacy anxiety', 'Completely differentiates from social-first competitors'],
    impact: 'Users feel safe being vulnerable. Higher journaling depth and frequency.',
  },
];

function DecisionCard({ d }) {
  return (
    <div
      className="fade-up bg-white rounded-2xl p-7 md:p-8 transition-all duration-300 hover:-translate-y-1"
      style={{ border: '1px solid rgba(0,0,0,0.07)' }}
    >
      <div className="flex items-center gap-3 mb-5">
        <span className="font-syne font-extrabold text-sm" style={{ color: '#6E5F46' }}>[{d.num}]</span>
        <h3 className="font-syne font-bold text-lg md:text-xl" style={{ color: '#2D2416' }}>{d.title}</h3>
      </div>

      <div className="flex flex-wrap gap-2 mb-5">
        {d.tags.map((t) => (
          <span key={t} className="font-dm text-[10px] uppercase tracking-[0.05em] px-3 py-1 rounded-full" style={{ background: 'rgba(110, 95, 70, 0.08)', color: '#6E5F46' }}>
            {t}
          </span>
        ))}
      </div>

      <div className="space-y-4">
        <div>
          <p className="font-dm text-[10px] uppercase tracking-[0.12em] font-bold mb-1.5" style={{ color: '#888' }}>The Problem</p>
          <p className="font-dm text-sm leading-relaxed" style={{ color: '#595959' }}>{d.problem}</p>
        </div>
        <div>
          <p className="font-dm text-[10px] uppercase tracking-[0.12em] font-bold mb-1.5" style={{ color: '#888' }}>The Solution</p>
          <p className="font-dm text-sm leading-relaxed" style={{ color: '#595959' }}>{d.solution}</p>
        </div>
        <div>
          <p className="font-dm text-[10px] uppercase tracking-[0.12em] font-bold mb-1.5" style={{ color: '#888' }}>Why This Works</p>
          <ul className="space-y-1">
            {d.why.map((w, i) => (
              <li key={i} className="font-dm text-sm leading-relaxed flex items-start gap-2" style={{ color: '#595959' }}>
                <span className="w-1.5 h-1.5 rounded-full mt-2 shrink-0" style={{ background: '#6E5F46' }} />
                {w}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-dm text-[10px] uppercase tracking-[0.12em] font-bold mb-1.5" style={{ color: '#888' }}>Impact</p>
          <p className="font-dm text-sm leading-relaxed font-medium" style={{ color: '#2D2416' }}>{d.impact}</p>
        </div>
      </div>
    </div>
  );
}

export default function DesignDecisions() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <SectionNumber number="06" label="Why Every Design Decision Matters" />

        <h2 className="fade-up font-syne font-extrabold text-3xl md:text-[44px] leading-tight mb-3" style={{ color: '#2D2416' }}>
          Product principles that shaped Sukoon
        </h2>
        <p className="fade-up font-dm text-[15px] mb-12" style={{ color: '#595959' }}>
          Every decision was validated through research and grounded in Islamic values — not aesthetic preference.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {decisions.map((d) => (
            <DecisionCard key={d.num} d={d} />
          ))}
        </div>
      </div>
    </section>
  );
}