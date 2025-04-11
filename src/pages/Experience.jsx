import { FiBriefcase, FiCode } from "react-icons/fi"
import SectionTitle from "../components/SectionTitle"
import TimelineItem from "../components/TimelineItem"

const Experience = () => {
  const experiences = [
    {
      title: "Frontend Developer",
      subtitle: "Lab Recipe Management System",
      date: "Jan 2023 - Present",
      description:
        "Developed responsive user interfaces using React.js and Material UI. Implemented state management with Redux and integrated RESTful APIs for data fetching.",
      icon: FiBriefcase,
    },
    {
      title: "Web Development Intern",
      subtitle: "CodeClause",
      date: "Jun 2022 - Dec 2022",
      description:
        "Worked on building responsive web applications using HTML, CSS, and JavaScript. Collaborated with the team to implement new features and fix bugs.",
      icon: FiCode,
    },
    {
      title: "Freelance Web Developer",
      subtitle: "Self-employed",
      date: "Jan 2022 - May 2022",
      description:
        "Designed and developed websites for small businesses and individuals. Implemented responsive designs and ensured cross-browser compatibility.",
      icon: FiBriefcase,
    },
    {
      title: "Open Source Contributor",
      subtitle: "Various Projects",
      date: "Sep 2021 - Present",
      description:
        "Contributed to various open-source projects on GitHub. Fixed bugs, added new features, and improved documentation.",
      icon: FiCode,
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <SectionTitle title="Work Experience" subtitle="My professional journey and the roles I've taken on." />

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-12">
          {experiences.map((experience, index) => (
            <TimelineItem key={index} data={experience} isLeft={index % 2 === 0} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
