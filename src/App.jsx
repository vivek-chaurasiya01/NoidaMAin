import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Componect/Navbar";
import TopHeader from "./Componect/TopHeader";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import AccountTypes from "./pages/AccountTypes";
import InstrumentsList from "./pages/InstrumentsList";
import Academy from "./pages/Academy";
import Calculator from "./pages/Calculator";
import Platform from "./pages/Platform";
import Contact from "./pages/Contact";
import Forex from "./pages/Forex";
import Metals from "./pages/Metals";
import Oil from "./pages/Oil";
import Index from "./pages/Index";
import Crypto from "./pages/Crypto";
import MarginCalculator from "./pages/MarginCalculator";
import ProfitCalculator from "./pages/ProfitCalculator";
import MT5Windows from "./pages/MT5Windows";
import MT5Android from "./pages/MT5Android";
import MT5IOS from "./pages/MT5IOS";
import AppLayout from "./Componect/AppLayout";
import Footer from "./Componect/Footer";

function App() {
  return (
    <AppLayout>
      <Router>
        <TopHeader />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/account-types" element={<AccountTypes />} />
          <Route path="/instruments-list" element={<InstrumentsList />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/forex" element={<Forex />} />
          <Route path="/metals" element={<Metals />} />
          <Route path="/oil" element={<Oil />} />
          <Route path="/index" element={<Index />} />
          <Route path="/crypto" element={<Crypto />} />
          <Route path="/margin-calculator" element={<MarginCalculator />} />
          <Route path="/profit-calculator" element={<ProfitCalculator />} />
          <Route path="/mt5-windows" element={<MT5Windows />} />
          <Route path="/mt5-android" element={<MT5Android />} />
          <Route path="/mt5-ios" element={<MT5IOS />} />
        </Routes>
      </Router>
      <Footer/>
    </AppLayout>
    
  );
}

export default App;
