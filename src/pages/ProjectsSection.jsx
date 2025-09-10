import { ArrowRight, ExternalLink, Github } from "lucide-react";

const books = [
  {
    id: 1,
    title: "A Mathematical Economist's Toolkit",
    description: "Linear algebra, multivariable calculus, constrained optimisation, difference and differential equations for economists",
    image: "/projects/amet2.png",
    tags: ["Mathematical economics"],
    demoUrl: "https://drive.google.com/drive/folders/1qqOE1Re6u2VhVkZisQbBp9xekysrOHtd?usp=drive_link",
    githubUrl: "https://github.com/wiruuu/AMET",
  },
  {
    id: 2,
    title: "Towards Class Field Theory",
    description:
      "Number, cyclotomic, and local fields, class number formula, adeles, group cohomology, local and global class field theory",
    image: "/projects/tcft.png",
    tags: ["Number theory"],
    demoUrl: "https://drive.google.com/drive/folders/1AeZ4M8jLgLybF7K71HtABtnF6AecjDeS?usp=sharing",
    githubUrl: "https://github.com/wiruuu/TCFT",
  },
];

const projects = [
  {
    id: 1,
    title: "Statistical Arbitrage",
    description: "test1",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "Supabase"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "proj2",
    description:
      "skibidi",
    image: "/projects/project2.png",
    tags: ["TypeScript", "D3.js", "Next.js"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "what",
    description:
      "haha",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "Scikit-learn"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-40 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          {" "}
          <span className="text-primary"> Projects </span>
        </h2>
        <div className="w-20 h-1 bg-primary/30 mx-auto mb-8 rounded-full"></div>
        {/* Books */}
        <h2 className="text-2xl font-semibold text-left mb-8">Books</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 mb-8">
          {books.map((book, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover group rounded-xl shadow-xs shadow-lg hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/20 block"
            >
              <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center px-3 py-1">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 object-scale-down"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4 justify-center items-center">
                  {book.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {book.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {book.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={book.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={book.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Projects */}
        <h2 className="text-2xl font-semibold text-left mb-8">Projects</h2>
        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover group rounded-xl shadow-xs shadow-lg hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/20 block"
            >
              <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 object-cover"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
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
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div> */}

      </div>
    </section>
  );
};