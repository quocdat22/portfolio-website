import React from 'react';
import './Projects.css';
import NeuCard from './NeuCard';
import GlassCard from './GlassCard';

const ProjectCard = ({ title, description, image, technologies, github, demo, featured }) => {
  const CardComponent = featured ? GlassCard : NeuCard;
  const cardProps = featured ? { blur: 8, opacity: 0.1 } : { depth: 6 };

  return (
    <CardComponent 
      className={`project-card ${featured ? 'featured-project' : ''}`} 
      {...cardProps}
    >
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
    </CardComponent>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'Ứng dụng Luật Giao Thông Đường Bộ',
      description: 'Ứng dụng Android giúp người dùng tìm hiểu và tra cứu các quy định về luật giao thông đường bộ tại Việt Nam, được phát triển bằng Java.',
      image: `${process.env.PUBLIC_URL}/images/traffic.jpg`,
      technologies: ['Java', 'Android SDK', 'Firebase', 'MongoDB', 'Roboflow'],
      github: 'https://github.com/quocdat22/DoAnLuatGiaoThongDuongBo',
      demo: '',
      featured: true
    },
    {
      title: '  ',
      description: 'Ứng dụng quản lý cửa hàng quần áo, giúp theo dõi hàng tồn kho, quản lý bán hàng và khách hàng, được phát triển bằng C# và SQL Server.',
      image: `${process.env.PUBLIC_URL}/images/quanao.jpg`,
      technologies: ['C# (Windows Form)', 'SQL Server', 'Crystal Report', 'Sunny UI'],
      github: 'https://github.com/quocdat22/QLCuaHangQuanAo',
      demo: '',
      featured: false
    },
    // {
    //   title: 'Portfolio Website',
    //   description: 'A responsive portfolio website built with React',
    //   image: 'https://via.placeholder.com/400x300',
    //   technologies: ['React', 'CSS', 'JavaScript'],
    //   github: 'https://github.com/yourusername/portfolio',
    //   demo: 'https://demo-portfolio.com',
    //   featured: false
    // },
    // {
    //   title: 'Weather Application',
    //   description: 'Real-time weather forecast app with location detection',
    //   image: 'https://via.placeholder.com/400x300',
    //   technologies: ['JavaScript', 'React', 'OpenWeather API', 'Geolocation'],
    //   github: 'https://github.com/yourusername/weather-app',
    //   demo: 'https://demo-weather.com',
    //   featured: false
    // },
    // {
    //   title: 'Chat Application',
    //   description: 'Real-time chat platform with rooms and notifications',
    //   image: 'https://via.placeholder.com/400x300',
    //   technologies: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
    //   github: 'https://github.com/yourusername/chat-app',
    //   demo: 'https://demo-chat.com',
    //   featured: false
    // }
    
  ];

  // Separate featured project from regular projects
  const featuredProject = projects.find(project => project.featured);
  const regularProjects = projects.filter(project => !project.featured);

  return (
    <section id="du-an" className="projects-section">
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