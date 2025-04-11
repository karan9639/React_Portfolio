"use client"

import { motion } from "framer-motion"
import { FiGithub, FiExternalLink } from "react-icons/fi"

const ProjectCard = ({ project }) => {
  const { title, description, image, technologies, githubUrl, liveUrl } = project

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all"
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="text-xs bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex space-x-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors"
              aria-label={`GitHub repository for ${title}`}
            >
              <FiGithub className="mr-1" /> Code
            </a>
          )}

          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-gray-700 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors"
              aria-label={`Live demo for ${title}`}
            >
              <FiExternalLink className="mr-1" /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard
