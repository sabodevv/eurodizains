import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { slugMap } from "../utils/slugMap";
import { useEffect } from "react";

export default function RepairsSidebarMobile({ isOpen, onClose }) {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const lang = i18n.language;

  // Translate base path → slugMap → final ?language=XX link
  const translateSlug = (basePath) => {
    if (slugMap[basePath]) {
      return `${slugMap[basePath][lang]}?language=${lang}`;
    }
    return `${basePath}?language=${lang}`;
  };

  const menuTop = [
    { label: t("repairs.sidebar.standard"), to: "/repairs/standard" },
    { label: t("repairs.sidebar.premium"), to: "/repairs/premium" },
    { label: t("repairs.sidebar.vip"), to: "/repairs/vip" },
  ];

  const menuClients = [
    { label: t("repairs.sidebar.apartments"), to: "/repairs/apartments" },
    { label: t("repairs.sidebar.houses"), to: "/repairs/houses" },
    { label: t("repairs.sidebar.offices"), to: "/repairs/offices" },
  ];

  const menuTech = [
    { label: t("repairs.sidebar.ceilings"), to: "/repairs/ceilings" },
    { label: t("repairs.sidebar.floors"), to: "/repairs/floors" },
    { label: t("repairs.sidebar.plumbing"), to: "/repairs/plumbing" },
    { label: t("repairs.sidebar.walls"), to: "/repairs/walls" },
    { label: t("repairs.sidebar.electrics"), to: "/repairs/electrics" },
    { label: t("repairs.sidebar.openings"), to: "/repairs/openings" },
    { label: t("repairs.sidebar.demolition"), to: "/repairs/demolition" },
    { label: t("repairs.sidebar.finishing"), to: "/repairs/finishing" },
  ];

  const isActive = (basePath) => {
    const slug = slugMap[basePath]?.[lang];
    return slug === location.pathname;
  };

  useEffect(() => {
    // Update the URL with the current language when the language changes
    const path = location.pathname.split("?")[0];
    navigate(`${path}?language=${lang}`);
  }, [lang, location, navigate]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* BACKDROP */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[90]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
          />

          {/* LEFT PANEL */}
          <motion.div
            className="fixed left-0 top-0 bottom-0 w-[65%] max-w-[360px] bg-white/70 backdrop-blur-xl border-r-2 border-blue-100 shadow-2xl z-[100] overflow-hidden flex flex-col rounded-r-3xl"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* HEADER */}
            <div className="px-6 py-5 border-b-2 border-blue-100 bg-white/60 backdrop-blur-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 bg-gradient-to-br from-[#3B82F6] to-[#38BDF8] rounded-xl flex items-center justify-center shadow-lg">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-lg font-bold bg-gradient-to-r from-[#3B82F6] to-[#38BDF8] bg-clip-text text-transparent">
                    {t("repairs.sidebar.remonti")}{" "}
                    {/* Добавление перевода для "Remonti" */}
                  </h2>
                </div>

                <motion.button
                  onClick={onClose}
                  className="w-10 h-10 bg-white/60 backdrop-blur-md flex items-center justify-center rounded-xl border border-blue-200 shadow-md"
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ rotate: 90 }}
                >
                  <X className="w-5 h-5 text-[#3B82F6]" />
                </motion.button>
              </div>
            </div>

            {/* MENU CONTENT */}
            <div className="flex-1 overflow-y-auto p-6 space-y-8">
              {/* TOP — CATEGORIES */}
              <div>
                <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wide mb-2">
                  {t("repairs.sidebar.categories")}
                </h3>

                <div className="space-y-1">
                  {menuTop.map((item, i) => (
                    <Link
                      key={i}
                      to={translateSlug(item.to)}
                      onClick={onClose}
                      className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                        isActive(item.to)
                          ? "bg-gradient-to-r from-[#3B82F6] to-[#38BDF8] text-white shadow-md"
                          : "text-gray-700 hover:bg-blue-50 hover:text-[#3B82F6]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* CLIENTS */}
              <div>
                <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wide mb-2">
                  {t("repairs.sidebar.clients")}
                </h3>

                <div className="space-y-1">
                  {menuClients.map((item, i) => (
                    <Link
                      key={i}
                      to={translateSlug(item.to)}
                      onClick={onClose}
                      className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                        isActive(item.to)
                          ? "bg-gradient-to-r from-[#3B82F6] to-[#38BDF8] text-white shadow-md"
                          : "text-gray-700 hover:bg-blue-50 hover:text-[#3B82F6]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* TECHNOLOGY */}
              <div>
                <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wide mb-2">
                  {t("repairs.sidebar.technology")}
                </h3>

                <div className="space-y-1">
                  {menuTech.map((item, i) => (
                    <Link
                      key={i}
                      to={translateSlug(item.to)}
                      onClick={onClose}
                      className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                        isActive(item.to)
                          ? "bg-gradient-to-r from-[#3B82F6] to-[#38BDF8] text-white shadow-md"
                          : "text-gray-700 hover:bg-blue-50 hover:text-[#3B82F6]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
