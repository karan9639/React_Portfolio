import { FiBriefcase, FiCode } from "react-icons/fi"
import SectionTitle from "../components/SectionTitle"
import TimelineItem from "../components/TimelineItem"

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      subtitle: "Jasmine Knitting Pvt Ltd.",
      date: "March 2025 - Present",
      description:
        "Developed responsive user interfaces using React.js and Material UI. Implemented state management with Redux and integrated RESTful APIs for data fetching.",
      icon: FiBriefcase,
    },
    {
      title: "Web Development Intern",
      subtitle: "CodeClause",
      date: "May 2023 - July 2023",
      description:
        "Worked on building responsive web applications using HTML, CSS, and JavaScript. Collaborated with the team to implement new features and fix bugs.",
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
