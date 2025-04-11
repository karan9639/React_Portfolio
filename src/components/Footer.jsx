import { FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi"

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-center md:text-left">© {new Date().getFullYear()} Karan Singh. All rights reserved.</p>
          </div>

          <div className="flex space-x-4">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors"
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href="mailto:kvnisad18114982@gmail.com"
              className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors"
              aria-label="Email"
            >
              <FiMail size={20} />
            </a>
            <a
              href="tel:+917055424269"
              className="text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors"
              aria-label="Phone"
            >
              <FiPhone size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
