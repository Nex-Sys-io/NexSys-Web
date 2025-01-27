"use client";
import "../css/contact.css";

// Contact Us Page Component
export default function Contact() {
  return (
        <div
        className="min-h-screen text-white"
        style={{
          background:
            "radial-gradient(125% 125% at 50% 90%, #004d40 0%, #000 40%, #00695c 70%, #000 100%)",
        }}
      >
      <section className="py-20 max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold text-center mb-10">Contact Us</h1>
        <form className="box-custom3">
          <div className="mb-4">
            <label className="label-custom3">Name</label>
            <input
              type="text"
              className="input-custom3"
              placeholder="Enter your name"
            />
          </div>

          <div className="mb-4">
            <label className="label-custom3">Email</label>
            <input
              type="email"
              className="input-custom3"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="label-custom3">Message</label>
            <textarea
              className="input-custom3"
              placeholder="Enter your message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn-custom3 transform transition-transform duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-blue-500"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}
