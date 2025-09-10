import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";

export const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = document.documentElement.scrollTop;
      const viewportHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // distance from bottom of page
      const distanceFromBottom = docHeight - (scrolled + viewportHeight);

      // show if >100px down, but hide if within 150px of bottom
      setIsVisible(scrolled > 100 && distanceFromBottom > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible ? (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90  border border-body"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-5 w-5 sm:h-6 sm:w-6 " />
        </button>
      ) : (
          <div className="flex justify-center mt-8 mb-8">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 p-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90  border border-body"
            >
              <ArrowUp className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>
          </div>
      )}
    </>
  );
};
