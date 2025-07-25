"use client";
import { useTheme } from "../context/ThemeContext";
import Link from "next/link";

export default function Home() {
  const { theme } = useTheme();

  return (
    <div className={`${
      theme === 'dark' 
        ? 'bg-gray-900/0 text-white' 
        : 'bg-gray-50/50 text-gray-900'
    } relative overflow-hidden min-h-screen`}>
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
                <h1 className="text-5xl lg:text-7xl font-bold mb-4">
                  NexSys Tech
                </h1>
                <p className={`text-base md:text-lg mb-4 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
                  Driving innovation with cutting-edge SaaS AI technologies to shape a smarter future.
                </p>
                <div className="mb-6 md:hidden px-4">
                  <img src="/Nexsys.PNG" alt="NexSys Logo" className="w-full max-w-full mx-auto" />
                </div>
                <div className="mb-6 md:mb-10">
                  <Link href="#about">
                    <button
                      className="relative overflow-hidden px-12 py-4 min-w-[10rem] rounded-full font-bold text-lg shadow-xl border-2 border-blue-600 bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-500 text-white transition-all duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-600 group"
                    >
                      <span className="relative z-10 transition-colors duration-300 group-hover:text-white">Get Started</span>
                      {/* glossy animated overlay */}
                      <span className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
                        <span className="absolute top-[-100%] left-0 w-full h-full bg-white/20 transition-all duration-500 group-hover:top-0 rounded-full" style={{transitionProperty: 'top, background'}} />
                      </span>
                    </button>
                  </Link>
                </div>
              </div>

              {/* what we offer section */}
              <div className="mt-12">
                <div className="mb-12">
                  <h2 className="text-xl md:text-2xl font-bold mb-3">
                    What We Offer
                  </h2>
                  <div className={`h-1 w-64 mx-auto rounded ${theme === "dark" ? "bg-white" : "bg-gray-900"}`} />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-20">
                  {[
                    {
                      title: "Custom AI Solutions",
                      description: "We tailor AI technologies to meet your specific business needs and challenges.",
                      icon: (
                        <svg
                          className={`w-10 h-10 ${theme === "dark" ? "text-blue-300 group-hover:text-white" : "text-blue-600 group-hover:text-white"}`}
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
                          className={`w-10 h-10 ${theme === "dark" ? "text-blue-300 group-hover:text-white" : "text-blue-600 group-hover:text-white"}`}
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
                          className={`w-10 h-10 ${theme === "dark" ? "text-blue-300 group-hover:text-white" : "text-blue-600 group-hover:text-white"}`}
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
                    <div
                      key={index}
                      className={`group p-0.5 rounded-2xl bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 w-full max-w-full`}
                    >
                      <div
                        className={`h-full w-full p-6 rounded-[15px] flex flex-col items-center text-center ${
                          theme === "dark" ? "bg-black/80" : "bg-blue-100/70"
                        } backdrop-blur-lg`}
                      >
                        <div
                          className={`p-3 mb-4 rounded-full shadow-md ${
                            theme === "dark"
                              ? "bg-slate-700"
                              : "bg-slate-200"
                          }`}
                        >
                          {item.icon}
                        </div>
                        <h3
                          className={`text-xl font-semibold mb-2 ${
                            theme === "dark" ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {item.title}
                        </h3>
                        <p className={`text-sm ${theme === "dark" ? "text-blue-100" : "text-gray-700"}`}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {/* end what we offer section */}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}