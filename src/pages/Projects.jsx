import SectionTitle from "../components/SectionTitle"
import ProjectCard from "../components/ProjectCard"

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website Builder",
      description:
        "A MERN stack application that allows users to create and customize their own portfolio websites with various templates and components.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
      githubUrl: "https://github.com/",
      liveUrl: "https://example.com/",
    },
    {
      title: "Restaurant Platform",
      description:
        "A mobile-first web application for restaurants to showcase their menu, accept online orders, and manage reservations.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "React Router", "Styled Components", "Firebase"],
      githubUrl: "https://github.com/",
      liveUrl: "https://example.com/",
    },
    {
      title: "Task Management System",
      description:
        "A comprehensive task management application with features like task assignment, progress tracking, and deadline notifications.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["JavaScript", "Node.js", "MongoDB", "Express", "Socket.io"],
      githubUrl: "https://github.com/",
      liveUrl: "https://example.com/",
    },
    {
      title: "E-commerce Dashboard",
      description:
        "An admin dashboard for e-commerce platforms with analytics, inventory management, and order processing capabilities.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Redux", "Material UI", "Chart.js", "Node.js"],
      githubUrl: "https://github.com/",
      liveUrl: "https://example.com/",
    },
    {
      title: "Weather Application",
      description:
        "A weather forecast application that provides real-time weather data and forecasts for locations worldwide.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["JavaScript", "HTML5", "CSS3", "Weather API", "Geolocation API"],
      githubUrl: "https://github.com/",
      liveUrl: "https://example.com/",
    },
    {
      title: "Chat Application",
      description: "A real-time chat application with features like private messaging, group chats, and file sharing.",
      image: "/placeholder.svg?height=300&width=500",
      technologies: ["React", "Socket.io", "Node.js", "Express", "MongoDB"],
      githubUrl: "https://github.com/",
      liveUrl: "https://example.com/",
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <SectionTitle title="My Projects" subtitle="A showcase of my recent work and the technologies I've used." />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
