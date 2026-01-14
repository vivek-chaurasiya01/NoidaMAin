import { ChevronRight, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-gradient-to-b from-black to-[#0b0b0b] text-white relative">

      {/* DISCLAIMER SECTION */}
      <div className="w-full px-6 lg:px-20 pt-12 pb-10 text-xl text-gray-300 leading-relaxed">
        <p className="text-[#d2aa73] font-semibold mb-2">Disclaimers:</p>
        <p>
          Nebula Financial Services Ltd does not provide or facilitate business
          services or transactions to residents of the USA, UAE, North Korea,
          IRAN, MYANMAR or any other country that may be subject to any
          international sanctions.
        </p>

        <p className="text-[#d2aa73] font-semibold mt-6 mb-2">Risk Warning:</p>
        <p>
          The financial products offered via this website include digitals,
          contracts for difference (CFDs), and other complex derivatives and
          financial products. Trading options may not be suitable for everyone.
          Trading CFDs carries a high level of risk since leverage can work both
          to your advantage and disadvantage.
        </p>

        <p className="mt-4">
          Forex and CFDs are complex instruments and come with a high risk of
          losing money rapidly due to leverage. 70% of retail investor accounts
          lose money when forex and CFDs trading with this provider. You should
          consider whether you can afford to take the high risk of losing your
          money.
        </p>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-gray-700/50"></div>

      {/* LINKS SECTION */}
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-sm">

          {/* ADDRESS */}
          <div>
            <h4 className="text-[#d2aa73] text-2xl  font-semibold mb-4">Address</h4>
            <p className="font-semibold text-xl  mb-1">Registered Address:</p>
            <p className="text-gray-300 text-xl  leading-relaxed">
              Ground Floor, The Sotheby Building, Rodney Village, Rodney Bay,
              Gros-Islet, Saint Lucia.
            </p>
            <p className="mt-2 text-gray-300">
              Registration Number: 2025-00811
            </p>

            <p className="font-semibold mt-4 mb-1">Physical Address:</p>
            <p className="text-gray-300">
              2 David Gamrekeli St., Office No. 2, 0160 Tbilisi, Georgia.
            </p>
          </div>

          {/* USEFUL LINKS */}
          <div>
            <h4 className="text-[#d2aa73] text-2xl  font-semibold mb-4">Useful Links</h4>
            <ul className="space-y-3 text-xl ">
              {[
                { name: "About us", link: "/about" },
                { name: "Trading", link: "/trading" },
                { name: "Channel Partner", link: "/partner" },
                { name: "Academy", link: "/academy" },
                { name: "Tools", link: "/tools" }
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href={item.link}
                    className="flex items-center gap-2 hover:text-[#d2aa73] cursor-pointer transition"
                  >
                    <ChevronRight size={14} /> {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* INSTRUMENTS */}
          <div>
            <h4 className="text-[#d2aa73]  text-2xl  font-semibold mb-4">
              Instruments List
            </h4>
            <ul className="space-y-3 text-xl ">
              {[
                { name: "Forex", link: "/instruments/forex" },
                { name: "Metals", link: "/instruments/metals" },
                { name: "Oil Commodities", link: "/instruments/oil" },
                { name: "Spot Index", link: "/instruments/index" },
                { name: "Cryptocurrency", link: "/instruments/crypto" }
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href={item.link}
                    className="flex items-center gap-2 hover:text-[#d2aa73] cursor-pointer transition"
                  >
                    <ChevronRight size={14} /> {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* OTHER LINKS */}
          <div>
            <h4 className="text-[#d2aa73] text-2xl  font-semibold mb-4">Other Links</h4>
            <ul className="space-y-3 text-xl ">
              {[
                { name: "Economic Calendar", link: "/calendar" },
                { name: "Market News", link: "/news" },
                { name: "Terms of Use", link: "/terms" },
                { name: "Terms & Conditions", link: "/conditions" },
                { name: "Privacy Policy", link: "/privacy" }
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href={item.link}
                    className="flex items-center gap-2 hover:text-[#d2aa73] cursor-pointer transition"
                  >
                    <ChevronRight size={14} /> {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-700/50 py-4 text-center text-lg text-gray-400">
        © Copyright Nebula Financial Services Ltd. All Rights Reserved
      </div>

      {/* SCROLL TO TOP BUTTON */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-gradient-to-r from-[#d4a25a] to-[#b8873f] p-4 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 hover:shadow-[#d4a25a]/50 z-50"
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </button>
    </footer>
  );
};

export default Footer;
