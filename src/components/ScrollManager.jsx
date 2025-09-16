import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollManager = () => {
  const location = useLocation();

  useLayoutEffect(() => {
    const key = `scroll-position:${location.pathname}`;

    // restore synchronously before paint
    const savedY = sessionStorage.getItem(key);
    if (savedY !== null) {
      window.scrollTo(0, parseInt(savedY, 10));
    }

    // save on scroll
    const saveScroll = () => {
      sessionStorage.setItem(key, window.scrollY.toString());
    };
    window.addEventListener("scroll", saveScroll);

    return () => {
      saveScroll(); // save one last time
      window.removeEventListener("scroll", saveScroll);
    };
  }, [location.pathname]);

  return null;
};
