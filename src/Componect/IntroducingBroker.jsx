import { useScrollAnimation } from "../hooks/useScrollAnimation";
import Tilt from "react-parallax-tilt";

const IntroducingBroker = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);

  return (
    <section ref={ref} className="w-full bg-[#f7fafc] py-20 md:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* LEFT IMAGE BLOCK WITH CARD ANIMATION */}
          <div
            className="flex justify-center lg:justify-start transition-all duration-700"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-50px)",
            }}
          >
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              glareEnable={true}
              glareMaxOpacity={0.18}
              glareColor="#ffffff"
              className="w-full max-w-xl"
            >
              <div
                className="
                  
                "
              >
                <img
                  src="/commision.jpg"
                  alt="Introducing Broker"
                  className="w-full h-full object-contain"
                />
              </div>
            </Tilt>
          </div>

          {/* RIGHT CONTENT */}
          <div
            className="flex flex-col justify-center text-left transition-all duration-700"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(50px)",
              transitionDelay: "200ms",
            }}
          >
            {/* HEADING */}
            <h2 className="text-3xl lg:text-[38px] font-bold text-gray-700 leading-snug">
              Increase Your Revenue Potential <br />
              Become An Introducing Broker With{" "}
              <span className="text-[#d2aa73]">
                Nebula Financial Services Ltd
              </span>
            </h2>

            {/* GOLD LINE */}
            <div className="max-w-130 h-[3px] bg-[#d2aa73] my-6"></div>

            {/* SUB TEXT */}
            <p className="text-gray-600 text-2xl italic leading-relaxed max-w-xl">
              Customised Rebate Scheme | Marketing Tools | Dedicated IB
              Dashboard
            </p>

            {/* GOLD LINE */}
            <div className="max-w-130 h-[3px] bg-[#d2aa73] my-6"></div>

            {/* HIGHLIGHT TEXT */}
            <p className="text-[#d2aa73] text-xl font-semibold max-w-xl">
              Earn Maximum IB Commission With Nebula Financial Services Ltd*
            </p>

            {/* BUTTON */}
            <div className="mt-8">
              <button
                className="
                  inline-flex items-center gap-2
                  bg-[#c49a5c] hover:bg-[#d2aa73]
                  text-white px-7 py-3
                  rounded-md font-semibold
                  transition-all duration-300
                  hover:scale-105 hover:shadow-lg
                "
              >
                👥 Become An IB
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroducingBroker;
