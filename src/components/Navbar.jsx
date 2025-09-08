import { cn } from "@/lib/utils"
import { useState, useEffect } from "react";
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from "./ThemeToggle";
import { useCallback } from "react";
import { PartyPopper } from "lucide-react";
import confetti from "canvas-confetti";

const navItems = [
    {name: "Home", href: "/"},
    {name: "About", href: "/about"},
    {name: "Blog", href: "/blog"},
    {name: "Projects", href: "/projects"},
    {name: "Contact", href: "/contact"},
]

export const ConfettiButton = () => {
  const handleConfetti = useCallback(() => {
    confetti({
      particleCount: 200,
      spread: 100,
      startVelocity: 60,
      origin: { x: 0.5, y: 0.9 },
    });

    setTimeout(() => {
      confetti({
        particleCount: 150,
        angle: 60,
        spread: 80,
        startVelocity: 60,
        origin: { x: 0, y: 0.9 },
      });
      confetti({
        particleCount: 150,
        angle: 120,
        spread: 80,
        startVelocity: 60,
        origin: { x: 1, y: 0.9 },
      });
    }, 250);
  }, []);

  return (
    <button
      onClick={handleConfetti}
      className="p-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors border border-body"
    >
      <PartyPopper />
    </button>
  );
};

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)  
        }

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <nav
          className={cn(
            "fixed top-0 w-full z-50 transition-all duration-300",
            isScrolled && !isMenuOpen
              ? "py-3 bg-background/80 backdrop-blur-md shadow-sm"
              : "py-5"
          )}
        >
            <div className="container flex items-center justify-between">
                {/* Logo */}
                <a className="text-xl font-bold text-primary flex items-center gap-2" href="/">
                  <span className="relative z-10">
                    <span className="text-glow text-foreground">wiru</span>
                  </span>
                  <div className="flex items-center justify-center px-2 py-0.5 rounded-lg bg-foreground border border-background/20">
                    <span className="text-glow text-background text-lg font-bold relative top-[1px]">writes</span>
                  </div>
                </a>  

                {/* Desktop nav */}
                <div className="hidden md:flex w-full justify-between items-center">
                    <div className="absolute left-1/2 -translate-x-1/2 flex space-x-8">
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
                        <ConfettiButton />
                        <ThemeToggle />
                    </div>
                </div>

                {/* Mobile nav button + theme toggle */}
                <div className="flex md:hidden items-center gap-2">
                    <button
                      onClick={() => setIsMenuOpen((prev) => !prev)}
                      className="p-2 text-foreground z-50"
                      aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                    >
                      {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                    <ConfettiButton />
                    <ThemeToggle />
                </div>

                <div
                  className={cn(
                    "fixed inset-0 z-40 flex flex-col items-center justify-center transition-all duration-300 md:hidden",
                    isMenuOpen
                      ? "opacity-100 pointer-events-auto bg-background/95 backdrop-blur-md"
                      : "opacity-0 pointer-events-none"
                  )}
                >
                    <div className="flex flex-col space-y-8 text-xl">
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
            </div>
        </nav>
    );
}
