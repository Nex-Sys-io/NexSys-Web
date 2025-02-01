<motion.button
  type="submit"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className={`w-full px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 ${
    theme === 'dark'
      ? 'bg-blue-600 text-white hover:bg-blue-700'
      : 'bg-blue-600 text-white hover:bg-blue-700'
  } shadow-lg hover:shadow-xl`}
>
  Send Message
</motion.button>

<Link href="/contact">
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`px-8 py-3 rounded-lg text-lg font-semibold transition-all duration-300 ${
      theme === 'dark'
        ? 'bg-blue-600 text-white hover:bg-blue-700'
        : 'bg-blue-600 text-white hover:bg-blue-700'
    } shadow-lg hover:shadow-xl`}
  >
    Start a Project
  </motion.button>
</Link> 