"use client"

import { motion } from "framer-motion"
import { FiMapPin, FiMail, FiPhone, FiCalendar, FiBook } from "react-icons/fi"
import SectionTitle from "../components/SectionTitle"

const About = () => {
  const personalInfo = [
    { icon: FiMapPin, label: "Location", value: "Agra, Uttar Pradesh, India" },
    { icon: FiMail, label: "Email", value: "kvnisad18114982@gmail.com" },
    { icon: FiPhone, label: "Phone", value: "(+91) 7055424269" },
    { icon: FiCalendar, label: "Experience", value: "6 Months" },
    { icon: FiBook, label: "Education", value: "B.Tech in Computer Science" },
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <SectionTitle
          title="About Me"
          subtitle="Get to know me better and what drives my passion for software engineering."
        />

        <div className="flex flex-col md:flex-row gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2"
          >
            <div className="relative">
              <div className="w-full h-80 md:h-96 bg-gray-200 dark:bg-gray-700 rounded-lg overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Karan Singh"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-emerald-600 rounded-lg"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-emerald-600 rounded-lg"></div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/2"
          >
            <h3 className="text-2xl font-bold mb-4">
              I'm <span className="text-emerald-600">Karan Singh</span>, a Software Engineer
            </h3>

            <p className="text-gray-600 dark:text-gray-400 mb-6">
              I am a passionate software engineer with a strong foundation in computer science and a love for creating
              efficient, user-friendly applications. My journey in technology began during my undergraduate studies,
              where I discovered my passion for problem-solving and building software solutions.
            </p>

            <p className="text-gray-600 dark:text-gray-400 mb-6">
              With expertise in both frontend and backend development, I enjoy working across the full stack to create
              seamless user experiences. I'm constantly learning and adapting to new technologies to stay at the
              forefront of the rapidly evolving tech landscape.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {personalInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center text-emerald-600">
                    <item.icon />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-500 dark:text-gray-400">{item.label}</h4>
                    <p className="font-medium">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <a
              href="/resume.pdf"
              download
              className="inline-block bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 rounded-md transition-colors"
            >
              Download Resume
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
