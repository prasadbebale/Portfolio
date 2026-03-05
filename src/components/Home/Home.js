import React from 'react';
import './home.css';
import ME from '../../Assets/me.png';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import CV from '../../Assets/cv.pdf';

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="container">
        <div className="home__content">
          <div className="home__text">
            <h1>Hello, I'm Prasad Bebale</h1>
            <p>Welcome to my portfolio website</p>

            <div className="header__social">
              <a href="https://www.linkedin.com/in/prasad-bebale/" target='_blank'><FaLinkedin /></a>
              <a href="https://github.com/Prasad103" target='_blank'><FaGithub /></a>
              <a href="mailto:prasadbebale010@gmail.com" target='_blank'><MdOutlineEmail /></a>
            </div>

            <div className='cta'>
              <a className='btn btn-primary'>Download CV</a>
              <a href="#skills" className='btn btn-secondary'>Let's Talk</a>
            </div>
          </div>

          <div className="home__image">
            <img src={ME} alt="Your Name" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
