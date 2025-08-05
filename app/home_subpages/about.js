"use client";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Darsh Patel",
    role: "Lead Cloud Architect & Front End Developer",
    image: "/darsh_pfp.png",
    bio: "Leads cloud infrastructure and builds sleek front ends for all projects.",
    links: {
      github: "https://github.com/darshp623",
      linkedin: "https://linkedin.com/in/darshp623",
    }
  },
  {
    name: "Chris White",
    role: "Founder & CEO",
    image: "/chriswhite.jpeg",
    bio: "Serial Entrepreneur, guiding NexSys with strategic insights and industry knowledge.",
    links: {
      github: "https://github.com/ChrisWhiteSr",
      linkedin: "https://www.linkedin.com/in/chris-white-b2370b17/",
    }
  },
  {
    name: "Peter Gatira",
    role: "Lead Automation Engineer & AI Developer",
    image: "/petergatira.png",
    bio: "Leads automation and AI integration across the platform and all projects.",
    links: {
      github: "https://github.com/PeterGQ",
      linkedin: "https://www.linkedin.com/in/peter-gatira-039569267/",
    }
  },
  {
    name: "Sean Belon",
    role: "Lead Back End & AI Developer",
    image: "/seanbelon.png",
    bio: "Leads backend development and AI integration in all projects.",
    links: {
      github: "https://github.com/Dream-Yami",
      linkedin: "https://www.linkedin.com/in/sean-belon/",
    }
  },
  {
    name: "Alfonso Martinez",
    role: "Data Analyst",
    image: "/alfonsomartinez.jpeg",
    bio: "Specializes in interpreting patterns and trends, with keen analysis.",
    links: {
      github: "https://github.com/OwlFunsOh",
      linkedin: "https://www.linkedin.com/in/alfonso-sebastian-martinez/",
    }
  },
  {
    name: "Khang Le",
    role: "Cloud Engineer & Back End Developer",
    image: "/khangle.jpg",
    bio: "Assists with cloud infrastructure and backend debugging.",
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
  },
  {
    name: "Bazen Mekonen",
    role: "Back End & QA Developer",
    image: "/bazenmekonen.jpg",
    bio: "Supports backend development and QA testing.",
    links: {
      github: "https://github.com/bazenmekonen",
      linkedin: "https://www.linkedin.com/in/bazen-mekonen-12721a243/",
    }
  },
  {
    name: "Muskan Mohabe",
    role: "Project Manager",
    image: "/muskanmohabe.png",
    bio: "Coordinates projects and supports cross-team collaboration.",
    links: {
      linkedin: "https://www.linkedin.com/in/musk-mohabe ",
    }
  },
  {
    name: "Muskan Sahetai",
    role: "DevOps & QA Developer",
    image: "/musk2.jpg",
    bio: "Helps test and manage CI/CD pipelines & applications.",
    links: {
      linkedin: "https://www.linkedin.com/in/muskan2502/",
      github: "https://github.com/muskxn25",
    }
  },
  {
    name: "Gitan Elyon",
    role: "UI/UX Designer & QA Developer",
    image: "/gitan.jpeg",
    bio: "Refines interfaces and tests applications.",
    links: {
      linkedin: "https://www.linkedin.com/in/gitanelyon/",
      github: "https://github.com/GitanElyon",
    }
  },
];

function TeamMember({ member, index }) {
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
          className="h-full w-full p-8 rounded-[15px] flex flex-col items-center text-center transition-colors duration-300 ease-in-out bg-black/80 backdrop-blur-lg"
        >
          <div className="mb-4">
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 rounded-full object-cover border-4 border-blue-400 shadow-lg group-hover:border-cyan-400 transition-all duration-300"
            />
          </div>
          <h3 className="text-xl font-bold mb-1">{member.name}</h3>
          <p className="text-base mb-2 text-blue-200">{member.role}</p>
          <p className="mb-4 text-sm text-gray-300">{member.bio}</p>
          <div className="flex space-x-4 justify-center">
            {member.links.github && (
              <a
                href={member.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-125 text-blue-500 hover:text-blue-700"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
            )}
            {member.links.linkedin && (
              <a
                href={member.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-125 text-blue-600 hover:text-blue-800"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            )}
            {member.links.instagram && (
              <a
                href={member.links.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform duration-300 hover:scale-125 text-pink-500 hover:text-pink-600"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2Zm0 1.5A4.25 4.25 0 003.5 7.75v8.5A4.25 4.25 0 007.75 20.5h8.5a4.25 4.25 0 004.25-4.25v-8.5A4.25 4.25 0 0016.25 3.5h-8.5ZM12 7a5 5 0 110 10 5 5 0 010-10Zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7Zm5.38-.88a1.12 1.12 0 110 2.24 1.12 1.12 0 010-2.24Z" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    );
  }
  
export default function About() {

  return (
    <div className="bg-gray-900/0 text-white">
      <main className="pt-20 2xl:pt-6 3xl:pt-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 py-2">
          {/* mission section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto mb-20 2xl:mb-12 3xl:mb-8 max-w-3xl p-1 rounded-2xl bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 shadow-xl"
          >
            <div className="rounded-[15px] p-10 bg-black/80 backdrop-blur-lg text-center"> 
              <h1 className="text-3xl md:text-4xl font-extrabold mb-3">Our Mission</h1>
              <p className="text-base max-w-2xl mx-auto font-medium text-blue-100">At NexSys, we're committed to revolutionizing the tech industry through innovative AI and SaaS solutions. Our goal is to empower businesses with intelligent, scalable technologies that drive growth and efficiency.</p>
            </div>
          </motion.div>

          {/* team section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-4xl font-bold text-center mb-6"
            >
              Meet Our Team
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <TeamMember key={member.name} member={member} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
