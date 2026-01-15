import { useEffect, useRef, useState } from "react";
import Tilt from "react-parallax-tilt";

const OpportunitySection = () => {
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
      { threshold: 0.05, rootMargin: '100px' }
    );

    const cards = sectionRef.current?.querySelectorAll(".op-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const cards = [
    {
      title: "OPPORTUNITIES",
      desc: "Nebula Financial Services Ltd Gives You An Opportunity To Take Part In Global Trading And Walk On The Path Of Organisational Growth And Progress.",
      img: "http://nebulafinserv.com/assets/img/opportunity.png",
      bg: "bg-[#b9935a]",
      text: "text-white",
    },
    {
      title: "PLATFORM",
      desc: "Now You Can Get Superior Control Over Your Trading With Advanced Features And Trading Platform That Fulfils The Requirement Of Growing Currency Traders.",
      img: "http://nebulafinserv.com/assets/img/platform.png",
      bg: "bg-black",
      text: "text-[#d2aa73]",
    },
    {
      title: "COMPETITIVE",
      desc: "We Can Help You To Continue The Trade With The Global Currency Market, CFDs And Share So That You Can Make The Most From The Competitive Spreads.",
      img: "http://nebulafinserv.com/assets/img/opportunity.png",
      bg: "bg-black",
      text: "text-[#d2aa73]",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="w-full bg-white pt-6 pb-12 px-0 sm:px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {cards.map((item, index) => (
            <Tilt
              key={index}
              tiltMaxAngleX={12}
              tiltMaxAngleY={12}
              glareEnable
              glareMaxOpacity={0.2}
              glareColor="#e6d7c3"
              className="op-card"
            >
              <div
                className={`
                  ${item.bg} ${item.text}
                  p-6 sm:p-10 lg:p-14
                  min-h-[260px] sm:min-h-[320px]
                  flex flex-col items-center justify-center text-center
                  rounded-2xl border-2 border-[#d2b89f]
                  shadow-lg
                  transition-all duration-700
                  hover:scale-105 hover:shadow-2xl
                  opacity-100 translate-y-0
                `}
              >
                {/* ICON */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-24 h-24 sm:w-36 sm:h-36 mb-4 sm:mb-6 object-contain"
                />

                {/* TITLE */}
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-widest mb-3 sm:mb-4">
                  {item.title}
                </h3>

                {/* DESC */}
                <p className="text-sm sm:text-base lg:text-xl leading-relaxed max-w-md opacity-90">
                  {item.desc}
                </p>

                {/* ACCENT LINE */}
                <div className="mt-6 h-1 w-16 bg-[#d2aa73] rounded-full"></div>
              </div>
            </Tilt>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpportunitySection;
