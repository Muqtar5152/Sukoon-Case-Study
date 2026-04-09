import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Overview', href: '#hero' },
  { label: 'Research', href: '#research' },
  { label: 'Personas', href: '#personas' },
  { label: 'Solution', href: '#solution' },
  { label: 'Design', href: '#design-system' },
  { label: 'Outcomes', href: '#outcomes' },
  { label: 'Connect', href: '#connect' },
];

export default function StickyNav() {
  const [visible, setVisible] = useState(true);
  const [lastY, setLastY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setVisible(y < 100 || y < lastY);
      setLastY(y);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [lastY]);

  const handleClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 h-14 transition-transform duration-300 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      }`}
      style={{
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)',
        backgroundColor: 'rgba(250, 250, 248, 0.85)',
        borderBottom: '1px solid rgba(0,0,0,0.07)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <a href="#hero" onClick={(e) => handleClick(e, '#hero')} className="font-syne font-extrabold text-lg tracking-tight" style={{ color: '#2D2416' }}>
          Sukoon
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="font-dm text-[11px] uppercase tracking-[0.1em] transition-colors duration-200 hover:text-earth"
              style={{ color: '#888' }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} style={{ color: '#2D2416' }} /> : <Menu size={20} style={{ color: '#2D2416' }} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden absolute top-14 left-0 right-0 py-4 px-6 flex flex-col gap-4"
          style={{
            backdropFilter: 'blur(16px)',
            backgroundColor: 'rgba(250, 250, 248, 0.95)',
            borderBottom: '1px solid rgba(0,0,0,0.07)',
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="font-dm text-xs uppercase tracking-[0.1em] py-2 transition-colors hover:text-earth"
              style={{ color: '#888' }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}