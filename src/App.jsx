import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import News from './components/News';
import ExperienceEducation from './components/ExperienceEducation';
import Publications from './components/Publications';
import AwardsServices from './components/AwardsServices';
import Teaching from './components/Teaching';
import StudentProjects from './components/StudentProjects';
import Misc from './components/Misc';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  return (
    <div className="site-wrapper">
      <Navbar />
      <main className="main-content-area">
        <Hero />
        <News />
        <ExperienceEducation />
        <Publications />
        <AwardsServices />
        <Teaching />
        <StudentProjects />
        <Misc />
      </main>
      <Footer />
    </div>
  );
}
