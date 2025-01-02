"use client";

// Contact Us Page Component
export default function Contact() {
    return (
        <div className="min-h-screen bg-black text-white bg-gradient-to-l from-pink-500 via-black to-blue-500 dark:bg-gradient-to-l dark:from-pink-500 dark:to-blue-500">
        <section className="py-20 max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold text-center mb-10">Contact Us</h1>
          <form className="bg-black/70 p-6 rounded-lg shadow-lg">
            <div className="mb-4">
              <label className="block mb-2 font-semibold">Name</label>
              <input type="text" className="w-full px-4 py-2 border rounded-lg focus:outline-none text-black" placeholder="Enter your name" />
            </div>
  
            <div className="mb-4">
              <label className="block mb-2 font-semibold">Email</label>
              <input type="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none text-black" placeholder="Enter your email" />
            </div>
  
            <div className="mb-4">
              <label className="block mb-2 font-semibold">Message</label>
              <textarea className="w-full px-4 py-2 border rounded-lg focus:outline-none text-black" placeholder="Enter your message"></textarea>
            </div>
  
            <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">Submit</button>
          </form>
        </section>
      </div>
    );
  }
  