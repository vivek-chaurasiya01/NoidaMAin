import { useEffect, useRef, useState } from "react";

// Image data
const whyUsData = [
  { value: "0.1 Pips", title: "Low Spreads From", icon: "http://nebulafinserv.com/assets/img/graph.png" },
  { value: "500", title: "Leverage Up to 1", icon: "http://nebulafinserv.com/assets/img/leverage.png" },
  { value: "70+", title: "Instruments", icon: "http://nebulafinserv.com/assets/img/invention.png" },
  { value: "True", title: "ECN/STP", icon: "http://nebulafinserv.com/assets/img/deposit.png" },
  { value: "Easy", title: "Funding", icon: "http://nebulafinserv.com/assets/img/funding.png" },
];

const WhyUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Tilt effect
  const handleMouseMove = (e, index) => {
    const card = cardRefs.current[index];
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left; // cursor X relative to card
    const y = e.clientY - rect.top;  // cursor Y relative to card
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10; // Max 10deg tilt
    const rotateY = ((centerX - x) / centerX) * 10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  };

  const handleMouseLeave = (index) => {
    const card = cardRefs.current[index];
    card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
  };

  return (
    <section ref={sectionRef} className="relative w-full py-16 overflow-hidden">
      {/* GRAPH BACKGROUND */}
      <div className="absolute inset-0 bg-[url('/graph-light.png')] bg-cover bg-center opacity-30"></div>

      {/* WHITE TRANSPARENT OVERLAY */}
      <div className="absolute inset-0 bg-white/90"></div>

      {/* CONTENT */}
      <div className="relative w-full px-6 lg:px-16">
        {/* WHY US BADGE */}
        <div className="flex justify-center mb-4">
          <span className="bg-[#d2aa73] text-white px-6 py-1 rounded-full text-sm font-semibold tracking-wide">
            WHY US
          </span>
        </div>

        {/* HEADING */}
        <h2 className="text-center text-2xl md:text-3xl font-bold text-gray-900">
          Forex Trading with{" "}
          <span className="text-[#d2aa73]">Nebula Financial Services Ltd</span>
        </h2>

        {/* SUBTEXT */}
        <p className="text-center max-w-4xl mx-auto mt-3 text-gray-700 text-sm md:text-base">
          Nebula Financial Services Ltd offers state of art technology with
          tight spreads & superior trading conditions.
        </p>

        {/* CARDS */}
        <div className="mt-12 grid grid-cols-1 animate-fadeIn sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {whyUsData.map((item, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={() => handleMouseLeave(index)}
              className={`
                bg-[#c49a5c] text-white rounded-xl
                py-8 px-4 text-center
                transition-transform duration-300
                cursor-pointer
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
              `}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <img
                src={item.icon}
                alt={item.title}
                className="w-16 h-16 mx-auto mb-4 object-contain"
              />
              <h3 className="text-2xl font-bold">{item.value}</h3>
              <p className="mt-2 text-sm opacity-90">{item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
