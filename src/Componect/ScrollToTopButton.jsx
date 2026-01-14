import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50
        w-12 h-12 sm:w-14 sm:h-14
        flex items-center justify-center
        rounded-full
        bg-gradient-to-br from-[#d2aa73] to-[#b8934f]
        text-white
        shadow-xl shadow-[#d2aa73]/40
        transition-all duration-500 ease-out
        hover:scale-110 hover:shadow-2xl hover:shadow-[#d2aa73]/60
        active:scale-95
        ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6 pointer-events-none"
        }
      `}
    >
      <ChevronUp
        size={26}
        strokeWidth={2.5}
        className="transition-transform duration-300 group-hover:-translate-y-0.5"
      />
    </button>
  );
};

export default ScrollToTopButton;
