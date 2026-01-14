import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    title: "Start forex trading in minutes With",
    highlight: "Nebula Financial Services Ltd",
    desc: "Unleash your potential in the dynamic Forex Market with a Premier Forex Broker",
    btn: "GET STARTED",
    image: "/baneq2.png",
  },
  {
    title: "Trade Global Markets With",
    highlight: "Advanced Trading Tools",
    desc: "Access Forex, Metals, Indices & Crypto with cutting-edge platforms",
    btn: "START TRADING",
    image: "/trade2min.png",
  },
];

const HeroSlider = () => {
  const [index, setIndex] = useState(0);

  // Optional: Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative  w-full h-screen overflow-hidden bg-gradient-to-b from-black to-[#0b0b0b]">

      {/* BACKGROUND GRAPH EFFECT */}
      <div className="absolute inset-0 bg-[url('/graph-bg.png')] bg-cover bg-center opacity-20"></div>

      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out
            ${i === index ? "opacity-100 translate-x-0" : i < index ? "opacity-0 -translate-x-full" : "opacity-0 translate-x-full"}`}
        >
          <div className="relative z-10 w-full h-full flex flex-col-reverse lg:flex-row items-center justify-center px-4 sm:px-6 py-8 lg:py-0">

            {/* TEXT CONTENT */}
            <div className="w-full lg:w-1/2 text-center lg:text-left text-white mt-6 lg:mt-0">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-snug">
                {slide.title}{" "}
                <span className="text-[#d2aa73]">{slide.highlight}</span>
              </h1>

              <p className="mt-4 sm:mt-5 text-gray-300 text-base sm:text-lg">
                {slide.desc}
              </p>

              <button className="mt-6 sm:mt-8 bg-[#d2aa73] text-black px-6 py-2 sm:px-8 sm:py-3 font-semibold rounded hover:opacity-90 transition">
                {slide.btn}
              </button>
            </div>

            {/* IMAGE */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mb-6 lg:mb-0">
              <img
                src={slide.image}
                alt="slider"
                className="max-h-[250px] sm:max-h-[350px] lg:max-h-[500px] object-contain animate-fadeIn"
              />
            </div>
          </div>
        </div>
      ))}

      {/* LEFT ARROW - Hidden on mobile */}
      <button
        onClick={() => setIndex(index === 0 ? slides.length - 1 : index - 1)}
        className="hidden lg:flex absolute left-6 top-1/2 -translate-y-1/2 bg-[#d2aa73] text-white p-3 rounded hover:bg-[#d4af37] hover:text-black transition-all duration-300 shadow-lg hover:scale-110"
      >
        <ChevronLeft size={20} strokeWidth={3} />
      </button>

      {/* RIGHT ARROW - Hidden on mobile */}
      <button
        onClick={() => setIndex((index + 1) % slides.length)}
        className="hidden lg:flex absolute right-6 top-1/2 -translate-y-1/2 bg-[#d2aa73] text-white p-3 rounded hover:bg-[#d4af37] hover:text-black transition-all duration-300 shadow-lg hover:scale-110"
      >
        <ChevronRight size={20} strokeWidth={3} />
      </button>

      {/* DOTS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, i) => (
          <span
            key={i}
            onClick={() => setIndex(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition
              ${i === index ? "bg-[#d2aa73]" : "bg-gray-500"}`}
          ></span>
        ))}
      </div>
    </section>
  );
};

export default HeroSlider;
