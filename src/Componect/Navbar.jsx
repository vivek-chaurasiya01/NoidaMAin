import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobile dropdown toggle
  const toggleDropdown = (name) => {
    setDropdownOpen(dropdownOpen === name ? null : name);
  };

  return (
    <nav
      className={`w-full bg-gradient-to-b from-black to-[#0b0b0b] text-white font-opensans sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg shadow-[#d4af37]/20" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 lg:py-5">
        {/* LOGO */}
        <div className="flex items-center">
          <img 
            src="/logo.png" 
            alt="Nebula Logo" 
            className="h-12 sm:h-14 lg:h-16 xl:h-18 w-auto transition-all duration-300" 
          />
        </div>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex items-center gap-4 xl:gap-7 text-sm xl:text-[15px] font-semibold">
          <li>
            <NavLink
              className={({ isActive }) =>
                `hover:text-[#d4af37] transition whitespace-nowrap ${
                  isActive ? "text-[#d2aa73]" : ""
                }`
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                `hover:text-[#d4af37] transition whitespace-nowrap ${
                  isActive ? "text-[#d2aa73]" : ""
                }`
              }
              to="/about"
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) =>
                `hover:text-[#d4af37] transition whitespace-nowrap ${
                  isActive ? "text-[#d2aa73]" : ""
                }`
              }
              to="/services"
            >
              Services
            </NavLink>
          </li>

          <li>
            <NavLink
              className={({ isActive }) =>
                `hover:text-[#d4af37] transition whitespace-nowrap ${
                  isActive ? "text-[#d2aa73]" : ""
                }`
              }
              to="/account-types"
            >
              Account Types
            </NavLink>
          </li>

          {/* ================= INSTRUMENTS ================= */}
          <li className="relative group">
            {/* Trigger */}
            <div
              className={`flex items-center gap-1 cursor-pointer hover:text-[#d4af37] transition whitespace-nowrap ${
                ["/forex", "/metals", "/oil", "/index", "/crypto"].includes(
                  location.pathname
                )
                  ? "text-[#d2aa73]"
                  : ""
              }`}
            >
              Instruments <span className="hidden xl:inline">List</span>
              <ChevronDown size={14} />
            </div>

            {/* Dark Background (Navbar style) */}
            <div
              className="absolute left-0 top-full w-full h-20 bg-gradient-to-b from-black to-[#0b0b0b]
              opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none"
            ></div>

            {/* Dropdown */}
            <ul
              className="absolute left-0 top-full mt-4 w-56 bg-white text-black rounded-md shadow-xl
              opacity-0 invisible translate-y-2
              group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
              transition-all duration-300 z-50"
            >
              <li className="px-5 py-2 hover:bg-[#d4af37] hover:text-white transition border-b border-[#d2aa73]">
                <Link to="/forex">Forex</Link>
              </li>
              <li className="px-5 py-2 hover:bg-[#d4af37] hover:text-white transition border-b border-[#d2aa73]">
                <Link to="/metals">Metals</Link>
              </li>
              <li className="px-5 py-2 hover:bg-[#d4af37] hover:text-white transition border-b border-[#d2aa73]">
                <Link to="/oil">Oil & Commodities</Link>
              </li>
              <li className="px-5 py-2 hover:bg-[#d4af37] hover:text-white transition border-b border-[#d2aa73]">
                <Link to="/index">Spot Index</Link>
              </li>
              <li className="px-5 py-2 hover:bg-[#d4af37] hover:text-white transition">
                <Link to="/crypto">Cryptocurrency</Link>
              </li>
            </ul>
          </li>

          <li>
            <NavLink
              className={({ isActive }) =>
                `hover:text-[#d4af37] transition whitespace-nowrap ${
                  isActive ? "text-[#d2aa73]" : ""
                }`
              }
              to="/academy"
            >
              Academy
            </NavLink>
          </li>

          {/* ================= CALCULATOR ================= */}
          <li className="relative group">
            <div
              className={`flex items-center gap-1 cursor-pointer hover:text-[#d4af37] transition whitespace-nowrap ${
                ["/margin-calculator", "/profit-calculator"].includes(
                  location.pathname
                )
                  ? "text-[#d2aa73]"
                  : ""
              }`}
            >
              Calculator <ChevronDown size={14} />
            </div>

            <div
              className="absolute left-0 top-full w-full h-20 bg-gradient-to-b from-black to-[#0b0b0b]
              opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none"
            ></div>

            <ul
              className="absolute left-0 top-full mt-4 w-56 bg-white text-black rounded-md shadow-xl
              opacity-0 invisible translate-y-2
              group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
              transition-all duration-300 z-50"
            >
              <li className="px-5 py-2 hover:bg-[#d4af37] hover:text-white transition border-b border-[#d2aa73]">
                <Link to="/margin-calculator">Margin Calculator</Link>
              </li>
              <li className="px-5 py-2 hover:bg-[#d4af37] hover:text-white transition">
                <Link to="/profit-calculator">Profit Calculator</Link>
              </li>
            </ul>
          </li>

          {/* ================= PLATFORM ================= */}
          <li className="relative group">
            <div
              className={`flex items-center gap-1 cursor-pointer hover:text-[#d4af37] transition whitespace-nowrap ${
                ["/mt5-windows", "/mt5-android", "/mt5-ios"].includes(
                  location.pathname
                )
                  ? "text-[#d2aa73]"
                  : ""
              }`}
            >
              Platform <ChevronDown size={14} />
            </div>

            <div
              className="absolute left-0 top-full w-full h-20 bg-gradient-to-b from-black to-[#0b0b0b]
              opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none"
            ></div>

            <ul
              className="absolute left-0 top-full mt-4 w-56 bg-white text-black rounded-md shadow-xl
              opacity-0 invisible translate-y-2
              group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
              transition-all duration-300 z-50"
            >
              <li className="px-5 py-2 hover:bg-[#d4af37] hover:text-white transition border-b border-[#d2aa73]">
                <Link to="/mt5-windows">MT5 For Windows</Link>
              </li>
              <li className="px-5 py-2 hover:bg-[#d4af37] hover:text-white transition border-b border-[#d2aa73]">
                <Link to="/mt5-android">MT5 For Android</Link>
              </li>
              <li className="px-5 py-2 hover:bg-[#d4af37] hover:text-white transition">
                <Link to="/mt5-ios">MT5 For IOS</Link>
              </li>
            </ul>
          </li>

          <li>
            <NavLink
              className={({ isActive }) =>
                `hover:text-[#d4af37] transition whitespace-nowrap ${
                  isActive ? "text-[#d2aa73]" : ""
                }`
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* MOBILE BUTTON */}
        <button 
          className="lg:hidden p-2 hover:bg-gray-800 rounded-md transition" 
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="lg:hidden bg-gradient-to-b from-black to-[#0b0b0b] border-t border-[#d2aa73]">
          <style jsx>{`
            @keyframes slideDown {
              from {
                opacity: 0;
                transform: translateY(-10px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
            @keyframes fadeIn {
              from {
                opacity: 0;
              }
              to {
                opacity: 1;
              }
            }
          `}</style>
          
          <div style={{ animation: "slideDown 0.3s ease-out" }}>
            <ul className="flex flex-col items-center px-4 sm:px-6 py-4 text-sm font-semibold">
              {/* Simple Links */}
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/services", label: "Services" },
                { to: "/account-types", label: "Account Types" },
              ].map((item) => (
                <li key={item.to} className="w-full py-3 border-b border-[#d2aa73]/30">
                  <NavLink
                    className={({ isActive }) =>
                      `block text-center hover:text-[#d4af37] transition ${
                        isActive ? "text-[#d2aa73]" : ""
                      }`
                    }
                    to={item.to}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}

              {/* Instruments Dropdown Mobile */}
              <li className="w-full py-3 border-b border-[#d2aa73]/30">
                <button
                  className="flex items-center justify-center w-full gap-1 hover:text-[#d4af37] transition"
                  onClick={() => toggleDropdown("instruments")}
                >
                  Instruments List <ChevronDown size={14} className={`transition-transform ${dropdownOpen === "instruments" ? "rotate-180" : ""}`} />
                </button>
                {dropdownOpen === "instruments" && (
                  <div style={{ animation: "fadeIn 0.2s ease-out" }} className="mt-2 bg-gray-900 rounded-md py-2">
                    {[
                      { to: "/forex", label: "Forex" },
                      { to: "/metals", label: "Metals" },
                      { to: "/oil", label: "Oil & Commodities" },
                      { to: "/index", label: "Spot Index" },
                      { to: "/crypto", label: "Cryptocurrency" },
                    ].map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="block py-2 text-center hover:text-[#d4af37] transition"
                        onClick={() => {
                          setOpen(false);
                          setDropdownOpen(null);
                        }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>

              {/* Academy */}
              <li className="w-full py-3 border-b border-[#d2aa73]/30">
                <NavLink
                  className={({ isActive }) =>
                    `block text-center hover:text-[#d4af37] transition ${
                      isActive ? "text-[#d2aa73]" : ""
                    }`
                  }
                  to="/academy"
                  onClick={() => setOpen(false)}
                >
                  Academy
                </NavLink>
              </li>

              {/* Calculator Dropdown Mobile */}
              <li className="w-full py-3 border-b border-[#d2aa73]/30">
                <button
                  className="flex items-center justify-center w-full gap-1 hover:text-[#d4af37] transition"
                  onClick={() => toggleDropdown("calculator")}
                >
                  Calculator <ChevronDown size={14} className={`transition-transform ${dropdownOpen === "calculator" ? "rotate-180" : ""}`} />
                </button>
                {dropdownOpen === "calculator" && (
                  <div style={{ animation: "fadeIn 0.2s ease-out" }} className="mt-2 bg-gray-900 rounded-md py-2">
                    <Link
                      to="/margin-calculator"
                      className="block py-2 text-center hover:text-[#d4af37] transition"
                      onClick={() => {
                        setOpen(false);
                        setDropdownOpen(null);
                      }}
                    >
                      Margin Calculator
                    </Link>
                    <Link
                      to="/profit-calculator"
                      className="block py-2 text-center hover:text-[#d4af37] transition"
                      onClick={() => {
                        setOpen(false);
                        setDropdownOpen(null);
                      }}
                    >
                      Profit Calculator
                    </Link>
                  </div>
                )}
              </li>

              {/* Platform Dropdown Mobile */}
              <li className="w-full py-3 border-b border-[#d2aa73]/30">
                <button
                  className="flex items-center justify-center w-full gap-1 hover:text-[#d4af37] transition"
                  onClick={() => toggleDropdown("platform")}
                >
                  Platform <ChevronDown size={14} className={`transition-transform ${dropdownOpen === "platform" ? "rotate-180" : ""}`} />
                </button>
                {dropdownOpen === "platform" && (
                  <div style={{ animation: "fadeIn 0.2s ease-out" }} className="mt-2 bg-gray-900 rounded-md py-2">
                    {[
                      { to: "/mt5-windows", label: "MT5 For Windows" },
                      { to: "/mt5-android", label: "MT5 For Android" },
                      { to: "/mt5-ios", label: "MT5 For IOS" },
                    ].map((item) => (
                      <Link
                        key={item.to}
                        to={item.to}
                        className="block py-2 text-center hover:text-[#d4af37] transition"
                        onClick={() => {
                          setOpen(false);
                          setDropdownOpen(null);
                        }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </li>

              {/* Contact */}
              <li className="w-full py-3">
                <NavLink
                  className={({ isActive }) =>
                    `block text-center hover:text-[#d4af37] transition ${
                      isActive ? "text-[#d2aa73]" : ""
                    }`
                  }
                  to="/contact"
                  onClick={() => setOpen(false)}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;