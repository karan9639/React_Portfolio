"use client"

import { motion } from "framer-motion"
import * as SiIcons from "react-icons/si"
import * as DiIcons from "react-icons/di"
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"

const iconLibraries = {
  ...SiIcons,
  ...DiIcons,
  ...FaIcons,
  ...AiIcons,
}

const SkillIcon = ({ name, icon }) => {
  // Try to find the icon in the libraries
  const IconComponent =
    iconLibraries[icon] ||
    iconLibraries[`Si${icon}`] ||
    iconLibraries[`Di${icon}`] ||
    iconLibraries[`Fa${icon}`] ||
    iconLibraries[`Ai${icon}`]

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      whileHover={{ y: -5 }}
      className="flex flex-col items-center p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm hover:shadow-md transition-all"
    >
      <div className="text-4xl mb-2 text-emerald-600">
        {IconComponent ? (
          <IconComponent />
        ) : (
          <div className="w-10 h-10 bg-emerald-100 dark:bg-emerald-900 rounded-full flex items-center justify-center">
            {name.charAt(0)}
          </div>
        )}
      </div>
      <span className="text-sm font-medium">{name}</span>
    </motion.div>
  )
}

export default SkillIcon
