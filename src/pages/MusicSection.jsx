import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { ExternalLink, Github } from "lucide-react";

const books = [
  {
    title: "Hap*",
    description: "Set to Thomas Hardy's 'Hap'. For large orchestra and choir (~18:30)",
    image: "/projects/music-hap.png",
    demoUrl: "https://drive.google.com/drive/folders/1a8TDzBL0VJGRsaYQHUukO8opUgpqAorJ?usp=drive_link",
  },
  {
    title: "Gleaming Low*",
    description: "For small orchestra (~6:30)",
    image: "/projects/music-gl.png",
    demoUrl: "https://drive.google.com/drive/folders/1EXd5CXUS094xL9kObk91BI_axBpKmXny?usp=drive_link",
  },
  {
    title: "Exhaltation*",
    description: "Cute piece for string sextet (~4:15)",
    image: "/projects/music-ex.png",
    demoUrl: "https://drive.google.com/drive/folders/1R90KY2432B4a563SYXtDAxFH4xfGGDvY?usp=drive_link",
  },
  {
    title: "Star Trek",
    description: "Jazz arrangement (~3:00)",
    image: "/projects/music-st.png",
    demoUrl: "https://drive.google.com/drive/folders/1GOCzVgqFgF7LS0OgfeORg1LqH0mjoRvr?usp=drive_link",
  },
  {
    title: "Over the Rainbow",
    description: "A cappella arrangement (~2:15)",
    image: "/projects/music-otr.png",
    demoUrl: "https://drive.google.com/drive/folders/1S48gKqxJYfk_Q_Eq_KYgnFTAh2M7dHlZ?usp=drive_link",
  },
  {
    title: "Nausicaä",
    description: "Jazz arrangement (~3:00)",
    image: "/projects/music-naus.png",
    demoUrl: "https://drive.google.com/drive/folders/11UukuiS1o9G938Nx1xQB5F2LcY3r_CwZ?usp=drive_link",
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
            I compose music in a diverse range of genres for orchestras, and arrange music for choirs and bands. Here are some of my works. Original compositions are marked with a star :)
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {books.map((book, key) => (
            <a
              key={key}
              className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/20"
              href={book.demoUrl}
            >
              <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center p-1">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-center italic hover:text-primary">
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
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};
