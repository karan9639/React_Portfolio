"use client"

import { motion } from "framer-motion"
import { FiAward, FiCode, FiTrendingUp } from "react-icons/fi"
import SectionTitle from "../components/SectionTitle"

const Achievements = () => {
  const achievements = [
    {
      icon: FiAward,
      title: "GATE 2025 Qualified",
      description:
        "Successfully qualified the Graduate Aptitude Test in Engineering, demonstrating strong knowledge in computer science fundamentals.",
    },
    {
      icon: FiTrendingUp,
      title: "92 Percentile in JEE Main",
      description:
        "Achieved 92 percentile in the Joint Entrance Examination (Main), showcasing strong aptitude in mathematics and problem-solving.",
    },
    {
      icon: FiCode,
      title: "500+ Coding Problems Solved",
      description:
        "Solved over 500 coding problems across platforms like LeetCode, CodeChef, and GeeksforGeeks, demonstrating strong algorithmic skills.",
    },
    {
      icon: FiAward,
      title: "Hackathon Winner",
      description:
        "Won first place in a college-level hackathon for developing an innovative solution to a real-world problem.",
    },
    {
      icon: FiCode,
      title: "Open Source Contributor",
      description:
        "Active contributor to various open-source projects, helping improve software used by developers worldwide.",
    },
    {
      icon: FiTrendingUp,
      title: "Technical Paper Publication",
      description: "Published a technical paper on efficient algorithms for data processing in a college journal.",
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <SectionTitle
          title="Achievements"
          subtitle="Recognitions and milestones that highlight my journey and expertise."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center text-emerald-600 mb-4">
                <achievement.icon size={24} />
              </div>

              <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{achievement.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
