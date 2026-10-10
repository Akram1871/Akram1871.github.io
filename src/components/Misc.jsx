import React, { useState } from 'react';
import miscData from '../data/misc.json';

const Misc = () => {
  const [activeTab, setActiveTab] = useState('activities');
  const [lightboxImg, setLightboxImg] = useState(null);

  const activities = miscData.gallery || [];
  const videos = miscData.videos || [];

  return (
    <section id="misc" className="section misc-section">
      <div className="section-header">
        <span className="section-badge">Gallery & Talks</span>
        <h2 className="section-title">Activities & Presentations</h2>
        <div className="section-line"></div>
      </div>

      <div className="misc-tabs-container">
        <div className="misc-tabs-pills">
          <button
            className={`misc-tab-btn ${activeTab === 'activities' ? 'active' : ''}`}
            onClick={() => setActiveTab('activities')}
          >
            📸 Recent Activities ({activities.length})
          </button>
          <button
            className={`misc-tab-btn ${activeTab === 'talks' ? 'active' : ''}`}
            onClick={() => setActiveTab('talks')}
          >
            🎥 Presentation Videos ({videos.length})
          </button>
        </div>
      </div>

      {activeTab === 'activities' && (
        <div className="misc-gallery-grid">
          {activities.map((item, idx) => (
            <div
              key={item.id || idx}
              className="gallery-card"
              onClick={() => setLightboxImg(item)}
            >
              <div className="gallery-img-wrapper">
                <img src={item.image} alt={item.title} loading="lazy" />
                <div className="gallery-overlay">
                  <span className="gallery-zoom-icon">🔍 View Photo</span>
                </div>
              </div>
              <div className="gallery-info">
                <div className="gallery-date-badge">{item.date}</div>
                <h3 className="gallery-title">{item.title}</h3>
                <p className="gallery-caption">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'talks' && (
        <div className="misc-videos-grid">
          {videos.map((video, idx) => (
            <div key={video.id || video.youtubeId || idx} className="video-card">
              <div className="video-player-box">
                <iframe
                  src={video.embedUrl}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="video-info">
                <div className="video-header-row">
                  <span className="video-venue-tag">{video.venue}</span>
                  {video.date && <span className="video-date-tag">{video.date}</span>}
                </div>
                <h3 className="video-title">{video.title}</h3>
                <p className="video-description">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {lightboxImg && (
        <div className="lightbox-overlay" onClick={() => setLightboxImg(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close-btn" onClick={() => setLightboxImg(null)}>
              &times;
            </button>
            <img src={lightboxImg.image} alt={lightboxImg.title} className="lightbox-img" />
            <div className="lightbox-meta">
              <h3>{lightboxImg.title}</h3>
              <p>{lightboxImg.caption}</p>
              <span className="lightbox-date">{lightboxImg.date}</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Misc;
