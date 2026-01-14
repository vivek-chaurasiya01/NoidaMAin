import { useScrollAnimation } from "../hooks/useScrollAnimation";

const MarketSection = () => {
  const [ref, isVisible] = useScrollAnimation(0.1);
  const markets = [
    {
      title: "FOREX",
      desc: "Trade 41+ forex pairs with deep liquidity and tight spreads.",
      icon: "http://nebulafinserv.com/assets/img/forex.png", // image URL
    },
    {
      title: "CFD",
      desc: "Nebula Financial Services Ltd has comprised numerous CFD instruments to enhance your trading experience.",
      icon: "http://nebulafinserv.com/assets/img/bar-chart.png",
    },
    {
      title: "COMMODITIES",
      desc: "TTrade Gold, Silver, Copper, Natural Gas, and Crude oil with ease ..",
      icon: "http://nebulafinserv.com/assets/img/gold-ingot.png",
    },
    {
      title: "CRYPTO",
      desc: "TTrade the most popular CFD's Cryptocurrency, bitcoin on our platform",
      icon: "http://nebulafinserv.com/assets/img/cryptocurrency.png",
    },
  ];

  return (
    <section ref={ref} className="relative w-full py-20 px-6 overflow-hidden">
      
      {/* FIXED BACKGROUND IMAGE */}
      <div 
        className="absolute inset-0 bg-[url('https://img.freepik.com/premium-vector/stylish-stock-market-forex-trading-charts-gray-color-financial-reports_122317-211.jpg?semt=ais_hybrid&w=740&q=80')] bg-cover bg-center bg-fixed"
        style={{ backgroundAttachment: 'fixed' }}
      ></div>
      
      {/* TRANSPARENT OVERLAY */}
<div className="absolute inset-0 bg-[#171f2c]/85"></div>



      {/* Heading */}
      <div className="relative text-center text-white mb-16">
        <h2 className="text-5xl font-bold tracking-tight">
          Range of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d4a25a] to-[#f4c77a]">MARKET</span>
        </h2>
        <p className="mt-3 text-xl font-bold text-white max-w-2xl mx-auto">
          Over 70+ trading instruments across forex, commodities, indices, cfd's.
        </p>
      </div>

      {/* Cards */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-16 max-w-8xl mx-auto">
        {markets.map((item, index) => (
          <div
            key={index}
            className="relative bg-white rounded-2xl overflow-hidden p-8 min-h-[450px] flex flex-col items-center justify-center group cursor-pointer shadow-xl transition-all duration-500 hover:scale-105"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(50px)',
              transitionDelay: `${index * 150}ms`
            }}
          >
            {/* BACKGROUND IMAGE INSIDE CARD */}
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-10"
              style={{ backgroundImage: `url(${item.icon})` }}
            ></div>

            {/* Black Overlay - Slides from Bottom to Top */}
            <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out"></div>

            {/* IMAGE ICON */}
            <div className="relative mb-6 z-10">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#d4a25a] to-[#b8873f] flex items-center justify-center shadow-xl">
                <img src={item.icon} alt={item.title} className="w-12 h-12 object-contain" />
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center flex flex-col items-center justify-center">
              <h3 className="text-2xl font-bold text-[#d4a25a] mb-4 group-hover:text-white transition-colors duration-700">
                {item.title}
              </h3>

              <p className="text-xl font-semibold text-gray-700 mb-6 leading-relaxed group-hover:text-gray-200 transition-colors duration-700">
                {item.desc}
              </p>

              <button className="bg-gradient-to-r from-[#d4a25a] to-[#b8873f] px-6 py-2.5 rounded-lg font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-[#d4a25a]/50">
                Instruments list
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MarketSection;
