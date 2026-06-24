import React, { useState } from 'react';
import { ExternalLink, Github, ShoppingBag, FolderGit2, CheckSquare, ShieldAlert } from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const filters = [
    { id: 'all', name: 'All Work' },
    { id: 'fullstack', name: 'Full Stack' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend/Other' },
  ];

  const projectsData = [
    {
      id: 1,
      title: 'E-Commerce Website',
      description: 'A full-stack shopping website with product listing, shopping cart system, user login/signup, and order management dashboards.',
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
      category: 'fullstack',
      github: 'https://github.com/maheshvaishnav34',
      demo: '#',
      color: 'linear-gradient(135deg, #ff0844 0%, #ffb199 100%)', // Red/Orange gradient
      icon: <ShoppingBag size={32} style={{ color: '#ffffff' }} />,
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A responsive web application where users can create, update status, delete, filter, and organize daily tasks with persistence.',
      tech: ['React.js', 'Node.js', 'MongoDB', 'CSS Grid'],
      category: 'fullstack',
      github: 'https://github.com/maheshvaishnav34',
      demo: '#',
      color: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)', // Blue/Purple gradient
      icon: <CheckSquare size={32} style={{ color: '#ffffff' }} />,
    },
    {
      id: 3,
      title: 'Login & Authentication System',
      description: 'A secure backend user authorization & authentication service featuring bcrypt password hashing, session tokens, and route protection.',
      tech: ['Node.js', 'Express.js', 'MongoDB', 'JWT'],
      category: 'backend',
      github: 'https://github.com/maheshvaishnav34',
      demo: '#',
      color: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)', // Dark Blue gradient
      icon: <ShieldAlert size={32} style={{ color: '#ffffff' }} />,
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A personal responsive developer website to showcase creative skills, professional history, projects, and contact info.',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      category: 'frontend',
      github: 'https://github.com/maheshvaishnav34',
      demo: '#',
      color: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', // Clean light gray/blue gradient
      icon: <FolderGit2 size={32} style={{ color: 'var(--accent)' }} />,
    },
  ];

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter(proj => proj.category === filter);

  return (
    <section id="projects" className="section reveal" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <p>A curated selection of projects I have built, ranging from static websites to full stack applications.</p>
        </div>

        {/* Filters */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '3.5rem',
            flexWrap: 'wrap',
          }}
        >
          {filters.map(f => (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              style={{
                background: filter === f.id ? 'var(--accent-gradient)' : 'transparent',
                color: filter === f.id ? '#ffffff' : 'var(--text-secondary)',
                border: '1px solid ' + (filter === f.id ? 'transparent' : 'var(--border)'),
                padding: '0.5rem 1.2rem',
                borderRadius: '12px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: filter === f.id ? '0 4px 15px var(--accent-glow)' : 'none',
              }}
              onMouseEnter={e => {
                if (filter !== f.id) {
                  e.target.style.color = 'var(--text-primary)';
                  e.target.style.borderColor = 'var(--accent)';
                }
              }}
              onMouseLeave={e => {
                if (filter !== f.id) {
                  e.target.style.color = 'var(--text-secondary)';
                  e.target.style.borderColor = 'var(--border)';
                }
              }}
            >
              {f.name}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '2rem',
          }}
        >
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="glass-panel project-card"
              style={{
                display: 'flex',
                flexDirection: 'column',
                borderRadius: '20px',
                overflow: 'hidden',
                animation: 'fadeUp 0.5s ease forwards',
                animationDelay: `${index * 0.05}s`,
                opacity: 0,
              }}
            >
              {/* Project Visual Header */}
              <div
                style={{
                  height: '180px',
                  background: project.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    width: '70px',
                    height: '70px',
                    borderRadius: '20px',
                    background: 'rgba(255, 255, 255, 0.15)',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  {project.icon}
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flexGrow: 1, gap: '1rem' }}>
                <h3 style={{ fontSize: '1.35rem', fontWeight: '700' }}>{project.title}</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, flexGrow: 1 }}>
                  {project.description}
                </p>

                {/* Tech tags */}
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', margin: '0.5rem 0' }}>
                  {project.tech.map(t => (
                    <span key={t} className="badge" style={{ fontSize: '0.75rem', padding: '0.2rem 0.6rem' }}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderTop: '1px solid var(--border)',
                    paddingTop: '1rem',
                    marginTop: '0.5rem',
                  }}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      color: 'var(--text-secondary)',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-secondary)')}
                  >
                    <Github size={18} /> GitHub Code
                  </a>
                  <a
                    href={project.demo}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.4rem',
                      fontSize: '0.9rem',
                      fontWeight: '600',
                      color: 'var(--text-primary)',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--accent)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--text-primary)')}
                  >
                    Live Demo <ExternalLink size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .project-card {
          transition: transform var(--transition-normal), border-color var(--transition-normal), box-shadow var(--transition-normal) !important;
        }
        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 30px 60px -15px rgba(0,0,0,0.3);
          border-color: var(--accent);
        }
      `}</style>
    </section>
  );
}
