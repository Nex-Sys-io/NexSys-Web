"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  return (
    <div className="bg-gray-900/0 text-white relative overflow-hidden min-h-screen 2xl:min-h-[75vh] 3xl:min-h-[65vh]">
      <main className="py-2 px-4 sm:px-6 lg:px-4 relative z-10">
        <section className="relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto text-center">
              {/* header content */}
              <div
                className={`
                  pt-10 min-h-[100dvh] flex flex-col justify-center
                  md:pt-24 md:min-h-0 md:flex-none md:justify-start
                `}
                style={{ WebkitHeight: '100dvh' }}  
              >
                <motion.h1 {...fadeInUp} className="text-5xl lg:text-7xl font-bold mb-4">
                  NexSys Tech
                </motion.h1>
                <motion.p
                  {...fadeInUp}
                  transition={{ delay: 0.2 }}
                  className="text-base md:text-lg mb-4 text-gray-300"
                >
                  Driving innovation with cutting-edge SaaS AI technologies to shape a smarter future.
                </motion.p>
                <motion.div {...fadeInUp} transition={{ delay: 0.3 }} className="mb-6 md:hidden px-4">
                  <img src="/Nexsys.PNG" alt="NexSys Logo" className="w-full max-w-full mx-auto" />
                </motion.div>
                <motion.div {...fadeInUp} transition={{ delay: 0.4 }} className="mb-6 md:mb-10">
                  <Link href="#about">
                    <motion.button
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      whileHover={{ scale: 1.08 }}
                      className="relative overflow-hidden px-12 py-4 min-w-[10rem] rounded-full font-bold text-lg shadow-xl border-2 border-blue-600 bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-500 text-white transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-600 group"
                    >
                      <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Get Started</span>
                      {/* Glossy animated overlay */}
                      <span className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
                        <span className="absolute top-[-100%] left-0 w-full h-full bg-white/20 transition-all duration-500 group-hover:top-0 rounded-full" style={{transitionProperty: 'top, background'}} />
                      </span>
                      {/* Border and background transition on hover */}
                      <style jsx>{`
                        .group:hover {
                          border-color: #fff !important;
                          background: linear-gradient(90deg, #38bdf8 0%, #0ea5e9 100%) !important;
                        }
                      `}</style>
                    </motion.button>
                  </Link>
                </motion.div>
              </div>

              {/* what we offer section */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="mt-12"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="mb-12"
                >
                  <h2 className="text-xl md:text-2xl font-bold mb-3">
                    What We Offer
                  </h2>
                  <div className="h-1 w-64 mx-auto rounded bg-white" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-20 2xl:pb-6 3xl:pb-4">
                  {[
                    {
                      title: "Custom AI Solutions",
                      description: "We tailor AI technologies to meet your specific business needs and challenges.",
                      icon: (
                        <svg
                          className="w-10 h-10 text-blue-300 group-hover:text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                          />
                        </svg>
                      ),
                    },
                    {
                      title: "Scalable SaaS Products",
                      description: "Our software solutions are built for growth and scalability, ensuring long-term value.",
                      icon: (
                        <svg
                          className="w-10 h-10 text-blue-300 group-hover:text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                          />
                        </svg>
                      ),
                    },
                    {
                      title: "Expert Support",
                      description: "We provide continuous support to ensure smooth implementation and operation.",
                      icon: (
                        <svg
                          className="w-10 h-10 text-blue-300 group-hover:text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                      ),
                    },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: index * 0.2 }}
                      whileHover={{ y: -8, rotate: -2 + index * 2, boxShadow: '0 12px 32px 0 rgba(0, 176, 255, 0.18)' }}
                      className={`group p-0.5 rounded-2xl transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-[1.03] bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 w-full max-w-full`}
                    >
                      <div
                        className="h-full w-full p-6 rounded-[15px] flex flex-col items-center text-center transition-colors duration-300 ease-in-out bg-black/80 backdrop-blur-lg"
                      >
                        <div
                          className="p-3 mb-4 rounded-full transition-all duration-300 ease-in-out shadow-md bg-slate-700 group-hover:bg-blue-600/80"
                        >
                          {item.icon}
                        </div>
                        <h3
                          className="text-xl font-semibold mb-2 text-white"
                        >
                          {item.title}
                        </h3>
                        <p className="text-sm text-blue-100">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              {/* end what we offer section */}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}