import { useState, useRef, useEffect } from "react";

const ForexSteps = () => {
  const steps = [
    {
      title: "Register",
      desc: "Register the trading account with your information.",
      icon: "http://nebulafinserv.com/assets/img/process-icons/register.png",
    },
    {
      title: "Fund",
      desc: "Fund your trading with the payment method of your choice.",
      icon: "http://nebulafinserv.com/assets/img/process-icons/funds.png",
    },
    {
      title: "Trade",
      desc: "Submit the required KYC and you are ready to trade !",
      icon: "http://nebulafinserv.com/assets/img/process-icons/trade.png",
    },
  ];

  const cardRefs = useRef([]);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false); // for reveal on scroll

  // Intersection Observer for reveal on scroll
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // stop observing after reveal
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Tilt handlers
  const handleMouseMove = (e, index) => {
    const card = cardRefs.current[index];
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setHoveredIndex(index);
    setTilt({ x: (y / rect.height) * 15, y: -(x / rect.width) * 15 });
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <section ref={sectionRef} className="w-full bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">

        {/* TOP BADGE */}
        <span className="inline-block bg-[#d2aa73] text-white text-xs font-semibold px-4 py-1 rounded-full mb-4 tracking-widest">
          FOREX TRADING
        </span>

        {/* HEADING */}
        <h2 className="text-4xl font-bold text-[#0f172a]">
          Start Forex Trading <span className="text-[#d2aa73]">IN MINUTES</span>
        </h2>

        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Start Forex Trading with Us. It’s Easy, and takes only a few minutes!
        </p>

        {/* STEPS */}
        <div className="relative mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* DOTTED CURVE LINE */}
          <div className="hidden md:block absolute top-[-40px] left-1/2 -translate-x-1/2 w-[70%] h-32 border-t-2 border-dashed border-[#d2aa73] rounded-t-full"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              onMouseMove={(e) => handleMouseMove(e, index)}
              onMouseLeave={handleMouseLeave}
              className={`relative bg-[#b9935a] text-white rounded-xl px-8 py-14 shadow-lg transition-transform duration-500`}
              style={{
                // Tilt on hover
                transform:
                  hoveredIndex === index
                    ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(1.05)`
                    : "rotateX(0deg) rotateY(0deg) scale(1)",
                // Fade-in reveal
                opacity: visible ? 1 : 0,
                translate: visible ? "0px, 0px" : "0px, 20px",
                transition: "transform 0.5s ease, opacity 0.7s ease",
                transitionDelay: `${index * 150}ms`,
              }}
            >
              {/* IMAGE INSTEAD OF ICON */}
              <div className="mb-6 flex justify-center transition-transform duration-300">
                <img
                  src={step.icon}
                  alt={step.title}
                  className="w-20 h-20 object-contain"
                />
              </div>

              {/* TITLE */}
              <h3 className="text-3xl font-bold mb-4">{step.title}</h3>

              {/* DESC */}
              <p className="text-xl font-semibold leading-relaxed opacity-90">
                {step.desc}
              </p>

              {/* BOTTOM SHADOW LINE */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-[#0f172a] rounded-b-xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForexSteps;
