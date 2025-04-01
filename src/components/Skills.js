import React from 'react';
import './Skills.css';

const SkillItem = ({ name, level, icon }) => (
  <div className="skill-item">
    <div className="skill-header">
      <i className={icon}></i>
      <span>{name}</span>
    </div>
    <div className="skill-bar">
      <div 
        className="skill-progress" 
        style={{ width: `${level}%` }}
      ></div>
    </div>
  </div>
);

const Skills = () => {
  const skills = [
    { name: 'HTML/CSS', level: 90, icon: 'fab fa-html5' },
    { name: 'JavaScript', level: 85, icon: 'fab fa-js' },
    { name: 'React', level: 80, icon: 'fab fa-react' },
    { name: 'Node.js', level: 75, icon: 'fab fa-node-js' },
    { name: 'Python', level: 70, icon: 'fab fa-python' },
    { name: 'Git', level: 85, icon: 'fab fa-git-alt' },
  ];

  return (
    <section id="skills" className="skills-section">
      <h2>Kỹ năng</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <SkillItem
            key={index}
            name={skill.name}
            level={skill.level}
            icon={skill.icon}
          />
        ))}
      </div>
    </section>
  );
};

export default Skills; 