import React from 'react';
import { GraduationCap, Users, Calendar } from 'lucide-react';
import teachingData from '../data/teaching.json';

export default function Teaching() {
  return (
    <section id="teaching" className="section teaching-section">
      <div className="section-header">
        <div className="section-title-wrapper">
          <GraduationCap className="section-icon" />
          <h2 className="section-title">Teaching</h2>
        </div>
      </div>

      <div className="courses-grid">
        {teachingData.map((course, idx) => (
          <div key={idx} className="course-card">
            <div className="course-code-badge">{course.courseCode}</div>
            <h3 className="course-title">{course.title}</h3>
            <p className="course-institution">{course.institution}</p>

            <div className="course-meta-row">
              <span className="course-meta-item">
                <Calendar size={14} />
                {course.semester}
              </span>
              <span className="course-meta-item">
                <Users size={14} />
                {course.enrolled}
              </span>
            </div>

            <div className="course-topics">
              <strong>Core Topics:</strong> {course.topics}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
