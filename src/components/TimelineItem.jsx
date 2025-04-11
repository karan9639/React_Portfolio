"use client"

import { motion } from "framer-motion"

const TimelineItem = ({ data, isLeft }) => {
  const { title, subtitle, date, description, icon: Icon } = data

  return (
    <div className={`flex md:contents ${isLeft ? "flex-row-reverse" : ""}`}>
      <div className={`col-start-1 col-end-2 mr-10 md:mx-auto relative ${isLeft ? "md:mr-10" : "md:ml-10"}`}>
        <div className="h-full w-6 flex items-center justify-center">
          <div className="h-full w-1 bg-emerald-200 dark:bg-emerald-800 pointer-events-none"></div>
        </div>
        <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-emerald-600 shadow text-center">
          <div className="text-white flex items-center justify-center h-full">{Icon && <Icon size={14} />}</div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: isLeft ? 20 : -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="col-start-2 col-end-12 p-4 rounded-xl my-4 mr-auto bg-white dark:bg-gray-800 shadow-md w-full md:w-5/6"
      >
        <h3 className="font-bold text-lg mb-1">{title}</h3>
        <p className="text-emerald-600 dark:text-emerald-400 text-sm mb-1">{subtitle}</p>
        <p className="text-gray-500 dark:text-gray-400 text-xs mb-2">{date}</p>
        <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
      </motion.div>
    </div>
  )
}

export default TimelineItem
