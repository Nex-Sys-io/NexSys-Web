"use client";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";

export default function Contact() {
  const { theme } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // UPDATED: Real POST request to /api/contact, instead of simulating delay
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.error || "Something went wrong");
      }

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Hide success message after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");
      // Optionally hide error after a few seconds:
      setTimeout(() => setSubmitStatus(null), 3000);
    }

    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      title: "Email",
      value: "nexsys.tech.ai@gmail.com",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4 4h16v16H4z" fill="none" />
          <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 18V8l8 5 8-5v10H4z" />
        </svg>
      )
    },
    {
      title: "Location",
      value: "Baltimore, MD",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C8.1 2 5 5.1 5 9c0 4.5 7 13 7 13s7-8.5 7-13c0-3.9-3.1-7-7-7zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5z" />
        </svg>
      )
    },
    {
      title: "Phone",
      value: "+1 (443) 840-0170",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.27 11.72 11.72 0 003.64.58 1 1 0 011 1v3.54a1 1 0 01-1 1A17 17 0 013 5a1 1 0 011-1h3.54a1 1 0 011 1 11.72 11.72 0 00.58 3.64 1 1 0 01-.27 1.11l-2.23 2.24z" />
        </svg>
      )
    }
  ];

  // Original minimal input styling
  const inputClasses = `mt-2 block w-full rounded-lg border px-4 py-3 bg-transparent transition-colors focus:outline-none focus:ring-2 ${
    theme === "dark"
      ? "border-gray-600 focus:ring-white text-white placeholder-gray-400"
      : "border-gray-300 focus:ring-gray-900 text-gray-900 placeholder-gray-500"
  }`;

  return (
    <div className={`${theme === "dark" ? "bg-gray-900/0" : "bg-gray-50/50"}`}>
      <main className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1
              className={`text-4xl md:text-5xl font-bold ${
                theme === "dark" ? "text-white" : "text-gray-900"
              }`}
            >
              Get in Touch
            </h1>
            <p
              className={`mt-4 text-lg ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Interested in learning more? We'd love to connect with you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Left Panel: Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className={`flex flex-col justify-center rounded-xl p-8 shadow-2xl ${
                theme === "dark"
                  ? "bg-gray-800/50 text-white"
                  : "bg-gray-100 text-gray-900"
              }`}
            >
              <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
              <p className="mb-8 text-lg">
                Reach out through any of the platforms below or send us a message directly.
              </p>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-center space-x-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{info.title}</h3>
                      <p className="text-sm">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right Panel: Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white dark:bg-gray-800/50 rounded-xl shadow-2xl p-8"
            >
              <h2
                className={`text-3xl font-bold mb-6 ${
                  theme === "dark" ? "text-white" : "text-gray-900"
                }`}
              >
                Contact Us
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className={`block text-sm font-medium ${
                        theme === "dark" ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className={inputClasses}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className={`block text-sm font-medium ${
                        theme === "dark" ? "text-gray-300" : "text-gray-700"
                      }`}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className={inputClasses}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className={`block text-sm font-medium ${
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Subject"
                    className={inputClasses}
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className={`block text-sm font-medium ${
                      theme === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your message..."
                    className={`${inputClasses} resize-none`}
                  />
                </div>

                <div>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`w-full py-3 px-4 rounded-lg font-semibold transition-colors duration-200 ${
                      isSubmitting
                        ? "bg-gray-400 text-white cursor-not-allowed"
                        : "bg-blue-600 hover:bg-blue-700 text-white"
                    }`}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </motion.button>

                  {/* Success & Error Messages */}
                  {submitStatus === "success" && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-4 text-green-500 text-center"
                    >
                      Message sent successfully!
                    </motion.p>
                  )}
                  {submitStatus === "error" && (
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-4 text-red-500 text-center"
                    >
                      Oops! Something went wrong. Please try again.
                    </motion.p>
                  )}
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
