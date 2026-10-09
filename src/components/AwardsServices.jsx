import React from 'react';
import { Trophy, CheckCircle, ShieldCheck } from 'lucide-react';
import awardsData from '../data/awards.json';

export default function AwardsServices() {
  return (
    <section id="awards" className="section awards-section">
      <div className="section-header">
        <div className="section-title-wrapper">
          <Trophy className="section-icon" />
          <h2 className="section-title">Honors, Awards & Services</h2>
        </div>
        <p className="section-subtitle">
          Competition rankings, shared tasks performance, and professional peer-review services.
        </p>
      </div>

      <div className="awards-service-grid">
        {/* Awards Column */}
        <div className="awards-col">
          <h3 className="sub-heading">
            <Trophy size={18} className="sub-icon text-amber" />
            Competitive Honors & Awards
          </h3>
          <div className="awards-cards">
            {awardsData.awards.map((award, idx) => (
              <div key={idx} className="award-card">
                <div className="award-rank-badge">{award.rank}</div>
                <div className="award-info">
                  <h4 className="award-event">{award.competition}</h4>
                  <p className="award-desc">{award.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Services Column */}
        <div className="services-col">
          <h3 className="sub-heading">
            <ShieldCheck size={18} className="sub-icon text-blue" />
            Academic & Community Services
          </h3>
          <div className="service-blocks">
            {awardsData.services.map((svc, idx) => (
              <div key={idx} className="service-card">
                <h4 className="service-role">{svc.role}</h4>
                <ul className="service-list">
                  {svc.items.map((item, i) => {
                    const isObj = typeof item === 'object' && item !== null;
                    const text = isObj ? item.name : item;
                    const url = isObj ? item.url : null;

                    return (
                      <li key={i}>
                        <CheckCircle size={14} className="service-bullet-icon" />
                        {url ? (
                          <a
                            href={url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="service-link"
                          >
                            {text}
                          </a>
                        ) : (
                          <span>{text}</span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
