import React, { useState, useEffect } from "react";
import { Github, Linkedin, Instagram, Mail, Briefcase } from "lucide-react";

import hero1 from "./assets/hero1.jpg";
import profilePic from "./assets/profile-pic.jpeg";
import spotifyBackup from "./assets/spotify-backup.png";
import studyTimer from "./assets/study-timer.png";
import weatherDashboard from "./assets/weather-dashboard.png";

const App = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"];
      const scrollPosition = window.scrollY + 100;
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const projects = [
    {
      title: "Weather App",
      description: "A weather forecasting web app with live data.",
      tech: ["React", "API Integration", "Tailwind"],
      image: weatherDashboard,
      link: "https://dhyankannoth.github.io/Weather-app/",
    },
    {
      title: "Spotify Playlist Backup",
      description: "Tool to backup your Spotify playlists using Spotify API.",
      tech: ["React", "JavaScript", "Spotify API"],
      image: spotifyBackup,
      link: "https://dhyankannoth.github.io/Spotify-Playlist-Backup/",
    },
    {
      title: "Study Timer with Music Player",
      description: "A productivity timer with integrated music player.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: studyTimer,
      link: "https://dhyankannoth.github.io/Study-Timer-with-Music-Player/",
    },
  ];

  const skills = [
    "React", "Tailwind", "JavaScript", "Java", "Python", "C", "C++",
    "API Integration", "Management", "HTML", "CSS", "Git", "GitHub"
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <div
        className="fixed w-[700px] h-[700px] rounded-full bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 blur-[200px] opacity-40 pointer-events-none transition-transform duration-300 ease-out animate-pulse-glow"
        style={{ top: mousePos.y - 350, left: mousePos.x - 350, position: "absolute" }}
      ></div>

      <nav className="fixed top-0 w-full z-50 bg-black bg-opacity-90 backdrop-blur-sm border-b border-yellow-400/30">
        <div className="container mx-auto px-6 py-4 flex justify-center items-center">
          <div className="flex space-x-8">
            {["home", "about", "projects", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-all duration-300 ${
                  activeSection === section
                    ? "text-yellow-300 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)]"
                    : "text-white hover:text-yellow-300"
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={hero1} alt="Hero Background" className="w-full h-full object-cover" />
        </div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 opacity-20 blur-[250px] pointer-events-none animate-pulse-glow"></div>
        <div className="text-center z-10 px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(250,204,21,0.8)]">
            Dhyan Kannoth
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">Software Engineer</p>
        </div>
      </section>

      <section id="about" className="py-32 px-6 relative bg-black overflow-hidden">
        <div className="absolute left-1/2 md:left-1/4 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 opacity-20 blur-[200px] pointer-events-none"></div>
        <div className="container relative mx-auto max-w-5xl flex flex-col md:flex-row items-center gap-12">
          <div className="relative flex-shrink-0 w-56 h-56 md:w-64 md:h-64">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 opacity-30 blur-[60px] animate-pulse-glow"></div>
            <div className="relative rounded-full overflow-hidden ring-4 ring-yellow-400/60 shadow-lg z-10">
              <img src={profilePic} alt="Dhyan Kannoth" className="w-full h-full object-cover" />
            </div>
          </div>

          <div className="flex-1 backdrop-blur-lg bg-gradient-to-br from-yellow-900/20 via-black/60 to-black border border-yellow-400/30 rounded-2xl p-10 shadow-xl max-w-3xl mx-auto z-10">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-lg mb-8 text-gray-300 leading-relaxed">
              Hi, I’m Dhyan Kannoth, a second-year CSE student at VIT Chennai and an aspiring software engineer. I’m passionate about programming and love crafting creative solutions that make an impact. When I’m not coding, you’ll find me challenging myself on the sports field, pushing limits at the gym, or immersing in movies that spark imagination and inspiration. I’m always eager to explore new technologies and embrace exciting challenges.
            </p>
            <div className="overflow-hidden whitespace-nowrap">
              <div className="animate-marquee inline-block">
                {skills.concat(skills).map((skill, i) => (
                  <span
                    key={i}
                    className="mx-3 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400/20 via-orange-400/20 to-pink-500/20 border border-yellow-300/30 text-yellow-200 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-32 px-6 bg-gradient-to-b from-black via-zinc-900 to-black relative">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 opacity-20 blur-[250px] pointer-events-none animate-pulse-glow"></div>
        <div className="container mx-auto max-w-6xl relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(250,204,21,0.8)]">
            My Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-gradient-to-b from-zinc-900 to-black rounded-xl overflow-hidden border border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-500 hover:shadow-[0_0_30px_rgba(250,204,21,0.8)] transform hover:scale-105"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-yellow-300 group-hover:text-yellow-200 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs rounded-full bg-yellow-400/20 text-yellow-200 border border-yellow-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-orange-400 hover:text-orange-300 transition-colors"
                  >
                    <Briefcase size={16} />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 px-6 bg-black">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-12 bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(250,204,21,0.8)]">
            Contact Me
          </h2>
          <p className="text-gray-300 mb-6 text-lg">
            Feel free to reach out for collaborations or opportunities.
          </p>
          <div className="flex flex-col items-center space-y-6">
            <div className="flex items-center space-x-3">
              <Mail className="text-yellow-400" size={24} />
              <span className="text-gray-300 text-lg">kannothdhyan@gmail.com</span>
            </div>
            <div className="flex space-x-6">
              <a href="https://github.com/Dhyankannoth" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-300 transition-colors">
                <Github size={28} />
              </a>
              <a href="https://www.linkedin.com/in/dhyan-kannoth-a2581136a/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Linkedin size={28} />
              </a>
              <a href="https://www.instagram.com/dhyan_kannoth/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-400 transition-colors">
                <Instagram size={28} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t border-yellow-400/30 text-center bg-black">
        <p className="text-gray-400">© 2024 Dhyan Kannoth. Built with React & Tailwind CSS</p>
      </footer>
    </div>
  );
};

export default App;
