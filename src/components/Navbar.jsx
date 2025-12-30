import { useState, useEffect, useRef } from "react";
import { Menu, X, Star, PartyPopper, Check } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";
import confetti from "canvas-confetti";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Blog", href: "/blog" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
  { name: "Music", href: "/music" },
];

export const Navbar = ({ starsEnabled, setStarsEnabled }) => {
  const navRef = useRef(null);

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

  // Keep CSS vars in sync:
  // --nav-h: actual navbar height
  // --nav-gap: extra "bottom margin" (visual space) for small screens only
  useEffect(() => {
    if (!navRef.current) return;

    const setVars = () => {
      const navH = navRef.current.getBoundingClientRect().height;

      // control the "extra space under navbar" on small screens only
      const isSmall = window.matchMedia("(max-width: 767px)").matches;
      const gap = isSmall ? 10 : 0; // <-- tweak this (px)

      document.documentElement.style.setProperty("--nav-h", `${navH}px`);
      document.documentElement.style.setProperty("--nav-gap", `${gap}px`);
    };

    setVars();

    const ro = new ResizeObserver(() => setVars());
    ro.observe(navRef.current);

    window.addEventListener("resize", setVars);
    window.addEventListener("scroll", setVars);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", setVars);
      window.removeEventListener("scroll", setVars);
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

    myConfetti({ particleCount: 150, spread: 70, startVelocity: 60, origin: { y: 0.9 } });

    setTimeout(() => {
      myConfetti({ particleCount: 80, angle: 60, spread: 55, startVelocity: 60, origin: { x: 0, y: 0.9 } });
      myConfetti({ particleCount: 80, angle: 120, spread: 55, startVelocity: 60, origin: { x: 1, y: 0.9 } });
    }, 250);

    setTimeout(() => {
      document.body.removeChild(myCanvas);
    }, 3000);
  };

  return (
    <nav
      ref={navRef}
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 bg-background",
        isScrolled && !isMenuOpen ? "" : "py-1",
        // only on small screens: add *padding-bottom* (visual "bottom margin")
        // progress bar will still be correct because it keys off measured height
        "pb-2 md:pb-0"
      )}
    >
      <div className="container flex items-center justify-between pt-3">
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
        <div className="hidden md:flex w-full justify-between items-center bg-background/80 mb-2">
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
                className="px-3 py-1.5 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform inline-flex items-center gap-1"
                type="button"
              >
                {starsEnabled ? <X /> : <Check />} <Star className="h-4 w-4" />
              </button>
            )}

            <button
              onClick={launchConfetti}
              className="p-3 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform inline-flex items-center gap-2"
              type="button"
            >
              <PartyPopper className="h-5 w-5" />
            </button>

            <ThemeToggle />
          </div>
        </div>

        {/* Mobile nav controls */}
        <div className="ml-auto flex items-center gap-4 relative md:hidden">
          <button
            onClick={() => setIsMenuOpen((v) => !v)}
            className="p-2 rounded-md text-foreground hover:text-primary"
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile menu: appears BELOW navbar + extra small-screen gap */}
          <div
            className={cn(
              "fixed left-0 w-full bg-background/95 text-body backdrop-blur-md shadow-lg flex flex-col p-6 space-y-6 transition-all duration-300 md:hidden",
              isMenuOpen
                ? "opacity-100 translate-y-0 pointer-events-auto"
                : "opacity-0 -translate-y-2 pointer-events-none"
            )}
            style={{ top: "calc(var(--nav-h, 64px) + var(--nav-gap, 0px))" }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-body hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>

          {isDark && (
            <button
              onClick={() => setStarsEnabled((prev) => !prev)}
              className="px-3 py-1.5 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform inline-flex items-center gap-1"
              type="button"
            >
              {starsEnabled ? <X /> : <Check />} <Star className="h-4 w-4" />
            </button>
          )}

          <button
            onClick={launchConfetti}
            className="p-3 rounded-full bg-primary text-primary-foreground hover:scale-110 transition-transform inline-flex items-center gap-2"
            type="button"
          >
            <PartyPopper className="h-5 w-5" />
          </button>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};
