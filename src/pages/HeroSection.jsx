import { Labubu } from "../components/Labubu";
import { Star } from "lucide-react";

export const HeroSection = () => {
  return(
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 py-8 md:py-12 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container max-w-2xl mx-auto relative">
        <Star className="absolute -top-5 -left-3 w-10 h-10 text-primary/50 fill-primary/20 animate-pulse z-10 rotate-40" />
        
        <Star className="absolute -bottom-5 -right-3 w-10 h-10 text-primary/50 fill-primary/20 animate-pulse z-10 rotate-320" style={{ animationDelay: '1s' }} />
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

            <div className="flex flex-wrap justify-center gap-3 md:gap-4 text-sm md:text-base text-foreground/90 border-t-2 border-muted-foreground/40 pt-6 mt-6">
              <a href="/about" className="hover:text-primary transition-colors duration-300 px-2 py-1 hover:bg-muted/30 rounded-md font-medium">about</a>
              <span className="text-muted-foreground/40">•</span>
              <a href="/blog" className="hover:text-primary transition-colors duration-300 px-2 py-1 hover:bg-muted/30 rounded-md font-medium">blog</a>
              <span className="text-muted-foreground/40">•</span>
              <a href="/projects" className="hover:text-primary transition-colors duration-300 px-2 py-1 hover:bg-muted/30 rounded-md font-medium">projects</a>
              <span className="text-muted-foreground/40">•</span>
              <a href="/contact" className="hover:text-primary transition-colors duration-300 px-2 py-1 hover:bg-muted/30 rounded-md font-medium">contact</a>
            </div>
          </div>

        </div>

        <div className="fixed inset-0 -z-10 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:16px_16px]"></div>
        </div>

      </div>
    </section>
  );
}
// export const HeroSection = () => {
//   return(
//     <section id="hero" className="flex items-center justify-center px-4 pt-30">
//       <div className="container max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8">
        
//         {/* Labubu on the left - visible on larger screens */}
//         <div className="lg:flex-1 flex justify-center order-2 lg:order-1">
//           <Labubu />
//         </div>

//         {/* Text content centered both horizontally and vertically */}
//         <div className="lg:flex-1 text-center order-1 lg:order-2 flex flex-col items-center justify-center">
//           <div className="space-y-6">
//             <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
//               <span className="opacity-0 animate-fade-in-delay-1">i</span>
//               <span className="text-primary opacity-0 animate-fade-in-delay-1">love</span>
//               <span className="text-gradient opacity-0 animate-fade-in-delay-2">women</span>
//             </h1>

//             <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
//               bruh
//             </p>
//             <div className="pt-4 opacity-0 animate-fade-in-delay-4">
//               <a href="/blog" className="cosmic-button">
//                 blog posts
//               </a>
//             </div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }