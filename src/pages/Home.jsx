import { useEffect } from 'react';
import StickyNav from '../components/portfolio/StickyNav';
import HeroSection from '../components/portfolio/HeroSection';
import ProjectSnapshot from '../components/portfolio/ProjectSnapshot';
import ProblemSection from '../components/portfolio/ProblemSection';
import ResearchSection from '../components/portfolio/ResearchSection';
import PersonasSection from '../components/portfolio/PersonasSection';
import SolutionSection from '../components/portfolio/SolutionSection';
import DesignDecisions from '../components/portfolio/DesignDecisions';
import ProductPrinciples from '../components/portfolio/ProductPrinciples';
import DesignSystemSection from '../components/portfolio/DesignSystemSection';
import InfoArchitecture from '../components/portfolio/InfoArchitecture';
import ScreenShowcase from '../components/portfolio/ScreenShowcase';
import OutcomesSection from '../components/portfolio/OutcomesSection';
import FooterSection from '../components/portfolio/FooterSection';

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
    );

    const fadeEls = document.querySelectorAll('.fade-up');
    fadeEls.forEach((el) => observer.observe(el));

    return () => {
      fadeEls.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="islamic-pattern-bg min-h-screen" style={{ background: '#FAFAF8' }}>
      <StickyNav />
      <HeroSection />
      <ProjectSnapshot />
      <ProblemSection />
      <ResearchSection />
      <PersonasSection />
      <SolutionSection />
      <DesignDecisions />
      <ProductPrinciples />
      <DesignSystemSection />
      <InfoArchitecture />
      <ScreenShowcase />
      <OutcomesSection />
      <FooterSection />
    </div>
  );
}