import React, { useState, useEffect, useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  BookOpen,
  Calendar,
  Clock,
  Award,
  Users,
  CheckCircle2,
  FileText,
  Search,
  ArrowLeft,
  GraduationCap,
  ExternalLink,
  ChevronRight,
  Sun,
  Moon,
  Github,
  Linkedin,
  Brain,
  Laptop
} from 'lucide-react';
import { coursesDetailData } from '../data/coursesDetailData';
import mlProjectsData from '../data/mlProjects.json';
import seProjectsData from '../data/studentProjects.json';

export default function CourseDetail() {
  const { courseId } = useParams();
  const course = coursesDetailData[courseId];

  const [activeSection, setActiveSection] = useState('about');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSection, setSelectedSection] = useState('All');
  const [projectSearch, setProjectSearch] = useState('');
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('site-theme') || 'light';
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('site-theme', theme);
  }, [theme, courseId]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  // Select corresponding student projects based on courseId
  const courseProjects = useMemo(() => {
    if (courseId === 'cse-3203') {
      return mlProjectsData;
    }
    if (courseId === 'cse-2100') {
      return seProjectsData;
    }
    return [];
  }, [courseId]);

  // Available sections for filtering
  const sections = useMemo(() => {
    const s = new Set();
    courseProjects.forEach((p) => {
      if (p.section) s.add(p.section);
    });
    return ['All', ...Array.from(s)];
  }, [courseProjects]);

  // Reset section filter if course changes
  useEffect(() => {
    setSelectedSection('All');
    setProjectSearch('');
  }, [courseId]);

  // Filter student projects
  const filteredProjects = useMemo(() => {
    return courseProjects.filter((p) => {
      const matchesSection = selectedSection === 'All' || p.section === selectedSection;
      const q = projectSearch.toLowerCase().trim();
      const matchesQ =
        !q ||
        (p.title && p.title.toLowerCase().includes(q)) ||
        (p.description && p.description.toLowerCase().includes(q)) ||
        (p.domain && p.domain.toLowerCase().includes(q)) ||
        (p.section && p.section.toLowerCase().includes(q)) ||
        (p.group && p.group.toLowerCase().includes(q)) ||
        (p.students &&
          p.students.some(
            (s) =>
              (s.name && s.name.toLowerCase().includes(q)) ||
              (s.id && s.id.includes(q))
          ));
      return matchesSection && matchesQ;
    });
  }, [courseProjects, selectedSection, projectSearch]);

  if (!course) {
    return (
      <div className="course-not-found-container">
        <h2>Course Not Found</h2>
        <p>The requested course information could not be located.</p>
        <Link to="/" className="btn-back-home">
          <ArrowLeft size={16} /> Return to Homepage
        </Link>
      </div>
    );
  }

  // Filter schedule by search query
  const filteredSchedule = course.schedule.filter((item) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      item.week.toLowerCase().includes(q) ||
      item.title.toLowerCase().includes(q) ||
      item.content.toLowerCase().includes(q) ||
      item.readings.toLowerCase().includes(q)
    );
  });

  const navItems = [
    { id: 'about', label: 'About Course' },
    { id: 'contents', label: 'Course Contents' },
    { id: 'clos', label: 'Learning Outcomes (CLOs)' },
    { id: 'schedule', label: 'Course Schedule' },
    ...(courseProjects.length > 0
      ? [{ id: 'projects', label: `Student Projects (${courseProjects.length})` }]
      : []),
    { id: 'staff', label: 'Instructor & Staff' },
    { id: 'textbooks', label: 'Textbooks & References' }
  ];

  return (
    <div className="course-page-wrapper">
      {/* Top Navbar */}
      <header className="course-top-header">
        <div className="course-top-container">
          <Link to="/" className="course-back-brand" title="Return to Home Portfolio">
            <ArrowLeft size={18} />
            <span className="brand-name">Md. Akram Hossain</span>
            <span className="brand-sep">/</span>
            <span className="brand-course-tag">{course.code}</span>
          </Link>

          <div className="course-top-actions">
            <button
              onClick={toggleTheme}
              className="theme-toggle-btn"
              aria-label="Toggle dark mode"
              title="Toggle Theme"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Link to="/" className="course-exit-btn">
              Home Portfolio
            </Link>
          </div>
        </div>
      </header>

      {/* Course Portal Body */}
      <div className="course-doc-layout">
        {/* Sidebar Navigation */}
        <aside className="course-sidebar">
          <div className="course-sidebar-brand">
            <span className="sidebar-course-code">{course.code}</span>
            <span className="sidebar-course-tag">Course Syllabus</span>
          </div>

          <div className="course-search-box">
            <Search size={15} className="course-search-icon" />
            <input
              type="text"
              className="course-search-input"
              placeholder={`Search schedule...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <nav className="course-sidebar-nav">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                className={`sidebar-nav-link ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => {
                  setActiveSection(item.id);
                  const el = document.getElementById(item.id);
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>{item.label}</span>
                {activeSection === item.id && <ChevronRight size={14} className="active-arrow" />}
              </button>
            ))}
          </nav>

          <div className="sidebar-doc-footer">
            <p>Department of CSE</p>
            <p>Shanto-Mariam University</p>
          </div>
        </aside>

        {/* Main Documentation Content Area */}
        <main className="course-main-content">
          {/* Header Banner */}
          <div className="course-content-header">
            <h1 className="course-main-title">{course.fullTitle}</h1>
            <div className="course-affiliation-link">
              <span className="dept-pill">{course.institution}</span>
              <span className="term-pill">{course.term}</span>
            </div>
            <div className="course-instructor-line">
              <strong>Instructor: </strong>
              <Link to="/" className="instructor-link">
                {course.instructor}
              </Link>{' '}
              &middot;{' '}
              <a href={`mailto:${course.instructorEmail}`} className="instructor-email">
                {course.instructorEmail}
              </a>
            </div>
          </div>

          {/* Quick Meta Grid */}
          <div className="course-meta-cards-grid">
            <div className="meta-card">
              <span className="meta-label">Credit Hours</span>
              <span className="meta-val">{course.creditHour} Credits</span>
            </div>
            <div className="meta-card">
              <span className="meta-label">Contact Hours</span>
              <span className="meta-val">{course.contactHours}</span>
            </div>
            <div className="meta-card">
              <span className="meta-label">Prerequisite</span>
              <span className="meta-val">{course.prerequisite}</span>
            </div>
            <div className="meta-card">
              <span className="meta-label">Co-requisite / Sessional</span>
              <span className="meta-val">{course.labCourse}</span>
            </div>
          </div>

          {/* Section: About Course */}
          <section id="about" className="doc-section">
            <h2 className="doc-section-heading">About Course</h2>
            <div className="doc-divider"></div>
            <p className="doc-lead-paragraph">{course.about}</p>
          </section>

          {/* Section: Course Contents */}
          <section id="contents" className="doc-section">
            <h2 className="doc-section-heading">Course Contents & Modules</h2>
            <div className="doc-divider"></div>
            <div className="course-modules-list">
              {course.courseContents.map((mod, idx) => (
                <div key={idx} className="module-item-card">
                  <div className="module-header-row">
                    <span className="module-number">Module {idx + 1}</span>
                    <h3 className="module-title">{mod.topic}</h3>
                  </div>
                  <p className="module-details">{mod.details}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Section: CLOs */}
          <section id="clos" className="doc-section">
            <h2 className="doc-section-heading">Course Learning Outcomes (CLOs)</h2>
            <div className="doc-divider"></div>
            <p className="section-note">
              Mapped with Program Learning Outcomes (PLOs) according to Board of Accreditation for Engineering and Technical Education (BAETE) & BAC Standards.
            </p>

            <div className="clo-table-container">
              <table className="clo-table">
                <thead>
                  <tr>
                    <th>CLO</th>
                    <th>Statement</th>
                    <th>Mapped PLO</th>
                    <th>Skill Level</th>
                    <th>Teaching-Learning Strategy</th>
                    <th>Assessment Strategy</th>
                  </tr>
                </thead>
                <tbody>
                  {course.clos.map((clo, idx) => (
                    <tr key={idx}>
                      <td className="clo-id-cell">
                        <strong>{clo.no}</strong>
                      </td>
                      <td className="clo-statement-cell">{clo.statement}</td>
                      <td className="clo-plo-cell">
                        <span className="badge-plo">{clo.plo}</span>
                      </td>
                      <td className="clo-skill-cell">{clo.skillLevel}</td>
                      <td className="clo-strategy-cell">{clo.teachingStrategy}</td>
                      <td className="clo-assess-cell">{clo.assessment}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section: Course Schedule */}
          <section id="schedule" className="doc-section">
            <div className="schedule-header-flex">
              <div>
                <h2 className="doc-section-heading">Course Schedule & Syllabus</h2>
                <div className="doc-divider"></div>
              </div>
            </div>

            <div className="schedule-timeline-container">
              <table className="schedule-table">
                <thead>
                  <tr>
                    <th style={{ width: '15%' }}>Week</th>
                    <th style={{ width: '25%' }}>Topic & Lecture</th>
                    <th style={{ width: '40%' }}>Core Learning Contents</th>
                    <th style={{ width: '20%' }}>Readings & Milestones</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredSchedule.map((item, idx) => (
                    <tr key={idx}>
                      <td className="week-cell">
                        <strong>{item.week}</strong>
                      </td>
                      <td className="topic-cell">{item.title}</td>
                      <td className="content-cell">{item.content}</td>
                      <td className="readings-cell">
                        <span className="reading-tag">{item.readings}</span>
                      </td>
                    </tr>
                  ))}
                  {filteredSchedule.length === 0 && (
                    <tr>
                      <td colSpan="4" className="no-schedule-results">
                        No schedule entries match "{searchQuery}".
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </section>

          {/* Section: Student Projects (if any for this course) */}
          {courseProjects.length > 0 && (
            <section id="projects" className="doc-section">
              <div className="projects-header-flex">
                <div>
                  <h2 className="doc-section-heading">Student Projects & Lab Works</h2>
                  <div className="doc-divider"></div>
                </div>
                <span className="projects-total-count-badge">
                  {filteredProjects.length} of {courseProjects.length} Projects
                </span>
              </div>
              <p className="section-note">
                Supervised laboratory projects, capstone prototypes, and technical implementations built by enrolled student teams.
              </p>

              {/* Projects Toolbar: Section Filter & Search */}
              <div className="course-projects-toolbar">
                {sections.length > 1 && (
                  <div className="course-filter-pills">
                    {sections.map((sec) => (
                      <button
                        key={sec}
                        type="button"
                        className={`course-filter-pill ${selectedSection === sec ? 'active' : ''}`}
                        onClick={() => setSelectedSection(sec)}
                      >
                        {sec}
                        <span className="pill-num">
                          {sec === 'All'
                            ? courseProjects.length
                            : courseProjects.filter((p) => p.section === sec).length}
                        </span>
                      </button>
                    ))}
                  </div>
                )}

                <div className="course-projects-search-box">
                  <Search size={15} className="course-projects-search-icon" />
                  <input
                    type="text"
                    className="course-projects-search-input"
                    placeholder="Search projects by title, domain, student name or ID..."
                    value={projectSearch}
                    onChange={(e) => setProjectSearch(e.target.value)}
                  />
                  {projectSearch && (
                    <button
                      type="button"
                      className="search-clear-btn"
                      onClick={() => setProjectSearch('')}
                      title="Clear search"
                    >
                      ×
                    </button>
                  )}
                </div>
              </div>

              {/* Course Projects Grid */}
              <div className="course-projects-cards-grid">
                {filteredProjects.map((p) => (
                  <div key={p.id} className="course-project-card">
                    <div className="proj-card-top">
                      <span className="proj-section-tag">
                        {p.section} {p.group ? `· ${p.group}` : ''}
                      </span>
                      {p.domain && (
                        <span className="proj-domain-tag">
                          <Brain size={12} />
                          <span>{p.domain}</span>
                        </span>
                      )}
                    </div>

                    <h3 className="proj-title">{p.title}</h3>

                    {p.description && (
                      <p className="proj-description">{p.description}</p>
                    )}

                    {/* Deliverables tags */}
                    {p.deliverables && p.deliverables.length > 0 && (
                      <div className="proj-deliverables-box">
                        <div className="deliverables-heading">
                          <FileText size={12} /> Deliverables:
                        </div>
                        <div className="deliverables-tags">
                          {p.deliverables.map((item, dIdx) => (
                            <span key={dIdx} className="deliverable-tag">
                              <CheckCircle2 size={11} className="deliv-icon" />
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Team Members List */}
                    {p.students && p.students.length > 0 && (
                      <div className="proj-students-box">
                        <div className="students-heading">
                          <Users size={12} /> Team Members ({p.students.length}):
                        </div>
                        <ul className="student-tags-list">
                          {p.students.map((student, sIdx) => (
                            <li key={sIdx} className="student-member-tag">
                              <span className="student-tag-name">{student.name}</span>
                              {student.id && (
                                <span className="student-tag-id">({student.id})</span>
                              )}
                              {student.github && (
                                <a
                                  href={student.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="student-icon-link"
                                  title="GitHub Profile"
                                >
                                  <Github size={11} />
                                </a>
                              )}
                              {student.linkedin && (
                                <a
                                  href={student.linkedin}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="student-icon-link"
                                  title="LinkedIn Profile"
                                >
                                  <Linkedin size={11} />
                                </a>
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Project Links (GitHub / LinkedIn / Live Repo) */}
                    {(p.repo || p.linkedin) && (
                      <div className="proj-footer-links">
                        {p.repo && (
                          <a
                            href={p.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="proj-link-btn"
                          >
                            <Github size={13} />
                            <span>Repository</span>
                            <ExternalLink size={11} />
                          </a>
                        )}
                        {p.linkedin && (
                          <a
                            href={p.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="proj-link-btn linkedin-btn"
                          >
                            <Linkedin size={13} />
                            <span>Post & Demo</span>
                            <ExternalLink size={11} />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                ))}

                {filteredProjects.length === 0 && (
                  <div className="no-projects-found">
                    <p>No student projects match your search criteria.</p>
                  </div>
                )}
              </div>
            </section>
          )}

          {/* Section: Staff & Instructor */}
          <section id="staff" className="doc-section">
            <h2 className="doc-section-heading">Instructor & Office Hours</h2>
            <div className="doc-divider"></div>
            <div className="instructor-card-box">
              <div className="instructor-avatar-box">
                <GraduationCap size={40} className="inst-icon" />
              </div>
              <div className="instructor-info-box">
                <h3 className="instructor-name">{course.instructor}</h3>
                <p className="instructor-role">
                  Lecturer, Department of Computer Science & Engineering
                </p>
                <p className="instructor-inst">
                  {course.institution}
                </p>
                <div className="instructor-contact-meta">
                  <span>
                    <strong>Email: </strong>
                    <a href={`mailto:${course.instructorEmail}`}>{course.instructorEmail}</a>
                  </span>
                  <span>
                    <strong>Office: </strong> Faculty Room, Dept. of CSE, SMUCT Main Campus
                  </span>
                  <span>
                    <strong>Office Hours: </strong> By appointment / Scheduled advising slots
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Section: Textbooks */}
          <section id="textbooks" className="doc-section">
            <h2 className="doc-section-heading">Textbooks & Reference Materials</h2>
            <div className="doc-divider"></div>
            <ul className="textbooks-list">
              {course.textbooks.map((book, idx) => (
                <li key={idx} className="textbook-item">
                  <FileText size={16} className="book-bullet-icon" />
                  <span>{book}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Back to Home CTA */}
          <div className="course-footer-cta">
            <Link to="/" className="btn-back-home-large">
              <ArrowLeft size={16} /> Back to Full Profile & Portfolio
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
}
