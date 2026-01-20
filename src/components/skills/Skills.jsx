import React from 'react';
import './skills.css';

const skillsData = {
  'Cyber Security': ['Risk Managment', 'Cyber Security Audit', 'Incident Responce', 'Data Loss Protection(DLP)', 'Third Party Risk Managment'],
  'Networking & Infrastructure': ['Network Engineering', 'Asset Management', 'Infrastructure Management', 'Security Education and Awareness'],
  'Identity & Access Management (IAM)': ['Access Control', 'Security Protocols'],
  'Web Technologies': ['Java', 'Python', 'HTML', 'CSS']
};

const Skills = () => {
  return (
    <section id="skills">
      <h2>My Technical Skills</h2>
      
      <div className="skills-tags-container">
        {Object.entries(skillsData).map((category, index) => (
          <div key={index} className="tags-category">
            <h4 className="tags-category-title">{category[0]}</h4>
            <div className="tags-cloud">
              {category[1].map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
