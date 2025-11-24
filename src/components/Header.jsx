import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import ContactPopup from "../components/ContactPopup";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  // Mobile detection
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  // Popup
  const [showPopup, setShowPopup] = useState(false);

  // Header hide/show on scroll (smooth version)
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      if (current < 20) setShowHeader(true);
      else if (current > lastScrollY) setShowHeader(false);
      else setShowHeader(true);

      setLastScrollY(current);
    };

    // better throttling for smoothness
    let throttleTimer = null;
    const optimizedScroll = () => {
      if (throttleTimer) return;
      throttleTimer = setTimeout(() => {
        handleScroll();
        throttleTimer = null;
      }, 80);
    };

    window.addEventListener("scroll", optimizedScroll);
    return () => window.removeEventListener("scroll", optimizedScroll);
  }, [lastScrollY]);

  const routeItems = [
    { to: "/", label: t("nav.home"), id: "home-route" },
    { to: "/repairs", label: t("nav.repairs"), id: "repairs-route" },
    { to: "/design", label: t("nav.design"), id: "design-route" },
  ];

  const handleRoute = (to) => {
    setIsOpen(false);
    if (location.pathname !== to) navigate(to);
  };

  const changeLanguage = (lng) => i18n.changeLanguage(lng);

  return (
    <>
      {/* Popup */}
      <ContactPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />

      <motion.header
        className={`
          fixed top-0 left-0 right-0 z-50 
          ${
            isMobile
              ? "bg-white/95 backdrop-blur-0"
              : "bg-white/80 backdrop-blur-xl"
          }
          border-b border-blue-100 shadow-sm 
          h-24 overflow-visible
        `}
        animate={{ y: showHeader ? 0 : -150 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        {/* Logo */}
        <motion.img
          src="/logo.png"
          alt="EuroDizains Large Logo"
          className="absolute -top-10 left-20 w-[260px] cursor-pointer select-none opacity-95 drop-shadow-lg"
          initial={{ opacity: 0, scale: 0.9, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          onClick={() => handleRoute("/")}
        />

        <nav className="container mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo clickable area on left (empty) */}
          <div
            className="cursor-pointer"
            onClick={() => handleRoute("/")}
          ></div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-6">
            {routeItems.map((item) => {
              const active = location.pathname === item.to;
              return (
                <motion.button
                  key={item.id}
                  onClick={() => handleRoute(item.to)}
                  className={`relative text-sm font-semibold ${
                    active
                      ? "text-[#3B82F6]"
                      : "text-gray-700 hover:text-[#3B82F6]"
                  }`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.label}
                  {active && (
                    <motion.div
                      className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gradient-to-r from-[#3B82F6] to-[#38BDF8]"
                      layoutId="route-underline"
                    />
                  )}
                </motion.button>
              );
            })}

            {/* Language switch */}
            <div className="flex items-center gap-2 border-l pl-4 ml-2 border-blue-200">
              {["lv", "ru", "en"].map((lng) => (
                <button
                  key={lng}
                  onClick={() => changeLanguage(lng)}
                  className={`px-3 py-1.5 rounded-md text-sm font-semibold ${
                    i18n.language === lng
                      ? "bg-blue-50 text-[#3B82F6]"
                      : "text-gray-600 hover:bg-blue-50 hover:text-[#3B82F6]"
                  }`}
                >
                  {lng.toUpperCase()}
                </button>
              ))}
            </div>

            {/* CALL BUTTON */}
            <motion.button
              onClick={() => setShowPopup(true)}
              className="px-6 py-2 bg-gradient-to-r from-[#3B82F6] to-[#38BDF8] text-white rounded-full shadow flex items-center gap-2 leading-none"
              whileHover={{ scale: 1.05, y: -2 }}
            >
              <Phone className="w-4 h-4" />
              {t("buttons.call")}
            </motion.button>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden w-11 h-11 flex items-center justify-center bg-blue-50 text-[#3B82F6] rounded-lg shadow-sm"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {/* Mobile dropdown menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="
              md:hidden 
              bg-white/95 
              backdrop-blur-0 
              p-4 border-t border-blue-100 shadow-lg
            "
          >
            {routeItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleRoute(item.to)}
                className="block w-full text-left py-3 px-4 text-gray-700 font-semibold hover:bg-blue-50 rounded-xl"
              >
                {item.label}
              </button>
            ))}

            {/* Languages */}
            <div className="flex justify-center gap-2 mt-3 border-t pt-3">
              {["lv", "ru", "en"].map((lng) => (
                <button
                  key={lng}
                  onClick={() => changeLanguage(lng)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold ${
                    i18n.language === lng
                      ? "bg-gradient-to-r from-[#3B82F6] to-[#38BDF8] text-white"
                      : "bg-blue-50 text-gray-700"
                  }`}
                >
                  {lng.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Call button mobile */}
            <button
              onClick={() => setShowPopup(true)}
              className="w-full mt-4 py-3 bg-gradient-to-r from-[#3B82F6] to-[#38BDF8] text-white rounded-xl flex justify-center items-center gap-2 shadow"
            >
              <Phone className="w-5 h-5" />
              {t("buttons.call")}
            </button>
          </motion.div>
        )}
      </motion.header>
    </>
  );
}
