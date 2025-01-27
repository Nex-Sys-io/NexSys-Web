"use client";
import "../css/home.css";

export default function Home() {
  return (
      <div
        className="min-h-screen text-white"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 10%, #004d40 0%, #000 40%, #00695c 70%, #000 100%)",
        }}
      >
      {/* Add padding to avoid navbar overlap */}
      <section className="flex flex-col items-center justify-center text-center py-16 pt-32">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-12">NexSys Tech</h1>
        <p className="text-xl max-w-2xl mb-8">
          Driving innovation with cutting-edge SaaS AI technologies to shape a smarter future.
        </p>
        <button
          type="get-started"
          className="btn-custom transform transition-transform duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-500">
          Get Started
        </button>
      </section>

      <section className="py-2">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="box-custom">
              <h3 className="text-xl font-bold mb-4">Custom AI Solutions</h3>
              <p>We tailor AI technologies to meet your specific business needs and challenges.</p>
            </div>
            <div className="box-custom">
              <h3 className="text-xl font-bold mb-4">Scalable SaaS Products</h3>
              <p>Our software solutions are built for growth and scalability, ensuring long-term value.</p>
            </div>
            <div className="box-custom">
              <h3 className="text-xl font-bold mb-4">Expert Support</h3>
              <p>We provide continuous support to ensure smooth implementation and operation.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
