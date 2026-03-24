interface Props {
  title: string;
  description: string;
  tags: string[];
  href: string;
  image: string;
}

export default function CaseStudyCard({ title, description, tags, href, image }: Props) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
      <div
        style={{
          background: '#FAF7F2',
          border: '0.8px solid rgba(180,140,80,0.20)',
          borderRadius: 12, overflow: 'hidden', cursor: 'pointer',
          transition: 'border-color 200ms ease',
        }}
        onMouseEnter={e => (e.currentTarget.style.borderColor = 'rgba(180,140,80,0.40)')}
        onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(180,140,80,0.20)')}
      >
        {/* Image */}
        <div style={{ height: 360, position: 'relative', background: '#E8E0D0' }}>
          <img src={image} alt={title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
          />
        </div>

        {/* Content */}
        <div style={{ padding: '20px 24px 24px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <h3 style={{ fontFamily: "'DM Sans'", fontWeight: 500, fontSize: 20, color: '#2C1F0E', margin: 0 }}>{title}</h3>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
              {tags.map(tag => (
                <span key={tag} style={{
                  background: '#F0E8D8',
                  border: '0.5px solid rgba(180,140,80,0.3)',
                  color: '#8B6840',
                  fontFamily: "'IBM Plex Mono'", fontSize: 10,
                  padding: '3px 10px', borderRadius: 4,
                }}>{tag}</span>
              ))}
            </div>
          </div>
          <p style={{ fontFamily: "'DM Sans'", fontSize: 14, color: '#9C8B6E', marginTop: 6, lineHeight: 1.5 }}>{description}</p>
          <p style={{ fontFamily: "'IBM Plex Mono'", fontSize: 11, color: '#8B6840', marginTop: 12 }}>View Case Study →</p>
        </div>
      </div>
    </a>
  );
}
