"use client";
import "aos/dist/aos.css";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white bg-gradient-to-l from-blue-500 via-black to-pink-500 dark:bg-gradient-to-l dark:from-blue-500 dark:to-pink-500">
      <header className="flex justify-between items-center px-8 py-6 bg-black/70">
        <div className="text-3xl font-bold">NexSys</div>
        <nav className="hidden md:flex gap-8">
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </nav>
      </header>

      <section className="flex flex-col items-center justify-center text-center py-16">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-12">NexSys Tech</h1>
        <p className="text-xl max-w-2xl mb-8">Driving innovation with cutting-edge SaaS AI technologies to shape a smarter future.</p>
        <button className="px-8 py-4 bg-blue-500 rounded-full hover:bg-blue-600">Get Started</button>
      </section>

      <section className="py-2">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-800 p-8 rounded-lg hover:shadow-lg">
              <h3 className="text-xl font-bold mb-4">Custom AI Solutions</h3>
              <p>We tailor AI technologies to meet your specific business needs and challenges.</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg hover:shadow-lg">
              <h3 className="text-xl font-bold mb-4">Scalable SaaS Products</h3>
              <p>Our software solutions are built for growth and scalability, ensuring long-term value.</p>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg hover:shadow-lg">
              <h3 className="text-xl font-bold mb-4">Expert Support</h3>
              <p>We provide continuous support to ensure smooth implementation and operation.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
