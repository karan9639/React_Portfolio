"use client"

import { useState, useEffect } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { motion } from "framer-motion"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Skills from "./pages/Skills"
import Projects from "./pages/Projects"
import Experience from "./pages/Experience"
import Education from "./pages/Education"
import Achievements from "./pages/Achievements"
import Contact from "./pages/Contact"
import { ThemeProvider } from "./context/ThemeContext"

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setLoading(false)
    }, 1500)
  }, [])

  if (loading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-gray-800 dark:text-white"
        >
          <span className="text-emerald-600">K</span>aran Singh
        </motion.div>
      </div>
    )
  }

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/education" element={<Education />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
