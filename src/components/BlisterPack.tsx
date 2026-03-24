import { useState } from 'react';

const skills = [
  { name: 'Figma', dose: '500mg', freq: 'Daily', note: 'Primary design env. Best with dark mode enabled.', c1: '#7F77DD', c2: '#534AB7' },
  { name: 'Design Systems', dose: '250mg', freq: 'As needed', note: 'Prevents UI inconsistency. Do not skip doses.', c1: '#378ADD', c2: '#185FA5' },
  { name: 'Prototyping', dose: '100mg', freq: 'Per sprint', note: 'Brings static frames to life.', c1: '#1D9E75', c2: '#0F6E56' },
  { name: 'User Research', dose: '50mg', freq: 'Pre-design', note: 'Active ingredient: empathy. Take first.', c1: '#EF9F27', c2: '#BA7517' },
  { name: 'Next.js', dose: '150mg', freq: 'Daily', note: 'Bridges design to production code.', c1: '#888780', c2: '#5F5E5A' },
  { name: 'Tailwind CSS', dose: '75mg', freq: 'With Next.js', note: 'Rapid styling. Zero known side effects.', c1: '#5DCAA5', c2: '#1D9E75' },
  { name: 'Cursor AI', dose: '200mg', freq: 'Continuous', note: 'AI-assisted dev. Warning: habit forming.', c1: '#D85A30', c2: '#993C1D' },
  { name: 'Systems Thinking', dose: 'Innate mg', freq: 'Always active', note: 'Trained by pharmacology. Every interaction is a system.', c1: '#B5D4F4', c2: '#185FA5' },
];

export default function BlisterPack() {
  const [flipped, setFlipped] = useState<Set<number>>(new Set());
  const toggle = (i: number) =>
    setFlipped(prev => {
      const n = new Set(prev);
      n.has(i) ? n.delete(i) : n.add(i);
      return n;
    });
  const allDone = flipped.size === 8;

  return (
    <div className="rx-lines" style={{
      background: '#1C1612',
      border: '0.8px solid rgba(200,150,32,0.18)',
      borderRadius: 14, padding: 20, position: 'relative', overflow: 'hidden',
    }}>
      {/* Header */}
      <div style={{
        display: 'flex', justifyContent: 'space-between', marginBottom: 16,
        fontFamily: "'IBM Plex Mono'", fontSize: 9.5,
        textTransform: 'uppercase', letterSpacing: '0.08em', color: '#8B7355',
      }}>
        <span>DESIGN SKILLS · 8 CAPSULES · RX-001</span>
        <span>{flipped.size} / 8 DISPENSED</span>
      </div>

      {/* Pill Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 8 }}>
        {skills.map((s, i) => (
          <div
            key={i}
            className={flipped.has(i) ? 'flipped' : ''}
            style={{ height: 96, perspective: 600, cursor: 'pointer', position: 'relative' }}
            onClick={() => toggle(i)}
          >
            <div className="pill-inner" style={{ width: '100%', height: '100%' }}>
              {/* Front */}
              <div className="pill-front" style={{
                background: '#231A12',
                border: '0.5px solid rgba(200,150,32,0.18)',
                borderRadius: 8,
                display: 'flex', flexDirection: 'column',
                alignItems: 'center', justifyContent: 'center', gap: 8,
              }}>
                <div style={{ display: 'flex', width: 48, height: 20, borderRadius: 10, overflow: 'hidden' }}>
                  <div style={{ flex: 1, background: s.c1 }} />
                  <div style={{ flex: 1, background: s.c2 }} />
                </div>
                <span style={{
                  fontFamily: "'IBM Plex Mono'", fontSize: 8.5,
                  textTransform: 'uppercase', letterSpacing: '0.06em',
                  color: '#8B7355', textAlign: 'center',
                  padding: '0 4px', lineHeight: 1.3,
                }}>
                  {s.name}
                </span>
              </div>

              {/* Back */}
              <div className="pill-back" style={{
                background: '#231A12',
                border: `0.5px solid ${s.c1}40`,
                borderRadius: 8, padding: 10,
                display: 'flex', flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
                <div>
                  <p style={{ fontFamily: "'DM Sans'", fontSize: 11, fontWeight: 500, color: '#EDE8DF', lineHeight: 1.2, margin: 0 }}>{s.name}</p>
                  <p style={{ fontFamily: "'IBM Plex Mono'", fontSize: 9, color: '#B8A890', margin: '2px 0 0' }}>{s.dose}</p>
                </div>
                <p style={{ fontFamily: "'IBM Plex Mono'", fontSize: 8.5, color: '#8B7355', fontStyle: 'italic', lineHeight: 1.4, margin: 0 }}>
                  {s.note}
                </p>
                <span style={{
                  fontFamily: "'IBM Plex Mono'", fontSize: 8.5,
                  border: `0.5px solid ${s.c1}70`, color: s.c1,
                  padding: '2px 6px', borderRadius: 4, display: 'inline-block',
                }}>{s.freq}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dispensed Stamp */}
      {allDone && (
        <div style={{
          position: 'absolute', inset: 0, display: 'flex',
          alignItems: 'center', justifyContent: 'center',
          pointerEvents: 'none',
        }}>
          <div style={{
            border: '2px solid #22c55e', borderRadius: 4,
            padding: '6px 22px', transform: 'rotate(-12deg)', opacity: 0.85,
          }}>
            <span style={{
              fontFamily: "'IBM Plex Mono'", fontSize: 20,
              color: '#22c55e', letterSpacing: '0.18em',
              textTransform: 'uppercase',
            }}>
              DISPENSED
            </span>
          </div>
        </div>
      )}

      {/* Reset */}
      {flipped.size > 0 && (
        <button
          onClick={() => setFlipped(new Set())}
          style={{
            display: 'block', margin: '14px auto 0',
            fontFamily: "'IBM Plex Mono'", fontSize: 9.5,
            textTransform: 'uppercase', letterSpacing: '0.08em',
            color: '#8B7355', background: 'transparent',
            border: '0.5px solid rgba(200,150,32,0.18)',
            borderRadius: 8, padding: '5px 14px', cursor: 'pointer',
          }}
        >
          ↩ reset prescription
        </button>
      )}
    </div>
  );
}
