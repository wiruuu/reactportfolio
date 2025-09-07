import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        }
    }, []);

    const toggleTheme = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        localStorage.setItem("theme", newMode ? "dark" : "light");
        document.documentElement.classList.toggle("dark", newMode);
    };

    return (
        <button onClick={toggleTheme}
            className={cn(
                "p-2 rounded-full",
                "bg-white dark:bg-gray-800",
                "border border-body",
                "hover:bg-gray-100 dark:hover:bg-gray-700",
                "focus:outline-none transition-all duration-300",
                "shadow-lg hover:shadow-xl"
            )}
        >
            {isDarkMode ? (
                <Sun className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-300" />
            ) : (
                <Moon className="h-5 w-5 sm:h-6 sm:w-6 text-gray-200" />
            )}
        </button>
    );
};