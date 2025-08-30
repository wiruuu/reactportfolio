import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "@/components/Navbar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/pages/HeroSection";
import { ContactSection } from "@/pages/ContactSection";
import { ProjectsSection } from "@/pages/ProjectsSection";
import { AboutSection } from "@/pages/AboutSection";
import { BlogPage } from "@/pages/BlogPage";
import { BlogPostPage } from "@/pages/BlogPostPage";
import { NotFound } from "@/pages/NotFound";
import { Labubu } from './components/Labubu';
import { StarBackground } from './components/StarBackground';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Toaster /> 
      <Navbar />
      <StarBackground />
      <BrowserRouter>
        <main className="flex-1">
          <Routes>
            <Route index element={<HeroSection />} />
            <Route path="/contact" element={<ContactSection />} />
            <Route path="/projects" element={<ProjectsSection />} />
            <Route path="/about" element={<AboutSection />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;