import { useState, useEffect } from "react";
import { Menu, X, Star, PartyPopper } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";
import confetti from "canvas-confetti";

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

    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains("dark"));
    });
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });
    setIsDark(document.documentElement.classList.contains("dark"));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const launchConfetti = () => {
    const myCanvas = document.createElement("canvas");
    myCanvas.style.position = "fixed";
    myCanvas.style.top = "0";
    myCanvas.style.left = "0";
    myCanvas.style.width = "100%";
    myCanvas.style.height = "100%";
    myCanvas.style.pointerEvents = "none";
    myCanvas.style.zIndex = "9999";
    document.body.appendChild(myCanvas);

    const myConfetti = confetti.create(myCanvas, { resize: true, useWorker: true });

    myConfetti({ particleCount: 150, spread: 70, origin: { y: 0.1 } });

    setTimeout(() => {
      myConfetti({ particleCount: 80, angle: 60, spread: 55, origin: { x: 0, y:0.1 } });
      myConfetti({ particleCount: 80, angle: 120, spread: 55, origin: { x: 1, y:0.1 } });
    }, 250);

    setTimeout(() => {
      document.body.removeChild(myCanvas);
    }, 3000);
  };

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled && !isMenuOpen ? "py-3 bg-background/80" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a className="text-xl font-bold text-primary flex items-center gap-2" href="/">
          <span className="relative z-10">
            <span className="text-glow text-foreground">wiru</span>
          </span>
          <div className="flex items-center justify-center px-2 py-0.5 rounded-lg bg-foreground border border-background/20">
            <span className="text-glow text-background text-lg font-bold relative top-[1px]">
              writes
            </span>
          </div>
        </a>

        {/* Desktop nav */}
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
            {isDark && (
              <button
                onClick={() => setStarsEnabled((prev) => !prev)}
                className="px-3 py-1.5 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform inline-flex items-center gap-2"
              >
                {starsEnabled ? "Hide" : "Show"} <Star className="h-4 w-4" />
              </button>
            )}
            <button
              onClick={launchConfetti}
              className="p-3 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform inline-flex items-center gap-2"
            >
              <PartyPopper className="h-5 w-5" />
            </button>
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile nav controls (right aligned) */}
        <div className="flex md:hidden items-center gap-3 ml-auto">
          {isDark && (
            <button
              onClick={() => setStarsEnabled((prev) => !prev)}
              className="px-2 py-1 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform inline-flex items-center gap-1"
            >
              {starsEnabled ? "Hide" : "Show"} <Star className="h-4 w-4" />
            </button>
          )}
          <button
            onClick={launchConfetti}
            className="p-2 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform"
          >
            <PartyPopper className="h-5 w-5" />
          </button>
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="p-2 text-foreground z-50"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-end justify-start p-8 transition-all duration-300 md:hidden",
          isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col space-y-8 text-xl items-end">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};
