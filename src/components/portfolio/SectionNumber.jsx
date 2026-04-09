export default function SectionNumber({ number, label }) {
  return (
    <div className="flex items-center gap-3 mb-8 fade-up">
      <span className="font-syne font-bold text-xs tracking-widest uppercase text-earth">
        {number}
      </span>
      <div className="w-8 h-px bg-earth" />
      <span className="font-syne font-bold text-xs tracking-widest uppercase text-earth">
        {label}
      </span>
    </div>
  );
}