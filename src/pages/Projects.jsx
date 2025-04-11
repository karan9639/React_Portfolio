import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  const projects = [
    {
      title: "Lab Recipe Management",
      description:
        "A full-stack recipe management app where users can add, view, and organize recipes with a clean UI and backend support.",
      image: "/images/lab.png",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      githubUrl: "https://github.com/karan9639/Lab",
      liveUrl: "https://labrecipe.vercel.app/recipes",
    },
    {
      title: "Restaurant Website",
      description:
        "A modern, mobile-first restaurant website with a visually appealing menu and smooth user experience.",
      image: "/images/restaurant.png",
      technologies: ["React", "Styled Components", "Firebase"],
      githubUrl: "https://github.com/karan9639/Restaurant",
      liveUrl: "https://verma-restaurant.netlify.app/",
    },
    {
      title: "Weather Application",
      description:
        "A sleek weather app that fetches real-time weather data using public APIs and shows forecast data.",
      image: "/images/weather.png",
      technologies: ["JavaScript", "HTML", "CSS", "Weather API"],
      githubUrl: "https://github.com/karan9639/Weather-app",
      liveUrl: "https://weather-kvs.netlify.app/",
    },
    {
      title: "Todo App",
      description:
        "A simple and intuitive todo application to manage daily tasks with features like adding, deleting, and marking tasks as complete.",
      image: "/images/todo.png",
      technologies: ["React", "CSS", "LocalStorage"],
      githubUrl: "https://github.com/karan9639/Todo-React",
      liveUrl: "https://todo-kvs.netlify.app/",
    },
    {
      title: "Unit Converter",
      description:
        "A responsive unit converter supporting various measurement types, built with a clean and interactive UI.",
      image: "/images/converter.png",
      technologies: ["React", "CSS", "JavaScript"],
      githubUrl: "https://github.com/karan9639/Unit_Converter",
      liveUrl: "https://converter-kvs.netlify.app/",
    },
    {
      title: "Razorpay Clone",
      description:
        "A frontend clone of the Razorpay landing page built with Tailwind CSS, mimicking their design and animations.",
      image: "/images/razorpay.png",
      technologies: ["HTML", "Tailwind CSS", "JavaScript"],
      githubUrl: "https://github.com/karan9639/RazorpayUsingTailwind",
      liveUrl: "https://razorpay-kvs.netlify.app/",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <SectionTitle
          title="My Projects"
          subtitle="A showcase of my recent work and the technologies I've used."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
