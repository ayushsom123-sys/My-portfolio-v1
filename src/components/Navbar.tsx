export default function Navbar() {
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      height: 78, padding: '0 40px',
      background: 'transparent', backdropFilter: 'blur(8px)',
    }}>
      {/* Left */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <p style={{ fontFamily: "'DM Sans'", fontWeight: 500, fontSize: 18, color: '#2C1F0E', margin: 0 }}>
          Ayush Somwanshi
        </p>
        <p style={{ fontFamily: "'IBM Plex Mono'", fontSize: 10, textTransform: 'uppercase', letterSpacing: '0.08em', color: '#9C8B6E', margin: 0 }}>
          PRODUCT DESIGNER
        </p>
      </div>

      {/* Center */}
      <div style={{ display: 'flex', gap: 32 }}>
        {[['WORK', '#work'], ['ABOUT', '#about'], ['RESUME', 'https://drive.google.com/file/d/1fhWi5B_ZcUODWnDn_jTUvqqhfj_Rj2nR/view?usp=sharing']].map(([label, href]) => (
          <a key={label} href={href}
            target={label === 'RESUME' ? '_blank' : undefined}
            rel={label === 'RESUME' ? 'noopener noreferrer' : undefined}
            style={{ fontFamily: "'IBM Plex Mono'", fontSize: 14, color: '#2C1F0E', textDecoration: 'none', transition: 'color 200ms', cursor: 'pointer' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#8B6840')}
            onMouseLeave={e => (e.currentTarget.style.color = '#2C1F0E')}
          >
            {label}
          </a>
        ))}
      </div>

      {/* Right */}
      <div style={{ display: 'flex', gap: 20, alignItems: 'center' }}>
        <a href="https://www.linkedin.com/in/ayushsomwanshi/" target="_blank" rel="noopener noreferrer">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9C8B6E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'stroke 200ms' }} onMouseEnter={e => e.currentTarget.style.stroke = '#2C1F0E'} onMouseLeave={e => e.currentTarget.style.stroke = '#9C8B6E'}>
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
          </svg>
        </a>
        <a href="https://github.com/ayushsom123-sys" target="_blank" rel="noopener noreferrer">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9C8B6E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'stroke 200ms' }} onMouseEnter={e => e.currentTarget.style.stroke = '#2C1F0E'} onMouseLeave={e => e.currentTarget.style.stroke = '#9C8B6E'}>
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
          </svg>
        </a>
        <a href="mailto:ayushsom07@gmail.com">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9C8B6E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transition: 'stroke 200ms' }} onMouseEnter={e => e.currentTarget.style.stroke = '#2C1F0E'} onMouseLeave={e => e.currentTarget.style.stroke = '#9C8B6E'}>
            <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
          </svg>
        </a>
      </div>
    </nav>
  );
}
