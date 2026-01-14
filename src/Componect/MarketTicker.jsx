const marketData = [
  { name: "US 100", price: "25,700.5", change: "-33.30 (-0.13%)", color: "text-red-500", badge: "bg-sky-500" },
  { name: "EUR/USD", price: "1.16496", change: "+0.00 (+0.07%)", color: "text-green-500", badge: "bg-blue-500" },
  { name: "Bitcoin", price: "95,085", change: "-281.00 (-0.29%)", color: "text-red-500", badge: "bg-orange-500" },
  { name: "Ethereum", price: "3,335.7", change: "+12.40 (+0.37%)", color: "text-green-500", badge: "bg-indigo-500" },
  { name: "S&P 500", price: "6,950.7", change: "-9.40 (-0.14%)", color: "text-red-500", badge: "bg-red-500" },
  { name: "GBP/USD", price: "1.2845", change: "+0.15 (+1.18%)", color: "text-green-500", badge: "bg-purple-500" },
  { name: "USD/JPY", price: "149.85", change: "-0.45 (-0.30%)", color: "text-red-500", badge: "bg-pink-500" },
  { name: "Gold", price: "2,045.30", change: "+8.50 (+0.42%)", color: "text-green-500", badge: "bg-yellow-500" },
  { name: "Silver", price: "24.15", change: "-0.12 (-0.49%)", color: "text-red-500", badge: "bg-gray-400" },
  { name: "Crude Oil", price: "78.90", change: "+1.20 (+1.54%)", color: "text-green-500", badge: "bg-green-600" },
  { name: "Nasdaq", price: "18,450.2", change: "+45.80 (+0.25%)", color: "text-green-500", badge: "bg-cyan-500" },
  { name: "Dow Jones", price: "38,920.5", change: "-120.30 (-0.31%)", color: "text-red-500", badge: "bg-blue-600" },
  { name: "AUD/USD", price: "0.6542", change: "+0.08 (+1.24%)", color: "text-green-500", badge: "bg-teal-500" },
  { name: "USD/CAD", price: "1.3625", change: "-0.05 (-0.36%)", color: "text-red-500", badge: "bg-red-600" },
  { name: "NZD/USD", price: "0.6125", change: "+0.12 (+2.00%)", color: "text-green-500", badge: "bg-lime-500" },
  { name: "USD/CHF", price: "0.8845", change: "-0.03 (-0.34%)", color: "text-red-500", badge: "bg-slate-500" },
  { name: "Litecoin", price: "72.45", change: "+2.15 (+3.06%)", color: "text-green-500", badge: "bg-blue-400" },
  { name: "Ripple", price: "0.5234", change: "-0.02 (-3.68%)", color: "text-red-500", badge: "bg-indigo-400" },
  { name: "Cardano", price: "0.4567", change: "+0.03 (+7.03%)", color: "text-green-500", badge: "bg-purple-400" },
  { name: "Polkadot", price: "6.78", change: "+0.45 (+7.11%)", color: "text-green-500", badge: "bg-pink-400" },
  { name: "FTSE 100", price: "7,845.2", change: "-15.60 (-0.20%)", color: "text-red-500", badge: "bg-red-400" },
  { name: "DAX", price: "17,250.8", change: "+32.40 (+0.19%)", color: "text-green-500", badge: "bg-yellow-600" },
  { name: "CAC 40", price: "7,620.5", change: "+18.90 (+0.25%)", color: "text-green-500", badge: "bg-blue-700" },
  { name: "Nikkei 225", price: "33,450.7", change: "-85.30 (-0.25%)", color: "text-red-500", badge: "bg-rose-500" },
  { name: "Hang Seng", price: "16,780.3", change: "+120.50 (+0.72%)", color: "text-green-500", badge: "bg-orange-600" },
  { name: "Platinum", price: "925.40", change: "+5.20 (+0.56%)", color: "text-green-500", badge: "bg-gray-500" },
  { name: "Palladium", price: "1,045.80", change: "-12.30 (-1.16%)", color: "text-red-500", badge: "bg-slate-600" },
  { name: "Natural Gas", price: "2.85", change: "+0.08 (+2.89%)", color: "text-green-500", badge: "bg-green-700" },
  { name: "Copper", price: "3.78", change: "-0.04 (-1.05%)", color: "text-red-500", badge: "bg-amber-600" },
  { name: "Wheat", price: "6.45", change: "+0.15 (+2.38%)", color: "text-green-500", badge: "bg-yellow-700" },
];

const MarketTicker = () => {
  return (
    <div className="w-full overflow-hidden bg-black border-y border-[#d2aa73]/30">
      <div className="flex animate-scroll">
        {[...marketData, ...marketData].map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 px-6 py-3 border-r border-[#d2aa73]/20 text-white min-w-fit"
          >
            <span
              className={`w-8 h-8 flex items-center justify-center rounded-full text-xs font-bold ${item.badge} text-white`}
            >
              {item.name[0]}
            </span>

            <div>
              <p className="text-sm font-semibold">{item.name}</p>
              <p className="text-sm font-medium">{item.price}</p>
              <p className={`text-xs font-medium ${item.color}`}>{item.change}</p>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default MarketTicker;
