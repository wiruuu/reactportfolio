import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HeroSection } from "./pages/HeroSection";
import { Navbar } from "./components/Navbar";
import { ContactSection } from "./pages/ContactSection";
import { ProjectsSection } from "./pages/ProjectsSection";
import { AboutSection } from "./pages/AboutSection";
import { NotFound } from "./pages/NotFound";
import { Footer } from "./components/Footer";
import { ThemeToggle } from "./components/ThemeToggle";
import { Toaster } from "@/components/ui/toaster";
import { StarBackground } from "./components/StarBackground";
import { BlogSection } from "./pages/BlogSection";
import { Labubu } from "./components/Labubu";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <Toaster /> 
      <Navbar />
      <ThemeToggle />
      <StarBackground />
      <BrowserRouter>
        <main className="flex-1"> 
          <Routes>
            <Route index element={<HeroSection />} />
            <Route path="/contact" element={<ContactSection />} />
            <Route path="/projects" element={<ProjectsSection />} />
            <Route path="/about" element={<AboutSection />} />
            <Route path="/blog" element={<BlogSection />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;