import { useState, useRef, useEffect } from "react";
import Tilt from "react-parallax-tilt";

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
      desc: "Submit the required KYC and you are ready to trade!",
      icon: "http://nebulafinserv.com/assets/img/process-icons/trade.png",
    },
  ];

  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) =>
              prev.includes(index) ? prev : [...prev, index]
            );
          }
        });
      },
      { threshold: 0.05, rootMargin: '50px' }
    );

    const cards = sectionRef.current?.querySelectorAll(".step-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-white py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* BADGE */}
        <span className="inline-block bg-[#d2aa73] text-white text-xs font-semibold px-4 py-1 rounded-full mb-4 tracking-widest animate-fadeIn">
          FOREX TRADING
        </span>

        {/* HEADING */}
        <h2 className="text-4xl font-bold text-[#0f172a] animate-fadeIn">
          Start Forex Trading <span className="text-[#d2aa73]">IN MINUTES</span>
        </h2>

        <p className="mt-3 text-md font-semibold text-gray-600 max-w-2xl mx-auto animate-fadeIn animate-delay-200">
          Start Forex Trading with Us. It's Easy, and takes only a few minutes!
        </p>

        {/* STEPS */}
        <div className="relative mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="hidden md:block absolute top-[-40px] left-1/2 -translate-x-1/2 w-[70%] h-32 border-t-2 border-dashed border-[#d2aa73] rounded-t-full"></div>

          {steps.map((step, index) => (
            <Tilt
              key={index}
              tiltMaxAngleX={12}
              tiltMaxAngleY={12}
              glareEnable={true}
              glareMaxOpacity={0.2}
              glareColor="#ffffff"
              className="step-card"
            >
              <div
                className="bg-[#b9935a] text-white rounded-2xl px-8 py-14 shadow-xl transition-all duration-700 hover:scale-105 hover:shadow-2xl opacity-100 translate-y-0"
              >
                {/* ICON */}
                <img
                  src={step.icon}
                  alt={step.title}
                  className="mx-auto mb-6 w-20 h-20 object-contain transition-transform duration-300 group-hover:scale-95"
                />

                {/* TITLE */}
                <h3 className="text-3xl font-bold mb-4">{step.title}</h3>

                {/* DESC */}
                <p className="text-xl font-semibold leading-relaxed opacity-90">
                  {step.desc}
                </p>

                {/* BOTTOM LINE */}
                
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ForexSteps;
