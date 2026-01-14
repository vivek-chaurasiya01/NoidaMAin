import { ArrowRight } from "lucide-react";

const features = [
  { title: "Tight Raw Spreads from", value: "0.0 pips" },
  { title: "Fee-Free Funding Options", value: "$0" },
  { title: "Max Leverage", value: "1:500" },
  { title: "Support", value: "24/7" },
];

const FeaturesBar = () => {
  return (
    <section className="w-full bg-black py-4">
      <div className="px-4 lg:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((item, i) => (
            <div
              key={i}
              className="
                relative overflow-hidden group cursor-pointer
                bg-[#d2aa73] text-white text-center
                py-6 px-4 border border-black
                transition-all duration-300
                hover:-translate-y-2
              "
            >
              {/* TEXT */}
              <p className="text-sm font-medium transition-transform duration-300 group-hover:-translate-x-2">
                {item.title}
              </p>
              <h3 className="text-2xl font-bold mt-1 transition-transform duration-300 group-hover:-translate-x-2">
                {item.value}
              </h3>

              {/* 👉 ARROW SIDE GLOW (PEECHE DIKHE) */}
              <span
                className="
                  absolute top-0 right-0 h-full w-16
                  bg-gradient-to-l from-black/25 to-transparent
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-300
                "
              />

              {/* 👉 ARROW */}
              <div
                className="
                  absolute right-4 top-1/2 -translate-y-1/2
                  opacity-0
                  group-hover:opacity-100
                  group-hover:animate-arrow-move
                "
              >
                <ArrowRight size={24} strokeWidth={3} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔥 CUSTOM ANIMATION */}
      <style>{`
        @keyframes arrow-move {
          0% { transform: translateY(-50%) translateX(0); }
          50% { transform: translateY(-50%) translateX(6px); }
          100% { transform: translateY(-50%) translateX(0); }
        }

        .animate-arrow-move {
          animation: arrow-move 1s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default FeaturesBar;
