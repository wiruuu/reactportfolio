import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { ExternalLink, Github } from "lucide-react";

const books = [
  {
    title: "Hap",
    description: "For large orchestra",
    image: "/music/sample1.jpg",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "String Quartet",
    description: "Contemporary chamber music piece.",
    image: "/music/sample2.jpg",
    tags: ["chamber", "strings"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "String Quartet",
    description: "Contemporary chamber music piece.",
    image: "/music/sample2.jpg",
    tags: ["chamber", "strings"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "String Quartet",
    description: "Contemporary chamber music piece.",
    image: "/music/sample2.jpg",
    tags: ["chamber", "strings"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const MusicSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <section id="music" className="relative z-10 py-40 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">

        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          My <span className="text-primary">musical works</span>
        </h2>

        <div className="w-20 h-1 bg-primary/30 mx-auto mb-12 rounded-full"></div>

        {/* Intro */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-left mb-4">Compositions and arrangements</h3>
          <p className="text-base text-muted-foreground text-left">
            I compose music in a diverse range of genres for orchestras, and arrange music for choirs and bands. Here are some of my works. Original compositions are in italics :)
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {books.map((book, key) => (
            <div
              key={key}
              className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/20"
            >
              <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center p-3">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-center italic">
                  {book.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 text-center">
                  {book.description}
                </p>

                <div className="flex justify-center space-x-4">
                  <a
                    href={book.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="text-foreground/80 hover:text-primary transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
