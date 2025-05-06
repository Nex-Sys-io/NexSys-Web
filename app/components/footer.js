"use client";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";

const socialLinks = [
  { title: "Twitter", link: "https://x.com/NexsysTech", icon: "/twitter.png" },
  { title: "Instagram", link: "https://www.instagram.com/nexsys.tech/", icon: "/instagram.png" },
  { title: "GitHub", link: "https://github.com/Nex-Sys-io", icon: "/github.PNG" },
  { title: "TikTok", link: "https://www.tiktok.com/@nexsys.tech?lang=en", icon: "/tiktok.webp" },
  { title: "Reddit", link: "https://www.reddit.com/user/Nexsys_Tech/", icon: "/reddit.png" }
];

function SocialLink({ link, icon, title }) {
  const { theme } = useTheme();
  
  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="flex flex-col items-center space-y-2 p-3 rounded-lg"
    >
      <img 
        src={icon} 
        alt={`${title} icon`} 
        className="w-8 h-8 sm:w-10 sm:h-10 object-contain filter hover:brightness-125" 
      />
      <span className={`text-xs sm:text-sm font-medium ${
        theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
      }`}>
        {title}
      </span>
    </motion.a>
  );
}

export default function Footer() {
  const { theme } = useTheme();
  
  return (
    <footer className={`${
      theme === 'dark' ? 'bg-gray-900/30 text-white' : 'bg-white text-gray-900'
    } w-full py-6 px-4 sm:px-6 lg:px-8`}> 
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-10 sm:gap-6">
          {socialLinks.map((social) => (
            <SocialLink key={social.title} {...social} />
          ))}
        </div>
        <div className="mt-4 text-center">
          <p className={`text-xs sm:text-sm ${
            theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
          }`}>
            &copy; {new Date().getFullYear()} NexSys. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
