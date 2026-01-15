import { useEffect, useRef, useState } from "react";
import Tilt from "react-parallax-tilt";

const whyUsData = [
  {
    value: "0.1 Pips",
    title: "Low Spreads From",
    icon: "http://nebulafinserv.com/assets/img/graph.png",
  },
  {
    value: "1:500",
    title: "Leverage Up to",
    icon: "http://nebulafinserv.com/assets/img/leverage.png",
  },
  {
    value: "70+",
    title: "Instruments",
    icon: "http://nebulafinserv.com/assets/img/invention.png",
  },
  {
    value: "True",
    title: "ECN / STP",
    icon: "http://nebulafinserv.com/assets/img/deposit.png",
  },
  {
    value: "Easy",
    title: "Funding",
    icon: "http://nebulafinserv.com/assets/img/funding.png",
  },
];

const WhyUs = () => {
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

    const cards = sectionRef.current?.querySelectorAll(".whyus-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full py-20 overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-[url('/graph-light.png')] bg-cover bg-center opacity-30"></div>
      <div className="absolute inset-0 bg-white/90"></div>

      {/* CONTENT */}
      <div className="relative w-full px-6 lg:px-16">
        {/* BADGE */}
        <div className="flex justify-center mb-4">
          <span className="bg-[#d2aa73] text-white px-15 py-2 rounded-full text-sm font-semibold tracking-wide">
           <p className="text-lg"> WHY US</p>
          </span>
        </div>

        {/* HEADING */}
        <h2 className="text-center text-4xl font-bold text-gray-900">
          Forex Trading with{" "}
          <span className="text-[#d2aa73]">Nebula Financial Services Ltd</span>
        </h2>

        <p className="text-center  max-w-4xl mx-auto mt-3 text-gray-700 text-md font-semibold">
          Nebula Financial Services Ltd offers state of the art technology with
          tight spreads & superior trading conditions.
        </p>

        {/* CARDS */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {whyUsData.map((item, index) => (
            <Tilt
              key={index}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              glareEnable={true}
              glareMaxOpacity={0.18}
              glareColor="#ffffff"
              className="whyus-card"
            >
              <div
                className="bg-[#c49a5c] text-white rounded-2xl py-10 px-4 text-center min-h-[280px] shadow-xl transition-all duration-700 hover:scale-105 hover:shadow-2xl opacity-100 translate-y-0"
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-24 h-24 mx-auto mb-6 object-contain"
                />

                <h3 className="text-3xl font-bold">{item.value}</h3>
                <p className="mt-3 text-lg opacity-90">{item.title}</p>

                {/* BOTTOM ACCENT */}
              
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
