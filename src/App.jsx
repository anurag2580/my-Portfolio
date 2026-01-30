import React, { useState, useEffect } from 'react';
import { 
  ArrowUpRight, 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  Code2, 
  Database, 
  Cpu, 
  Layers, 
  Brain,
  Layout,
  Server,
  Sun,
  Moon,
  GitBranch,
} from 'lucide-react';

const Portfolio = () => {
  // 1. Initialize State
  // Project Data
  const projects = [
    {
      title: "Stock Market Dashboard",
      category: "Data & AI",
      description: "Real-time financial data visualization with AI-driven price predictions.",
      tech: ["FastAPI", "React", "Python"],
      image: "https://images.unsplash.com/photo-1611974765270-ca1258634369?q=80&w=1000&auto=format&fit=crop", 
      link: "#"
    },
    {
      title: "Bus Booking System",
      category: "Full Stack",
      description: "Complex reservation platform with seat selection algorithms and admin panels.",
      tech: ["MERN Stack", "Redux", "Stripe"],
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1000&auto=format&fit=crop",
      link: "#"
    },
    {
      title: "IoT Location Tracker",
      category: "Hardware/IoT",
      description: "Live tracking system bridging hardware sensors with a web dashboard.",
      tech: ["IoT", "WebSockets", "React"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
      link: "#"
    },
    {
      title: "1v1 Fighting Game",
      category: "Game Dev",
      description: "Low-latency multiplayer game using Python and Socket.IO.",
      tech: ["Python", "Socket.IO", "Canvas"],
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=1000&auto=format&fit=crop",
      link: "#"
    }
  ];

  const learningPath = [
    { year: "The Start", title: "HTML & CSS", desc: "Building structure", icon: <Layers size={20} /> },
    { year: "Logic", title: "JavaScript", desc: "Adding interactivity", icon: <Code2 size={20} /> },
    { year: "Full Stack", title: "MERN Stack", desc: "System Architecture", icon: <Server size={20} /> },
    { year: "Advanced", title: "Data Science", desc: "Insights & AI", icon: <Brain size={20} /> },
  ];

  const skillCategories = [
    {
      title: "MERN Stack",
      icon: <Layout className="text-blue-600 dark:text-blue-400" />,
      skills: ["MongoDB", "Express.js", "React.js", "Node.js", "Redux", "Tailwind CSS"]
    },
    {
      title: "Data Analytics",
      icon: <Database className="text-emerald-600 dark:text-emerald-400" />,
      skills: ["Python", "Pandas", "NumPy", "SQL / MySQL", "Power BI", "Data Viz"]
    },
    {
      title: "Machine Learning",
      icon: <Cpu className="text-purple-600 dark:text-purple-400" />,
      skills: ["Scikit-Learn", "TensorFlow", "OpenCV", "Predictive Modeling", "YOLO"]
    },
    {
      title: "Deployment & Tools",
      icon: <GitBranch className="text-orange-600 dark:text-orange-400" />,
      skills: ["Git & GitHub", "Docker", "Vercel", "Netlify", "Postman", "Linux/Bash"]
    }
  ];

  return (

    <div className="min-h-screen bg-[#FDFCF8] dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans transition-colors duration-300 selection:bg-zinc-900 selection:text-white dark:selection:bg-white dark:selection:text-zinc-900">
      
      {/* Navbar */}
      <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center">
        <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md px-6 py-3 rounded-full border border-zinc-200 dark:border-zinc-800 shadow-sm flex items-center gap-6 md:gap-8 text-sm font-medium text-zinc-500 dark:text-zinc-400 transition-colors duration-300">
          <a href="#home" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Home</a>
          <a href="#projects" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Work</a>
          <a href="#skills" className="hover:text-zinc-900 dark:hover:text-white transition-colors">Skills</a>
          <a href="mailto:email@example.com" className="hidden md:block bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-5 py-2 rounded-full hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-all font-bold">
            Hire Me
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-40 pb-20 px-6 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-sm mb-8 transition-colors duration-300">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 tracking-wide uppercase">Based in India</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-8 text-zinc-900 dark:text-white transition-colors duration-300">
          Code <span className="text-zinc-300 dark:text-zinc-700">&</span> Data.
        </h1>
        
        <p className="text-xl text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10 transition-colors duration-300">
          I'm <span className="text-zinc-900 dark:text-white font-semibold">Anurag</span>. I build robust web applications and extract insights from complex data ecosystems.
        </p>

        <div className="flex justify-center gap-4">
          <a href="#projects" className="px-8 py-4 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 rounded-3xl font-bold hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-all flex items-center gap-2 shadow-lg shadow-zinc-200 dark:shadow-none">
            See My Work <ArrowUpRight size={20}/>
          </a>
          <button className="px-8 py-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white rounded-3xl font-semibold hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-all flex items-center gap-2">
            <Download size={20}/> Resume
          </button>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 border-t border-zinc-100 dark:border-zinc-900 bg-white dark:bg-zinc-900/50 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-sm font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest mb-12 text-center">My Evolution</h2>
          
          <div className="relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-zinc-100 dark:bg-zinc-800 -translate-y-1/2 z-0 transition-colors duration-300"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
              {learningPath.map((item, idx) => (
                <div key={idx} className="bg-white dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 p-6 rounded-3xl hover:border-zinc-300 dark:hover:border-zinc-600 hover:shadow-md transition-all text-center md:text-left group">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-50 dark:bg-zinc-900 flex items-center justify-center mb-4 mx-auto md:mx-0 text-zinc-900 dark:text-white group-hover:bg-zinc-900 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-zinc-900 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <span className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">{item.year}</span>
                  <h3 className="text-xl font-bold mt-1 mb-1 text-zinc-900 dark:text-white">{item.title}</h3>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-zinc-50/50 dark:bg-zinc-950 transition-colors duration-300">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-zinc-900 dark:text-white">Technical Deep Dive</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((cat, idx) => (
              <div key={idx} className="bg-white dark:bg-zinc-900 p-6 rounded-[2rem] border border-zinc-100 dark:border-zinc-800 shadow-sm hover:shadow-xl dark:hover:border-zinc-700 hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-zinc-50 dark:bg-zinc-800 rounded-xl transition-colors duration-300">
                    {cat.icon}
                  </div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white leading-tight">{cat.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map(skill => (
                    <span key={skill} className="px-3 py-1.5 bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 text-xs font-medium rounded-lg border border-zinc-100 dark:border-zinc-700 transition-colors duration-300">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-24 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12 text-zinc-900 dark:text-white">Featured Projects</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <a 
              href={project.link} 
              key={idx}
              className="group relative h-96 rounded-[2rem] overflow-hidden cursor-pointer shadow-md dark:shadow-none hover:shadow-2xl transition-all duration-500"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity"></div>
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-white text-xs font-bold uppercase tracking-widest bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
                    {project.category}
                  </span>
                  <div className="bg-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                    <ArrowUpRight className="text-zinc-900" size={20} />
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-zinc-200 text-sm mb-6 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="flex gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs font-medium text-white bg-black/30 backdrop-blur-md px-3 py-1 rounded-lg border border-white/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-200 dark:border-zinc-800 text-center bg-white dark:bg-zinc-950 transition-colors duration-300">
        <div className="flex justify-center gap-8 mb-8">
          <a href="#" className="text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors"><Github /></a>
          <a href="#" className="text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"><Linkedin /></a>
          <a href="#" className="text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"><Mail /></a>
        </div>
        <p className="text-zinc-400 text-sm">© 2026 Anurag. Built with React & Tailwind.</p>
      </footer>
    </div>
  );
};

export default Portfolio;