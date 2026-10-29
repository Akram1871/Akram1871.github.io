import React from 'react';
import { Link } from 'react-router-dom';
import teachingData from '../data/teaching.json';

export default function Teaching() {
  return (
    <section id="teaching" className="section teaching-section">
      <div className="section-header teaching-header-minimal">
        <h2 className="teaching-section-title">Teaching</h2>
        <div className="teaching-title-underline"></div>
      </div>

      <ul className="teaching-course-list">
        {teachingData.map((course) => {
          if (course.externalAnchor) {
            return (
              <li key={course.id} className="teaching-course-item">
                <a
                  href={course.externalAnchor}
                  className="teaching-course-link"
                >
                  {course.displayLine}
                </a>
              </li>
            );
          }

          return (
            <li key={course.id} className="teaching-course-item">
              <Link
                to={`/course/${course.id}`}
                className="teaching-course-link"
              >
                {course.displayLine}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
