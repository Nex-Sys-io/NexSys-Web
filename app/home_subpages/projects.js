"use client";
import { motion } from "framer-motion";
// removed: import projectsurvey from "../components/projectsurvey";

const projects = {
  Products: [
    {
      title: "Cursive Power",
      description:
        "A human-centered handwriting engine that converts messy cursive into structured, searchable text in real time—without breaking the pen-and-paper flow.",
      image: "/cursivepower.png",
      tags: ["AI/ML", "Python", "React", "AWS"],
      link: "#",
      status: "In Development",
      logoScale: 1.4
    },
    {
      title: "Fundr",
      description:
        "A tool to help entrpreneurs quickly identify funding requirements for grants and investment funds.",
      image: "/Fundr.png",
      tags: ["React", "Python", "AWS", "S3"],
      link: "#",
      status: "In Development",
      logoScale: 1
    },
  ],
  Services: [
    {
      title: "Bisyn MVP",
      description:
        "A patented algorithm from our partner that auto-classifies spectrographic and hyperspectral data, turning raw signals into explainable insights with an analyst-friendly UX.",
      image: "/Bisyn.png",
      tags: ["React", "Python", "Flask CORS", "AWS S3", "Vercel", "Digital Ocean"],
      link: "#",
      status: "In Development",
      logoScale: 1.2
    },
  ],
};

function ProjectCard({ project, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10, scale: 1.04, boxShadow: '0 12px 32px 0 rgba(0, 176, 255, 0.18)' }}
      className={`group p-0.5 rounded-2xl transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.03] bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 h-full`}
    >
      <div
        className="h-full w-full rounded-[15px] flex flex-col transition-colors duration-300 ease-in-out bg-black/80 backdrop-blur-lg min-h-[420px]"
      >
        <div className="relative w-full mb-4 overflow-hidden rounded-t-[15px] bg-black flex items-center justify-center" style={{ height: '8rem' }}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-contain transition-all duration-300 border-b-4 border-transparent group-hover:border-blue-400 group-hover:shadow-lg relative z-20"
            style={{ transform: `scale(${project.logoScale || 1})` }}
          />
        </div>
        <div className="p-4 pt-1 flex flex-col flex-1">
          <div className="flex justify-end mb-2">
            <span className={`px-3 py-1 rounded-full text-xs font-bold shadow-md transition-all duration-300 ${
              project.status === 'Live'
                ? 'bg-green-500/90 text-white'
                : project.status === 'Beta'
                  ? 'bg-yellow-400/90 text-white'
                  : 'bg-blue-500/90 text-white'
            }`}>
              {project.status}
            </span>
          </div>
          <h3 className="text-xl font-bold mb-3 text-white">
            {project.title}
          </h3>
          <p className="mb-4 text-sm text-blue-100 leading-relaxed flex-1">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5 justify-center mb-4">
            {project.tags.map((tag) => (
              <span key={tag} className="px-2.5 py-1 rounded-full text-xs font-semibold bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-sm">
                {tag}
              </span>
            ))}
          </div>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-auto px-4 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 text-center"
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
  // Show all projects without category toggle
  const allProjects = [...projects.Products, ...projects.Services];

  return (
    <div className="bg-gray-900/0 text-white">
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto mb-12 max-w-3xl p-1 rounded-2xl bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 shadow-xl"
          >
            <div className="rounded-[15px] p-10 bg-black/80 backdrop-blur-lg text-center"> 
              <h1 className="text-3xl md:text-4xl font-extrabold mb-3">Our Projects</h1>
              <p className="text-base max-w-2xl mx-auto font-medium text-blue-100">We accelerate the journey from lab to launch. By partnering with research experts, we build secure and scalable AI products using multi-agent frameworks, automated application scaffolding, and a deep focus on cognitive science to create highly intuitive software.</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
            {allProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className={`mx-auto mt-20 max-w-4xl p-0.5 rounded-2xl bg-gradient-to-r from-blue-900 via-blue-700 to-blue-600 shadow-xl`}
          >
            <div className="rounded-2xl p-10 bg-black/80 backdrop-blur-lg text-center w-full"> 
              <h2 className="text-2xl md:text-3xl font-extrabold mb-3">Have a Project in Mind?</h2>
              <p className="mb-4 text-sm font-medium text-blue-100">Let's discuss how we can help bring your ideas to life with our expertise in AI and software development.</p>
              <motion.button
                onClick={() => {
                  // redirect to the contact section
                  const contactSection = document.getElementById('contact');
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
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
    </div>
  );
}

