import React, { useState, useMemo } from 'react';
import { Laptop, Brain, GraduationCap, Github, Linkedin, ExternalLink, Search, Users, GitFork, FileText, CheckCircle2, Calendar, Mail } from 'lucide-react';
import seProjectsData from '../data/studentProjects.json';
import mlProjectsData from '../data/mlProjects.json';
import thesisStudentsData from '../data/thesisStudents.json';

export default function StudentProjects() {
  const [activeCourse, setActiveCourse] = useState('ALL'); // 'ALL' | 'THESIS' | 'ML' | 'SE'
  const [selectedSection, setSelectedSection] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Determine active project dataset based on course tab
  const allProjects = useMemo(() => {
    const thesisList = thesisStudentsData.map((p, idx) => ({
      ...p,
      id: `thesis-${idx}`,
      title: p.topic,
      courseType: 'THESIS',
      courseCode: 'Undergraduate Thesis',
      section: 'Supervised Thesis',
      students: p.students ? p.students.map(s => ({ name: s })) : [{ name: p.name }]
    }));
    const mlList = mlProjectsData.map(p => ({ ...p, courseType: 'ML', courseCode: 'CSE 4252' }));
    const seList = seProjectsData.map(p => ({ ...p, courseType: 'SE', courseCode: 'CSE 3298' }));

    if (activeCourse === 'THESIS') return thesisList;
    if (activeCourse === 'ML') return mlList;
    if (activeCourse === 'SE') return seList;
    return [...thesisList, ...mlList, ...seList];
  }, [activeCourse]);

  // Dynamic available sections
  const sections = useMemo(() => {
    const set = new Set();
    allProjects.forEach(p => {
      if (p.section) set.add(p.section);
    });
    return ['All', ...Array.from(set)];
  }, [allProjects]);

  // Reset selectedSection if it does not exist in new section list
  React.useEffect(() => {
    if (!sections.includes(selectedSection)) {
      setSelectedSection('All');
    }
  }, [sections, selectedSection]);

  const filteredProjects = useMemo(() => {
    return allProjects.filter((proj) => {
      const matchesSection =
        selectedSection === 'All' || proj.section === selectedSection;

      const q = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !q ||
        (proj.title && proj.title.toLowerCase().includes(q)) ||
        (proj.topic && proj.topic.toLowerCase().includes(q)) ||
        (proj.team && proj.team.toLowerCase().includes(q)) ||
        (proj.name && proj.name.toLowerCase().includes(q)) ||
        (proj.domain && proj.domain.toLowerCase().includes(q)) ||
        (proj.group && proj.group.toLowerCase().includes(q)) ||
        (proj.description && proj.description.toLowerCase().includes(q)) ||
        (proj.students && proj.students.some(
          (s) =>
            (s.name && s.name.toLowerCase().includes(q)) ||
            (s.id && s.id.includes(q)) ||
            (s.email && s.email.toLowerCase().includes(q))
        ));

      return matchesSection && matchesQuery;
    });
  }, [allProjects, selectedSection, searchQuery]);

  return (
    <section id="student-projects" className="section student-projects-section">
      <div className="section-header">
        <div className="section-title-wrapper">
          <Laptop className="section-icon" />
          <h2 className="section-title">Supervised Student Research & Projects</h2>
          <span className="projects-count-badge">
            {allProjects.length} Projects Showcase
          </span>
        </div>
      </div>

      {/* Primary Track Switcher Tabs */}
      <div className="course-tabs-container">
        <button
          type="button"
          className={`course-tab-btn ${activeCourse === 'ALL' ? 'active' : ''}`}
          onClick={() => setActiveCourse('ALL')}
        >
          <span>All Research & Projects</span>
          <span className="tab-badge">{thesisStudentsData.length + mlProjectsData.length + seProjectsData.length}</span>
        </button>

        <button
          type="button"
          className={`course-tab-btn ${activeCourse === 'THESIS' ? 'active' : ''}`}
          onClick={() => setActiveCourse('THESIS')}
        >
          <GraduationCap size={16} />
          <span>Thesis Supervision</span>
          <span className="tab-badge">{thesisStudentsData.length}</span>
        </button>

        <button
          type="button"
          className={`course-tab-btn ${activeCourse === 'ML' ? 'active' : ''}`}
          onClick={() => setActiveCourse('ML')}
        >
          <Brain size={16} />
          <span>CSE 4252: Machine Learning Lab</span>
          <span className="tab-badge">{mlProjectsData.length}</span>
        </button>

        <button
          type="button"
          className={`course-tab-btn ${activeCourse === 'SE' ? 'active' : ''}`}
          onClick={() => setActiveCourse('SE')}
        >
          <Laptop size={16} />
          <span>CSE 3298: Software Engineering Lab</span>
          <span className="tab-badge">{seProjectsData.length}</span>
        </button>
      </div>

      {/* Filter and Search Bar */}
      <div className="student-projects-toolbar">
        <div className="filter-pills" role="tablist" aria-label="Section filters">
          {sections.map((sec) => {
            const count =
              sec === 'All'
                ? allProjects.length
                : allProjects.filter((p) => p.section === sec).length;
            return (
              <button
                key={sec}
                type="button"
                role="tab"
                aria-selected={selectedSection === sec}
                className={`filter-pill ${selectedSection === sec ? 'active' : ''}`}
                onClick={() => setSelectedSection(sec)}
              >
                {sec}
                <span className="pill-count">{count}</span>
              </button>
            );
          })}
        </div>

        <div className="search-box">
          <Search size={16} className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search by topic, keyword, or student name/ID..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search student projects"
          />
          {searchQuery && (
            <button
              type="button"
              className="search-clear-btn"
              onClick={() => setSearchQuery('')}
              title="Clear search"
            >
              ×
            </button>
          )}
        </div>
      </div>

      {/* Main Display: Boyd-style Academic Listing for Thesis, or Card Grid for Projects */}
      {activeCourse === 'THESIS' ? (
        <div className="academic-thesis-listing-box">
          <div className="academic-thesis-header-note">
            <GraduationCap size={18} className="academic-cap-icon" />
            <div>
              <h3 className="academic-listing-title">Current Undergraduate Thesis Students</h3>
              <p className="academic-listing-subtitle">
                Department of Computer Science & Engineering · Shanto-Mariam University of Creative Technology
              </p>
            </div>
          </div>

          <ul className="academic-student-bullets">
            {filteredProjects.map((item, idx) => (
              <li key={idx} className="academic-bullet-item">
                {item.team ? (
                  <>
                    <strong className="academic-student-name">{item.students.map((s) => s.name).join(', ')}</strong> ({item.team}) &ndash; {item.topic} ({item.period}).
                  </>
                ) : (
                  <>
                    <strong className="academic-student-name">{item.name}</strong> &ndash; {item.topic} ({item.period}).
                  </>
                )}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        /* Scrollable Container for Engineering & ML Project Cards */
        <div className="student-projects-scroller-box">
          <div className="student-projects-scrollable-area">
            <div className="student-projects-grid">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <div key={project.id} className="student-project-card">
                    <div className="proj-card-top">
                      <span className="proj-section-tag">
                        {project.section} {project.group ? `· ${project.group}` : ''}
                      </span>
                      <span className={`proj-course-tag ${project.courseType === 'ML' ? 'tag-ml' : 'tag-se'}`}>
                        {project.courseCode}
                      </span>
                    </div>

                    {project.domain && (
                      <div className="proj-domain-tag">
                        <Brain size={12} />
                        <span>{project.domain}</span>
                      </div>
                    )}

                    <h3 className="proj-title">{project.title}</h3>

                    {project.description && (
                      <p className="proj-description">{project.description}</p>
                    )}

                    {/* Deliverables / Documentation badges */}
                    {project.deliverables && project.deliverables.length > 0 && (
                      <div className="proj-deliverables-box">
                        <div className="deliverables-heading">
                          <FileText size={13} /> Project Documentation & Artifacts:
                        </div>
                        <div className="deliverables-tags">
                          {project.deliverables.map((item, dIdx) => (
                            <span key={dIdx} className="deliverable-tag">
                              <CheckCircle2 size={11} className="deliv-icon" />
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="proj-team-section">
                      <div className="team-heading">
                        <Users size={14} /> Team Members:
                      </div>
                      <div className="team-members-list">
                        {project.students.map((student, idx) => (
                          <div key={idx} className="team-member-item">
                            <span className="member-name">{student.name}</span>
                            {student.id && <span className="member-id">({student.id})</span>}
                            {student.github && (
                              <a
                                href={student.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="member-gh-link"
                                title={`${student.name}'s GitHub`}
                              >
                                <Github size={13} />
                              </a>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Links row */}
                    {(project.repo || project.linkedin) && (
                      <div className="proj-links-row">
                        {project.repo ? (
                          <a
                            href={project.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="proj-btn proj-btn-repo"
                          >
                            <GitFork size={14} />
                            <span>Repository</span>
                            <ExternalLink size={12} className="btn-external-icon" />
                          </a>
                        ) : null}

                        {project.linkedin && (
                          <a
                            href={project.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="proj-btn proj-btn-demo"
                          >
                            <Linkedin size={14} />
                            <span>Demo / Post</span>
                            <ExternalLink size={12} className="btn-external-icon" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                ))
              ) : (
                <div className="empty-results">
                  <p>No student projects match "{searchQuery}".</p>
                </div>
              )}
            </div>
          </div>

          {filteredProjects.length > 4 && (
            <div className="projects-scroll-hint">
              <span>Scroll inside to explore all {filteredProjects.length} supervised projects ↓</span>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
