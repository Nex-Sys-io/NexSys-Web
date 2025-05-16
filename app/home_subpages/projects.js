"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import ProjectSurvey from "../components/ProjectSurvey";

const projects = {
  Products: [
    {
      title: "Cursive Power",
      description:
        "Taking a pictue of cursive text and converting it to a digital format.",
      image: "/cursivepower.png",
      tags: ["AI/ML", "Python", "React", "AWS"],
      link: "#",
      status: "In Development"
    },
    {
      title: "Fundr",
      description:
        "Grant Scraping Web Tool.",
      image: "/Fundr.png",
      tags: ["React", "Python", "AWS", "S3"],
      link: "#",
      status: "In Development"
    },
  ],
  Services: [
    {
      title: "Bisyn MVP",
      description:
        "Minimum Viable Product for Bisyn.",
      image: "/Bisyn.png",
      tags: ["React", "Python", "Flask CORS", "AWS S3", "Vercel", "Digital Ocean"],
      link: "#",
      status: "In Development"
    },
    {
      title: "NotifyNow",
      description:
        "AI Automated Phone Call Response System.",
      image: "/NotifyNow.png",
      tags: ["Data Science", "Python", "React", "AWS"],
      link: "#",
      status: "In Development"
    },
  ],
};

function ProjectCard({ project, index }) {
  const { theme } = useTheme();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.04, boxShadow: '0 12px 32px 0 rgba(0, 176, 255, 0.18)' }}
      className={`group p-0.5 rounded-2xl transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.03] bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500`}
    >
      <div
        className={`h-full w-full rounded-[15px] flex flex-col transition-colors duration-300 ease-in-out ${
          theme === 'dark' ? 'bg-black/80' : 'bg-blue-100/70'
        } backdrop-blur-lg`}
      >
        <div className="relative w-full h-48 mb-6 overflow-hidden rounded-t-[15px]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-all duration-300 border-b-4 border-transparent group-hover:border-blue-400 group-hover:shadow-lg"
          />
          <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold shadow-md transition-all duration-300 z-10 ${
            project.status === 'Live'
              ? 'bg-green-500/90 text-white'
              : project.status === 'Beta'
                ? 'bg-yellow-400/90 text-white'
                : 'bg-blue-500/90 text-white'
          }`}>
            {project.status}
          </span>
        </div>
        <div className="p-6 pt-2 flex flex-col flex-1">
          <h3 className={`text-2xl font-bold mb-2 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            {project.title}
          </h3>
          <p className={`mb-4 text-base ${
            theme === 'dark' ? 'text-blue-100' : 'text-blue-900'
          }`}>
            {project.description}
          </p>
          <div className="flex flex-wrap gap-2 justify-center mb-2">
            {project.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-sm animate-pulse">
                {tag}
              </span>
            ))}
          </div>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-2 px-5 py-2 rounded-full font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md hover:from-cyan-500 hover:to-blue-600 transition-all duration-300"
            >
              View Project
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { theme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState("Products");
  const [isSurveyOpen, setIsSurveyOpen] = useState(false);

  return (
    <div className={`${
      theme === 'dark' 
        ? 'bg-gray-900/0 text-white' 
        : 'bg-gray-50/50 text-gray-900'
    }`}>
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto mb-12 max-w-3xl p-1 rounded-2xl bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 shadow-xl"
          >
            <div className={`rounded-[15px] p-10 ${theme === 'dark' ? 'bg-black/80' : 'bg-blue-100/70'} backdrop-blur-lg text-center`}> 
              <h1 className="text-2xl md:text-4xl font-extrabold mb-3">Our Projects</h1>
              <p className={`text-base max-w-2xl mx-auto font-medium ${theme === 'dark' ? 'text-blue-100' : 'text-blue-900'}`}>Explore our diverse range of projects, from innovative products to cutting-edge services. Each project reflects our commitment to excellence in design, development, and problem-solving.</p>
            </div>
          </motion.div>

          <div className="flex justify-center mb-8 space-x-4">
            <button
              className={`px-8 py-3 rounded-full font-semibold shadow-md transition-all duration-300 text-base focus:outline-none focus:ring-2 focus:ring-blue-600 border-2 ${
                selectedCategory === "Products"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white scale-105 border-blue-600"
                  : theme === "dark"
                  ? "bg-slate-800 text-blue-300 hover:bg-blue-900 hover:text-white border-blue-700"
                  : "bg-slate-200 text-blue-700 hover:bg-blue-500 hover:text-white border-blue-200"
              }`}
              onClick={() => setSelectedCategory("Products")}
            >
              Products
            </button>
            <button
              className={`px-8 py-3 rounded-full font-semibold shadow-md transition-all duration-300 text-base focus:outline-none focus:ring-2 focus:ring-blue-600 border-2 ${
                selectedCategory === "Services"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white scale-105 border-blue-600"
                  : theme === "dark"
                  ? "bg-slate-800 text-blue-300 hover:bg-blue-900 hover:text-white border-blue-700"
                  : "bg-slate-200 text-blue-700 hover:bg-blue-500 hover:text-white border-blue-200"
              }`}
              onClick={() => setSelectedCategory("Services")}
            >
              Services
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {projects[selectedCategory].map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={`mx-auto mt-20 max-w-4xl p-0.5 rounded-2xl bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 shadow-xl`}
          >
            <div className={`rounded-2xl p-10 ${theme === 'dark' ? 'bg-black/80' : 'bg-blue-100/70'} backdrop-blur-lg text-center w-full`}> 
              <h2 className="text-xl md:text-2xl font-extrabold mb-2">Have a Project in Mind?</h2>
              <p className="mb-8 text-sm font-medium text-blue-900 dark:text-blue-100">Let's discuss how we can help bring your ideas to life with our expertise in AI and software development.</p>
              <motion.button
                onClick={() => setIsSurveyOpen(true)}
                whileHover={{ scale: 1.07 }}
                className="relative inline-block px-10 py-4 rounded-full font-bold shadow-xl border-2 border-blue-600 bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-500 text-white transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-600 group overflow-hidden"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Start a Project</span>
                <span className="absolute top-[-100%] left-0 w-full h-full bg-white/20 transition-all duration-500 group-hover:top-0 rounded-full z-0 pointer-events-none" style={{transitionProperty: 'top, background'}} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </main>

      <ProjectSurvey 
        isOpen={isSurveyOpen} 
        onClose={() => setIsSurveyOpen(false)} 
      />
    </div>
  );
}
