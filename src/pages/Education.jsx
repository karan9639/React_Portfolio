import { FiBookOpen, FiAward } from "react-icons/fi"
import SectionTitle from "../components/SectionTitle"
import TimelineItem from "../components/TimelineItem"

const Education = () => {
  const educationItems = [
    {
      title: "Bachelor of Technology in Computer Science",
      subtitle: "ABES Engineering College",
      date: "2020 - 2024",
      description:
        "Graduated with a CGPA of 7.22. Focused on core computer science subjects, data structures, algorithms, and web development.",
      icon: FiBookOpen,
    },
    {
      title: "Intermediate (12th Grade)",
      subtitle: "Shri Salig Ram Inter College",
      date: "2018 - 2019",
      description: "Completed with 76% marks. Studied Physics, Chemistry, Mathematics, and Computer Science.",
      icon: FiBookOpen,
    },
    {
      title: "High School (10th Grade)",
      subtitle: "Saraswati Gyan Mandir",
      date: "2015 - 2016",
      description: "Completed with 91.17% marks. Received recognition for academic excellence.",
      icon: FiBookOpen,
    },
  ]

  const certifications = [
    {
      title: "React - The Complete Guide",
      subtitle: "Udemy",
      date: "Feb 2024",
      description:
        "In-depth course on React.js, Redux, React Router, and related technologies.",
      icon: FiAward,
    },
    {
      title: "C/C++ Programming",
      subtitle: "SoloLearn",
      date: "Nov 2022",
      description:
        "Fundamentals of computer networks, protocols, and network security.",
      icon: FiAward,
    },
    {
      title: "Computer Networks",
      subtitle: "CCNA",
      date: "June 2023",
      description:
        "Fundamentals of computer networks, protocols, and network security.",
      icon: FiAward,
    },
    {
      title: "Python",
      subtitle: "CCNA",
      date: "June 2023",
      description:
        "basics of Python programming, data structures, and algorithms.",
      icon: FiAward,
    },
    {
      title: "SQL",
      subtitle: "HackerRank",
      date: "Feb 2023",
      description: "Proficient in SQL queries, joins, and database management.",
      icon: FiAward,
    },
  ];

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
