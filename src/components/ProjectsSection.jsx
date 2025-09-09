import { ArrowRight, ExternalLink, Github, Link } from "lucide-react";

const projects = [
    {
      id: 1,
      title: "Car Rental Website",
      description: "A responsive car rental website built with React + Tailwind CSS. The project provides an easy-to-use interface for browsing cars, filling rental forms, and managing rental data.",
      image: "/projects/project1.png",
      tags: ["React", "React Router", "Tailwind CSS"],
      demoUrl: "https://carrenral.vercel.app/",
      githubUrl: "https://github.com/muuhamedhany/Car-Renral-REACT",
    },
    {
      id: 2,
      title: "E-Commerce Website",
      description:
        "A modern e-commerce website built with React and Tailwind CSS, featuring a sleek UI, responsive design, product browsing, cart and wishlist management, and frontend-only authentication with localStorage. ",
      image: "/projects/project2.png",
      tags: ["REACT", "Tailwind CSS", "Local Storage"],
      demoUrl: "https://pure-store.vercel.app/",
      githubUrl: "https://github.com/muuhamedhany/E-Commerce-REACT",
    },
    {
      id: 3,
      title: "E-commerce Website",
      description:
        "A simple PHP-based eCommerce website with user login, signup, product browsing, and cart features. Admin panel supports product and user management. Includes organized folders for categories, images, and styling. ",
      image: "/projects/project3.png",
      tags: ["HTML/CSS", "PHP", "MySQL"],
      demoUrl: "/",
      githubUrl: "https://github.com/muuhamedhany/e-commerce-with-php",
    },
  ];

const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
              {" "}
              Featured <span className="text-primary"> Projects </span>
            </h2>
    
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Here are some of my recent projects. Each project was carefully
              crafted with attention to detail, performance, and user experience.
            </p>
    
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, key) => (
                <div
                  key={key}
                  className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
                >
                  <div className="h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
    
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span className="px-2 py-1 text-xs font-medium border rounded-full
                         bg-secondary text-secondary-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
    
                    <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-3">
                        
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                          <Github size={20} />
                        </a>

                        <a
                          href={project.demoUrl}
                          target="_blank"
                          className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                          <Link size={20} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
    
            <div className="text-center mt-12">
              <a
                className="cosmic-button w-fit flex items-center mx-auto gap-2"
                target="_blank"
                href="https://github.com/muuhamedhany"
              >
                Check My Github <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>
      );
}

export default ProjectsSection