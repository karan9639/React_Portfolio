"use client"

import { motion } from "framer-motion"
import SectionTitle from "../components/SectionTitle"
import SkillIcon from "../components/SkillIcon"

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C", icon: "C" },
        { name: "C++", icon: "Cplusplus" },
        { name: "JavaScript", icon: "Javascript" },
        { name: "Python", icon: "Python" },
        { name: "Java", icon: "Java" },
      ],
    },
    {
      title: "Web Development",
      skills: [
        { name: "React.js", icon: "React" },
        { name: "Node.js", icon: "Nodejs" },
        { name: "Express.js", icon: "Express" },
        { name: "HTML5", icon: "Html5" },
        { name: "CSS3", icon: "Css3" },
        { name: "Tailwind CSS", icon: "Tailwindcss" },
        { name: "Material UI", icon: "Materialui" },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", icon: "Mongodb" },
        { name: "MySQL", icon: "Mysql" },
        { name: "SQL", icon: "Postgresql" },
        { name: "Mongoose ORM", icon: "Mongodb" },
      ],
    },
    {
      title: "Tools & Platforms",
      skills: [
        { name: "Git", icon: "Git" },
        { name: "GitHub", icon: "Github" },
        { name: "Postman", icon: "Postman" },
        { name: "Vercel", icon: "Vercel" },
        { name: "Netlify", icon: "Netlify" },
        { name: "Render", icon: "Render" },
      ],
    },
    {
      title: "IDEs & Environments",
      skills: [
        { name: "VS Code", icon: "Visualstudiocode" },
        { name: "Code::Blocks", icon: "Codeblocks" },
        { name: "Chrome DevTools", icon: "Chrome" },
        { name: "CLI", icon: "Gnubash" },
      ],
    },
    {
      title: "Concepts & Methodologies",
      skills: [
        { name: "OOP", icon: "Codio" },
        { name: "MVC", icon: "Mvc" },
        { name: "RESTful APIs", icon: "Fastapi" },
        { name: "Agile", icon: "Jira" },
        { name: "Responsive Design", icon: "Responsively" },
      ],
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <SectionTitle
          title="Skills & Expertise"
          subtitle="A comprehensive overview of my technical skills and proficiencies."
        />

        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-12"
            >
              <h3 className="text-xl font-bold mb-6 border-l-4 border-emerald-600 pl-4">{category.title}</h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillIcon key={skillIndex} name={skill.name} icon={skill.icon} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
