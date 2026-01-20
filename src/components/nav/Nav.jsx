import React, { useState } from 'react';
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
        <a href="#education" onClick={() => handleNavClick('#about')} className={activeNav === '#about' ? 'active' : ''}>
          <IoSchoolSharp />
        </a>
        <a href="#achievements" onClick={() => handleNavClick('#achievement')} className={activeNav === '#achievement' ? 'active' : ''}>
          <GiAchievement />
        </a>
        <a href="#title" onClick={() => handleNavClick('#project')} className={activeNav === '#project' ? 'active' : ''}>
          <GoProject />
        </a>
        <a href="#get-in-touch" onClick={() => handleNavClick('#contact')} className={activeNav === '#contact' ? 'active' : ''}>
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
          <a href="#education" onClick={() => handleNavClick('#about')} className={activeNav === '#about' ? 'active' : ''}>
            <IoSchoolSharp />
            <span>Education</span>
          </a>
          <a href="#achievements" onClick={() => handleNavClick('#achievement')} className={activeNav === '#achievement' ? 'active' : ''}>
            <GiAchievement />
            <span>Achievements</span>
          </a>
          <a href="#title" onClick={() => handleNavClick('#project')} className={activeNav === '#project' ? 'active' : ''}>
            <GoProject />
            <span>Projects</span>
          </a>
          <a href="#get-in-touch" onClick={() => handleNavClick('#contact')} className={activeNav === '#contact' ? 'active' : ''}>
            <MdOutlineMessage />
            <span>Contact</span>
          </a>
        </nav>
      )}
    </>
  );
};

export default Nav;
