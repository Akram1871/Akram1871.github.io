import React, { useState, useMemo } from 'react';
import { Search, BookOpen, Filter } from 'lucide-react';
import publicationsData from '../data/publications.json';
import PublicationCard from './PublicationCard';

export default function Publications() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Dynamically compute available categories from data
  const categories = useMemo(() => {
    const rawTypes = publicationsData.map((item) => item.type);
    return ['All', ...Array.from(new Set(rawTypes))];
  }, []);

  // Filter and sort items declaratively
  const filteredPublications = useMemo(() => {
    return publicationsData
      .filter((pub) => {
        const matchesCategory =
          selectedCategory === 'All' || pub.type === selectedCategory;

        const q = searchQuery.toLowerCase().trim();
        const matchesSearch =
          !q ||
          pub.title.toLowerCase().includes(q) ||
          pub.venue.toLowerCase().includes(q) ||
          (pub.abstract && pub.abstract.toLowerCase().includes(q)) ||
          pub.authors.some((author) => author.name.toLowerCase().includes(q));

        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => b.year - a.year);
  }, [selectedCategory, searchQuery]);

  return (
    <section id="publications" className="section publications-section">
      <div className="section-header">
        <div className="section-title-wrapper">
          <BookOpen className="section-icon" />
          <h2 className="section-title">Publications</h2>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="publications-toolbar">
        <div className="filter-pills" role="tablist" aria-label="Publication types">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={selectedCategory === cat}
              className={`filter-pill ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
              {cat === 'All' ? (
                <span className="pill-count">{publicationsData.length}</span>
              ) : (
                <span className="pill-count">
                  {publicationsData.filter((p) => p.type === cat).length}
                </span>
              )}
            </button>
          ))}
        </div>

        <div className="search-box">
          <Search size={16} className="search-icon" />
          <input
            type="text"
            className="search-input"
            placeholder="Search papers by title, author, or keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            aria-label="Search publications"
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

      {/* Declarative List Rendering */}
      <div className="publications-list">
        {filteredPublications.length > 0 ? (
          filteredPublications.map((paper) => (
            <PublicationCard key={paper.id} pub={paper} />
          ))
        ) : (
          <div className="empty-results">
            <Filter size={32} className="empty-icon" />
            <p>No publications found matching "{searchQuery}".</p>
            <button
              type="button"
              className="btn-reset-filters"
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
              }}
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
