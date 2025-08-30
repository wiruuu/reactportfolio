import { cn } from "@/lib/utils"
import { useState, useEffect } from "react";
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
    {name: "Home", href: "/"},
    {name: "About", href: "/about"},
    {name: "Blog", href: "/blog"},
    {name: "Projects", href: "/projects"},
    {name: "Contact", href: "/contact"},
]

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
        <nav className={cn(
            "fixed w-full z-40 transition-all duration-300",
            isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
        )}>
            <div className="container flex items-center justify-between">
                <a className="text-xl font-bold text-primary flex items-center gap-2" href="#hero">
                <span className="relative z-10">
                    <span className="text-glow text-foreground">wiru</span>
                </span>
                <div className="flex items-center justify-center w-flex h-flex px-2 py-0.5 rounded-lg bg-foreground border border-background/20">
                    <span className="text-glow text-background text-lg font-bold relative top-[1px]">writes</span>
                </div>
                </a>  
                {/* desktop nav */}
                <div className="hidden md:flex space-x-8 justify-center items-center">
                    {navItems.map((item) => (
                    <a key={item.name} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">
                    {item.name}
                    </a>
                ))}
                </div>
                <div>
                    <ThemeToggle />
                </div>
                {/* mobile nav */}
                <button onClick={() => setIsMenuOpen((prev) => !prev)} 
                className="md:hidden p-2 text-foreground z-50" 
                aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}> 
                    {" "}
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
                    
                </button>

                <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                    "transition-all duration-300 md:hidden",
                    isMenuOpen
                    ? "opacity-100 pointer-events-auto" 
                    : "opacity-0 pointer-events-none"
                )}>
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