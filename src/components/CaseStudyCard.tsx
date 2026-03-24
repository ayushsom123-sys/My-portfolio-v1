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
          borderRadius: 12,
          overflow: 'hidden',
          cursor: 'pointer',
          transition: 'border-color 200ms ease, transform 200ms ease, box-shadow 200ms ease',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.borderColor = 'rgba(180,140,80,0.50)';
          e.currentTarget.style.transform = 'translateY(-4px)';
          e.currentTarget.style.boxShadow = '0 12px 40px rgba(44,31,14,0.12)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.borderColor = 'rgba(180,140,80,0.20)';
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <div style={{
          width: '100%',
          background: '#F5F0E8',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px 24px 0 24px',
          boxSizing: 'border-box',
        }}>
          <img
            src={image}
            alt={title}
            style={{
              width: '100%',
              height: 'auto',
              display: 'block',
              borderRadius: '8px 8px 0 0',
              boxShadow: '0 -4px 24px rgba(44,31,14,0.10)',
            }}
            onError={e => {
              (e.currentTarget as HTMLImageElement).style.display = 'none';
            }}
          />
        </div>

        {/* Content */}
        <div style={{ padding: '20px 24px 24px' }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: 12,
          }}>
            <h3 style={{
              fontFamily: "'DM Sans'",
              fontWeight: 500,
              fontSize: 20,
              color: '#2C1F0E',
              margin: 0,
            }}>
              {title}
            </h3>
            <div style={{
              display: 'flex',
              gap: 8,
              flexWrap: 'wrap',
              justifyContent: 'flex-end',
              flexShrink: 0,
            }}>
              {tags.map(tag => (
                <span key={tag} style={{
                  background: '#F0E8D8',
                  border: '0.5px solid rgba(180,140,80,0.3)',
                  color: '#8B6840',
                  fontFamily: "'IBM Plex Mono'",
                  fontSize: 10,
                  padding: '3px 10px',
                  borderRadius: 4,
                  whiteSpace: 'nowrap',
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <p style={{
            fontFamily: "'DM Sans'",
            fontSize: 14,
            color: '#9C8B6E',
            marginTop: 6,
            lineHeight: 1.5,
          }}>
            {description}
          </p>
          <p style={{
            fontFamily: "'IBM Plex Mono'",
            fontSize: 11,
            color: '#8B6840',
            marginTop: 12,
          }}>
            View Case Study →
          </p>
        </div>
      </div>
    </a>
  );
}