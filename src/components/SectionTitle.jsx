"use client"

import { motion } from "framer-motion"

const SectionTitle = ({ title, subtitle }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mb-12 text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-2">{title}</h2>
      {subtitle && <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">{subtitle}</p>}
      <div className="w-24 h-1 bg-emerald-600 mx-auto mt-4"></div>
    </motion.div>
  )
}

export default SectionTitle
