"use client";

import { motion } from "framer-motion";
import {
  FiMapPin,
  FiMail,
  FiPhone,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi";
import SectionTitle from "../components/SectionTitle";
import ContactForm from "../components/ContactForm";

const Contact = () => {
  const contactInfo = [
    {
      icon: FiMapPin,
      title: "Location",
      details: "Agra, Uttar Pradesh, India",
    },
    {
      icon: FiMail,
      title: "Email",
      details: "kvnisad18114982@gmail.com",
      link: "mailto:kvnisad18114982@gmail.com",
    },
    {
      icon: FiPhone,
      title: "Phone",
      details: "(+91) 7055424269",
      link: "tel:+917055424269",
    },
    {
      icon: FiGithub,
      title: "GitHub",
      details: "github.com/karan9639",
      link: "https://github.com/karan9639",
    },
    {
      icon: FiLinkedin,
      title: "LinkedIn",
      details: "linkedin.com/in/karan-singh-20889a221",
      link: "https://www.linkedin.com/in/karan-singh-20889a221/",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <SectionTitle
          title="Contact Me"
          subtitle="Get in touch with me for collaborations, opportunities, or just to say hello."
        />

        <div className="flex flex-col md:flex-row gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-1/3"
          >
            <h3 className="text-xl font-bold mb-6">Contact Information</h3>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center text-emerald-600 mt-1">
                    <info.icon />
                  </div>
                  <div>
                    <h4 className="font-medium mb-1">{info.title}</h4>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors"
                        target={
                          info.link.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          info.link.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        {info.details}
                      </a>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-400">
                        {info.details}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Follow Me</h3>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/karan9639"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-600 transition-colors"
                  aria-label="GitHub"
                >
                  <FiGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/karan-singh-20889a221/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <FiLinkedin />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full md:w-2/3"
          >
            <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
