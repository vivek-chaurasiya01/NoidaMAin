import PageBanner from "../Componect/PageBanner";
import { CheckCircle, TrendingUp, Shield, Headphones, Zap, Globe } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Services = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const [visibleFeatures, setVisibleFeatures] = useState([]);
  const cardsRef = useRef([]);
  const featuresRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.dataset.index;
            const type = entry.target.dataset.type;
            
            if (type === 'card') {
              setVisibleCards((prev) => [...prev, parseInt(index)]);
            } else if (type === 'feature') {
              setVisibleFeatures((prev) => [...prev, parseInt(index)]);
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((ref) => ref && observer.observe(ref));
    featuresRef.current.forEach((ref) => ref && observer.observe(ref));

    return () => observer.disconnect();
  }, []);
  const services = [
    {
      icon: TrendingUp,
      title: "Forex Trading",
      desc: "Trade 41+ forex pairs with deep liquidity, tight spreads, and competitive pricing for optimal trading experience."
    },
    {
      icon: Shield,
      title: "Secure Platform",
      desc: "Advanced security measures and encryption to protect your funds and personal information at all times."
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      desc: "Round-the-clock customer support to assist you with any queries or issues you may encounter."
    },
    {
      icon: Zap,
      title: "Fast Execution",
      desc: "Lightning-fast order execution with minimal slippage for better trading outcomes and profitability."
    },
    {
      icon: Globe,
      title: "Global Markets",
      desc: "Access to forex, commodities, indices, and cryptocurrencies from a single trading platform."
    },
    {
      icon: CheckCircle,
      title: "Regulated Broker",
      desc: "Fully regulated and licensed broker ensuring transparency and compliance with international standards."
    }
  ];

  return (
    <div className="font-sans text-gray-800 mt-[1px]">
      <PageBanner
        title="Our Services"
        breadcrumb="Services"
        bgImage="/Futures-in-Stock-Market.webp"
      />

      {/* Services Section */}
      <section className="w-full py-20 bg-gradient-to-b from-[#f5f0eb] to-white">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-16">
            <div className="inline-block bg-[#e6d7c3] rounded-3xl py-2 px-6 mb-4">
              <h5 className="text-[#a1785b] font-medium text-lg">OUR SERVICES</h5>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#a1785b] mb-6">
              Comprehensive Trading Solutions
            </h2>
            <p className="max-w-3xl mx-auto text-xl font-semibold text-[#0a0a0a]">
              We provide world-class trading services designed to meet the needs of both beginner and professional traders.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  ref={(el) => (cardsRef.current[index] = el)}
                  data-index={index}
                  data-type="card"
                  className={`group bg-white rounded-xl border-2 border-[#d2b89f] p-8 hover:shadow-2xl transition-all duration-700 hover:-translate-y-2 ${
                    visibleCards.includes(index)
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-10'
                  }`}
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#d4a25a] to-[#b8873f] rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#a1785b] mb-4 group-hover:text-[#8b5c3c] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-[#0a0a0a] text-lg font-medium leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="w-full py-20 bg-gradient-to-br from-[#0a1f2e] via-[#0d4c63] to-[#0a2f3d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="text-[#d4a25a]">Our Services</span>
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-300">
              Experience the difference with our professional trading services and dedicated support team.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Advanced Technology",
                desc: "Our cutting-edge trading platform provides real-time market data, advanced charting tools, and seamless execution for optimal trading performance."
              },
              {
                title: "Competitive Pricing",
                desc: "Benefit from tight spreads starting from 0.0 pips, low commissions, and no hidden fees to maximize your trading profitability."
              },
              {
                title: "Educational Resources",
                desc: "Access comprehensive educational materials, webinars, and market analysis to enhance your trading knowledge and skills."
              },
              {
                title: "Risk Management",
                desc: "Utilize advanced risk management tools including stop loss, take profit, and negative balance protection for safer trading."
              }
            ].map((feature, index) => (
              <div
                key={index}
                ref={(el) => (featuresRef.current[index] = el)}
                data-index={index}
                data-type="feature"
                className={`bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 transition-all duration-700 ${
                  visibleFeatures.includes(index)
                    ? 'opacity-100 translate-x-0'
                    : 'opacity-0 translate-x-10'
                }`}
              >
                <h3 className="text-2xl font-bold text-[#d4a25a] mb-4">{feature.title}</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
