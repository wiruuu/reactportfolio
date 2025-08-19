import { Labubu } from "../components/Labubu";
import { ThemeToggle } from "../components/ThemeToggle";
import { StarBackground } from "../components/StarBackground";
import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden"> 
        {/* Theme toggle */}
        <ThemeToggle />

        {/* Labubu */}
        {/* <div className="min-h-screen p-8">
            <Labubu />
        </div> */}
        
        {/* Background effects */}
        <StarBackground />

        {/* Navbar */}
        <Navbar />

        {/* Main content */}

        <main>
            <HeroSection />
            <AboutSection />
            <ProjectsSection />
            {/* <Labubu /> */}
            <ContactSection />
        </main>

        {/* Footer */}
        <Footer />
        </div>
    );
};

