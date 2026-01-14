const MarketSection = () => {
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
    <section className="relative w-full bg-gradient-to-br from-[#0a1f2e] via-[#0d4c63] to-[#0a2f3d] py-20 px-6 overflow-hidden">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#d4a25a] rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

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
            className="relative bg-white rounded-2xl overflow-hidden p-8 pt-16 group cursor-pointer shadow-xl transition-all duration-500 hover:scale-105"
          >
            {/* Black Overlay - Slides from Bottom to Top */}
            <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out"></div>

            {/* IMAGE INSTEAD OF ICON */}
            <div className="absolute top-1 mb-10 left-1/2 -translate-x-1/2 ">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#d4a25a] to-[#b8873f] flex items-center justify-center shadow-xl transition-all duration-500 overflow-hidden">
                <img src={item.icon} alt={item.title} className="w-12 h-12 object-contain" />
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center">
              <h3 className="text-2xl font-bold text-[#d4a25a] mb-4 pt-5 group-hover:text-white transition-colors duration-700">
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
