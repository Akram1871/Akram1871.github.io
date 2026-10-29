import React from 'react';
import thesisStudentsData from '../data/thesisStudents.json';

export default function ResearchGroup() {
  // Flatten students into a list of individuals with their research topic and timeline
  const individualStudents = [];
  thesisStudentsData.forEach((item) => {
    if (item.students && Array.isArray(item.students)) {
      item.students.forEach((studentName) => {
        individualStudents.push({
          name: studentName,
          role: 'Undergrad Thesis Researcher',
          topic: item.topic,
          period: item.period,
          team: item.team
        });
      });
    } else if (item.name) {
      individualStudents.push({
        name: item.name,
        role: 'Undergrad Thesis Researcher',
        topic: item.topic,
        period: item.period,
        team: null
      });
    }
  });

  // Split into two balanced columns (matching academic professor group layout)
  const midPoint = Math.ceil(individualStudents.length / 2);
  const leftColumnStudents = individualStudents.slice(0, midPoint);
  const rightColumnStudents = individualStudents.slice(midPoint);

  return (
    <section id="research-group" className="section research-group-section">
      <div className="section-header research-group-header">
        <h2 className="research-group-title">Research Group</h2>
        <div className="research-group-underline"></div>
      </div>

      <div className="research-group-intro">
        <p>
          I am fortunate to work with and mentor talented undergraduate researchers and student collaborators.
          Our research focuses on multimodal machine learning, vision-language models (Med-VQA & Bangla VQA),
          low-resource NLP, and applied computational intelligence for healthcare and education.
        </p>
        <p className="research-group-contact-note">
          If you are an undergraduate student interested in conducting research or a bachelor thesis under my supervision,
          feel free to reach out via email with your CV, academic transcript, and research interests.
        </p>
      </div>

      <div className="research-group-content">
        <h3 className="research-group-subtitle">Current</h3>

        <div className="research-students-grid">
          {/* Left Column */}
          <div className="students-column">
            {leftColumnStudents.map((s, idx) => (
              <div key={idx} className="student-item">
                <span className="student-name">{s.name}</span>
                <span className="student-details">
                  {s.role} <span className="student-topic">({s.topic}, {s.period})</span>
                </span>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="students-column with-divider">
            {rightColumnStudents.map((s, idx) => (
              <div key={idx} className="student-item">
                <span className="student-name">{s.name}</span>
                <span className="student-details">
                  {s.role} <span className="student-topic">({s.topic}, {s.period})</span>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
