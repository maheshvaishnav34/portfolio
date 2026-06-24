import React, { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [formStatus, setFormStatus] = useState('idle'); // idle, sending, success, error
  const [errors, setErrors] = useState({});

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Enter a valid email address';
    }
    if (!formData.subject.trim()) tempErrors.subject = 'Subject is required';
    if (!formData.message.trim()) tempErrors.message = 'Message is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (!validate()) return;

    setFormStatus('sending');

    try {
      const response = await fetch("https://formsubmit.co/ajax/7ff818a3d6d785f58458eaba8c1eb224", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message
        })
      });

      const result = await response.json();
      // FormSubmit returns { success: "true" } as a string, check both for safety
      if (result.success === "true" || result.success === true || response.ok) {
        setFormStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setFormStatus('idle'), 5000);
      } else {
        setFormStatus('error');
        alert("Submission failed. Please try again.");
        setTimeout(() => setFormStatus('idle'), 5000);
      }
    } catch (error) {
      console.error("FormSubmit submission error:", error);
      setFormStatus('error');
      alert("An error occurred while sending the message. Please try again.");
      setTimeout(() => setFormStatus('idle'), 5000);
    }
  };

  return (
    <section id="contact" className="section reveal" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border)' }}>
      <div className="container">
        <div className="section-header">
          <h2>Get In Touch</h2>
          <p>Have a question or want to work together? Feel free to drop a message!</p>
        </div>

        <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem' }}>
          {/* Quick Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: '600' }}>Contact Information</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>
              Feel free to reach out to me via email or phone. I will get back to you as soon as possible.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Email */}
              <div className="glass-panel contact-info-card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.25rem', borderRadius: '16px' }}>
                <div style={{ width: '45px', height: '45px', borderRadius: '12px', background: 'var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)' }}>
                  <Mail size={20} />
                </div>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Email Me</div>
                  <a href="mailto:maheshvaishnav78499@gmail.com" style={{ fontWeight: '600', fontSize: 'clamp(0.85rem, 3.2vw, 0.95rem)', wordBreak: 'break-all' }} onMouseEnter={e => e.target.style.color = 'var(--accent)'} onMouseLeave={e => e.target.style.color = 'inherit'}>
                    maheshvaishnav78499@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="glass-panel contact-info-card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.25rem', borderRadius: '16px' }}>
                <div style={{ width: '45px', height: '45px', borderRadius: '12px', background: 'var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)' }}>
                  <Phone size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Call Me</div>
                  <a href="tel:+91XXXXXXXXXX" style={{ fontWeight: '600', fontSize: 'clamp(0.85rem, 3.2vw, 0.95rem)', wordBreak: 'break-all' }} onMouseEnter={e => e.target.style.color = 'var(--accent)'} onMouseLeave={e => e.target.style.color = 'inherit'}>
                    +91 XXXXXXXXXX
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="glass-panel contact-info-card" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1.25rem', borderRadius: '16px' }}>
                <div style={{ width: '45px', height: '45px', borderRadius: '12px', background: 'var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)' }}>
                  <MapPin size={20} />
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Location</div>
                  <div style={{ fontWeight: '600', fontSize: 'clamp(0.85rem, 3.2vw, 0.95rem)' }}>India</div>
                </div>
              </div>
            </div>

            {/* Social profiles */}
            <div className="contact-social-icons" style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
              <a
                href="https://github.com/maheshvaishnav34"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel"
                style={{ width: '45px', height: '45px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)' }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--accent)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/mahesh-vaishnav-0b21183a9"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel"
                style={{ width: '45px', height: '45px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)' }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent)'; e.currentTarget.style.borderColor = 'var(--accent)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'var(--border)'; }}
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Interactive Form */}
          <div className="glass-panel contact-form-container" style={{ padding: '2.5rem', borderRadius: '24px' }}>
            {formStatus === 'success' ? (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '1rem', height: '100%', minHeight: '300px', textAlign: 'center' }}>
                <CheckCircle size={56} style={{ color: '#10b981' }} />
                <h3 style={{ fontSize: '1.5rem', fontWeight: '700' }}>Message Sent Successfully!</h3>
                <p style={{ color: 'var(--text-secondary)', maxWidth: '400px' }}>
                  Thank you for reaching out, Mahesh Vaishnav will connect with you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
                  {/* Name field */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', textAlign: 'left' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-secondary)' }}>Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      style={{
                        padding: '0.75rem 1rem',
                        borderRadius: '12px',
                        border: '1px solid ' + (errors.name ? '#ef4444' : 'var(--border)'),
                        background: 'var(--bg-primary)',
                        color: 'var(--text-primary)',
                        outline: 'none',
                      }}
                      placeholder="John Doe"
                    />
                    {errors.name && <span style={{ fontSize: '0.75rem', color: '#ef4444' }}>{errors.name}</span>}
                  </div>

                  {/* Email field */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', textAlign: 'left' }}>
                    <label style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-secondary)' }}>Your Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      style={{
                        padding: '0.75rem 1rem',
                        borderRadius: '12px',
                        border: '1px solid ' + (errors.email ? '#ef4444' : 'var(--border)'),
                        background: 'var(--bg-primary)',
                        color: 'var(--text-primary)',
                        outline: 'none',
                      }}
                      placeholder="john@example.com"
                    />
                    {errors.email && <span style={{ fontSize: '0.75rem', color: '#ef4444' }}>{errors.email}</span>}
                  </div>
                </div>

                {/* Subject field */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', textAlign: 'left' }}>
                  <label style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-secondary)' }}>Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    style={{
                      padding: '0.75rem 1rem',
                      borderRadius: '12px',
                      border: '1px solid ' + (errors.subject ? '#ef4444' : 'var(--border)'),
                      background: 'var(--bg-primary)',
                      color: 'var(--text-primary)',
                      outline: 'none',
                    }}
                    placeholder="Project Inquiry"
                  />
                  {errors.subject && <span style={{ fontSize: '0.75rem', color: '#ef4444' }}>{errors.subject}</span>}
                </div>

                {/* Message field */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', textAlign: 'left' }}>
                  <label style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-secondary)' }}>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="5"
                    style={{
                      padding: '0.75rem 1rem',
                      borderRadius: '12px',
                      border: '1px solid ' + (errors.message ? '#ef4444' : 'var(--border)'),
                      background: 'var(--bg-primary)',
                      color: 'var(--text-primary)',
                      outline: 'none',
                      resize: 'none',
                    }}
                    placeholder="Describe your project details..."
                  />
                  {errors.message && <span style={{ fontSize: '0.75rem', color: '#ef4444' }}>{errors.message}</span>}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={formStatus === 'sending'}
                  style={{
                    justifyContent: 'center',
                    marginTop: '0.5rem',
                    cursor: formStatus === 'sending' ? 'not-allowed' : 'pointer',
                    opacity: formStatus === 'sending' ? 0.7 : 1,
                  }}
                >
                  {formStatus === 'sending' ? (
                    'Sending Message...'
                  ) : (
                    <>
                      Send Message <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 992px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .contact-social-icons {
            justify-content: center !important;
            margin-bottom: 1.5rem !important;
          }
        }
        @media (max-width: 576px) {
          .form-row {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 480px) {
          .contact-form-container {
            padding: 1.25rem !important;
          }
          .contact-info-card {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
            padding: 1.5rem 1rem !important;
            gap: 1rem !important;
          }
          .contact-info-card > div {
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 100%;
          }
          .contact-info-card a {
            text-align: center !important;
            width: 100%;
            word-wrap: break-word;
            overflow-wrap: break-word;
            white-space: normal !important;
          }
        }
        input:focus, textarea:focus {
          border-color: var(--accent) !important;
          box-shadow: 0 0 0 2px var(--accent-glow) !important;
        }
      `}</style>
    </section>
  );
}
