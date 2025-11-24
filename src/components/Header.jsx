import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import ContactPopup from "../components/ContactPopup";
import { slugMap } from "../utils/slugMap";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n, t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [showPopup, setShowPopup] = useState(false);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const [showHeader, setShowHeader] = useState(true);

  // HEADER HIDE ON SCROLL
  useEffect(() => {
    let lastY = window.scrollY;

    const handle = () => {
      const y = window.scrollY;
      if (y < 10) setShowHeader(true);
      else if (y > lastY) setShowHeader(false);
      else setShowHeader(true);
      lastY = y;
    };

    const onScroll = () => requestAnimationFrame(handle);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // LANGUAGE SWITCH WITH SLUG
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);

    const currentPath = location.pathname;
    let targetPath = currentPath;

    for (const key in slugMap) {
      const langs = slugMap[key];
      if (Object.values(langs).includes(currentPath)) {
        targetPath = langs[lng];
        break;
      }
    }

    navigate(`${targetPath}?language=${lng}`, { replace: true });
  };

  const handleRoute = (to) => {
    setIsOpen(false);
    const lang = i18n.language;

    if (slugMap[to]) {
      const translatedSlug = slugMap[to][lang];
      navigate(`${translatedSlug}?language=${lang}`);
    } else {
      navigate(`${to}?language=${lang}`);
    }
  };

  const routeItems = [
    { to: "/", label: t("nav.home"), id: "home-route" },
    { to: "/repairs", label: t("nav.repairs"), id: "repairs-route" },
    { to: "/design", label: t("nav.design"), id: "design-route" },
  ];

  return (
    <>
      <ContactPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />

      {/* HEADER */}
      <motion.header
        className={`
          fixed top-0 left-0 right-0 z-50
          ${isMobile ? "bg-white/95" : "bg-white/80 backdrop-blur-xl"}
          border-b border-blue-100 shadow-sm 
          h-24
        `}
        animate={{ y: showHeader ? 0 : -140 }}
        transition={{ duration: 0.25 }}
      >
        {/* LOGO */}
        <img
          src="/logo.png"
          alt="EuroDizains Logo"
          className="
            absolute -top-10 left-20 
            w-[230px] md:w-[260px] 
            cursor-pointer select-none opacity-95
          "
          onClick={() => handleRoute("/")}
        />

        {/* NAV BAR */}
        <nav className="container mx-auto px-6 h-full flex items-center justify-between">
          <div onClick={() => handleRoute("/")}></div>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-6">
            {routeItems.map((item) => {
              const active =
                item.to === "/"
                  ? location.pathname === "/"
                  : Object.values(slugMap[item.to] || {}).includes(
                      location.pathname
                    );

              return (
                <button
                  key={item.id}
                  onClick={() => handleRoute(item.to)}
                  className={`relative text-sm font-semibold transition
                    ${
                      active
                        ? "text-[#3B82F6]"
                        : "text-gray-700 hover:text-[#3B82F6]"
                    }`}
                >
                  {item.label}

                  {active && (
                    <motion.div
                      layoutId="route-underline"
                      className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gradient-to-r from-[#3B82F6] to-[#38BDF8]"
                    />
                  )}
                </button>
              );
            })}

            {/* LANGUAGES */}
            <div className="flex items-center gap-2 border-l pl-4 ml-2 border-blue-200">
              {["lv", "ru", "en"].map((lng) => (
                <button
                  key={lng}
                  onClick={() => changeLanguage(lng)}
                  className={`px-3 py-1.5 rounded-md text-sm font-semibold transition
                    ${
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
            <button
              onClick={() => setShowPopup(true)}
              className="
                px-6 py-2 
                bg-gradient-to-r from-[#3B82F6] to-[#38BDF8]
                text-white rounded-full shadow 
                flex items-center gap-2
              "
            >
              <Phone className="w-4 h-4" />
              {t("buttons.call")}
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            className="
              md:hidden w-11 h-11 flex items-center justify-center 
              bg-blue-50 text-[#3B82F6] rounded-lg shadow-sm
            "
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </nav>

        {/* MOBILE DROPDOWN MENU */}
        {/* MOBILE SIDE MENU */}
        {/* MOBILE SIDE MENU */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* BACKDROP */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
                onClick={() => setIsOpen(false)}
              />

              {/* SIDE MENU */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="md:hidden fixed top-0 right-0 h-full w-[70%] bg-white shadow-2xl z-50"
              >
                <div className="flex flex-col h-full">
                  {/* HEADER */}
                  <div className="flex items-center justify-between px-6 py-6 border-b border-gray-100">
                    <span className="text-lg font-bold text-gray-800">
                      Menu
                    </span>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200 transition"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  {/* CONTENT */}
                  <div className="flex-1 overflow-y-auto px-6 py-6">
                    {/* NAVIGATION */}
                    <div className="space-y-2 mb-6">
                      {routeItems.map((item) => {
                        const active =
                          item.to === "/"
                            ? location.pathname === "/"
                            : Object.values(slugMap[item.to] || {}).includes(
                                location.pathname
                              );

                        return (
                          <button
                            key={item.id}
                            onClick={() => handleRoute(item.to)}
                            className={`
                              w-full text-left py-3 px-4 rounded-xl font-semibold transition
                              ${
                                active
                                  ? "bg-gradient-to-r from-blue-50 to-cyan-50 text-[#3B82F6] shadow-sm"
                                  : "text-gray-700 hover:bg-gray-50"
                              }
                            `}
                          >
                            {item.label}
                          </button>
                        );
                      })}
                    </div>

                    {/* LANGUAGES */}
                    <div className="mb-6">
                      <div className="flex gap-2">
                        {["lv", "ru", "en"].map((lng) => (
                          <button
                            key={lng}
                            onClick={() => changeLanguage(lng)}
                            className={`
                              flex-1 py-2.5 rounded-xl text-sm font-semibold transition
                              ${
                                i18n.language === lng
                                  ? "bg-gradient-to-r from-[#3B82F6] to-[#38BDF8] text-white shadow-md"
                                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                              }
                            `}
                          >
                            {lng.toUpperCase()}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* FOOTER - CALL BUTTON */}
                  <div className="p-6 border-t border-gray-100">
                    <button
                      onClick={() => {
                        setShowPopup(true);
                        setIsOpen(false);
                      }}
                      className="
                        w-full py-3.5 
                        bg-gradient-to-r from-[#3B82F6] to-[#38BDF8]
                        text-white rounded-xl flex justify-center items-center gap-2 
                        shadow-lg font-semibold hover:shadow-xl transition
                      "
                    >
                      <Phone className="w-5 h-5" />
                      {t("buttons.call")}
                    </button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
