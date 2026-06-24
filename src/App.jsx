import { useState, useEffect } from 'react'
import myLogo from './assets/mylogo.png'
import profileImg from './assets/profile.JPG'
// Importing your asset files for downloads and direct viewing
import cvFile from './assets/cv.pdf' 
import certFile from './assets/certificates.pdf'

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  const projects = [
    {
      title: "Debre Tabor ELearn (MERN Stack)",
      description: "Modern e-learning platform built with MERN stack for course management, student enrollment, and interactive learning. Features instructor dashboards, progress tracking, and multimedia content delivery.",
      tech: ["MongoDB", "Express.js", "React", "Node.js"],
      link: "https://github.com/Zelalem515/DTU-E-Learning-Website",
      demo: null
    },
    {
      title: "Online Examination System (PERN Stack)",
      description: "Comprehensive exam management platform with secure testing environment, anti-cheating mechanisms, real-time proctoring, automated grading, and detailed performance analytics for students, instructors, and administrators.",
      tech: ["PostgreSQL", "Express.js", "React", "Node.js"],
      link: "https://github.com/Zelalem515/Exam_Management_System",
      demo: null
    },
    {
      title: "Debre Tabor Gebeya (E-Commerce Platform)",
      description: "Full-featured multi-vendor e-commerce marketplace with role-based access (admin, seller, customer), real-time inventory management, secure payment integration (Stripe & Telebirr), built-in messaging system, and comprehensive order tracking.",
      tech: ["PHP", "MySQL", "JavaScript", "HTML5/CSS3"],
      link: "https://github.com/Zelalem515/Debre-Tabor-Gebeya",
      demo: null
    },
    {
      title: "Learning Management System (PHP/MySQL)",
      description: "Comprehensive LMS platform for educational institutions with course management, instructor and student dashboards, lesson materials, quiz system with automated grading, and progress tracking with role-based access control.",
      tech: ["PHP", "MySQL", "HTML5", "CSS3"],
      link: "https://github.com/Zelalem515/Learning-Management_systems",
      demo: null
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans scroll-smooth">
      
      {/* HEADER / NAVIGATION MENU */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-slate-900/70 border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <img src={myLogo} className="h-8 w-8 rounded-full object-cover shadow-sm" alt="ZB Logo" />
            <a href="#home" className="font-bold text-xl tracking-tight ml-1 hover:text-blue-500 transition">ZB.dev</a>
          </div>
          
          {/* Menu links targeting matching # IDs */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="#home" className="hover:text-blue-500 transition">Home</a>
            <a href="#about" className="hover:text-blue-500 transition">About & Awards</a>
            <a href="#projects" className="hover:text-blue-500 transition">Projects</a>
            <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
          </nav>

          <div className="flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full border border-slate-300 dark:border-slate-700 hover:bg-slate-200 dark:hover:bg-slate-800 transition flex items-center justify-center gap-2 text-sm font-medium cursor-pointer"
              title="Toggle Theme"
            >
              <span>👁️</span> 
              <span className="hidden sm:inline">{darkMode ? 'Light View' : 'Dark View'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE NAV BAR FOR SMALL SCREENS - TOP POSITION */}
      <div className="md:hidden fixed top-16 left-0 right-0 z-40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 py-3 flex justify-around text-xs font-semibold shadow-lg">
        <a href="#home" className="flex flex-col items-center gap-1 hover:text-blue-500">🏠 <span>Home</span></a>
        <a href="#about" className="flex flex-col items-center gap-1 hover:text-blue-500">📄 <span>About</span></a>
        <a href="#projects" className="flex flex-col items-center gap-1 hover:text-blue-500">💻 <span>Projects</span></a>
        <a href="#contact" className="flex flex-col items-center gap-1 hover:text-blue-500">📞 <span>Contact</span></a>
      </div>

      {/* HOME / HERO SECTION */}
      <section id="home" className="max-w-5xl mx-auto px-4 py-16 sm:py-24 md:py-16 flex flex-col-reverse md:flex-row items-center justify-between gap-12 scroll-mt-20 md:pt-0 pt-20">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 text-slate-900 dark:text-white">
            Hi, I'm <span className="text-blue-600 dark:text-blue-400">Zelalem Birhan</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-xl">
            Full-Stack Software Engineer with a Bachelor of Science in Information Technology. I design scalable web applications with clean architecture, responsive UI/UX, and optimized database workflows. Experienced in MERN/PERN stacks with a focus on performance and security.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            <a 
              href={cvFile} 
              download="Zelalem_Birhan_CV.pdf"
              className="px-6 py-3 bg-blue-600 text-white dark:bg-blue-500 font-medium rounded-lg shadow-md hover:bg-blue-700 dark:hover:bg-blue-600 transition flex items-center gap-2 cursor-pointer"
            >
              📥 <span>Download CV (PDF)</span>
            </a>
            <a 
              href="#contact" 
              className="px-6 py-3 border border-slate-300 dark:border-slate-700 font-medium rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition"
            >
              Hire Me
            </a>
          </div>
        </div>
        
        {/* Headshot Image Area */}
        <div className="w-48 h-48 sm:w-64 sm:h-64 rounded-full border-4 border-blue-500/20 dark:border-blue-400/20 overflow-hidden shadow-xl flex-shrink-0 bg-slate-200 dark:bg-slate-800 flex items-center justify-center">
          <img src={profileImg} className="w-full h-full object-cover" alt="Zelalem Birhan" />
        </div>
      </section>

      {/* ABOUT, EDUCATION & CERTIFICATES SECTION */}
      <section id="about" className="max-w-5xl mx-auto px-4 py-16 border-t border-slate-200 dark:border-slate-800 scroll-mt-20">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 flex items-center gap-2 text-slate-900 dark:text-white">
          <span>📄</span> <span>About & Academic Highlights</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="md:col-span-2 space-y-6">
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              I'm a software engineer with a Bachelor of Science in Information Technology from Debre Tabor University. My focus is on architecting clean, maintainable systems with optimized query performance and secure authentication frameworks. As a self-driven developer, I'm committed to mastering modern full-stack technologies and delivering user-centered solutions.
            </p>
            
            {/* Quick Education Info Card */}
            <div className="p-5 bg-white dark:bg-slate-800/40 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <h3 className="font-bold text-lg text-blue-600 dark:text-blue-400 mb-1">B.Sc. Information Technology</h3>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-3">Debre Tabor University • Gafat Institute of Technology (2026)</p>
              <ul className="text-sm space-y-1.5 text-slate-600 dark:text-slate-400 list-disc list-inside">
                <li>Cumulative GPA: 3.95 / 4.00</li>
                <li>University Class Representative — led technical initiatives and peer mentoring</li>
                <li>Specialized coursework: Database systems, web architecture, software design patterns</li>
              </ul>
            </div>
          </div>

          {/* Awards & Certificates Subsections */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">🏅 Credentials</h3>
            
            <div className="p-4 bg-yellow-500/5 border border-yellow-500/20 rounded-xl flex flex-col justify-between min-h-[150px]">
              <div>
                <h4 className="font-bold text-sm text-yellow-600 dark:text-yellow-400">National IT Exit Exam</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Ministry of Education (2026)</p>
                <span className="inline-block mt-2 text-xs font-bold px-2 py-0.5 bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 rounded">Score: 69%</span>
              </div>
              
              {/* Button enabling external tab presentation of your documents */}
              <a 
                href={certFile}
                target="_blank"
                rel="noreferrer"
                className="mt-4 text-center w-full px-3 py-2 bg-slate-900 text-white dark:bg-white dark:text-slate-900 text-xs font-semibold rounded-lg hover:opacity-90 transition flex items-center justify-center gap-1.5 cursor-pointer shadow-sm"
              >
                <span>🔍</span> <span>View Certificates ↗</span>
              </a>
            </div>

            <div className="p-4 bg-blue-500/5 border border-blue-500/20 rounded-xl">
              <h4 className="font-bold text-sm text-blue-600 dark:text-blue-400">Top Academic Performer</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Gafat Institute of Technology Medal list nominee for exceptional academic standing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="max-w-5xl mx-auto px-4 py-16 border-t border-slate-200 dark:border-slate-800 scroll-mt-20">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 flex items-center gap-2 text-slate-900 dark:text-white">
          <span>💻</span> <span>Featured Systems</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {projects.map((project, i) => (
            <div 
              key={i} 
              className="p-6 bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col justify-between hover:border-blue-500/50 dark:hover:border-blue-400/50 transition-all duration-300 group"
            >
              <div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-slate-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, j) => (
                    <span 
                      key={j} 
                      className="px-2 py-1 text-xs bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded border border-slate-200 dark:border-slate-700 font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex flex-col gap-2">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    View Source Code ↗
                  </a>
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-semibold text-green-600 dark:text-green-400 hover:underline"
                    >
                      Live Demo ↗
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="max-w-5xl mx-auto px-4 py-16 border-t border-slate-200 dark:border-slate-800 mb-16 md:mb-0 scroll-mt-20">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 flex items-center justify-center gap-2 text-slate-900 dark:text-white">
          <span>📞</span> <span>Get In Touch</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 max-w-md mx-auto mb-8 text-center text-sm sm:text-base">
          I am actively reviewing full-stack development, software engineering, and database management roles. Let's connect!
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 max-w-lg mx-auto">
          <a 
            href="mailto:zedo1940@gmail.com" 
            className="w-full sm:w-auto px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/40 text-sm font-medium hover:border-blue-500 dark:hover:border-blue-400 transition flex items-center justify-center gap-2"
          >
            📧 <span>Email</span>
          </a>
          <a 
            href="https://t.me/zedo1940" 
            target="_blank" 
            rel="noreferrer"
            className="w-full sm:w-auto px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/40 text-sm font-medium hover:border-blue-500 dark:hover:border-blue-400 transition flex items-center justify-center gap-2"
          >
            💬 <span>Telegram</span>
          </a>
          <a 
            href="tel:+251919407548" 
            className="w-full sm:w-auto px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/40 text-sm font-medium hover:border-blue-500 dark:hover:border-blue-400 transition flex items-center justify-center gap-2"
          >
            📱 <span>Phone</span>
          </a>
          <a 
            href="https://github.com/Zelalem515" 
            target="_blank" 
            rel="noreferrer"
            className="w-full sm:w-auto px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/40 text-sm font-medium hover:border-blue-500 dark:hover:border-blue-400 transition flex items-center justify-center gap-2"
          >
            💻 <span>GitHub</span>
          </a>
          <a 
            href="https://www.linkedin.com/in/zelalem-birhan-0590853b3" 
            target="_blank" 
            rel="noreferrer"
            className="w-full sm:w-auto px-5 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/40 text-sm font-medium hover:border-blue-500 dark:hover:border-blue-400 transition flex items-center justify-center gap-2"
          >
            👥 <span>LinkedIn</span>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="max-w-5xl mx-auto px-4 py-8 mt-12 border-t border-slate-200 dark:border-slate-800 text-center text-sm text-slate-500">
          <p>© 2026 Zelalem Birhan. Built with React and Tailwind CSS v4.</p>
      </footer>
    </div>
  );
}

export default App;