import React, { useState, useEffect } from 'react';
import './nav.css';
import { CiHome } from 'react-icons/ci';
import { FaRegUser } from 'react-icons/fa';
import { GiAchievement } from 'react-icons/gi';
import { GoProject } from 'react-icons/go';
import { MdOutlineMessage } from 'react-icons/md';
import { IoSchoolSharp } from 'react-icons/io5';
import { HiMenu, HiX } from 'react-icons/hi';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      let currentSection = '';
      let minDistance = Infinity;
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const sectionTop = window.scrollY + rect.top;
        const sectionBottom = sectionTop + rect.height;
        const sectionCenter = sectionTop + rect.height / 2;
        
        const distance = Math.abs(scrollPosition - sectionCenter);
        
        if (distance < minDistance) {
          minDistance = distance;
          currentSection = '#' + section.id;
        }
      });
      
      if (currentSection && currentSection !== activeNav) {
        setActiveNav(currentSection);
      }
    };

    // Initial check
    handleScroll();
    
    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeNav]);

  const handleNavClick = (navId) => {
    setActiveNav(navId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="desktop-nav">
        <a href="#home" onClick={() => handleNavClick('#home')} className={activeNav === '#home' ? 'active' : ''}>
          <CiHome />
        </a>
        <a href="#education" onClick={() => handleNavClick('#education')} className={activeNav === '#education' ? 'active' : ''}>
          <IoSchoolSharp />
        </a>
        <a href="#achievements" onClick={() => handleNavClick('#achievements')} className={activeNav === '#achievements' ? 'active' : ''}>
          <GiAchievement />
        </a>
        <a href="#title" onClick={() => handleNavClick('#title')} className={activeNav === '#title' ? 'active' : ''}>
          <GoProject />
        </a>
        <a href="#get-in-touch" onClick={() => handleNavClick('#get-in-touch')} className={activeNav === '#get-in-touch' ? 'active' : ''}>
          <MdOutlineMessage />
        </a>
      </nav>

      {/* Mobile Menu Button */}
      <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        {isMobileMenuOpen ? <HiX /> : <HiMenu />}
      </button>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="mobile-nav">
          <a href="#home" onClick={() => handleNavClick('#home')} className={activeNav === '#home' ? 'active' : ''}>
            <CiHome />
            <span>Home</span>
          </a>
          <a href="#education" onClick={() => handleNavClick('#education')} className={activeNav === '#education' ? 'active' : ''}>
            <IoSchoolSharp />
            <span>Education</span>
          </a>
          <a href="#achievements" onClick={() => handleNavClick('#achievements')} className={activeNav === '#achievements' ? 'active' : ''}>
            <GiAchievement />
            <span>Achievements</span>
          </a>
          <a href="#title" onClick={() => handleNavClick('#title')} className={activeNav === '#title' ? 'active' : ''}>
            <GoProject />
            <span>Projects</span>
          </a>
          <a href="#get-in-touch" onClick={() => handleNavClick('#get-in-touch')} className={activeNav === '#get-in-touch' ? 'active' : ''}>
            <MdOutlineMessage />
            <span>Contact</span>
          </a>
        </nav>
      )}
    </>
  );
};

export default Nav;
