export default function AboutSection() {
  return (
    <section id="about" style={{ background: '#F5F0E8', padding: '80px 40px', position: 'relative', overflow: 'hidden' }}>
      <p className="section-label" style={{ marginBottom: 40, position: 'relative', zIndex: 1 }}>
        // ABOUT ME
      </p>

      {/* Two columns */}
      <div style={{ display: 'flex', gap: 48, alignItems: 'flex-start', position: 'relative', zIndex: 1 }}>
        {/* Left */}
        <div style={{ flex: 1, maxWidth: 540 }}>
          <h2 style={{ fontFamily: "'DM Serif Display'", fontSize: 40, color: '#2C1F0E', lineHeight: 1.1, margin: 0 }}>
            Hi, I'm AyUsh!
          </h2>
          <p style={{ fontFamily: "'IBM Plex Mono'", fontSize: 11, color: '#9C8B6E', marginTop: 8 }}>
            Product Designer · Pune, India
          </p>
          <p style={{ fontFamily: "'DM Sans'", fontSize: 15, color: '#2C1F0E', lineHeight: 1.75, marginTop: 20, maxWidth: 520 }}>
            I started in pharmacy — learning how systems interact,
            how small doses create large effects, how clarity saves lives.
            I brought that same thinking into product design. Now I'm
            building toward Product design and development: the space
            where interfaces are both designed and built with intent.
          </p>
          <div style={{ marginTop: 24, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
              ['Learning', 'Design engineering'],
              ['Reading', 'Design systems · interaction patterns'],
              ['Based in', 'Pune, Maharashtra'],
            ].map(([label, value]) => (
              <div key={label} style={{ display: 'flex', gap: 12 }}>
                <span style={{ fontFamily: "'IBM Plex Mono'", fontSize: 12, color: '#9C8B6E', minWidth: 72 }}>{label}</span>
                <span style={{ fontFamily: "'IBM Plex Mono'", fontSize: 12, color: '#2C1F0E' }}>{value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Photo */}
        <div style={{ position: 'relative', flexShrink: 0, marginLeft: 'auto', paddingRight: 10 }}>
          <img
            src="/botanical-red.png"
            alt=""
            style={{
              position: 'absolute',
              top: -72,
              right: -20,
              width: 180,
              zIndex: 0,
              pointerEvents: 'none',
              opacity: 0.95,
            }}
          />
          <div style={{
            width: 260, height: 260, borderRadius: 40, background: '#E8E0D0',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 48, color: '#9C8B6E',
            position: 'relative', zIndex: 1,
          }}>
            <img src="/avatar.jpg" alt="Ayush Somwanshi"
              style={{ width: 260, height: 260, objectFit: 'cover', borderRadius: 40, display: 'block', position: 'relative', zIndex: 1 }}
              onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
            />
          </div>
        </div>
      </div>

      {/* Art section */}
      <div style={{ marginTop: 64, position: 'relative', zIndex: 1 }}>
        <p className="section-label" style={{ marginBottom: 20 }}>// ART</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
          {[
            { src: '/art-1.jpg', caption: 'Drawing' },
            { src: '/art-2.jpg', caption: 'Ganesh Idol' },
            { src: '/art-3.jpg', caption: 'Robo Art' },
          ].map(item => (
            <div key={item.caption}>
              <div style={{ aspectRatio: '3/4', borderRadius: 10, overflow: 'hidden', background: '#E8E0D0' }}>
                <img src={item.src} alt={item.caption}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
                />
              </div>
              <p style={{ fontFamily: "'IBM Plex Mono'", fontSize: 10, color: '#9C8B6E', marginTop: 8 }}>{item.caption}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Photos row */}
      <div style={{ marginTop: 40, display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12, position: 'relative', zIndex: 1 }}>
        {['/photo-1.jpg', '/photo-2.jpg', '/photo-3.jpg', '/photo-4.jpg'].map((src, i) => (
          <div key={i} style={{ borderRadius: 8, overflow: 'hidden', background: '#E8E0D0' }}>
            <img src={src} alt={`Photo ${i + 1}`}
              style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'unset' }}
              onError={e => { (e.currentTarget as HTMLImageElement).style.display = 'none'; }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
