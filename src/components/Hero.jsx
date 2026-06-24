import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ArrowRight, FileText } from 'lucide-react';

export default function Hero() {
  const words = ['Full Stack Developer', 'React Specialist', 'Backend Engineer', 'Problem Solver'];
  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer;
    const activeWord = words[currentWordIdx];

    if (!isDeleting) {
      if (typedText !== activeWord) {
        timer = setTimeout(() => {
          setTypedText(activeWord.slice(0, typedText.length + 1));
        }, 150);
      } else {
        // Pause when the word is fully typed, then start deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, 1500);
      }
    } else {
      if (typedText !== '') {
        timer = setTimeout(() => {
          setTypedText(prev => prev.slice(0, -1));
        }, 75);
      } else {
        // Switch to the next word
        setIsDeleting(false);
        setCurrentWordIdx(prev => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, currentWordIdx]);

  return (
    <section
      id="home"
      className="section"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        background: 'radial-gradient(circle at 10% 20%, rgba(59, 130, 246, 0.05) 0%, transparent 40%)',
      }}
    >
      {/* Decorative Orbs */}
      <div className="glow-orb" style={{ top: '10%', right: '10%' }}></div>
      <div className="glow-orb" style={{ bottom: '15%', left: '5%', background: 'var(--accent-secondary)' }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="hero-grid">
          {/* Left Column: Content */}
          <div className="hero-left">
            {/* Animated Badge */}
            <div
              className="badge"
              style={{
                marginBottom: '1.5rem',
                padding: '0.4rem 1rem',
                fontSize: '0.85rem',
                background: 'var(--border)',
                borderColor: 'var(--accent)',
                animation: 'float 3s ease-in-out infinite',
              }}
            >
              Available for Opportunities
            </div>

            {/* Headline */}
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                lineHeight: 1.1,
                marginBottom: '1rem',
                letterSpacing: '-0.03em',
                fontWeight: '800',
              }}
            >
              Hi, I am <span style={{ background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Mahesh Vaishnav</span>
            </h1>

            {/* Typewriter Subheading */}
            <h2
              style={{
                fontSize: 'clamp(1.3rem, 3vw, 1.8rem)',
                color: 'var(--text-secondary)',
                fontWeight: '500',
                marginBottom: '1.5rem',
                height: '2.5rem',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <span>I am a&nbsp;</span>
              <span style={{ color: 'var(--text-primary)', borderRight: '2px solid var(--accent)', paddingRight: '4px' }} className="typed-cursor">
                {typedText}
              </span>
            </h2>

            {/* Description */}
            <p
              style={{
                fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
                color: 'var(--text-secondary)',
                maxWidth: '600px',
                marginBottom: '2.5rem',
                lineHeight: 1.7,
              }}
            >
              I am a passionate Full Stack Developer focused on building modern, responsive, and scalable web applications. I specialize in the MERN stack (MongoDB, Express, React, Node.js) and enjoy crafting clean code, robust backend systems, and user-centric frontend experiences.
            </p>

            {/* Call to Actions */}
            <div
              style={{
                display: 'flex',
                gap: '1rem',
                flexWrap: 'wrap',
                marginBottom: '2.5rem',
              }}
            >
              <a href="#projects" className="btn btn-primary">
                View My Work <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn btn-secondary">
                Get In Touch <Mail size={18} />
              </a>
            </div>

            {/* Social Icons Links */}
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <a
                href="https://github.com/maheshvaishnav34"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.target.style.color = 'var(--accent)')}
                onMouseLeave={e => (e.target.style.color = 'var(--text-secondary)')}
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/mahesh-vaishnav-0b21183a9"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.target.style.color = 'var(--accent)')}
                onMouseLeave={e => (e.target.style.color = 'var(--text-secondary)')}
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:maheshvaishnav78499@gmail.com"
                style={{ color: 'var(--text-secondary)', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.target.style.color = 'var(--accent)')}
                onMouseLeave={e => (e.target.style.color = 'var(--text-secondary)')}
                aria-label="Email"
              >
                <Mail size={24} />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Code Terminal */}
          <div className="hero-right">
            <div className="mock-terminal">
              <div className="terminal-header">
                <div className="terminal-buttons">
                  <div className="terminal-btn terminal-close"></div>
                  <div className="terminal-btn terminal-minimize"></div>
                  <div className="terminal-btn terminal-maximize"></div>
                </div>
                <div className="terminal-title">maheshvaishnav.js</div>
                <div style={{ width: '40px' }}></div>
              </div>
              <div className="terminal-body">
                <div>
                  <span className="syntax-keyword">const</span> <span className="syntax-name">developer</span> = &#123;
                </div>
                <div style={{ paddingLeft: '1.25rem' }}>
                  <span className="syntax-variable">name</span>: <span className="syntax-string">'Mahesh Vaishnav'</span>,
                </div>
                <div style={{ paddingLeft: '1.25rem' }}>
                  <span className="syntax-variable">role</span>: <span className="syntax-string">'Full Stack Web Developer'</span>,
                </div>
                <div style={{ paddingLeft: '1.25rem' }}>
                  <span className="syntax-variable">skills</span>: [
                </div>
                <div style={{ paddingLeft: '2.5rem' }}>
                  <span className="syntax-string">'React.js'</span>, <span className="syntax-string">'Node.js'</span>,
                </div>
                <div style={{ paddingLeft: '2.5rem' }}>
                  <span className="syntax-string">'Express.js'</span>, <span className="syntax-string">'MongoDB'</span>,
                </div>
                <div style={{ paddingLeft: '2.5rem' }}>
                  <span className="syntax-string">'Vite'</span>, <span className="syntax-string">'Vanilla CSS'</span>,
                </div>
                <div style={{ paddingLeft: '2.5rem' }}>
                  <span className="syntax-string">'Git & GitHub'</span>
                </div>
                <div style={{ paddingLeft: '1.25rem' }}>
                  ],
                </div>
                <div style={{ paddingLeft: '1.25rem' }}>
                  <span className="syntax-variable">passionateAbout</span>: [
                </div>
                <div style={{ paddingLeft: '2.5rem' }}>
                  <span className="syntax-string">'Clean Code'</span>, <span className="syntax-string">'Fluid UX'</span>,
                </div>
                <div style={{ paddingLeft: '2.5rem' }}>
                  <span className="syntax-string">'All-Device Responsiveness'</span>
                </div>
                <div style={{ paddingLeft: '1.25rem' }}>
                  ]
                </div>
                <div>&#125;;</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
      `}</style>
    </section>
  );
}