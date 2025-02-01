"use client";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const projects = [
  {
    title: "AI-Powered Analytics",
    description: "Advanced analytics platform using machine learning to provide actionable business insights.",
    image: "/analytics.jpg",
    tags: ["AI/ML", "Python", "React", "AWS"],
    link: "#",
    status: "Live"
  },
  {
    title: "Smart Document Processing",
    description: "Automated document processing system with OCR and natural language understanding capabilities.",
    image: "/document.jpg",
    tags: ["NLP", "Computer Vision", "Node.js", "MongoDB"],
    link: "#",
    status: "Beta"
  },
  {
    title: "Predictive Maintenance System",
    description: "IoT-based system for predicting equipment maintenance needs using sensor data and machine learning.",
    image: "/maintenance.jpg",
    tags: ["IoT", "TensorFlow", "Time Series", "Azure"],
    link: "#",
    status: "Development"
  },
  {
    title: "Customer Behavior Analysis",
    description: "Real-time customer behavior analysis platform using AI to improve user experience.",
    image: "/customer.jpg",
    tags: ["Data Science", "Python", "Vue.js", "GCP"],
    link: "#",
    status: "Live"
  }
];

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
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`px-3 py-1 rounded-full text-sm ${
                theme === 'dark'
                  ? 'bg-gray-700 text-gray-300'
                  : 'bg-gray-100 text-gray-600'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
        <a href={project.link} className="inline-flex items-center text-link hover:text-link transition-colors">

          Learn More
          <svg
            className="w-5 h-5 ml-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen pt-20 ${
      theme === 'dark'
        ? 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900'
        : 'bg-gradient-to-b from-gray-50 via-white to-gray-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Our Projects
          </h1>
          <p className={`text-xl max-w-3xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Explore our innovative solutions that are transforming industries through AI and cutting-edge technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>

        {/* Call to Action */}
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
          <h2 className={`text-2xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Have a Project in Mind?
          </h2>
          <p className={`mb-8 ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Let's discuss how we can help bring your ideas to life with our expertise in AI and software development.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.07, backgroundColor: theme === 'dark' ? "#4a67bd" : "#3756a0" }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 rounded-lg text-white font-medium bg-blue-800 hover:bg-blue-900 transition-all duration-300"
          >
            Start a Project
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
