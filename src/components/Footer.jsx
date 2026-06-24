import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid var(--border)',
        padding: '3rem 0',
        backgroundColor: 'var(--bg-primary)',
        position: 'relative',
      }}
    >
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.5rem', textAlign: 'center' }}>
        {/* Logo */}
        <a href="#home" className="logo-container" aria-label="MV Portfolio Home">
          <span className="logo-letter logo-m">M</span>
          <span className="logo-letter logo-v">V</span>
        </a>

        <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', maxWidth: '400px' }}>
          Building responsive websites, secure backend systems, and user-friendly web applications.
        </p>

        {/* Links shortcut */}
        <ul style={{ display: 'flex', gap: '1.5rem', listStyle: 'none', flexWrap: 'wrap', justifyContent: 'center', padding: 0 }}>
          {['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact'].map(item => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', fontWeight: '500' }}
                onMouseEnter={e => e.target.style.color = 'var(--text-primary)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Copyright */}
        <div style={{ borderTop: '1px solid var(--border)', width: '100%', paddingTop: '1.5rem', marginTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }} className="footer-copyright-row">
          <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
            &copy; {currentYear} Mahesh Vaishnav. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="glass-panel"
            style={{
              padding: '0.5rem',
              borderRadius: '50%',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--accent)'; }}
            onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-primary)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
      <style>{`
        @media (max-width: 576px) {
          .footer-copyright-row {
            flex-direction: column !important;
            justify-content: center !important;
          }
        }
      `}</style>
    </footer>
  );
}
