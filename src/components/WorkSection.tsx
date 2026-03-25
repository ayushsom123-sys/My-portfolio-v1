import CaseStudyCard from './CaseStudyCard';

const projects = [
  {
    title: 'VenturePulse',
    description: 'Fintech SaaS dashboard for startup investors',
    tags: ['Figma', 'Design System', 'Responsive'],
    href: 'https://www.behance.net/gallery/246187291/VenturePulse',
    image: '/venturepulse.png',
  },
  {
    title: 'FitForward',
    description: 'Helping older adolescent males improve body health and style',
    tags: ['Figma', 'E-commerce', 'Responsive'],
    href: 'https://www.behance.net/gallery/236555995/Fitforward-UX-case-study',
    image: '/fitforward.png',
  },
  {
    title: 'Mysoul App',
    description: 'Mental health app',
    tags: ['Figma', 'HealthTech', 'App'],
    href: 'https://www.behance.net/gallery/237103733/Short-design-process-Mysoul-app',
    image: '/mysoul.png',
  },
];

export default function WorkSection() {
  return (
    <section id="work" className="work-section" style={{ background: '#F5F0E8', padding: '80px 40px' }}>
      <p className="section-label" style={{ textAlign: 'center', marginBottom: 32 }}>
        // SELECTED WORK
      </p>
      <div style={{ maxWidth: 1040, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 48 }}>
        {projects.map(p => <CaseStudyCard key={p.title} {...p} />)}
      </div>
    </section>
  );
}
