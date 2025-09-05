import { Labubu } from "../components/Labubu";
import { Star } from "lucide-react";

export const HeroSection = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 py-8 md:py-12 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container max-w-2xl mx-auto relative">
        <Star className="absolute -top-10 -left-0  w-10 h-10 text-primary/50 fill-primary/20 animate-pulse z-10 rotate-40" />
        
        <Star className="absolute -bottom-10 -right-0 w-10 h-10 text-primary/50 fill-primary/20 animate-pulse z-10 rotate-320" style={{ animationDelay: '1s' }} />
        
        <div className="border-2 border-muted-foreground/40 rounded-lg text-center bg-background/80 backdrop-blur-md shadow-2xl shadow-primary/5 hover:shadow-primary/10 transition-shadow duration-500">
          
          <div className="w-full h-15 flex items-center justify-start pl-6 border-b-2 border-muted-foreground/40 bg-primary/40 rounded-t-md">
            <span className="text-lg md:text-xl text-foreground font-medium tracking-wide">home</span>
          </div>  
          
          <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-muted-foreground/50"></div>
          <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-muted-foreground/50"></div>
          
          <div className="p-8 md:p-12">
            <div className="text-xl md:text-2xl text-muted-foreground font-normal tracking-wide mb-6">
              hello! i'm
            </div>
          
            <div className="text-5xl md:text-6xl text-foreground font-medium mb-4 tracking-tight">
              <span className="text-primary">ethan</span> c 
            </div>
          
            <div className="text-xl md:text-2xl text-muted-foreground/80 mb-10 mt-5 font-normal tracking-wide">
              quant, ml, econ
            </div>

            <div className="mb-12">
              <a href="/blog" className="cosmic-button text-lg px-8 py-3">
                blog posts
              </a>
            </div>

            <div className="border-t-2 border-muted-foreground/40 pt-6 mt-6 text-sm md:text-base text-foreground/90">
              {/* Small screens */}
              <div className="grid grid-cols-1 gap-3 text-center md:hidden">
                <div className="grid grid-cols-[1fr_auto_1fr] items-center">
                  <a href="/about" className="justify-self-end hover:text-primary transition-colors duration-300 px-4 hover:bg-primary/30 rounded-md font-medium">
                    about
                  </a>
                  <span className="text-muted-foreground/40 justify-self-center">•</span>
                  <a href="/blog" className="justify-self-start hover:text-primary transition-colors duration-300 px-4 hover:bg-primary/30 rounded-md font-medium">
                    blog
                  </a>
                </div>
                <div className="grid grid-cols-[1fr_auto_1fr] items-center">
                  <a href="/projects" className="justify-self-end hover:text-primary transition-colors duration-300 px-4 hover:bg-primary/30 rounded-md font-medium">
                    projects
                  </a>
                  <span className="text-muted-foreground/40 justify-self-center">•</span>
                  <a href="/contact" className="justify-self-start hover:text-primary transition-colors duration-300 px-4 hover:bg-primary/30 rounded-md font-medium">
                    contact
                  </a>
                </div>
              </div>



              {/* Medium+ screens */}
              <div className="hidden md:flex flex-wrap justify-center gap-3 md:gap-4">
                <a href="/about" className="hover:text-primary transition-colors duration-300 px-2 hover:bg-muted/30 rounded-md font-medium">about</a>
                <span className="text-muted-foreground/40">•</span>
                <a href="/blog" className="hover:text-primary transition-colors duration-300 px-2 hover:bg-muted/30 rounded-md font-medium">blog</a>
                <span className="text-muted-foreground/40">•</span>
                <a href="/projects" className="hover:text-primary transition-colors duration-300 px-2 hover:bg-muted/30 rounded-md font-medium">projects</a>
                <span className="text-muted-foreground/40">•</span>
                <a href="/contact" className="hover:text-primary transition-colors duration-300 px-2 hover:bg-muted/30 rounded-md font-medium">contact</a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
