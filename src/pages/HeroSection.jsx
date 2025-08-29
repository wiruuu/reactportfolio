import { Labubu } from "../components/Labubu";

export const HeroSection = () => {
  return(
    <section id="hero" className="flex items-center justify-center px-4 pt-30">
      <div className="container max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8">
        
        {/* Labubu on the left - visible on larger screens */}
        <div className="lg:flex-1 flex justify-center order-2 lg:order-1">
          <Labubu />
        </div>

        {/* Text content centered both horizontally and vertically */}
        <div className="lg:flex-1 text-center order-1 lg:order-2 flex flex-col items-center justify-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              <span className="opacity-0 animate-fade-in-delay-1">i</span>
              <span className="text-primary opacity-0 animate-fade-in-delay-1">love</span>
              <span className="text-gradient opacity-0 animate-fade-in-delay-2">women</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
              bruh
            </p>
            <div className="pt-4 opacity-0 animate-fade-in-delay-4">
              <a href="/blog" className="cosmic-button">
                blog posts
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}