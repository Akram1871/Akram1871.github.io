import React from 'react';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';
import profileData from '../data/profile.json';

export default function ExperienceEducation() {
  return (
    <section id="experience" className="section exp-edu-section">
      <div className="exp-edu-grid">
        {/* Experience Column */}
        <div className="exp-col">
          <div className="section-title-wrapper">
            <Briefcase className="section-icon" />
            <h2 className="section-title">Experience</h2>
          </div>
          <div className="exp-cards-list">
            {profileData.experience.map((exp, idx) => (
              <div key={idx} className="exp-card">
                <div className="exp-card-header">
                  <h3 className="exp-role">{exp.role}</h3>
                  <span className="exp-period">
                    <Calendar size={13} />
                    {exp.period}
                  </span>
                </div>
                <p className="exp-dept">{exp.department}</p>
                <p className="exp-inst">{exp.institution}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education Column */}
        <div className="edu-col">
          <div className="section-title-wrapper">
            <GraduationCap className="section-icon" />
            <h2 className="section-title">Education</h2>
          </div>
          <div className="edu-cards-list">
            {profileData.education.map((edu, idx) => (
              <div key={idx} className="edu-card">
                <div className="edu-badge">{edu.year}</div>
                <div className="edu-info">
                  <h3 className="edu-degree">{edu.degree}</h3>
                  <p className="edu-field">{edu.field}</p>
                  <p className="edu-inst">{edu.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
