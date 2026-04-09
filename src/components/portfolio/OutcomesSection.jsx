import SectionNumber from './SectionNumber';

const whatsNext = [
  'Integrate with Canvas/Google Classroom for students to sync academic deadlines',
  'Launch community features — private peer encouragement groups without social media toxicity',
  'Add family/household tracking — parents can encourage children\'s spiritual growth without surveillance',
  'Explore wearable integration — smartwatch reminders and haptic feedback for silent prayer alerts',
];

const learnings = [
  {
    bold: 'Respect beats features.',
    text: 'A private, simple app built for Muslims wins over a feature-rich app designed about Muslims. Authenticity compounds.',
  },
  {
    bold: 'Privacy is a value proposition, not compliance.',
    text: "Users will pay premium prices for an app that doesn't exploit their faith or data. Make it the hero, not the footnote.",
  },
  {
    bold: 'Spiritual design matters.',
    text: "Aesthetic + meaning together create adoption. Browns and gold aren't cosmetic — they're part of the product's promise.",
  },
  {
    bold: 'One app, one home.',
    text: 'Breaking users\' needs into "prayer," "Quran," "journaling" is a business decision, not a design one. Unification was the breakthrough.',
  },
  {
    bold: 'Behavior over intention.',
    text: 'Users intend to pray. Systems that remove friction matter more than motivation speeches.',
  },
];

export default function OutcomesSection() {
  return (
    <section id="outcomes" className="py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <SectionNumber number="10" label="What We Learned & What's Next" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* What's Next */}
          <div
            className="fade-up bg-white rounded-[20px] p-7 md:p-8"
            style={{ border: '1px solid rgba(0,0,0,0.07)' }}
          >
            <h3 className="font-syne font-bold text-xl mb-6" style={{ color: '#2D2416' }}>
              What's Next for Sukoon
            </h3>
            <ul className="space-y-4">
              {whatsNext.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ background: '#6E5F46' }} />
                  <p className="font-dm text-sm leading-relaxed" style={{ color: '#595959' }}>{item}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Design Learnings */}
          <div
            className="fade-up bg-white rounded-[20px] p-7 md:p-8"
            style={{ border: '1px solid rgba(0,0,0,0.07)' }}
          >
            <h3 className="font-syne font-bold text-xl mb-6" style={{ color: '#2D2416' }}>
              Key Design Learnings
            </h3>
            <ul className="space-y-4">
              {learnings.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full mt-2 shrink-0" style={{ background: '#D4AF7A' }} />
                  <p className="font-dm text-sm leading-relaxed" style={{ color: '#595959' }}>
                    <strong className="font-bold" style={{ color: '#2D2416' }}>{item.bold}</strong>{' '}
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}