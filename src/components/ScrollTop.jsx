import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export const ScrollTop = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = document.documentElement.scrollTop;
      const viewportHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      const distanceFromBottom = docHeight - (scrolled + viewportHeight);

      setIsFixed(scrolled > 100 && distanceFromBottom > 100);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex justify-center my-8 relative h-12">
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`inline-flex items-center gap-2 p-3 rounded-full bg-primary text-primary-foreground font-medium border border-body hover:bg-primary/90 transition-all duration-300`}
        style={
          isFixed
            ? { position: "fixed", bottom: "24px", right: "24px" }
            : { position: "relative" }
        }
      >
        <ArrowUp className="h-5 w-5 sm:h-6 sm:w-6" />
      </button>
    </div>
  );
};
