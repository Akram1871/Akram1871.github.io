import React, { useState } from 'react';
import { ExternalLink, Code2, FileText, ChevronDown, ChevronUp, Award } from 'lucide-react';

export default function PublicationCard({ pub }) {
  const [showAbstract, setShowAbstract] = useState(false);

  return (
    <article className="pub-card">
      {pub.thumbnail && (
        <div className="pub-thumbnail-container">
          <img
            src={pub.thumbnail}
            alt={`${pub.title} figure`}
            className="pub-thumbnail"
            loading="lazy"
            onError={(e) => {
              // Hide broken image placeholder gracefully
              e.currentTarget.style.display = 'none';
            }}
          />
          <span className="pub-badge">{pub.badge || pub.type}</span>
        </div>
      )}

      <div className="pub-content">
        <div className="pub-header-row">
          <h3 className="pub-title">{pub.title}</h3>
        </div>

        <div className="pub-authors">
          {pub.authors.map((author, idx) => (
            <span key={idx}>
              {author.isSelf ? (
                <strong className="self-author">{author.name}</strong>
              ) : (
                author.name
              )}
              {idx < pub.authors.length - 1 ? ', ' : ''}
            </span>
          ))}
        </div>

        <div className="pub-meta">
          <span className={`type-tag tag-${pub.type.toLowerCase()}`}>{pub.type}</span>
          <span className="venue-name">{pub.venue}</span>
          <span className="pub-year">({pub.year})</span>
          {pub.award && (
            <span className="award-tag">
              <Award size={14} className="award-icon" />
              {pub.award}
            </span>
          )}
        </div>

        {pub.abstract && (
          <div className="pub-abstract-wrapper">
            <button
              type="button"
              className="btn-toggle-abstract"
              onClick={() => setShowAbstract(!showAbstract)}
              aria-expanded={showAbstract}
            >
              {showAbstract ? (
                <>
                  <ChevronUp size={14} /> Hide Abstract
                </>
              ) : (
                <>
                  <ChevronDown size={14} /> Read Abstract
                </>
              )}
            </button>
            {showAbstract && (
              <div className="pub-abstract-body">
                <p>{pub.abstract}</p>
              </div>
            )}
          </div>
        )}

        <div className="pub-actions">
          {pub.links?.paper && (
            <a
              href={pub.links.paper}
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn action-paper"
            >
              <FileText size={15} />
              <span>Paper</span>
              <ExternalLink size={12} className="btn-external-icon" />
            </a>
          )}
          {pub.links?.code && (
            <a
              href={pub.links.code}
              target="_blank"
              rel="noopener noreferrer"
              className="action-btn action-code"
            >
              <Code2 size={15} />
              <span>Code</span>
              <ExternalLink size={12} className="btn-external-icon" />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
