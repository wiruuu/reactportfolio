import { useEffect, useState } from "react";
import { Menu, X, Star } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

export const Navbar = ({ starsEnabled, setStarsEnabled }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);

    // detect dark mode
    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    setIsDark(document.documentElement.classList.contains("dark"));

    // load saved star state
    const savedStars = localStorage.getItem("starsEnabled");
    if (savedStars !== null) {
      setStarsEnabled(savedStars === "true");
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [setStarsEnabled]);

  // persist star toggle
  useEffect(() => {
    localStorage.setItem("starsEnabled", starsEnabled);
  }, [starsEnabled]);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled && !isMenuOpen ? "py-3 bg-background/80" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* logo */}
        <a className="text-xl font-bold text-primary flex items-center gap-2" href="/">
          <span className="relative z-10">
            <span className="text-glow text-foreground">wiru</span>
          </span>
          <div className="flex items-center justify-center px-2 py-0.5 rounded-lg bg-foreground border border-background/20">
            <span className="text-glow text-background text-lg font-bold relative top-[1px]">writes</span>
          </div>
        </a>  

        {/* desktop nav */}
        <div className="hidden md:flex w-full justify-between items-center">
          <div className="absolute left-1/2 transform -translate-x-1/2 flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="ml-auto flex items-center gap-4">
            {/* star toggle only in dark mode */}
            {isDark && (
              <button
                onClick={() => setStarsEnabled((prev) => !prev)}
                className="px-3 py-1.5 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform inline-flex items-center gap-2"
              >
                {starsEnabled ? "Hide" : "Show"}
                <Star className="h-4 w-4" />
              </button>
            )}
            <ThemeToggle />
          </div>
        </div>

        {/* mobile menu */}
        <div className="flex md:hidden items-center gap-3">
          {isDark && (
            <button
              onClick={() => setStarsEnabled((prev) => !prev)}
              className="px-3 py-1.5 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform inline-flex items-center gap-2"
            >
              {starsEnabled ? "Hide" : "Show"}
              <Star className="h-4 w-4" />
            </button>
          )}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="p-2 text-foreground z-50"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </nav>
  );
};
