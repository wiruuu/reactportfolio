import { Labubu } from "./src/components/Labubu";
import { ThemeToggle } from "./src/components/ThemeToggle";
import { StarBackground } from "./src/components/StarBackground";
import { Navbar } from "./src/components/Navbar";
import { HeroSection } from "./src/pages/HeroSection";
import { AboutSection } from "./src/pages/AboutSection";
import { ProjectsSection } from "./src/pages/ProjectsSection";
import { Footer } from "./src/components/Footer";

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden"> 
        {/* Theme toggle */}
        

        {/* Labubu */}
        {/* <div className="min-h-screen p-8">
            <Labubu />
        </div> */}
        
        {/* Background effects */}
        <StarBackground />

        {/* Main content */}

        <main>
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            {/* <Labubu /> */}
        </main>

        {/* Footer */}
        <Footer />
        </div>
    );
};

