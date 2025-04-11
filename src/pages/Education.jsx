import { FiBookOpen, FiAward } from "react-icons/fi"
import SectionTitle from "../components/SectionTitle"
import TimelineItem from "../components/TimelineItem"

const Education = () => {
  const educationItems = [
    {
      title: "Bachelor of Technology in Computer Science",
      subtitle: "ABES Engineering College",
      date: "2019 - 2023",
      description:
        "Graduated with a CGPA of 7.22. Focused on core computer science subjects, data structures, algorithms, and web development.",
      icon: FiBookOpen,
    },
    {
      title: "Intermediate (12th Grade)",
      subtitle: "St. John's Sr. Sec. School",
      date: "2017 - 2019",
      description: "Completed with 76% marks. Studied Physics, Chemistry, Mathematics, and Computer Science.",
      icon: FiBookOpen,
    },
    {
      title: "High School (10th Grade)",
      subtitle: "St. John's Sr. Sec. School",
      date: "2016 - 2017",
      description: "Completed with 91.17% marks. Received recognition for academic excellence.",
      icon: FiBookOpen,
    },
  ]

  const certifications = [
    {
      title: "Web Development Bootcamp",
      subtitle: "Udemy",
      date: "Dec 2021",
      description: "Comprehensive course covering HTML, CSS, JavaScript, Node.js, Express, and MongoDB.",
      icon: FiAward,
    },
    {
      title: "React - The Complete Guide",
      subtitle: "Udemy",
      date: "Mar 2022",
      description: "In-depth course on React.js, Redux, React Router, and related technologies.",
      icon: FiAward,
    },
    {
      title: "Data Structures and Algorithms",
      subtitle: "Coursera",
      date: "Aug 2022",
      description: "Course on fundamental data structures and algorithms with practical implementations.",
      icon: FiAward,
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <SectionTitle
          title="Education & Certifications"
          subtitle="My academic background and professional certifications."
        />

        <div className="mb-16">
          <h3 className="text-xl font-bold mb-6 border-l-4 border-emerald-600 pl-4">Education</h3>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {educationItems.map((item, index) => (
              <TimelineItem key={index} data={item} isLeft={index % 2 === 0} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-6 border-l-4 border-emerald-600 pl-4">Certifications</h3>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
            {certifications.map((item, index) => (
              <TimelineItem key={index} data={item} isLeft={index % 2 === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
