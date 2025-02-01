"use client";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import Link from "next/link";

export default function Home() {
  const { theme } = useTheme();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className={`${
      theme === 'dark' 
        ? 'bg-gray-900/0 text-white' 
        : 'bg-gray-50/50 text-gray-900'
    }`}>
      <main className="py-2 px-4 sm:px-6 lg:px-4">
        {/* Main Section */}
        <section className="relative pt-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto text-center">
              <motion.h1
                {...fadeInUp}
                className="text-5xl md:text-7xl font-bold mb-8"
              >
                <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
                  NexSys Tech
                </span>
              </motion.h1>
              <motion.p
                {...fadeInUp}
                transition={{ delay: 0.2 }}
                className={`text-xl md:text-2xl mb-12 ${
                  theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                }`}
              >
                Driving innovation with cutting-edge SaaS AI technologies to shape a smarter future.
              </motion.p>
              <motion.div
                {...fadeInUp}
                transition={{ delay: 0.4 }}
                className="mb-10"
              >
                <Link href="/contact">
                  <button
                    className={`px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                      theme === 'dark'
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    } shadow-lg hover:shadow-xl`}
                  >
                    Get Started
                  </button>
                </Link>
              </motion.div>

              {/* What We Offer */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mb-12"
              >
                <h2 className={`text-4xl font-bold mb-4 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  What We Offer
                </h2>
                <div className={`h-1 w-64 mx-auto rounded ${
                  theme === 'dark' ? 'bg-white' : 'bg-gray-900'
                }`} />
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-20">
                {[
                  {
                    title: "Custom AI Solutions",
                    description: "We tailor AI technologies to meet your specific business needs and challenges.",
                    icon: (
                      <svg className={`w-10 h-10 mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    )
                  },
                  {
                    title: "Scalable SaaS Products",
                    description: "Our software solutions are built for growth and scalability, ensuring long-term value.",
                    icon: (
                      <svg className={`w-10 h-10 mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                    )
                  },
                  {
                    title: "Expert Support",
                    description: "We provide continuous support to ensure smooth implementation and operation.",
                    icon: (
                      <svg className={`w-10 h-10 mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    )
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className={`p-6 rounded-xl ${
                      theme === 'dark'
                        ? 'bg-gray-800/50 border-[1.5px] border-white'
                        : 'bg-white border-[1.5px] border-black'
                    } shadow-lg hover:shadow-xl transition-all duration-300 text-center`}
                  >
                    <div className="flex justify-center">{item.icon}</div>
                    <h3 className={`text-xl font-bold mb-2 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-900'
                    }`}>
                      {item.title}
                    </h3>
                    <p className={`text-base ${
                      theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
