import React from 'react';
import { Bell, ArrowDown } from 'lucide-react';
import profileData from '../data/profile.json';

export default function News() {
  if (!profileData.news || profileData.news.length === 0) return null;

  return (
    <section id="news" className="section news-section">
      <div className="section-header">
        <div className="section-title-wrapper">
          <Bell className="section-icon" />
          <h2 className="section-title">Recent News</h2>
          <span className="news-counter-badge">{profileData.news.length} Updates</span>
        </div>
      </div>

      <div className="news-scroller-container">
        <div className="news-timeline-scrollable">
          {profileData.news.map((item, idx) => (
            <div key={idx} className="news-timeline-item">
              <div className="timeline-marker">
                <div className="timeline-dot" />
                {idx < profileData.news.length - 1 && <div className="timeline-line" />}
              </div>

              <div className="timeline-content-card">
                <div className="timeline-date-tag">{item.date}</div>

                <div className="timeline-card-body">
                  {item.image && (
                    <div className="timeline-img-box">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="timeline-thumb"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                  )}

                  <div className="timeline-text">
                    <h3 className="timeline-item-title">{item.title}</h3>
                    <p className="timeline-item-desc">{item.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="scroller-scroll-hint">
          <ArrowDown size={14} /> Scroll to view past milestones ({profileData.news.length} total)
        </div>
      </div>
    </section>
  );
}
