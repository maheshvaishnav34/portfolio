import React from 'react';
import { Briefcase, GraduationCap, Calendar, BookOpen } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      role: 'Full Stack Developer',
      company: 'Personal / Practice Projects',
      duration: '2024 - Present',
      details: 'Built full-stack e-commerce applications, custom task management boards, and secure authentication systems. Experienced in integrating REST APIs, implementing database schemas using MongoDB and MySQL, and managing application code flow using Git.',
    },
    {
      role: 'Frontend Developer (Self-Taught)',
      company: 'Open Source & Projects',
      duration: '2023 - 2024',
      details: 'Designed and deployed responsive static and dynamic web pages using HTML5, CSS3, JavaScript, and Tailwind CSS. Focused on creating user-friendly layouts and micro-interactions.',
    },
  ];

  const education = [
    {
      degree: 'Full Stack Web Development Course',
      institute: 'Your Institute Name',
      duration: 'Year: 2023 - 2024',
      details: 'Comprehensive developer training covering Frontend layouts, JavaScript states, Node.js REST API servers, user sessions, and database modeling.',
    },
    {
      degree: 'Your Bachelor Degree / Diploma',
      institute: 'Your College / University Name',
      duration: 'Year: 2020 - 2023',
      details: 'Learned fundamental computer science topics including structured databases, web technologies, operating systems, and object-oriented programming.',
    },
  ];

  return (
    <section id="experience" className="section reveal">
      <div className="container">
        <div className="section-header">
          <h2>Experience & Education</h2>
          <p>My academic path and hands-on developer experience building full stack web projects.</p>
        </div>

        <div className="timeline-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem' }}>
          {/* Work Experience Column */}
          <div>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.5rem', marginBottom: '2rem' }}>
              <Briefcase style={{ color: 'var(--accent)' }} /> Work Experience
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', position: 'relative', paddingLeft: '1.5rem', borderLeft: '2px solid var(--border)' }}>
              {experiences.map((exp, idx) => (
                <div key={idx} style={{ position: 'relative' }}>
                  {/* Timeline circle node */}
                  <div
                    style={{
                      position: 'absolute',
                      left: '-31px',
                      top: '4px',
                      width: '14px',
                      height: '14px',
                      borderRadius: '50%',
                      background: 'var(--accent-gradient)',
                      border: '3px solid var(--bg-primary)',
                      boxShadow: '0 0 10px var(--accent-glow)',
                    }}
                  />

                  {/* Timeline Card */}
                  <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent)', fontSize: '0.85rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                      <Calendar size={14} /> {exp.duration}
                    </div>
                    <h4 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.25rem' }}>{exp.role}</h4>
                    <h5 style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', fontWeight: '500', marginBottom: '0.75rem' }}>{exp.company}</h5>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>{exp.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div>
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1.5rem', marginBottom: '2rem' }}>
              <GraduationCap style={{ color: 'var(--accent)' }} /> Education
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', position: 'relative', paddingLeft: '1.5rem', borderLeft: '2px solid var(--border)' }}>
              {education.map((edu, idx) => (
                <div key={idx} style={{ position: 'relative' }}>
                  {/* Timeline circle node */}
                  <div
                    style={{
                      position: 'absolute',
                      left: '-31px',
                      top: '4px',
                      width: '14px',
                      height: '14px',
                      borderRadius: '50%',
                      background: 'var(--accent-gradient)',
                      border: '3px solid var(--bg-primary)',
                      boxShadow: '0 0 10px var(--accent-glow)',
                    }}
                  />

                  {/* Timeline Card */}
                  <div className="glass-panel" style={{ padding: '1.5rem', borderRadius: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent)', fontSize: '0.85rem', fontWeight: '700', marginBottom: '0.5rem' }}>
                      <BookOpen size={14} /> {edu.duration}
                    </div>
                    <h4 style={{ fontSize: '1.15rem', fontWeight: '700', marginBottom: '0.25rem' }}>{edu.degree}</h4>
                    <h5 style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', fontWeight: '500', marginBottom: '0.75rem' }}>{edu.institute}</h5>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.6 }}>{edu.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .timeline-grid {
            grid-template-columns: 1fr !important;
            gap: 4rem !important;
          }
        }
      `}</style>
    </section>
  );
}
