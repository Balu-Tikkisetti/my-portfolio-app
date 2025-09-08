import { useState, useEffect } from 'react';
import profilePic from './assets/profiledp.jpeg'

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = ['hero', 'about', 'projects', 'contact'];
    const handleScroll = () => {
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom > 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      tech: "Spring Boot • React • AWS • PostgreSQL",
      description: "Full-stack e-commerce solution with microservices architecture, payment integration, and real-time inventory management.",
      gradient: "from-purple-600 to-blue-600"
    },
    {
      title: "Real-Time Chat Application",
      tech: "Spring WebSocket • React • Redis • Docker",
      description: "Scalable chat application with real-time messaging, file sharing, and user presence indicators.",
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Data Analytics Dashboard",
      tech: "Spring Boot • React • D3.js • MongoDB",
      description: "Interactive dashboard for data visualization with real-time charts, filters, and export capabilities.",
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "Task Management System",
      tech: "Spring Security • React • MySQL • Docker",
      description: "Collaborative project management tool with role-based access, notifications, and progress tracking.",
      gradient: "from-indigo-600 to-purple-700"
    }
  ];

  const skills = [
    { name: "Java", level: 95 },
    { name: "Spring Boot", level: 90 },
    { name: "React", level: 88 },
    { name: "AWS", level: 85 },
    { name: "Docker", level: 80 },
    { name: "PostgreSQL", level: 85 }
  ];

  return (
    <div className="relative bg-slate-900 text-white overflow-x-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900"></div>
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #7c3aed 0%, transparent 50%),
                             radial-gradient(circle at 75% 75%, #06b6d4 0%, transparent 50%)`,
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-lg border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                BT
              </span>
            </div>
            <div className="hidden md:block">
              <div className="flex space-x-8">
                {['hero', 'about', 'projects', 'contact'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`px-3 py-2 text-sm font-medium transition-all duration-300 ${
                      activeSection === section
                        ? 'text-cyan-400 border-b-2 border-cyan-400'
                        : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center z-10">
          <div 
            className="relative mb-8"
            style={{
              transform: `translateY(${scrollY * 0.2}px) rotateX(${scrollY * 0.02}deg)`
            }}
          >
            <div className="w-40 h-40 mx-auto mb-8 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full animate-spin-slow opacity-75"></div>
              <div className="absolute inset-2 bg-slate-900 rounded-full overflow-hidden">
                <img 
                  src={profilePic}
                  alt="Balu Tikkisetti" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            </div>
          </div>
          
          <div
            style={{
              transform: `translateY(${scrollY * 0.1}px)`
            }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-200 to-purple-400 bg-clip-text text-transparent leading-tight">
              Balu Tikkisetti
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Java Full Stack Developer crafting scalable solutions with modern technologies
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a 
                href="/resume.docx" 
                target="_blank" 
                className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 font-semibold"
              >
                <span className="group-hover:mr-2 transition-all duration-300">Download Resume</span>
                <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
              </a>
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 border-2 border-slate-600 rounded-full hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/25"
              >
                View My Work
              </button>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-4 h-4 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                transform: `translateY(${scrollY * (0.1 + i * 0.05)}px)`
              }}
            ></div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105">
                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                  I am a passionate Java Full Stack Developer with expertise in building scalable, 
                  high-performance applications. My journey in software development spans across 
                  modern frameworks and cloud technologies, with a focus on creating solutions 
                  that make a real impact.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed">
                  I specialize in Spring Boot ecosystem, React frontend development, and AWS cloud 
                  services. I'm passionate about clean code, system design, and continuous learning 
                  in the ever-evolving world of technology.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Technical Skills</h3>
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-sm text-slate-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${skill.level}%`,
                        animationDelay: `${index * 200}ms`
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="group relative bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500 hover:transform hover:scale-105 hover:rotate-1"
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-purple-400 mb-4 font-medium">
                    {project.tech}
                  </p>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  <div className="flex space-x-4">
                    <button className="px-6 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 text-sm font-semibold">
                      View Project
                    </button>
                    <button className="px-6 py-2 border border-slate-600 rounded-lg hover:border-cyan-400 transition-all duration-300 text-sm">
                      View Code
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full mb-12"></div>
          
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations. 
            Let's discuss how we can work together!
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: 'Email', value: 'balutikkisetti@gmail.com', link: 'mailto:balutikkisetti@gmail.com', icon: '📧' },
              { label: 'Phone', value: '+1 572 208 9082', link: 'tel:+15722089082', icon: '📱' },
              { label: 'LinkedIn', value: 'balutikkisetti', link: 'https://www.linkedin.com/in/balutikkisetti/', icon: '💼' },
              { label: 'GitHub', value: 'Balu-Tikkisetti', link: 'https://github.com/Balu-Tikkisetti', icon: '💻' }
            ].map((contact, index) => (
              <a 
                key={index}
                href={contact.link}
                target={contact.link.startsWith('http') ? '_blank' : '_self'}
                className="group bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:-rotate-1"
              >
                <div className="text-3xl mb-3">{contact.icon}</div>
                <h3 className="font-semibold text-cyan-400 mb-2">{contact.label}</h3>
                <p className="text-sm text-slate-300 group-hover:text-white transition-colors duration-300">
                  {contact.value}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-slate-700/50 py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-400">
            © 2025 Balu Tikkisetti. Crafted with passion and modern web technologies.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default App;
