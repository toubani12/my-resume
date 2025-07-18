"use client";
import React, { useState, useEffect } from 'react';
import { ChevronDown, Mail, Phone, Linkedin, Github, Code, User, Briefcase, GraduationCap, Rocket, Menu, X, ExternalLink, Calendar, MapPin, Download } from 'lucide-react';

// Navigation Component
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', icon: User },
    { id: 'about', label: 'About', icon: User },
    { id: 'skills', label: 'Skills', icon: Code },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'projects', label: 'Projects', icon: Rocket },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'contact', label: 'Contact', icon: Mail }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section, index) => {
        if (section) {
          const offsetTop = section.offsetTop;
          const height = section.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Badr Eddine
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                <Icon size={16} />
                <span>{label}</span>
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-white border-t">
            {navItems.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className={`w-full flex items-center space-x-2 px-4 py-3 text-left transition-colors ${
                  activeSection === id
                    ? 'bg-blue-50 text-blue-600'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Icon size={16} />
                <span>{label}</span>
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

// Hero Section Component
const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 flex items-center justify-center relative overflow-hidden">
      {/* Floating shapes */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-white/10 rounded-full animate-pulse"></div>
      </div>

      <div className="text-center text-white z-10 px-4">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>

          <img
            src="/profile.jpg"
            alt="Badr Eddine Toubani"
            className="mx-auto mb-4 w-40 h-40 rounded-full object-cover border-4 border-white shadow-lg"
          />
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-shadow-lg">
            Badr Eddine Toubani
          </h1>

          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Full Stack Developer & Software Engineer
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a href="mailto:fadre6@gmail.com" className="contact-link">
              <Mail size={20} />
              <span>fadre6@gmail.com</span>
            </a>
            <a href="tel:+212650518439" className="contact-link">
              <Phone size={20} />
              <span>+212 650 518 439</span>
            </a>
            <a href="https://www.linkedin.com/in/badr-eddine-toubani-5b44361a4/" target="_blank" rel="noopener noreferrer" className="contact-link">
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/toubani12" target="_blank" rel="noopener noreferrer" className="contact-link">
              <Github size={20} />
              <span>GitHub</span>
            </a>
            <a 
              href="/resume.pdf" 
              download="Badr_Eddine_Toubani_Resume.pdf"
              className="contact-link"
            >
              <Download size={20} />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
        
        <button
          onClick={() => {
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

// About Section Component
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Passionate Full Stack Developer with a Bachelor's degree in Software Engineering from EST Fès (2025) and specialized expertise in web development. I combine strong technical skills with practical experience gained through internships and real-world projects.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              My journey spans from electronics and hardware to modern web technologies, giving me a unique perspective on technology solutions. I'm always eager to learn new technologies and take on challenging projects that push the boundaries of what's possible.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-600 mb-2">Experience</h3>
                <p className="text-gray-700">3+ Years</p>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-600 mb-2">Projects</h3>
                <p className="text-gray-700">10+ Completed</p>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-600 mb-2">Location</h3>
                <p className="text-gray-700">Casablanca, Morocco</p>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-600 mb-2">Languages</h3>
                <p className="text-gray-700">Arabic, French, English</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-80 h-80 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mx-auto flex items-center justify-center overflow-hidden shadow-lg">
              <img
                src="/profile.jpg"
                alt="Badr Eddine Toubani"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Skills Section Component
const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "💻",
      skills: ["React", "Next.js", "Svelte", "SvelteKit", "JavaScript", "HTML/CSS"]
    },
    {
      title: "Backend Development",
      icon: "⚙️",
      skills: ["Express.js", "Laravel", "Spring Boot", "Spring Security", "Supabase", "PHP"]
    },
    {
      title: "Databases",
      icon: "🗄️",
      skills: ["MySQL", "SQL Server", "Oracle", "PostgreSQL"]
    },
    {
      title: "Programming Languages",
      icon: "🔧",
      skills: ["Java", "JavaScript", "Kotlin ","Python", "PHP", "C", "C++"]
    },
    {
      title: "Tools & Technologies",
      icon: "🛠️",
      skills: [
        "Maven",
        "Selenium",
        "Kafka",
        "Angular",
        "Arduino",
        "PHPRad",
        "GitLab CI",
        "Postman",
        "VS Code",
        "IntelliJ IDEA",
        "Jupyter Notebook",
        "Google Colab"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">{category.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm hover:scale-105 transition-transform cursor-pointer"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Experience Section Component
const ExperienceSection = () => {
  const experiences = [
    {
      title: "Full Stack Developer (Freelance Remote)",
      company: "ELECTRONIC SAV Remote",
      period: "3 Months Jul 2025 – Present",
      location: "Remote",
      description: (
        <>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Developed a comprehensive e-commerce application from scratch, serving as a live demo for a repair service.</li>
            <li>Engineered the Next.js frontend hosted on Vercel, and the <strong>Spring Boot</strong> backend deployed on AWS.</li>
            <li>Implemented core e-commerce functionalities: robust order management, secure user authentication, responsive UI, and an admin panel.</li>
            <li>Utilized Cloudinary for efficient image storage and Firebase for data persistence, ensuring scalability.</li>
            <li>Designed and ensured full responsiveness for optimal user experience across all devices.</li>
          </ul>
          <p className="mt-2">Live Demo: <a href="https://electronic-sav.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">electronic-sav.vercel.app</a></p>
        </>
      ),
      technologies: ["Next.js", "Spring Boot", "AWS", "Vercel", "Cloudinary", "Firebase"]
    },
    {
      title: "Full Stack Developer",
      company: "Freelance Client Project",
      period: "2025",
      location: "Remote",
      description: (
        <>
          Created a complete repair service platform{' '}
          <a href="https://depannageservices.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
            depannageservices.com
          </a>{' '}
          using Next.js and Supabase. Implemented user authentication, service booking system, and responsive design for optimal user experience.
        </>
      ),
      technologies: ["Next.js", "Supabase", "React"]
    },
    {
      title: "Full Stack Development Intern",
      company: "Axone Sys",
      period: "July 2024",
      location: "Rabat, Morocco",
      description: "Integrated backend services with frontend applications using Spring Boot and Angular. Worked on API development and frontend integration for enhanced user interface functionality.",
      technologies: ["Spring Boot", "Angular", "REST API"]
    },
    {
      title: "Software Development Intern",
      company: "Electronic SAV",
      period: "April 2024",
      location: "Casablanca, Morocco",
      description: "Developed a comprehensive stock management system using PHPRad framework. Implemented inventory tracking, reporting features, and user management functionality.",
      technologies: ["PHPRad", "PHP", "MySQL"]
    },
    {
      title: "Electronics-IT Technician",
      company: "C2EZ",
      period: "1 Year Position",
      location: "Casablanca, Morocco",
      description: "Specialized in electronics card conception and repair, Arduino programming, and machine software troubleshooting. Gained valuable hardware-software integration experience.",
      technologies: ["Arduino", "Electronics", "Hardware Repair"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl border-l-4 border-blue-600 hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{exp.title}</h3>
                  <p className="text-blue-600 font-medium mb-2">{exp.company}</p>
                </div>
                <div className="text-sm text-gray-600 flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                </div>
              </div>
              <div className="text-gray-700 mb-4">{exp.description}</div>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Projects Section Component
const ProjectsSection = () => {
  const projects = [
    {
      title: "Automated Testing Platform",
      description: "Developed a comprehensive testing program for hmizate.com using Java, Maven, and Selenium WebDriver. Implemented automated test suites for web application functionality validation.",
      technologies: ["Java", "Maven", "Selenium"],
      category: "Testing"
    },
    {
      title: "E-Doctorat Backend System",
      description: "Built a secure backend system for doctoral management using Spring Boot and Spring Security. Implemented email confirmation system and user authentication workflows.",
      technologies: ["Spring Boot", "Spring Security", "Email Integration"],
      category: "Backend"
    },
    {
      title: "Book Library Management System",
      description: "Developed a full-stack library management application using Next.js, Spring Boot, Express.js, and Apache Kafka for real-time data processing and notifications.",
      technologies: ["Next.js", "Spring Boot", "Express.js", "Kafka"],
      category: "Full Stack"
    },
    {
      title: "QCM Generator Application",
      description: "Created an interactive quiz generation platform using SvelteKit, featuring dynamic question creation, user management, and result analytics.",
      technologies: ["SvelteKit", "JavaScript"],
      category: "Frontend"
    },
    {
      title: "Classified Ads Website",
      description: "Developed a feature-rich classified advertisements platform using PHP, including user registration, ad posting, search functionality, and admin panel.",
      technologies: ["PHP", "MySQL", "HTML/CSS"],
      category: "Web Development"
    },
    {
      title: "Mini Football Booking System",
      description: "Built a sports facility booking system using PHP, featuring reservation management, payment integration, and scheduling functionality.",
      technologies: ["PHP", "MySQL"],
      category: "Web Development"
    },
    {
      title: "Task Manager Mobile App",
      description: "Developed a mobile task manager application with Kotlin and Retrofit, enabling users to manage tasks efficiently with a modern Android interface.",
      technologies: ["Kotlin", "Retrofit"],
      category: "Mobile"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Notable Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="mb-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>
                  <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{project.description}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-2 py-1 rounded text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Education Section Component
const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor's Degree in Software Engineering (Bac +3)",
      school: "EST Fès (École Supérieure de Technologie)",
      year: "2025",
      description: (
        <>
          Comprehensive software engineering program covering advanced programming concepts, software architecture, project management, and modern development methodologies.
          <br />
          <span className="font-semibold text-blue-700">Key modules:</span>
          <ul className="list-disc list-inside text-gray-700 mt-2">
            <li>J2EE, Spring Framework</li>
            <li>Network Design (Web Services, WebSocket, Brokers)</li>
            <li>Design Patterns</li>
            <li>IT Governance</li>
            <li>Software Industry (DevOps)</li>
            <li>Mobile Development (Android Studio)</li>
            <li>Frontend Frameworks: SvelteKit, Angular, Next.js, Django, Flask, Astro</li>
          </ul>
        </>
      )
    },
    {
      degree: "Digital Development Web Full Stack Specialized Technician Diploma (Bac +2)",
      school: "OFPPT (Office de la Formation Professionnelle et de la Promotion du Travail)",
      year: "2023-2024",
      description: "Intensive program focused on full-stack web development, covering both frontend and backend technologies with hands-on project experience."
    },
    {
      degree: "PCAP Certification",
      school: "Cisco Networking Academy",
      year: "2024",
      description: "Python programming certification demonstrating proficiency in Python fundamentals, data structures, and programming best practices."
    },
    {
      degree: "Baccalauréat in Physical Sciences",
      school: "Morocco National Education",
      year: "2016",
      description: "Strong foundation in mathematics, physics, and scientific methodology that supports analytical problem-solving in software development."
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900">Education & Certifications</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div key={index} className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-xl border-l-4 border-purple-600 hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{edu.degree}</h3>
                  <p className="text-purple-600 font-medium mb-2">{edu.school}</p>
                </div>
                <span className="text-sm text-gray-600 bg-white px-3 py-1 rounded-full">
                  {edu.year}
                </span>
              </div>
              <div className="text-gray-700">{edu.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section Component
const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-6xl mx-auto px-4 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
        <div className="w-20 h-1 bg-white mx-auto mb-8"></div>
        <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
          I'm always excited to discuss new opportunities, collaborate on innovative projects, or connect with fellow developers. Let's build something amazing together!
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <a href="mailto:fadre6@gmail.com" className="contact-card">
            <Mail size={32} className="mb-4 mx-auto" />
            <h3 className="font-semibold mb-2">Email</h3>
            <p className="text-sm opacity-80">fadre6@gmail.com</p>
          </a>
          <a href="tel:+212650518439" className="contact-card">
            <Phone size={32} className="mb-4 mx-auto" />
            <h3 className="font-semibold mb-2">Phone</h3>
            <p className="text-sm opacity-80">+212 650 518 439</p>
          </a>
          <a href="https://www.linkedin.com/in/badr-eddine-toubani-5b44361a4/" target="_blank" rel="noopener noreferrer" className="contact-card">
            <Linkedin size={32} className="mb-4 mx-auto" />
            <h3 className="font-semibold mb-2">LinkedIn</h3>
            <p className="text-sm opacity-80">Connect with me</p>
          </a>
          <a href="https://github.com/toubani12" target="_blank" rel="noopener noreferrer" className="contact-card">
            <Github size={32} className="mb-4 mx-auto" />
            <h3 className="font-semibold mb-2">GitHub</h3>
            <p className="text-sm opacity-80">View my code</p>
          </a>
        </div>
        
        <div className="flex justify-center gap-6">
          <a href="mailto:fadre6@gmail.com" className="cta-button">
            <Mail size={20} />
            <span>Email Me</span>
          </a>
          <a 
            href="/resume.pdf" 
            download="Badr_Eddine_Toubani_Resume.pdf" 
            className="cta-button"
          >
            <Download size={20} />
            <span>Download Resume</span>
          </a>
          <a href="https://www.linkedin.com/in/badr-eddine-toubani-5b44361a4/" target="_blank" rel="noopener noreferrer" className="cta-button">
            <Linkedin size={20} />
            <span>Connect</span>
          </a>
        </div>
      </div>
    </section>
  );
};

// Main App Component
const App = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <EducationSection />
      <ContactSection />
      
      {/* Floating Download Resume Button */}
      <a
        href="/resume.pdf"
        download="Badr_Eddine_Toubani_Resume.pdf"
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-5 py-3 rounded-full shadow-lg flex items-center gap-2 hover:scale-105 transition-transform font-semibold"
        title="Download Resume"
      >
        <Download size={20} />
        <span className="hidden md:inline">Download Resume</span>
      </a>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .contact-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          background: linear-gradient(90deg, #2563eb22 0%, #9333ea22 100%);
          backdrop-filter: blur(10px);
          border-radius: 9999px;
          color: #fff;
          transition: all 0.3s ease;
        }
        
        .contact-link:hover {
          background: linear-gradient(90deg, #2563eb33 0%, #9333ea33 100%);
          color: #fff;
          transform: scale(1.05);
        }
        
        .contact-card {
          display: block;
          background: linear-gradient(90deg, #2563eb11 0%, #9333ea11 100%);
          backdrop-filter: blur(10px);
          padding: 1.5rem;
          border-radius: 0.75rem;
          transition: all 0.3s ease;
          text-align: center;
          color: #fff;
        }
        
        .contact-card:hover {
          background: linear-gradient(90deg, #2563eb22 0%, #9333ea22 100%);
          color: #fff;
          transform: scale(1.05);
        }
        
        .cta-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: linear-gradient(90deg, #2563eb 0%, #9333ea 100%);
          color: #fff;
          padding: 0.75rem 1.5rem;
          border-radius: 9999px;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 2px 8px 0 #2563eb33;
        }
        
        .cta-button:hover {
          background: linear-gradient(90deg, #1d4ed8 0%, #7c3aed 100%);
          color: #fff;
          transform: scale(1.05);
          box-shadow: 0 10px 15px -3px #2563eb33;
        }
        
        .text-shadow-lg {
          text-shadow: 0 4px 8px rgba(0,0,0,0.3);
        }
      `}</style>
    </div>
  );
};

export default App;