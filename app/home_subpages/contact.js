"use client";
import { useTheme } from "../context/ThemeContext";
import { useState } from "react";
import { motion } from "framer-motion";

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

  // updated: real post request to /api/contact, instead of simulating delay
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

      // hide success message after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    } catch (error) {
      console.error("Error:", error);
      setSubmitStatus("error");
      // optionally hide error after a few seconds:
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

  // original minimal input styling
  const inputClasses = `mt-2 block w-full rounded-lg border px-4 py-3 bg-transparent transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 text-base font-medium shadow-sm ${
    theme === "dark"
      ? "border-gray-600 text-white placeholder-gray-400 bg-slate-900/60"
      : "border-gray-300 text-gray-900 placeholder-gray-500 bg-white/80"
  }`;

  return (
    <div className={`${theme === "dark" ? "bg-gray-900/0" : "bg-gray-50/50"}`}>
      <main className="pt-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* page header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mx-auto mb-12 max-w-3xl p-1 rounded-2xl bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600 shadow-xl"
          >
            <div className={`rounded-[15px] p-10 ${theme === 'dark' ? 'bg-black/80' : 'bg-blue-100/70'} backdrop-blur-lg text-center`}> 
              <h1 className={`text-3xl md:text-4xl font-extrabold mb-3 ${theme === 'dark' ? 'text-white' : 'text-blue-900'}`}>Get in Touch</h1>
              <p className={`text-base max-w-2xl mx-auto font-medium ${theme === 'dark' ? 'text-blue-100' : 'text-blue-900'}`}>Interested in learning more? We'd love to connect with you.</p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* left panel: contact info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-0.5 rounded-2xl bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 shadow-xl"
            >
              <div className={`h-full w-full rounded-2xl p-8 ${theme === 'dark' ? 'bg-black/80' : 'bg-blue-100/70'} backdrop-blur-lg flex flex-col justify-center text-center`}>
                <h2 className={`text-2xl md:text-4xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-blue-900'}`}>Let's Connect</h2>
                <p className={`mb-10 text-lg ${theme === 'dark' ? 'text-blue-100' : 'text-blue-900'}`}>Reach out through any of the platforms below or send us a message directly.</p>
                <div className="space-y-6">
                  {contactInfo.map((info, idx) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      whileHover={{ y: -6, scale: 1.04, boxShadow: '0 8px 24px 0 rgba(0, 176, 255, 0.12)' }}
                      className={`group flex items-center space-x-4 p-4 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 ${theme === 'dark' ? 'bg-slate-800/90' : 'bg-white/90 border border-blue-100'}`}
                    >
                      <div className={`flex items-center justify-center w-14 h-14 rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300 ${theme === 'dark' ? 'bg-blue-900' : 'bg-blue-100'}`}> 
                        <span className={`${theme === 'dark' ? 'text-white' : 'text-blue-700'} text-2xl`}>{info.icon}</span>
                      </div>
                      <div className="text-left">
                        <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-blue-200' : 'text-blue-700'}`}>{info.title}</h3>
                        <p className={`text-base ${theme === 'dark' ? 'text-blue-100' : 'text-blue-900'}`}>{info.value}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* right panel: contact form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-0.5 rounded-2xl bg-gradient-to-br from-blue-700 via-blue-600 to-blue-500 shadow-xl"
            >
              <div className={`h-full w-full rounded-2xl p-8 ${theme === 'dark' ? 'bg-black/80' : 'bg-blue-100/70'} backdrop-blur-lg`}>
                <h2 className={`text-2xl md:text-4xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-blue-900'}`}>Contact Us</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className={`block text-sm font-medium ${theme === 'dark' ? 'text-blue-200' : 'text-blue-700'}`}>Name</label>
                      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Your name" className={inputClasses} />
                    </div>
                    <div>
                      <label htmlFor="email" className={`block text-sm font-medium ${theme === 'dark' ? 'text-blue-200' : 'text-blue-700'}`}>Email</label>
                      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required placeholder="you@example.com" className={inputClasses} />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className={`block text-sm font-medium ${theme === 'dark' ? 'text-blue-200' : 'text-blue-700'}`}>Subject</label>
                    <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required placeholder="Subject" className={inputClasses} />
                  </div>
                  <div>
                    <label htmlFor="message" className={`block text-sm font-medium ${theme === 'dark' ? 'text-blue-200' : 'text-blue-700'}`}>Message</label>
                    <textarea id="message" name="message" rows="5" value={formData.message} onChange={handleChange} required placeholder="Your message..." className={`${inputClasses} resize-none`} />
                  </div>
                  <div>
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.05 }}
                      className={`relative w-full py-4 px-4 rounded-full font-bold shadow-xl border-2 border-blue-600 bg-gradient-to-r from-blue-600 via-blue-400 to-cyan-500 dark:from-blue-700 dark:via-blue-500 dark:to-cyan-500 ${theme === 'dark' ? 'text-white' : 'text-white'} transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-600 group overflow-hidden ${
                        isSubmitting ? "bg-gray-400 text-white cursor-not-allowed border-gray-400" : ""
                      }`}
                    >
                      <span className="relative z-10 transition-colors duration-300 group-hover:text-white">{isSubmitting ? "Sending..." : "Send Message"}</span>
                      <span className="absolute top-[-100%] left-0 w-full h-full bg-white/20 transition-all duration-500 group-hover:top-0 rounded-full z-0 pointer-events-none" style={{transitionProperty: 'top, background'}} />
                    </motion.button>
                    {/* success & error messages */}
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
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
