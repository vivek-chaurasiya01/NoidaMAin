import FeaturesBar from "../Componect/FeaturesBar";
import ForexSteps from "../Componect/ForexSteps";
import IntroducingBroker from "../Componect/IntroducingBroker";
import MarketSection from "../Componect/MarketSection";
import MarketTicker from "../Componect/MarketTicker";
import HeroSlider from "../Componect/Silder";
import WhyUs from "../Componect/WhyUs";

const Home = () => {
  return (
    <>   
      <HeroSlider/>
      <MarketTicker/>
      <FeaturesBar/>
      <WhyUs/>
      <ForexSteps/>
      <MarketSection/>
      <IntroducingBroker/>
    </>
  );
};

export default Home;
