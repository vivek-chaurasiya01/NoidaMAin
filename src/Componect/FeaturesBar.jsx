import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import Tilt from "react-parallax-tilt";

const features = [
  { title: "Tight Raw Spreads from", value: "0.0 pips" },
  { title: "Fee-Free Funding Options", value: "$0" },
  { title: "Max Leverage", value: "1:500" },
  { title: "Support", value: "24/7" },
];

const FeaturesBar = () => {
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

    const cards = sectionRef.current?.querySelectorAll(".feature-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-black py-8">
      <div className="px-4 lg:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, i) => (
            <Tilt
              key={i}
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              glareEnable={true}
              glareMaxOpacity={0.18}
              glareColor="#ffffff"
              className="feature-card"
            >
              <div
                className={`
                  group relative overflow-hidden cursor-pointer
                  rounded-2xl bg-[#d2aa73] text-white text-center
                  py-7 px-5 min-h-[140px]
                  border border-black/20
                  shadow-xl transition-all duration-700
                  hover:scale-105 hover:shadow-2xl
                  opacity-100 translate-y-0
                `}
              >
                {/* SOFT HOVER OVERLAY */}
                <div
                  className="
                    absolute inset-0
                    bg-gradient-to-br from-black/20 to-black/40
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-500
                  "
                />

                {/* CONTENT */}
                <div className="relative z-10">
                  <p className="text-lg font-medium tracking-wide font-bold">
                    {item.title}
                  </p>
                  <h3 className="text-2xl font-bold mt-1">{item.value}</h3>
                </div>

                {/* ARROW */}

              </div>
            </Tilt>
          ))}
        </div>
      </div>


    </section>
  );
};

export default FeaturesBar;
