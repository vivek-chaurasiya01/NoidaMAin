import React, { useEffect, useRef, useState } from "react";
import Tilt from "react-parallax-tilt";
import PageBanner from "../Componect/PageBanner";

import OpportunitySection from "../Componect/AboutCard";

const About = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [visibleText, setVisibleText] = useState(false);
  const cardsRef = useRef([]);
  const textRef = useRef(null);

  // Intersection Observer for scroll reveal
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.dataset.index;
            const type = entry.target.dataset.type;

            if (type === "card") {
              setVisibleCards((prev) => [...prev, parseInt(index)]);
            } else if (type === "text") {
              setVisibleText(true);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((ref) => ref && observer.observe(ref));
    if (textRef.current) observer.observe(textRef.current);

    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      img: "http://nebulafinserv.com/assets/img/about.png",
      title: "Who We Are",
      desc: "Nebula Financial Services Ltd has globally acquired brand recognition by providing a world-class trading environment to the investors without any divergence of interest. We are one of the world’s most trusted online forex trading brokers.",
    },
    {
      img: "http://nebulafinserv.com/assets/img/mission.png",
      title: "Our Mission",
      desc: "We try to help the investors with long-term business conditions, client support and education to create a good customer relationship and strong presence around the globe.",
    },
    {
      img: "http://nebulafinserv.com/assets/img/vission.png",
      title: "Our Vision",
      desc: "We aim to build a strong relationship with our clients. We value the preferences of our clients and try to offer unique trading solutions for their businesses.",
    },
  ];

  return (
    <div className="font-sans text-gray-800 mt-[1px]">
      {/* Page Banner */}
      <PageBanner
        title="About Us"
        breadcrumb="About Us"
        bgImage="https://images.unsplash.com/photo-1639825752750-5061ded5503b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHJhZGluZyUyMHdoaXRlJTIwY2hhcnR8ZW58MHx8MHx8fDA%3D"
      />

      {/* Section 1: Intro Cards */}
      <section className="w-full py-20 bg-[#f5f0eb] text-center relative overflow-hidden">
        <div className="mx-auto mb-6 w-40 bg-[#e6d7c3] rounded-3xl py-2 px-4 animate-fadeIn transform transition hover:scale-105 hover:shadow-lg">
          <h5 className="text-[#a1785b] font-medium text-lg">ABOUT US</h5>
        </div>

        <h2 className="text-4xl md:text-5xl font-bold text-[#a1785b] mb-6 animate-fadeIn transform transition hover:scale-105 hover:text-[#8b5c3c]">
          Forex Trading with Nebula Financial Services Ltd
        </h2>

        <p className="max-w-4xl mx-auto mb-12 text-xl font-semibold text-[#0a0a0a] animate-fadeIn animate-delay-200">
          With years of experience in forex trading, our company has built a
          strong reputation for trust and reliability, with a commitment to
          ensuring the best trading experience for our clients.
        </p>

        {/* Cards Section */}
        <div className="flex flex-col md:flex-row md:justify-center gap-2 px-2 w-full max-w-full mx-auto">
          {cards.map((card, index) => (
            <Tilt
              key={index}
              glareEnable={true}
              glareMaxOpacity={0.2}
              glareColor="#e6d7c3"
              tiltMaxAngleX={12}
              tiltMaxAngleY={12}
              className="w-full md:w-5/12"
            >
              <div
                ref={(el) => (cardsRef.current[index] = el)}
                data-index={index}
                data-type="card"
                className={`group bg-white rounded-xl border-2 border-[#d2b89f] overflow-hidden transform transition-all duration-700 hover:scale-105 hover:shadow-2xl min-h-[28rem] md:min-h-[36rem] ${
                  visibleCards.includes(index)
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <img
                  src={card.img}
                  alt={card.title}
                  className="mx-auto mt-6 h-40 w-40 object-cover rounded-full transition-transform duration-300 group-hover:scale-95"
                />
                <div className="p-8 text-center transition-all duration-300 group-hover:-translate-y-1">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-[#a1785b] group-hover:text-[#0a0a0a] transition-colors duration-300">
                    {card.title}
                  </h3>
                  <p className="text-[#0a0a0a] text-xl font-semibold">
                    {card.desc}
                  </p>
                </div>
              </div>
            </Tilt>
          ))}
        </div>
      </section>

      {/* Section 2: Fixed Background with Text & Image */}

      <section className="relative w-full py-14 sm:py-20 px-4 sm:px-6 overflow-hidden">
        {/* FIXED BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 bg-[url('https://media.istockphoto.com/id/1465618017/photo/businessmen-investor-think-before-buying-stock-market-investment-using-smartphone-to-analyze.jpg?s=612x612&w=0&k=20&c=YNEkfoME1jbz6FUJImxCQtaGZZntrf7u-Byxmgk4pOY=')] 
    bg-cover bg-center bg-fixed"
        ></div>

        {/* BLACK TRANSPARENT OVERLAY */}
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
          {/* LEFT CONTENT */}
          <div
            ref={textRef}
            data-type="text"
            className={`w-full md:w-1/2 
        backdrop-blur-md bg-white/10 
        rounded-2xl p-6 sm:p-8 lg:p-10
        transition-all duration-700
        ${
          visibleText
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-10"
        }`}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-[#d2aa73] mb-4">
              ABOUT NEBULA FINANCIAL SERVICES LTD
            </h2>

            <div className="h-1 w-24 bg-[#d2aa73] mb-6"></div>

            <p className="text-sm sm:text-base lg:text-xl font-medium italic leading-relaxed text-[#f3e7d8]">
              Nebula Financial Services Ltd has globally acquired brand
              recognition by providing a world-class trading environment to
              investors without any divergence of interest.
            </p>

            <p className="text-sm sm:text-base lg:text-xl font-medium italic leading-relaxed text-[#f3e7d8] mt-4">
              Nebula Financial Services Ltd represents the future of Forex
              trading with unique business solutions, delivering superior
              control and advanced trading experiences.
            </p>
          </div>

          {/* RIGHT IMAGE – CARD STYLE ANIMATION */}
          <div className="w-full md:w-1/2 flex justify-center">
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.2}
              glareColor="#e6d7c3"
              tiltMaxAngleX={12}
              tiltMaxAngleY={12}
              className="w-full"
            >
              <div
                className="
            group bg-white rounded-2xl overflow-hidden
            border-2 border-[#d2b89f]
            transform transition-all duration-700
            hover:scale-105 hover:shadow-2xl
          "
              >
                <img
                  src="http://nebulafinserv.com/assets/img/abtinnerbgsec.jpg"
                  alt="Nebula Team"
                  className="w-full h-[240px] sm:h-[320px] md:h-[420px] object-cover"
                />
              </div>
            </Tilt>
          </div>
        </div>
      </section>

      {/* Section 3: Core Values */}
      <section className="py-20 px-5 bg-gray-50 text-center">
        <h5 className="text-xl font-semibold text-black mb-2 uppercase tracking-wider">
          Our Core Value
        </h5>
        <h2 className="text-4xl font-bold text-[#a1785b] mb-4">
          Make Us Professional
        </h2>
        <p className="text-gray-600 max-w-4xl mx-auto mb-3 text-lg font-bold">
          With years of experience in forex trading, our company has built a
          strong reputation for trust and reliability, with a commitment to
          ensuring the best trading experience for our clients.
        </p>

        {/* Cards Component */}
        <OpportunitySection />
      </section>
    </div>
  );
};

export default About;
