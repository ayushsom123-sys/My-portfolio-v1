import BlisterPack from './BlisterPack';

export default function HeroSection() {
  return (
    <section id="hero" style={{ background: '#F5F0E8', minHeight: 812, position: 'relative', overflow: 'hidden' }}>
      {/* Content */}
      <div className="hero-content" style={{ maxWidth: 560, margin: '0 auto', paddingTop: 80, paddingBottom: 64, paddingLeft: 16, paddingRight: 16 }}>
        <p className="section-label" style={{ marginBottom: 20 }}>
          // A BIT ABOUT ME
        </p>

        {/* RX PRESCRIPTION CARD */}
        <div className="rx-lines" style={{
          background: '#1C1612',
          border: '0.8px solid rgba(200,150,32,0.18)',
          borderRadius: 14, padding: 22, marginBottom: 8, overflow: 'visible', position: 'relative',
        }}>
          <img
            src="/botanical-top.png"
            alt=""
            className="botanical-top"
            style={{
              position: 'absolute',
              top: -100,
              right: -14,
              width: 92,
              zIndex: 10,
              pointerEvents: 'none',
              opacity: 0.95,
            }}
          />

          {/* Top row */}
          <div className="rx-top-row" style={{
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'flex-start', paddingBottom: 12, marginBottom: 12,
            borderBottom: '0.5px solid rgba(200,150,32,0.18)',
          }}>
            <span style={{ fontFamily: "'DM Serif Display'", fontSize: 48, lineHeight: 1, color: '#EDE8DF' }}>℞</span>
            <div className="rx-clinic-text" style={{
              textAlign: 'right', fontFamily: "'IBM Plex Mono'",
              fontSize: 10.5, color: '#B8A890', lineHeight: 1.8,
            }}>
              Ayush Somwanshi · Pharmacist → Product Designer<br />
              Pune, Maharashtra · Licence No. UI/UX-2026-001
            </div>
          </div>

          {/* Fields */}
          {[
            ['PATIENT', 'The Design Industry'],
            ['DIAGNOSIS', 'Acute UX deficiency · Chronic design debt · Interface inflammation'],
            ['PRESCRIPTION', 'Full stack of design skills (8 capsules) — take as directed below'],
          ].map(([label, value]) => (
            <div key={label} style={{ marginBottom: 10 }}>
              <span style={{
                display: 'block', fontFamily: "'IBM Plex Mono'", fontSize: 9.5,
                textTransform: 'uppercase', letterSpacing: '0.1em',
                color: '#8B7355', marginBottom: 3,
              }}>
                {label}
              </span>
              <span style={{ fontFamily: "'IBM Plex Mono'", fontSize: 12.5, color: '#EDE8DF', lineHeight: 1.6 }}>
                {value}
              </span>
            </div>
          ))}

          {/* Footer row */}
          <div className="rx-footer-row" style={{
            display: 'flex', justifyContent: 'space-between',
            paddingTop: 12, marginTop: 12,
            borderTop: '0.5px dashed rgba(200,150,32,0.25)',
            fontFamily: "'IBM Plex Mono'", fontSize: 9.5, color: '#8B7355',
          }}>
            <span>DATE: MARCH 2026</span>
            <span>REFILLS: ∞</span>
            <span>POP EACH PILL TO READ DOSAGE</span>
          </div>
        </div>

        {/* BLISTER PACK */}
        <BlisterPack />

        {/* Warning */}
        <p style={{
          fontFamily: "'IBM Plex Mono'", fontSize: 10.5,
          color: '#9C8B6E', textAlign: 'center', marginTop: 18,
        }}>
          ⚠ Warning: May cause significantly improved user experiences.
          Side effects include better products.
        </p>

        {/* Scroll arrow */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 16 }}>
          <svg width="20" height="20" viewBox="0 0 24 24"
            fill="none" stroke="#9C8B6E" strokeWidth="2"
            style={{ animation: 'bounce 2s infinite' }}>
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>
    </section>
  );
}
