import React, { useState, useEffect } from 'react';
import { Download, Menu, X, Sun, Moon } from 'lucide-react';
import profileData from '../data/profile.json';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('site-theme') || 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('site-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const navLinks = [
    { label: 'About', id: 'about' },
    { label: 'News', id: 'news' },
    { label: 'Research Group', id: 'research-group' },
    { label: 'Publications', id: 'publications' },
    { label: 'Awards & Service', id: 'awards' },
    { label: 'Teaching', id: 'teaching' },
    { label: 'Misc', id: 'misc' },
  ];

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    // If currently on a course detail page or another route
    if (window.location.hash.startsWith('#/course')) {
      window.location.hash = '#/';
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="navbar-header">
      <div className="nav-container">
        <a
          href="#/"
          onClick={(e) => handleNavClick(e, 'about')}
          className="nav-brand"
        >
          <span className="brand-name">{profileData.name}</span>
        </a>

        {/* Desktop Nav */}
        <nav className="nav-desktop">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#/${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className="nav-link"
            >
              {link.label}
            </a>
          ))}
          <a
            href={profileData.cvLink}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-btn-cv"
          >
            <Download size={14} />
            <span>CV</span>
          </a>

          {/* Theme Toggle Button */}
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
        </nav>

        {/* Mobile Actions: Theme Toggle + Menu */}
        <div className="mobile-nav-actions">
          <button
            type="button"
            className="theme-toggle-btn mobile-theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button
            type="button"
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <nav className="nav-mobile-menu">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#/${link.id}`}
              className="nav-mobile-link"
              onClick={(e) => handleNavClick(e, link.id)}
            >
              {link.label}
            </a>
          ))}
          <a
            href={profileData.cvLink}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-mobile-cv-btn"
            onClick={() => setMobileMenuOpen(false)}
          >
            <Download size={14} />
            <span>Download CV</span>
          </a>
        </nav>
      )}
    </header>
  );
}
