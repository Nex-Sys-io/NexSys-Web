import { motion } from 'framer-motion';
import Link from 'next/link';
import { useTheme } from '../context/ThemeContext';

function ProjectCard({ title, description, image, tags, link, status }) {
  const { theme } = useTheme();
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`p-6 rounded-xl ${
        theme === 'dark'
          ? 'bg-gray-800/50 border-[3px] border-white'
          : 'bg-white border-[3px] border-black'
      } shadow-lg hover:shadow-xl transition-all duration-300`}
    >
      <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${
          status === 'Live' 
            ? 'bg-green-500/20 text-green-500'
            : status === 'Beta'
              ? 'bg-yellow-500/20 text-yellow-500'
              : 'bg-blue-500/20 text-blue-500'
        }`}>
          {status}
        </div>
      </div>
      <h3 className={`text-xl font-bold mb-3 ${
        theme === 'dark' ? 'text-white' : 'text-gray-900'
      }`}>{title}</h3>
      <p className={`mb-4 ${
        theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
      }`}>{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={`px-3 py-1 rounded-full text-sm ${
              theme === 'dark'
                ? 'bg-gray-700/50 text-gray-300'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            {tag}
          </span>
        ))}
      </div>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center ${
          theme === 'dark' ? 'text-blue-400' : 'text-blue-600'
        } hover:underline`}
      >
        View Project
        <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
        </svg>
      </a>
    </motion.div>
  );
}

export default function Projects() {
  const { theme } = useTheme();
  
  return (
    <div className={`min-h-screen ${
      theme === 'dark'
        ? 'bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white'
        : 'bg-gradient-to-b from-gray-50 via-white to-gray-50 text-gray-900'
    }`}>
      // ... existing code ...
      
      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className={`text-3xl font-bold mb-4 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Ready to Start Your Project?
            </h2>
            <p className={`mb-8 ${
              theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Let's turn your ideas into reality. Contact us today.
            </p>
            <Link href="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-blue-400 text-white hover:bg-blue-500'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                } shadow-lg hover:shadow-xl`}
              >
                Start a Project
              </motion.button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
// ... existing code ...