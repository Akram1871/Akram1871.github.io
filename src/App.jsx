import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import News from './components/News';
import ExperienceEducation from './components/ExperienceEducation';
import ResearchGroup from './components/ResearchGroup';
import Publications from './components/Publications';
import AwardsServices from './components/AwardsServices';
import Teaching from './components/Teaching';
import Misc from './components/Misc';
import Footer from './components/Footer';
import CourseDetail from './components/CourseDetail';
import './App.css';

function MainPortfolio() {
  const location = useLocation();

  useEffect(() => {
    // If the hash contains a section anchor like #/teaching or #teaching
    const hash = window.location.hash;
    if (hash && hash !== '#/' && !hash.startsWith('#/course')) {
      const targetId = hash.replace(/^#\/?/, '');
      const el = document.getElementById(targetId);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 120);
      }
    }
  }, [location]);

  return (
    <div className="site-wrapper">
      <Navbar />
      <main className="main-content-area">
        <Hero />
        <News />
        <ExperienceEducation />
        <ResearchGroup />
        <Publications />
        <AwardsServices />
        <Teaching />
        <Misc />
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainPortfolio />} />
        <Route path="/course/:courseId" element={<CourseDetail />} />
        {/* Fallback route: any unknown route gracefully loads MainPortfolio */}
        <Route path="*" element={<MainPortfolio />} />
      </Routes>
    </HashRouter>
  );
}
