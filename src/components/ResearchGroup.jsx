import React from 'react';
import thesisStudentsData from '../data/thesisStudents.json';

export default function ResearchGroup() {
  // Use team-based grouping so students in the same team are listed side-by-side with commas
  const teamItems = thesisStudentsData.map((item, idx) => ({
    id: `team-${idx}`,
    teamName: item.team || null,
    names: item.students || (item.name ? [item.name] : []),
    topic: item.topic,
    period: item.period,
    isTeam: Array.isArray(item.students) && item.students.length > 1
  }));

  // Split into two balanced columns (3 in left, 2 in right)
  const midPoint = Math.ceil(teamItems.length / 2);
  const leftColumn = teamItems.slice(0, midPoint);
  const rightColumn = teamItems.slice(midPoint);

  const renderStudentItem = (item) => (
    <div key={item.id} className="student-item">
      <div className="student-name-row">
        {item.names.map((name, i) => (
          <React.Fragment key={i}>
            <span className="student-name">{name}</span>
            {i < item.names.length - 1 && <span className="name-separator">, </span>}
          </React.Fragment>
        ))}
      </div>
      <div className="student-details">
        <span className="student-role">
          Undergrad Thesis {item.isTeam ? 'Researchers' : 'Researcher'}
        </span>{' '}
        <span className="student-topic">
          ({item.topic}, {item.period})
        </span>
      </div>
    </div>
  );

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
            {leftColumn.map(renderStudentItem)}
          </div>

          {/* Right Column */}
          <div className="students-column with-divider">
            {rightColumn.map(renderStudentItem)}
          </div>
        </div>
      </div>
    </section>
  );
}
