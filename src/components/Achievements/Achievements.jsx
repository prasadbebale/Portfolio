import React, { useState, useEffect } from 'react';
import './achievement.css';

const achievements = [
  
  {
    title: '"Java DSA" Certificate Earned from Apana College',
    description: 'The Apna College Java DSA course is a comprehensive course that covers all the essential topics in Java and Data Structures and Algorithms. The course is designed to help students prepare for job interviews at top tech companies.',
    imageUrl: 'https://i.postimg.cc/yYp5QPWg/JAVADSA.jpg',
  },
  {
    title: 'Certificate in Project Exhibition - YASHOTECHFEST 2k23',
    description: 'Recognized for my contribution to the YASHOTECHFEST 2k23 project exhibition with the project titled "IRIS - The Voice Assistant". This certificate acknowledges my active participation and successful presentation of project, showcasing my dedication to innovation and technological excellence.',
    imageUrl: 'https://i.postimg.cc/ZnTggsr3/Whats-App-Image-2024-01-19-at-7-33-26-PM.jpg', 
  },
  {
    title: '"Japnese N5" Certification Earned from Udemy',
    description: 'Achieved foundational proficiency in Japanese language through completion of the Japanese Language Proficiency Test (JLPT) N5 Certification on Udemy. Acquired essential grammar, vocabulary, and communication skills for basic conversations and reading. Demonstrates commitment to cross-cultural understanding and language mastery."    ',
    imageUrl: 'https://i.postimg.cc/gkcFBjD5/Japan-page-0001.jpg',
  },
  
];

const Achievement = () => {
  const [hasBeenViewed, setHasBeenViewed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasBeenViewed) {
          setHasBeenViewed(true);
        }
      },
      { threshold: 0.3 }
    );

    const section = document.querySelector('#achievements');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, [hasBeenViewed]);

  return (
    <section id='achievements'>
      <div className="achievement-container">
        <h2>Achievements</h2>
        <div className="achievement-list">
          {achievements.map((achievement, index) => (
            <div className="achievement-item" key={index}>
              <div className="achievement-image-container">
                <img className="img-responsive" src={achievement.imageUrl} alt={`Certificate for ${achievement.title}`} />
              </div>
              <h3>{achievement.title}</h3>
              <p>{achievement.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievement;
