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
      image: "/fundr.png",
      tags: ["NLP", "Computer Vision", "Node.js", "MongoDB"],
      link: "#",
      status: "In Development"
    },
  ],
  Services: [
    {
      title: "Bisyn MVP",
      description:
        "Minimum Viable Product for Bisyn.",
      image: "/bisyn.png",
      tags: ["IoT", "TensorFlow", "Time Series", "Azure"],
      link: "#",
      status: "In Development"
    },
    {
      title: "NotifyNow",
      description:
        "AI Automated Phone Call Response System.",
      image: "/NotifyNow.png",
      tags: ["Data Science", "Python", "Vue.js", "GCP"],
      link: "#",
      status: "In Development"
    },
  ],
};

function ProjectCard({ project, index }) {
  const { theme } = useTheme();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`rounded-xl overflow-hidden ${
        theme === 'dark'
          ? 'bg-gray-800/50 hover:bg-gray-800/80'
          : 'bg-white hover:bg-gray-50'
      } shadow-lg hover:shadow-xl transition-all duration-300`}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
            project.status === 'Live'
              ? 'bg-green-500/20 text-green-500'
              : project.status === 'Beta'
                ? 'bg-yellow-500/20 text-yellow-500'
                : 'bg-blue-500/20 text-blue-500'
          }`}>
            {project.status}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className={`text-xl font-bold mb-2 ${
          theme === 'dark' ? 'text-white' : 'text-gray-900'
        }`}>
          {project.title}
        </h3>
        <p className={`mb-4 ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
        }`}>
          {project.description}
        </p>
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
            className="text-center mb-8"
          >
            <h1 className={`text-4xl md:text-5xl font-bold mb-8 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Our Projects
            </h1>
            <p className={`max-w-3xl mx-auto text-lg ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
            }`}>
              Explore our diverse range of projects, from innovative products to cutting-edge services. 
              Each project reflects our commitment to excellence in design, development, and problem-solving.
            </p>
          </motion.div>

          
          <div className="flex justify-center mb-8 space-x-4">
            <button
              className={`px-4 py-2 rounded-lg ${
                selectedCategory === "Products" 
                  ? "bg-blue-600 text-white" 
                  : theme === "dark" 
                  ? "bg-gray-700 text-white" 
                  : "bg-gray-300 text-gray-900"
              }`}
              onClick={() => setSelectedCategory("Products")}
            >
              Products
            </button>
            <button
              className={`px-4 py-2 rounded-lg ${
                selectedCategory === "Services" 
                  ? "bg-blue-600 text-white" 
                  : theme === "dark" 
                  ? "bg-gray-700 text-white" 
                  : "bg-gray-300 text-gray-900"
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
            className={`mt-20 p-8 rounded-xl text-center ${
              theme === 'dark'
                ? 'bg-gray-800/50'
                : 'bg-white'
            } shadow-lg`}
          >
            <h2 className="text-2xl font-bold mb-4">Have a Project in Mind?</h2>
            <p className="mb-8">Let's discuss how we can help bring your ideas to life with our expertise in AI and software development.</p>
            <motion.button
              onClick={() => setIsSurveyOpen(true)}
              className="inline-block px-8 py-3 rounded-lg text-white font-medium bg-blue-800 hover:bg-blue-900 transition-all duration-300"
            >
              Start a Project
            </motion.button>
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
