import React, { useState } from 'react';
import { Layout, Server, Database, Settings } from 'lucide-react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', name: 'All Skills', icon: null },
    { id: 'frontend', name: 'Frontend', icon: <Layout size={16} /> },
    { id: 'backend', name: 'Backend', icon: <Server size={16} /> },
    { id: 'database', name: 'Database', icon: <Database size={16} /> },
    { id: 'tools', name: 'Tools & Other', icon: <Settings size={16} /> },
  ];

  const skillsData = [
    // Frontend
    { name: 'HTML5', category: 'frontend', level: 95 },
    { name: 'CSS3', category: 'frontend', level: 90 },
    { name: 'JavaScript', category: 'frontend', level: 88 },
    { name: 'React.js', category: 'frontend', level: 85 },
    { name: 'Tailwind CSS', category: 'frontend', level: 85 },
    { name: 'Bootstrap', category: 'frontend', level: 80 },

    // Backend
    { name: 'Node.js', category: 'backend', level: 80 },
    { name: 'Express.js', category: 'backend', level: 82 },
    { name: 'REST APIs', category: 'backend', level: 85 },
    { name: 'Authentication (JWT)', category: 'backend', level: 78 },

    // Database
    { name: 'MongoDB', category: 'database', level: 80 },
    { name: 'MySQL', category: 'database', level: 75 },

    // Tools & Other
    { name: 'Git', category: 'tools', level: 82 },
    { name: 'GitHub', category: 'tools', level: 85 },
    { name: 'VS Code', category: 'tools', level: 90 },
    { name: 'Postman', category: 'tools', level: 80 },
    { name: 'Responsive Design', category: 'tools', level: 92 },
    { name: 'Deployment', category: 'tools', level: 70 },
  ];

  const filteredSkills = activeTab === 'all'
    ? skillsData
    : skillsData.filter(skill => skill.category === activeTab);

  return (
    <section id="skills" className="section reveal">
      <div className="container">
        <div className="section-header">
          <h2>Technical Skills</h2>
          <p>Here are the technologies, tools, and developer practices I utilize to build full stack web applications.</p>
        </div>

        {/* Categories Tab Selector */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0.75rem',
            marginBottom: '3.5rem',
            flexWrap: 'wrap',
          }}
        >
          {categories.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="glass-panel"
              style={{
                padding: '0.6rem 1.2rem',
                borderRadius: '12px',
                border: '1px solid ' + (activeTab === tab.id ? 'var(--accent)' : 'var(--border)'),
                background: activeTab === tab.id ? 'var(--accent-gradient)' : 'var(--bg-glass)',
                color: activeTab === tab.id ? '#ffffff' : 'var(--text-primary)',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                boxShadow: activeTab === tab.id ? '0 4px 15px var(--accent-glow)' : 'var(--shadow)',
                transform: activeTab === tab.id ? 'translateY(-2px)' : 'none',
                transition: 'all 0.3s ease',
              }}
            >
              {tab.icon}
              {tab.name}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
            gap: '1.5rem',
          }}
        >
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="glass-panel skill-card"
              style={{
                padding: '1.5rem',
                borderRadius: '16px',
                textAlign: 'left',
                animation: 'fadeIn 0.5s ease forwards',
                animationDelay: `${index * 0.05}s`,
                opacity: 0,
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                <span style={{ fontWeight: '600', fontSize: '1.1rem' }}>{skill.name}</span>
                <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--accent)' }}>{skill.level}%</span>
              </div>

              {/* Progress bar track */}
              <div
                style={{
                  height: '6px',
                  background: 'var(--border)',
                  borderRadius: '3px',
                  overflow: 'hidden',
                  position: 'relative',
                }}
              >
                {/* Active progress */}
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '100%',
                    width: `${skill.level}%`,
                    background: 'var(--accent-gradient)',
                    borderRadius: '3px',
                    transition: 'width 1s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .skill-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--shadow), 0 10px 20px -10px var(--accent-glow);
          border-color: var(--accent);
        }
      `}</style>
    </section>
  );
}
