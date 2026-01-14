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

  const toggleDropdown = (name) => {
    setDropdownOpen(dropdownOpen === name ? null : name);
  };

  return (
    <nav
      className={`w-full bg-gradient-to-b from-black to-[#0b0b0b] text-white font-sans sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg shadow-[#d4af37]/20" : ""
      }`}
    >
      <div className="w-full flex items-center justify-between px-7 sm:px-7 md:px-6 lg:px-8 xl:px-10 2xl:px-12 py-3 md:py-4">
        {/* LOGO - Left Side */}
        <div className="flex items-center flex-shrink-0">
          <Link to="/">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-12 sm:h-13 md:h-13 lg:h-17 xl:h-19 2xl:h-23 w-auto transition-all duration-300"
            />
          </Link>
        </div>

        {/* DESKTOP MENU - Right Side */}
        <ul className="hidden lg:flex items-center gap-2 xl:gap-4 2xl:gap-6 text-sm xl:text-base 2xl:text-lg font-medium">
          <li>
            <NavLink
              className={({ isActive }) =>
                `px-2 py-1 hover:text-[#d4af37] transition whitespace-nowrap ${
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
                `px-2 py-1 hover:text-[#d4af37] transition whitespace-nowrap ${
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
                `px-2 py-1 hover:text-[#d4af37] transition whitespace-nowrap ${
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
                `px-2 py-1 hover:text-[#d4af37] transition whitespace-nowrap ${
                  isActive ? "text-[#d2aa73]" : ""
                }`
              }
              to="/account-types"
            >
              Account Types
            </NavLink>
          </li>

          {/* Instruments Dropdown */}
          <li className="relative group">
            <div
              className={`flex items-center gap-1 px-2 py-1 cursor-pointer hover:text-[#d4af37] transition whitespace-nowrap ${
                ["/forex", "/metals", "/oil", "/index", "/crypto"].includes(
                  location.pathname
                )
                  ? "text-[#d2aa73]"
                  : ""
              }`}
            >
              Instruments
              <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />
            </div>

            <ul className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 translate-y-2 transition-all duration-300 z-50 divide-y-2 divide-[rgb(201,164,106)]">
              <li>
                <Link
                  to="/forex"
                  className="block px-4 py-3 text-black hover:bg-[#d4af37] hover:text-white transition"
                >
                  Forex
                </Link>
              </li>
              <li>
                <Link
                  to="/metals"
                  className="block px-4 py-3 text-black hover:bg-[#d4af37] hover:text-white transition"
                >
                  Metals
                </Link>
              </li>
              <li>
                <Link
                  to="/oil"
                  className="block px-4 py-3 text-black hover:bg-[#d4af37] hover:text-white transition"
                >
                  Oil & Commodities
                </Link>
              </li>
              <li>
                <Link
                  to="/index"
                  className="block px-4 py-3 text-black hover:bg-[#d4af37] hover:text-white transition"
                >
                  Spot Index
                </Link>
              </li>
              <li>
                <Link
                  to="/crypto"
                  className="block px-4 py-3 text-black hover:bg-[#d4af37] hover:text-white transition"
                >
                  Cryptocurrency
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <NavLink
              className={({ isActive }) =>
                `px-2 py-1 hover:text-[#d4af37] transition whitespace-nowrap ${
                  isActive ? "text-[#d2aa73]" : ""
                }`
              }
              to="/academy"
            >
              Academy
            </NavLink>
          </li>

          {/* Calculator Dropdown */}
          <li className="relative group">
            <div
              className={`flex items-center gap-1 px-2 py-1 cursor-pointer hover:text-[#d4af37] transition whitespace-nowrap ${
                ["/margin-calculator", "/profit-calculator"].includes(
                  location.pathname
                )
                  ? "text-[#d2aa73]"
                  : ""
              }`}
            >
              Calculator
              <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />
            </div>

            <ul className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 translate-y-2 transition-all duration-300 z-50 divide-y-2 divide-[rgb(201,164,106)]">
              <li>
                <Link
                  to="/margin-calculator"
                  className="block px-4 py-3 text-black hover:bg-[#d4af37] hover:text-white transition"
                >
                  Margin Calculator
                </Link>
              </li>
              <li>
                <Link
                  to="/profit-calculator"
                  className="block px-4 py-3 text-black hover:bg-[#d4af37] hover:text-white transition"
                >
                  Profit Calculator
                </Link>
              </li>
            </ul>
          </li>

          {/* Platform Dropdown */}
          <li className="relative group">
            <div
              className={`flex items-center gap-1 px-2 py-1 cursor-pointer hover:text-[#d4af37] transition whitespace-nowrap ${
                ["/mt5-windows", "/mt5-android", "/mt5-ios"].includes(
                  location.pathname
                )
                  ? "text-[#d2aa73]"
                  : ""
              }`}
            >
              Platform
              <ChevronDown size={16} className="group-hover:rotate-180 transition-transform" />
            </div>

            <ul className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 translate-y-2 transition-all duration-300 z-50 divide-y-2 divide-[rgb(201,164,106)]">
              <li>
                <Link
                  to="/mt5-windows"
                  className="block px-4 py-3 text-black hover:bg-[#d4af37] hover:text-white transition"
                >
                  MT5 Windows
                </Link>
              </li>
              <li>
                <Link
                  to="/mt5-android"
                  className="block px-4 py-3 text-black hover:bg-[#d4af37] hover:text-white transition"
                >
                  MT5 Android
                </Link>
              </li>
              <li>
                <Link
                  to="/mt5-ios"
                  className="block px-4 py-3 text-black hover:bg-[#d4af37] hover:text-white transition"
                >
                  MT5 iOS
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <NavLink
              className={({ isActive }) =>
                `px-2 py-1 hover:text-[#d4af37] transition whitespace-nowrap ${
                  isActive ? "text-[#d2aa73]" : ""
                }`
              }
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* MOBILE MENU BUTTON */}
        <button
          className="lg:hidden p-2 hover:bg-gray-800 rounded-md transition flex-shrink-0"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? (
            <X size={24} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
          ) : (
            <Menu size={24} className="sm:w-6 sm:h-6 md:w-7 md:h-7" />
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden bg-gradient-to-b from-black to-[#0b0b0b] border-t border-gray-800 overflow-y-auto transition-all duration-300 absolute top-full left-0 right-0 z-[60] ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6">
          <ul className="flex flex-col space-y-2 sm:space-y-3 md:space-y-4">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/services", label: "Services" },
              { to: "/account-types", label: "Account Types" },
            ].map((item) => (
              <li key={item.to} className="border-b border-gray-800 last:border-b-0">
                <NavLink
                  className={({ isActive }) =>
                    `block py-3 sm:py-4 md:py-5 text-base sm:text-lg md:text-xl font-semibold text-center hover:text-[#d4af37] transition ${
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
            <li className="border-b border-gray-800">
              <button
                className="flex items-center justify-center w-full py-3 sm:py-4 md:py-5 text-base sm:text-lg md:text-xl font-semibold hover:text-[#d4af37] transition gap-2"
                onClick={() => toggleDropdown("instruments")}
              >
                <span>Instruments</span>
                <ChevronDown
                  size={20}
                  className={`transition-transform ${
                    dropdownOpen === "instruments" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {dropdownOpen === "instruments" && (
                <div className="pb-2 mt-2">
                  {[
                    { to: "/forex", label: "Forex" },
                    { to: "/metals", label: "Metals" },
                    { to: "/oil", label: "Oil & Commodities" },
                    { to: "/index", label: "Spot Index" },
                    { to: "/crypto", label: "Cryptocurrency" },
                  ].map((item, index) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="block py-2.5 text-sm sm:text-base md:text-lg text-center text-white hover:text-[#d4af37] transition-all duration-300"
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
            <li className="border-b border-gray-800">
              <NavLink
                className={({ isActive }) =>
                  `block py-3 sm:py-4 md:py-5 text-base sm:text-lg md:text-xl font-semibold text-center hover:text-[#d4af37] transition ${
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
            <li className="border-b border-gray-800">
              <button
                className="flex items-center justify-center w-full py-3 sm:py-4 md:py-5 text-base sm:text-lg md:text-xl font-semibold hover:text-[#d4af37] transition gap-2"
                onClick={() => toggleDropdown("calculator")}
              >
                <span>Calculator</span>
                <ChevronDown
                  size={20}
                  className={`transition-transform ${
                    dropdownOpen === "calculator" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {dropdownOpen === "calculator" && (
                <div className="pb-2 mt-2">
                  <Link
                    to="/margin-calculator"
                    className="block py-2.5 text-sm sm:text-base md:text-lg text-center text-white hover:text-[#d4af37] transition-all duration-300"
                    onClick={() => {
                      setOpen(false);
                      setDropdownOpen(null);
                    }}
                  >
                    Margin Calculator
                  </Link>
                  <Link
                    to="/profit-calculator"
                    className="block py-2.5 text-sm sm:text-base md:text-lg text-center text-white hover:text-[#d4af37] transition-all duration-300"
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
            <li className="border-b border-gray-800">
              <button
                className="flex items-center justify-center w-full py-3 sm:py-4 md:py-5 text-base sm:text-lg md:text-xl font-semibold hover:text-[#d4af37] transition gap-2"
                onClick={() => toggleDropdown("platform")}
              >
                <span>Platform</span>
                <ChevronDown
                  size={20}
                  className={`transition-transform ${
                    dropdownOpen === "platform" ? "rotate-180" : ""
                  }`}
                />
              </button>
              {dropdownOpen === "platform" && (
                <div className="pb-2 mt-2">
                  {[
                    { to: "/mt5-windows", label: "MT5 Windows" },
                    { to: "/mt5-android", label: "MT5 Android" },
                    { to: "/mt5-ios", label: "MT5 iOS" },
                  ].map((item, index) => (
                    <Link
                      key={item.to}
                      to={item.to}
                      className="block py-2.5 text-sm sm:text-base md:text-lg text-center text-white hover:text-[#d4af37] transition-all duration-300"
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
            <li>
              <NavLink
                className={({ isActive }) =>
                  `block py-3 sm:py-4 md:py-5 text-base sm:text-lg md:text-xl font-semibold text-center hover:text-[#d4af37] transition ${
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
    </nav>
  );
};

export default Navbar;
