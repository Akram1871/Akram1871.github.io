import React from 'react';
import { Mail, GraduationCap, Github, Linkedin, Twitter, MapPin, Cpu } from 'lucide-react';
import profileData from '../data/profile.json';

const iconMap = {
  Mail: Mail,
  GraduationCap: GraduationCap,
  Github: Github,
  Linkedin: Linkedin,
  Twitter: Twitter,
};

export default function Hero() {
  return (
    <section id="about" className="hero-section">
      <div className="hero-grid">
        {/* Left Column: Avatar & Basic Info */}
        <div className="hero-profile-card">
          <div className="hero-avatar-wrapper">
            <img
              src={profileData.avatar}
              alt={profileData.name}
              className="hero-avatar"
              onError={(e) => {
                // If local image fails, show elegant initials fallback
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
          <h1 className="hero-name">{profileData.name}</h1>
          <p className="hero-title">{profileData.title}</p>
          <p className="hero-affiliation">{profileData.affiliation}</p>
          <p className="hero-location">
            <MapPin size={14} className="location-icon" />
            {profileData.location}
          </p>

          <a href={`mailto:${profileData.email}`} className="hero-email-badge" title="Send email">
            <Mail size={14} className="email-badge-icon" />
            <span>{profileData.email}</span>
          </a>

          <div className="hero-social-links">
            {profileData.socials
              .filter((soc) => soc.name !== 'Email')
              .map((soc) => {
              const IconComponent = iconMap[soc.icon] || Mail;
              return (
                <a
                  key={soc.name}
                  href={soc.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                  title={soc.name}
                  aria-label={soc.name}
                >
                  <IconComponent size={18} />
                </a>
              );
            })}
          </div>
        </div>

        {/* Right Column: Bio & Interests */}
        <div className="hero-bio-container">
          <h2 className="bio-heading">Biography</h2>
          <div className="bio-paragraphs">
            {profileData.bio.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <div className="interests-wrapper">
            <h3 className="interests-heading">Research Interests</h3>
            <div className="interests-tags">
              {profileData.interests.map((topic, idx) => (
                <span key={idx} className="interest-tag">
                  {topic}
                </span>
              ))}
            </div>
            <div className="interests-robotics-note">
              <em>I am interested in interdisciplinary research in robotics.</em>
            </div>
          </div>

          {profileData.currentProjects && profileData.currentProjects.length > 0 && (
            <div className="current-project-wrapper">
              <h3 className="current-project-heading">Current Project</h3>
              {profileData.currentProjects.map((proj, idx) => (
                <div key={idx} className="current-project-card">
                  <div className="current-project-header">
                    <div className="current-project-title-row">
                      <Cpu size={18} className="current-project-icon" />
                      <h4 className="current-project-title">{proj.title}</h4>
                    </div>
                    <span className="current-project-status-badge">{proj.period}</span>
                  </div>
                  <p className="current-project-lab">
                    <strong>{proj.lab}</strong> — {proj.institution}
                  </p>
                  <p className="current-project-desc">{proj.description}</p>
                  {proj.technologies && (
                    <div className="current-project-tech-stack">
                      {proj.technologies.map((tech, tIdx) => (
                        <span key={tIdx} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
