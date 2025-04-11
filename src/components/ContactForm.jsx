"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { FiSend } from "react-icons/fi"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const validate = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email is invalid"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (validate()) {
      setIsSubmitting(true)

      // Simulate form submission
      setTimeout(() => {
        setIsSubmitting(false)
        setSubmitSuccess(true)
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        })

        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false)
        }, 5000)
      }, 1500)
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8"
    >
      {submitSuccess ? (
        <div className="text-center py-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <FiSend className="text-green-600 dark:text-green-400 text-2xl" />
          </motion.div>
          <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
          <p className="text-gray-600 dark:text-gray-400">Thank you for reaching out. I'll get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-md border ${
                errors.name ? "border-red-500 dark:border-red-400" : "border-gray-300 dark:border-gray-600"
              } bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500`}
              placeholder="Your name"
            />
            {errors.name && <p className="text-red-500 dark:text-red-400 text-xs mt-1">{errors.name}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 rounded-md border ${
                errors.email ? "border-red-500 dark:border-red-400" : "border-gray-300 dark:border-gray-600"
              } bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500`}
              placeholder="Your email"
            />
            {errors.email && <p className="text-red-500 dark:text-red-400 text-xs mt-1">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="subject" className="block text-sm font-medium mb-1">
              Subject (Optional)
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Subject of your message"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className={`w-full px-4 py-2 rounded-md border ${
                errors.message ? "border-red-500 dark:border-red-400" : "border-gray-300 dark:border-gray-600"
              } bg-white dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500`}
              placeholder="Your message"
            />
            {errors.message && <p className="text-red-500 dark:text-red-400 text-xs mt-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-2 px-4 rounded-md transition-colors ${
              isSubmitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending...
              </>
            ) : (
              <>
                <FiSend /> Send Message
              </>
            )}
          </button>
        </form>
      )}
    </motion.div>
  )
}

export default ContactForm
