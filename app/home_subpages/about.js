"use client";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const teamMembers = [
  {
    name: "Darsh Patel",
    role: "DevOps & Front End Developer",
    image: "/pic-of-me.jpg",
    bio: "Specialized in cloud infrastructure and seamless UI/UX experiences.",
    links: {
      github: "https://github.com/darshp623",
      linkedin: "https://linkedin.com/in/darshp623",
    }
  },
  {
    name: "Chris White",
    role: "Founder & Advisor",
    image: "/chriswhite.jpeg",
    bio: "Serial Entrepreneur, guiding NexSys with strategic insights and industry knowledge.",
    links: {
      github: "https://github.com/ChrisWhiteSr",
      linkedin: "https://www.linkedin.com/in/chris-white-b2370b17/",
    }
  },
  {
    name: "Peter Gatira",
    role: "AI & Back End Developer",
    image: "/petergatira.png",
    bio: "Specialized in backend development and AI integration.",
    links: {
      github: "https://github.com/PeterGQ",
      linkedin: "https://www.linkedin.com/in/peter-gatira-039569267/",
    }
  },
  {
    name: "Sean Belon",
    role: "AI & Back End Developer",
    image: "/seanbelon.png",
    bio: "Specialized in backend development and AI integration.",
    links: {
      github: "https://github.com/Dream-Yami",
      linkedin: "https://www.linkedin.com/in/sean-belon/",
    }
  },
  {
    name: "Alfonso Martinez",
    role: "Data Analyst",
    image: "/alfonsomartinez.jpeg",
    bio: "Specialized in interpreting patterns and trends, with keen analysis.",
    links: {
      github: "https://github.com/OwlFunsOh",
      linkedin: "https://www.linkedin.com/in/alfonso-sebastian-martinez/",
    }
  },
  {
    name: "Khang Le",
    role: "DevOps & Back End Developer",
    image: "/khangle.jpg",
    bio: "Specialized in cloud infrastructure and backend development.",
    links: {
      github: "https://github.com/genghiskhang",
      linkedin: "https://www.linkedin.com/in/vinhkhle/",
    }
  },
  {
    name: "Pahal Dave",
    role: "Marketing & Social Media Manager",
    image: "/pahaldave.jpg",
    bio: "Drives brand growth with data-driven campaigns and engaging social content.",
    links: {
      github: "https://github.com/pahalraval",
      instagram: "https://www.instagram.com/pariiii.444/",
      linkedin: "https://www.linkedin.com/in/pahaldave/",
    }
  }
];

function TeamMember({ member, index }) {
    const { theme } = useTheme();
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className={`p-6 rounded-xl border-[1.5px] ${
          theme === 'dark'
            ? 'bg-gray-800/50 hover:bg-gray-800/80 border-white'
            : 'bg-white hover:bg-gray-50 border-black'
        } shadow-lg hover:shadow-xl`}
      >
        <div className="flex items-center space-x-4">
          <img
            src={member.image}
            alt={member.name}
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h3 className={`text-lg font-semibold ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              {member.name}
            </h3>
            <p className={`text-sm ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {member.role}
            </p>
          </div>
        </div>
        <p className={`mt-4 text-sm ${
          theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
        }`}>
          {member.bio}
        </p>
        <div className="mt-4 flex space-x-4">
        {member.links.github && (
          <a
            href={member.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
        )}

        {member.links.linkedin && (
          <a
            href={member.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-600 transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        )}

        {member.links.instagram && (
          <a
            href={member.links.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-600 transition-colors"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2Zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5ZM12 7a5 5 0 110 10 5 5 0 010-10Zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7Zm5.38-.88a1.12 1.12 0 110 2.24 1.12 1.12 0 010-2.24Z" />
            </svg>
          </a>
        )}
      </div>
      </motion.div>
    );
  }
  
export default function About() {
  const { theme } = useTheme();

  return (
    <div className={`${
      theme === 'dark' 
        ? 'bg-gray-900/0 text-white' 
        : 'bg-gray-50/50 text-gray-900'
    }`}>
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-2">
          {/* Mission Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h1 className={`text-4xl md:text-5xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Our Mission
            </h1>
            <p className={`text-xl max-w-3xl mx-auto ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              At NexSys, we're committed to revolutionizing the tech industry through innovative AI and SaaS solutions. Our goal is to empower businesses with intelligent, scalable technologies that drive growth and efficiency.
            </p>
          </motion.div>

          {/* Team Section */}
          <div className="mt-20">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className={`text-3xl md:text-4xl font-bold text-center mb-12 ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
            >
              Meet Our Team
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <TeamMember key={member.name} member={member} index={index} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
