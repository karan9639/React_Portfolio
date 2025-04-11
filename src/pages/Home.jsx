"use client";

import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiDownload,
  FiArrowDown,
} from "react-icons/fi";

const Home = () => {
  const scrollRef = useRef(null);

  const scrollToNextSection = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Typing animation for the job title
  const jobTitle = "Software Engineer";
  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <>
      <section className="min-h-[calc(100vh-80px)] flex items-center justify-center py-16 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 text-center md:text-left"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                Hi, I'm <span className="text-emerald-600">Karan Singh</span>
              </h1>

              <motion.h2
                variants={titleVariants}
                initial="hidden"
                animate="visible"
                className="text-2xl md:text-3xl text-gray-700 dark:text-gray-300 mb-6 flex flex-wrap justify-center md:justify-start"
              >
                {jobTitle.split("").map((letter, index) => (
                  <motion.span key={index} variants={letterVariants}>
                    {letter === " " ? "\u00A0" : letter}
                  </motion.span>
                ))}
              </motion.h2>

              <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto md:mx-0">
                Passionate about creating efficient, user-friendly applications
                with modern technologies. Based in Agra, Uttar Pradesh, India.
              </p>

              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <a
                  href="https://github.com/karan9639"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-md transition-colors"
                  aria-label="GitHub Profile"
                >
                  <FiGithub /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/karan-singh-20889a221/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <FiLinkedin /> LinkedIn
                </a>
                <a
                  href="mailto:kvnisad18114982@gmail.com"
                  className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-colors"
                  aria-label="Email Me"
                >
                  <FiMail /> Email
                </a>
                <a
                  href="/Karan_Singh_Resume.pdf"
                  download
                  className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-md transition-colors"
                  aria-label="Download Resume"
                >
                  <FiDownload /> Resume
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full md:w-1/2 flex justify-center"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-emerald-600 rounded-full opacity-20 animate-pulse"></div>
                <motion.div
                  className="absolute inset-2 bg-white dark:bg-gray-800 rounded-full overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src="/karan.svg?height=300&width=300"
                    alt="Karan"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
            onClick={scrollToNextSection}
          >
            <FiArrowDown className="text-2xl text-emerald-600 animate-bounce" />
          </motion.div>
        </div>
      </section>

      <div ref={scrollRef}>
        <section className="py-20 px-4 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">What I Do</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                I specialize in building modern web applications using the
                latest technologies and best practices.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
              >
                <div className="text-emerald-600 text-4xl mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Web Development</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Building responsive and performant web applications using
                  modern frameworks and libraries.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
              >
                <div className="text-emerald-600 text-4xl mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Database Design</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Designing and implementing efficient database structures for
                  optimal data management.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md"
              >
                <div className="text-emerald-600 text-4xl mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2">Problem Solving</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Solving complex problems with efficient algorithms and data
                  structures.
                </p>
              </motion.div>
            </div>

            <div className="mt-12 text-center">
              <Link
                to="/about"
                className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-md transition-colors"
              >
                Learn More About Me
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
