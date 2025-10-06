import { useState, useEffect } from "react";
import profilePic from "./assets/profiledp.jpeg";

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("about");
  const [showPoster, setShowPoster] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = ["about", "experience", "skills", "projects", "contact"];
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200;

      let current = "about";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = window.scrollY + rect.top;
          const elementBottom = elementTop + element.offsetHeight;

          if (scrollPos >= elementTop && scrollPos < elementBottom) {
            current = section;
          }
        }
      });

      if (window.scrollY < 100) {
        current = "about";
      }

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        "Java (8–17)",
        "TypeScript",
        "JavaScript (ES6+)",
        "Python",
        "Shell Scripting",
      ],
    },
    {
      category: "Frontend",
      skills: [
        "Angular",
        "React",
        "HTML5",
        "CSS3",
        "Responsive UI",
        "Webpack/Vite",
        "RxJS",
      ],
    },
    {
      category: "Backend & APIs",
      skills: [
        "Spring Boot 3.x",
        "Spring WebFlux",
        "Spring Security",
        "Hibernate/JPA",
        "Node.js",
        "Express",
        "RESTful APIs",
        "SOAP (legacy)",
      ],
    },
    {
      category: "Architecture & Methodologies",
      skills: [
        "Microservices",
        "Event-Driven Architecture",
        "CQRS",
        "DDD (Domain-Driven Design)",
        "12-Factor Apps",
        "Design Patterns (GoF)",
        "Agile/Scrum",
        "CI/CD",
        "TDD",
      ],
    },
    {
      category: "Messaging & Streaming",
      skills: ["Apache Kafka", "Kafka Streams", "RabbitMQ"],
    },
    {
      category: "Databases (Relational)",
      skills: ["PostgreSQL", "MySQL", "Oracle", "SQL Server"],
    },
    {
      category: "Databases (NoSQL & Caching)",
      skills: ["MongoDB", "Amazon DynamoDB", "Redis", "Elasticsearch"],
    },
    {
      category: "Cloud & Serverless",
      skills: [
        "AWS (EC2, S3, RDS)",
        "AWS Lambda",
        "API Gateway",
        "Azure App Service",
        "Azure Functions",
      ],
    },
    {
      category: "DevOps & IaC",
      skills: [
        "Docker",
        "Kubernetes",
        "Helm",
        "Terraform",
        "Jenkins",
        "GitLab CI/CD",
        "GitHub Actions",
      ],
    },
    {
      category: "Security & API Management",
      skills: [
        "OAuth2/OIDC",
        "JWT",
        "mTLS/SSL",
        "Apigee",
        "Istio (service mesh)",
      ],
    },
    {
      category: "Observability",
      skills: [
        "Prometheus",
        "Grafana",
        "ELK/Elastic Stack",
        "Splunk",
        "Datadog",
      ],
    },
    {
      category: "Testing & Quality",
      skills: [
        "JUnit 5",
        "Mockito",
        "Selenium",
        "Cucumber",
        "Postman",
        "Contract Testing (Pact)",
      ],
    },
    {
      category: "Version Control & Collaboration",
      skills: [
        "Git",
        "Bitbucket",
        "Code Reviews",
        "Branching Strategies (GitFlow)",
      ],
    },
  ];

  const projects = [
    {
      title: "College Media Platform",
      tech: "Spring Boot • React • MySQL • MongoDB • Firebase",
      description:
        "Developed a location-driven social media platform for college students, alumni, and staff with features like profiles, posts, feeds (global, country, community), and real-time interactions. Conducted research analysis comparing MySQL, Firebase, and MongoDB for large-scale media storage and retrieval performance (10,000+ images) to optimize upload/download efficiency and scalability.",
      gradient: "from-purple-600 to-blue-600",
      repos: [
        {
          name: "Frontend",
          url: "https://github.com/Balu-Tikkisetti/graduate-project_frontend_web",
        },
        {
          name: "Backend",
          url: "https://github.com/Balu-Tikkisetti/graduateproject_backend_framework",
        },
      ],
      hasPoster: true,
    },
    {
      title: "T@pics",
      tech: "Java • Spring Boot • React • AWS • MySQL • MongoDB",
      description:
        "Scalable chat application with real-time messaging, file sharing, and user presence indicators. Built with microservices architecture for enhanced scalability and performance.",
      gradient: "from-green-500 to-teal-600",
      repos: [
        {
          name: "Backend",
          url: "https://github.com/Balu-Tikkisetti/topics-springboot-services",
        },
        {
          name: "Frontend",
          url: "https://github.com/Balu-Tikkisetti/topics_frontend_framework",
        },
      ],
    },
    {
      title: "Volunteer Management System",
      tech: "Python • Flask • Firebase • Bootstrap",
      description:
        "Interactive dashboard for data visualization with real-time charts, filters, and export capabilities. Comprehensive volunteer coordination system with event management.",
      gradient: "from-orange-500 to-red-600",
      repos: [
        {
          name: "Repository",
          url: "https://github.com/Balu-Tikkisetti/se1-project_vem",
        },
      ],
    },
    {
      title: "College Enrollment System",
      tech: "PHP • Oracle • MySQL • Bootstrap",
      description:
        "Collaborative project management tool with role-based access, notifications, and progress tracking. Streamlined enrollment process for academic institutions.",
      gradient: "from-indigo-600 to-purple-700",
      repos: [],
    },
  ];

  const PosterModal = () => (
    <div
      className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-2 sm:p-4"
      onClick={() => setShowPoster(false)}
    >
      <div className="relative w-full h-full max-w-7xl max-h-[98vh] bg-slate-800 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl">
        <div className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-slate-800 to-transparent p-4 flex justify-between items-center">
          <h3 className="text-white font-semibold text-lg">
            College Media Platform - Project Poster
          </h3>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowPoster(false);
            }}
            className="w-10 h-10 bg-slate-900/80 hover:bg-red-600/80 rounded-full flex items-center justify-center text-white transition-all duration-300 hover:scale-110"
          >
            ✕
          </button>
        </div>

        <div className="w-full h-full pt-16">
          <object
            data="/college_media_poster.pdf"
            type="application/pdf"
            className="w-full h-full"
          >
            <embed
              src="/college_media_poster.pdf"
              type="application/pdf"
              className="w-full h-full"
            />
          </object>
        </div>
      </div>
    </div>
  );

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
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-lg border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Balu Tikkisetti
              </span>
            </div>
            <div className="hidden md:block">
              <div className="flex space-x-8">
                {["about", "experience", "skills", "projects", "contact"].map(
                  (section) => (
                    <button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      className={`relative px-3 py-2 text-sm font-medium transition-all duration-500 overflow-hidden ${
                        activeSection === section
                          ? "text-cyan-400"
                          : "text-slate-300 hover:text-white"
                      }`}
                    >
                      <span className="relative z-10">
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                      </span>
                      <div
                        className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transition-all duration-500 ease-out ${
                          activeSection === section
                            ? "w-full opacity-100"
                            : "w-0 opacity-0"
                        }`}
                      ></div>
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* About Section (Intro Content) */}
      <section
        id="about"
        className="relative min-h-screen flex items-center justify-center px-4"
      >
        <div className="text-center z-10">
          <div
            className="relative mb-8"
            style={{
              transform: `translateY(${scrollY * 0.2}px) rotateX(${
                scrollY * 0.02
              }deg)`,
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
              transform: `translateY(${scrollY * 0.1}px)`,
            }}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-200 to-purple-400 bg-clip-text text-transparent leading-tight">
              Balu Tikkisetti
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Experienced Full Stack Developer crafting scalable solutions
              with modern technologies
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <a
                href="/resume.docx"
                target="_blank"
                className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 font-semibold"
              >
                <span className="group-hover:mr-2 transition-all duration-300">
                  Download Resume
                </span>
                <span className="inline-block group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </a>
              <button
                onClick={() => scrollToSection("projects")}
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
                transform: `translateY(${scrollY * (0.1 + i * 0.05)}px)`,
              }}
            ></div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>

          <div className="mb-12">
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 max-w-4xl mx-auto text-center">
              <h3 className="text-3xl font-bold mb-6 text-cyan-400">
                Experience Summary
              </h3>
              <p className="text-lg text-slate-300 leading-relaxed mb-4">
                As an experienced Full Stack Developer, I bring comprehensive knowledge in
                designing, developing, and deploying enterprise-grade
                applications using modern technologies. My career spans the
                complete software development lifecycle, from requirements
                analysis to production deployment and maintenance.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed mb-4">
                I have architected and implemented scalable microservices with
                Java (8–17), Spring Boot, and RESTful APIs, developed responsive
                web applications using Angular, React, TypeScript, HTML5, and
                CSS3, and optimized cloud infrastructure on AWS and Azure for
                high-performance systems. My database experience includes
                relational systems such as PostgreSQL, MySQL, and Oracle, as
                well as NoSQL solutions like MongoDB, DynamoDB, Redis, and
                Elasticsearch.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                I have collaborated in Agile/Scrum environments, mentored junior
                developers, and delivered solutions that drive business value
                while maintaining code quality and best practices. My technical
                leadership covers system architecture design, technology stack
                evaluation, performance optimization, CI/CD pipelines (Jenkins,
                GitLab, GitHub Actions), containerization with Docker and
                Kubernetes, and infrastructure as code with Terraform to ensure
                streamlined workflows and reliable deployments across multiple
                environments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Technical Skills
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={category.category}
                className="bg-slate-800/40 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <h3 className="text-xl font-semibold mb-4 text-cyan-400">
                  {category.category}
                </h3>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className="bg-slate-700/30 px-3 py-2 rounded-lg border border-slate-600/30 hover:border-purple-400/50 transition-all duration-300 hover:bg-slate-600/30"
                    >
                      <span className="text-sm font-medium text-slate-200">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
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
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}
                ></div>

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

                  <div className="flex flex-wrap gap-3 mb-4">
                    {project.hasPoster && (
                      <button
                        onClick={() => setShowPoster(true)}
                        className="px-4 py-2 bg-gradient-to-r from-orange-600 to-red-600 rounded-lg hover:shadow-lg hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105 text-sm font-semibold"
                      >
                        View Poster
                      </button>
                    )}
                    {project.repos.map((repo, repoIndex) => (
                      <a
                        key={repoIndex}
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 text-sm font-semibold"
                      >
                        {repo.name} Code
                      </a>
                    ))}
                    {project.repos.length === 0 && (
                      <span className="px-4 py-2 border border-slate-600 rounded-lg text-slate-400 text-sm">
                        Private Repository
                      </span>
                    )}
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
            I'm always interested in new opportunities and collaborations. Let's
            discuss how we can work together!
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                label: "Email",
                value: "balu.tikkisetti.14.05.1998@gmail.com",
                link: "mailto:balu.tikkisetti.14.05.1998@gmail.com",
                icon: "📧",
              },
              {
                label: "Phone",
                value: "+1 572 208 9082",
                link: "tel:+15722089082",
                icon: "📱",
              },
              {
                label: "LinkedIn",
                value: "balutikkisetti",
                // link: "https://www.linkedin.com/in/balutikkisetti/",
                link:"",
                icon: "💼",
              },
              {
                label: "GitHub",
                value: "Balu-Tikkisetti",
                link: "https://github.com/Balu-Tikkisetti",
                icon: "💻",
              },
            ].map((contact, index) => (
              <a
                key={index}
                href={contact.link}
                target={contact.link.startsWith("http") ? "_blank" : "_self"}
                className="group bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:-rotate-1"
              >
                <div className="text-3xl mb-3">{contact.icon}</div>
                <h3 className="font-semibold text-cyan-400 mb-2">
                  {contact.label}
                </h3>
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
            © 2025 Balu Tikkisetti. Crafted with passion and modern web
            technologies.
          </p>
        </div>
      </footer>

      {/* Poster Modal */}
      {showPoster && <PosterModal />}

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default App;
