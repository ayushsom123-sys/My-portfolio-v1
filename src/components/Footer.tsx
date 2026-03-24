export default function Footer() {
  return (
    <footer style={{
      background: '#1C1612',
      borderTop: '0.5px solid rgba(200,150,32,0.20)',
      padding: '60px 80px 40px',
    }}>
      <h2 style={{
        fontFamily: "'DM Serif Display'", fontSize: 42,
        color: '#EDE8DF', textAlign: 'center',
        margin: '0 0 32px',
      }}>
        Let's build something.
      </h2>

      {/* Nav links */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 32, marginBottom: 16 }}>
        {[['WORK', '#work'], ['ABOUT', '#about'], ['RESUME', 'https://drive.google.com/file/d/1fhWi5B_ZcUODWnDn_jTUvqqhfj_Rj2nR/view?usp=sharing']].map(([label, href]) => (
          <a key={label} href={href}
            target={label === 'RESUME' ? '_blank' : undefined}
            rel={label === 'RESUME' ? 'noopener noreferrer' : undefined}
            style={{
              fontFamily: "'IBM Plex Mono'", fontSize: 14,
              color: '#8B7355', textDecoration: 'none',
              transition: 'color 200ms',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#EDE8DF')}
            onMouseLeave={e => (e.currentTarget.style.color = '#8B7355')}
          >
            {label}
          </a>
        ))}
      </div>

      {/* Social icons */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 20 }}>
        <a href="https://www.linkedin.com/in/ayushsomwanshi/" target="_blank" rel="noopener noreferrer">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8B7355" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'stroke 200ms' }} onMouseEnter={e => e.currentTarget.style.stroke = '#EDE8DF'} onMouseLeave={e => e.currentTarget.style.stroke = '#8B7355'}>
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
          </svg>
        </a>
        <a href="https://github.com/ayushsom123-sys" target="_blank" rel="noopener noreferrer">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8B7355" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'stroke 200ms' }} onMouseEnter={e => e.currentTarget.style.stroke = '#EDE8DF'} onMouseLeave={e => e.currentTarget.style.stroke = '#8B7355'}>
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
          </svg>
        </a>
        <a href="mailto:ayushsom07@gmail.com">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8B7355" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'stroke 200ms' }} onMouseEnter={e => e.currentTarget.style.stroke = '#EDE8DF'} onMouseLeave={e => e.currentTarget.style.stroke = '#8B7355'}>
            <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
          </svg>
        </a>
      </div>

      {/* Bottom row */}
      <div style={{
        display: 'flex', justifyContent: 'space-between',
        marginTop: 40, paddingTop: 20,
        borderTop: '0.5px solid rgba(200,150,32,0.10)',
        fontFamily: "'IBM Plex Mono'", fontSize: 10, color: '#5C4A30',
      }}>
        <span>Designed &amp; built by Ayush Somwanshi · 2025</span>
        <span>B.Pharm → Product Designer → Design Engineer</span>
      </div>
    </footer>
  );
}
