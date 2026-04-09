export default function FooterSection() {
  return (
    <footer id="connect" className="px-6 md:px-12 lg:px-20 pb-12">
      <div className="max-w-7xl mx-auto">
        {/* Connect section */}
        <div className="fade-up py-16 text-center">
          <p className="font-dm text-[11px] uppercase tracking-[0.15em] mb-6" style={{ color: '#888' }}>
            Let's Connect
          </p>
          <div className="flex items-center justify-center gap-8">
            <a
              href="https://www.behance.net/muqtarpasha"
              target="_blank"
              rel="noopener noreferrer"
              className="font-dm text-sm font-medium transition-colors duration-200 flex items-center gap-1.5 hover:text-earth"
              style={{ color: '#595959' }}
            >
              Behance <span>↗</span>
            </a>
            <a
              href="https://www.linkedin.com/in/mohammad-muqtar-pasha-9870a5187"
              target="_blank"
              rel="noopener noreferrer"
              className="font-dm text-sm font-medium transition-colors duration-200 flex items-center gap-1.5 hover:text-earth"
              style={{ color: '#595959' }}
            >
              LinkedIn <span>↗</span>
            </a>
            <a
              href="https://muqtar5152.github.io/Muqtar-UI-UX-website-/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-dm text-sm font-medium transition-colors duration-200 flex items-center gap-1.5 hover:text-earth"
              style={{ color: '#595959' }}
            >
              Portfolio <span>↗</span>
            </a>
          </div>
        </div>

        {/* Footer bar */}
        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
          style={{ borderTop: '1px solid rgba(0,0,0,0.07)' }}
        >
          <a href="#hero" className="font-syne font-extrabold text-lg tracking-tight" style={{ color: '#2D2416' }}>
            Sukoon
          </a>

          <p className="font-dm text-[13px]" style={{ color: '#888' }}>
            UX Case Study · 2024 · Muqtar
          </p>

          <div className="flex items-center gap-5">
            <a
              href="https://www.behance.net/muqtarpasha"
              target="_blank"
              rel="noopener noreferrer"
              className="font-dm text-[13px] transition-colors duration-200 hover:text-earth"
              style={{ color: '#595959' }}
            >
              Behance ↗
            </a>
            <a
              href="https://www.linkedin.com/in/mohammad-muqtar-pasha-9870a5187"
              target="_blank"
              rel="noopener noreferrer"
              className="font-dm text-[13px] transition-colors duration-200 hover:text-earth"
              style={{ color: '#595959' }}
            >
              LinkedIn ↗
            </a>
            <a
              href="mailto:muqtarpasha5152@gmail.com"
              className="font-dm text-[13px] transition-colors duration-200 hover:text-earth"
              style={{ color: '#595959' }}
            >
              Email ↗
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}