import React from 'react';
import './Projects.css';

const ProjectCard = ({ title, description, image, technologies, github, demo, featured }) => (
  <div className={`project-card ${featured ? 'featured-project' : ''}`}>
    <div className="project-image">
      <img src={image} alt={title} />
    </div>
    <div className="project-content">
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="project-tech">
        {technologies.map((tech, index) => (
          <span key={index} className="tech-tag">{tech}</span>
        ))}
      </div>
      <div className="project-links">
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" className="project-link">
            <i className="fab fa-github"></i> GitHub
          </a>
        )}
        {demo && (
          <a href={demo} target="_blank" rel="noopener noreferrer" className="project-link">
            <i className="fas fa-external-link-alt"></i> Demo
          </a>
        )}
      </div>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Website',
      description: 'A full-stack e-commerce platform built with React and Node.js with features like product search, filtering, cart management, user authentication, and payment integration.',
      image: 'https://via.placeholder.com/600x400',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux', 'Stripe'],
      github: 'https://github.com/yourusername/ecommerce',
      demo: 'https://demo-ecommerce.com',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'A task management application with drag-and-drop functionality',
      image: 'https://via.placeholder.com/400x300',
      technologies: ['React', 'TypeScript', 'Firebase'],
      github: 'https://github.com/yourusername/task-manager',
      demo: 'https://demo-taskmanager.com',
      featured: false
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website built with React',
      image: 'https://via.placeholder.com/400x300',
      technologies: ['React', 'CSS', 'JavaScript'],
      github: 'https://github.com/yourusername/portfolio',
      demo: 'https://demo-portfolio.com',
      featured: false
    },
    {
      title: 'Weather Application',
      description: 'Real-time weather forecast app with location detection',
      image: 'https://via.placeholder.com/400x300',
      technologies: ['JavaScript', 'React', 'OpenWeather API', 'Geolocation'],
      github: 'https://github.com/yourusername/weather-app',
      demo: 'https://demo-weather.com',
      featured: false
    },
    {
      title: 'Chat Application',
      description: 'Real-time chat platform with rooms and notifications',
      image: 'https://via.placeholder.com/400x300',
      technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      github: 'https://github.com/yourusername/chat-app',
      demo: 'https://demo-chat.com',
      featured: false
    }
  ];

  // Separate featured project from regular projects
  const featuredProject = projects.find(project => project.featured);
  const regularProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="projects-section">
      <h2>Dự án nổi bật</h2>
      
      <div className="projects-container">
        {/* Featured Project */}
        {featuredProject && (
          <div className="featured-project-container">
            <ProjectCard {...featuredProject} />
          </div>
        )}

        {/* Regular Projects Grid */}
        <div className="regular-projects-grid">
          {regularProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 