import React from 'react';
import { Mail, Phone, MapPin, Download } from 'lucide-react';
import profileImg from '../assets/profile.png';

export default function About() {
  const infoItems = [
    { icon: <Mail size={16} />, label: 'Email', value: 'maheshvaishnav78499@gmail.com', href: 'mailto:maheshvaishnav78499@gmail.com' },
    { icon: <Phone size={16} />, label: 'Phone', value: '+91 XXXXXXXXXX', href: 'tel:+91XXXXXXXXXX' },
    { icon: <MapPin size={16} />, label: 'Location', value: 'Ahmedabad, India', href: '#' },
  ];

  return (
    <section id="about" className="section reveal" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <div className="section-header">
          <h2>About Me</h2>
          <p>Get to know my background, interest in technology, and developer workflow.</p>
        </div>

        <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '4rem', alignItems: 'center' }}>
          {/* Profile Photo / Graphic */}
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <div
              style={{
                position: 'relative',
                width: '320px',
                height: '320px',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: 'var(--shadow)',
                border: '4px solid var(--border)',
              }}
              className="about-image-wrapper"
            >
              <img
                src={profileImg}
                alt="Mahesh Vaishnav profile illustration"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease',
                }}
                className="profile-img"
              />
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'linear-gradient(to top, rgba(11, 15, 25, 0.4) 0%, transparent 100%)',
                }}
              />
            </div>

            {/* Glowing borders behind image */}
            <div
              style={{
                position: 'absolute',
                top: '-15px',
                left: '15px',
                width: '320px',
                height: '320px',
                borderRadius: '24px',
                border: '2px solid var(--accent)',
                zIndex: -1,
                opacity: 0.5,
                transition: 'all 0.5s ease',
              }}
              className="glow-border"
            />
          </div>

          {/* About details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h3 style={{ fontSize: '1.8rem', fontWeight: '600' }}>
              I am a passionate <span style={{ color: 'var(--accent)' }}>Full Stack Developer</span>
            </h3>

            <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: 1.7 }}>
              I am a passionate Full Stack Developer with skills in building complete web applications from frontend design to backend development. I enjoy solving real-world problems using technology and creating user-friendly digital experiences. I am continuously improving my skills in web development, database management, and API integration.
            </p>

            {/* Quick Details Grid */}
            <div className="about-info-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', margin: '1rem 0' }}>
              {infoItems.map((item, idx) => (
                <div
                  key={idx}
                  className="glass-panel"
                  style={{
                    padding: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    borderRadius: '12px',
                    minWidth: 0,
                  }}
                >
                  <div style={{ color: 'var(--accent)', display: 'flex', alignItems: 'center', flexShrink: 0 }}>
                    {item.icon}
                  </div>
                  <div style={{ minWidth: 0, flex: 1, textAlign: 'left' }}>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{item.label}</div>
                    {item.href !== '#' ? (
                      <a href={item.href} style={{ fontWeight: '600', fontSize: '0.9rem', overflowWrap: 'break-word', wordBreak: 'break-word', display: 'block' }} onMouseEnter={e => e.target.style.color = 'var(--accent)'} onMouseLeave={e => e.target.style.color = 'inherit'}>
                        {item.value}
                      </a>
                    ) : (
                      <div style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-primary)', overflowWrap: 'break-word', wordBreak: 'break-word' }}>
                        {item.value}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Action buttons */}
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginTop: '0.5rem', flexWrap: 'wrap' }}>
              <a href="#contact" className="btn btn-primary">
                Hire Me Now
              </a>
              <a
                href="/resume.pdf"
                download="Mahesh_Vaishnav_CV.pdf"
                className="btn btn-secondary"
              >
                Download CV <Download size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-image-wrapper:hover .profile-img {
          transform: scale(1.05);
        }
        .about-image-wrapper:hover ~ .glow-border {
          top: -20px;
          left: 20px;
          opacity: 0.8;
        }
        @media (max-width: 768px) {
          .about-info-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}