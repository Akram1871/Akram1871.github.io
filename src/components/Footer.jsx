import React from 'react';
import profileData from '../data/profile.json';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-left">
          <p className="footer-name">{profileData.name}</p>
          <p className="footer-affiliation">{profileData.department}</p>
          <p className="footer-location">{profileData.affiliation}, {profileData.location}</p>
          <p className="footer-email">
            Contact:{' '}
            <a href={`mailto:${profileData.email}`} className="footer-email-link">
              {profileData.email}
            </a>
          </p>
        </div>

        <div className="footer-right">
          <p className="footer-copy">
            © {new Date().getFullYear()} {profileData.name}. All rights reserved.
          </p>
          <p className="footer-tech">
            Built with React & Vite. Deployed automatically to GitHub Pages.
          </p>
        </div>
      </div>
    </footer>
  );
}
