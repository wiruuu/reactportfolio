import { Star } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 py-8 md:py-12 overflow-hidden"
    >
      <div className="container max-w-2xl mx-auto relative z-10">
        {/* Decorative stars */}
        <Star className="absolute -top-10 -left-0 w-10 h-10 text-primary/50 fill-primary/20 animate-pulse rotate-40" />
        <Star
          className="absolute -bottom-10 -right-0 w-10 h-10 text-primary/50 fill-primary/20 animate-pulse rotate-320"
          style={{ animationDelay: "1s" }}
        />

        {/* Hero box (restored to original sizing) */}
        <div className="relative border-2 border-muted-foreground/40 rounded-lg text-center bg-background/80 backdrop-blur-md shadow-2xl shadow-primary/5 transition-shadow duration-500 overflow-visible">
          {/* Wavy lines emanating from hero box perimeter */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute inset-0 w-full h-full pointer-events-none z-10 invisible lg:visible"
            viewBox="0 0 1000 1000"
            preserveAspectRatio="none"
            style={{ overflow: "visible" }}
          >
            <path
              d="M 500 0 Q 550 -150, 700 -100 T 1000 -200 T 1800 -250"
              stroke="hsl(var(--primary) / 0.4)"
              strokeWidth="6"
              fill="none"
            />

            <path
              d="M 300 0 Q 200 -50, 100 -150
     T 0 -300
     T -900 -450
     T -1200 -600"
              stroke="hsl(var(--primary) / 0.4)"
              strokeWidth="6"
              fill="none"
            />
            <path
              d="M 1000 300
     Q 1150 250, 1300 150
     T 1600 0
     T 1900 150
     T 2200 300"
              stroke="hsl(var(--primary) / 0.4)"
              strokeWidth="6"
              fill="none"
            />
            <path
              d="M 0 200
     Q -150 350, -300 450
     T -600 600
     T -900 750
     T -1200 900"
              stroke="hsl(var(--primary) / 0.4)"
              strokeWidth="6"
              fill="none"
            />
            <path
              d="M 150 1000
     Q 200 1100, 400 1200
     T 800 1400
     T 1200 1600
     T 1600 1800"
              stroke="hsl(var(--primary) / 0.4)"
              strokeWidth="6"
              fill="none"
            />



            <path
              d="M 500 1000
     Q 600 1150, 800 1100 
     T 1200 1200 
     T 1600 1150 
     T 2000 1250"
              stroke="hsl(var(--primary) / 0.4)"
              strokeWidth="6"
              fill="none"
            />

            <path
              d="M 0 500
     Q -150 400, -300 600
     T -600 800
     T -900 1000
     T -1200 1200"
              stroke="hsl(var(--primary) / 0.4)"
              strokeWidth="6"
              fill="none"
            />


            <path
              d="M 1000 500
     Q 1150 450, 1300 500
     T 1600 500
     T 1900 500
     T 2200 500"
              stroke="hsl(var(--primary) / 0.4)"
              strokeWidth="6"
              fill="none"
            />


            {/* Top left */}
            <path
              d="M 0 100
     Q -150 -150, -300 -100 
     T -600 -200 
     T -900 -150 
     T -1200 -250"
              stroke="hsl(var(--primary) / 0.4)"
              strokeWidth="6"
              fill="none"
            />

            {/* Top right */}
            <path
              d="M 1000 0
     Q 1150 -150, 1300 -100 
     T 1600 -200 
     T 1900 -150 
     T 2200 -250"
              stroke="hsl(var(--primary) / 0.4)"
              strokeWidth="6"
              fill="none"
            />

            {/* Bottom left */}
            <path
              d="M 0 1000 Q -150 1150, -300 1100 T -600 1200 T -900 1150 T -1200 1250"
              stroke="hsl(var(--primary) / 0.4)"
              strokeWidth="6"
              fill="none"
            />

            {/* Bottom right */}
            <path
              d="M 1000 900 Q 1150 1150, 1300 1100 T 1600 800, 1800 700"
              stroke="hsl(var(--primary) / 0.4)"
              strokeWidth="6"
              fill="none"
            />

          </svg>

          {/* Top bar */}
          <div className="w-full h-15 flex items-center justify-start pl-6 border-b-2 border-muted-foreground/40 bg-primary/40 rounded-t-md relative z-10">
            <span className="text-lg md:text-xl text-foreground font-medium tracking-wide">
              home
            </span>
          </div>

          {/* Corners */}
          <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-muted-foreground/50"></div>
          <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-muted-foreground/50"></div>

          {/* Content */}
          <div className="p-8 md:p-12 relative z-10">
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
              <a
                href="/blog"
                className="cosmic-button hover:bg-primary/90 text-lg px-8 py-3 hover:scale-110 hover:shadow-xl transition-transform duration-200 hover:underline"
              >
                blog posts
              </a>
            </div>

{/* Links */}
<div className="border-t-2 border-muted-foreground/40 pt-6 mt-6 text-sm font-medium md:text-base text-foreground/90">
  <div className="flex flex-col items-center gap-2">

    <div className="flex justify-center gap-3 md:gap-4">
      <a href="/about" className="link">about</a>
      <span className="dot">•</span>

      <a href="/blog" className="link">blog</a>
      <span className="dot">•</span>

      <a href="/projects" className="link">projects</a>

      <span className="dot hidden min-[530px]:inline">•</span>
      <a href="/contact" className="link hidden min-[530px]:inline">contact</a>
      <span className="dot hidden min-[530px]:inline">•</span>
      <a href="/music" className="link hidden min-[530px]:inline">music</a>
    </div>

    <div className="flex justify-center gap-3 md:gap-4 min-[530px]:hidden">
      <a href="/contact" className="link">contact</a>
      <span className="dot">•</span>
      <a href="/music" className="link">music</a>
    </div>

  </div>
</div>

          </div>
        </div>
      </div>
    </section>
  );
};
