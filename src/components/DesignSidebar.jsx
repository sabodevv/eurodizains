import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { slugMap } from "../utils/slugMap";
import { useLocation } from "react-router-dom";

export default function DesignSidebar() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const lang = i18n.language;

  // ===========================
  // Helper: translate slug
  // ===========================
  const translateSlug = (basePath) => {
    if (slugMap[basePath]) {
      return `${slugMap[basePath][lang]}?language=${lang}`;
    }
    return `${basePath}?language=${lang}`;
  };

  // ===========================
  // MENU STRUCTURE
  // ===========================
  const menuTop = [
    { label: t("design.sidebar.composition"), to: "/design/composition" },
    { label: t("design.sidebar.standard"), to: "/design/standard" },
    { label: t("design.sidebar.premium"), to: "/design/premium" },
    { label: t("design.sidebar.vip"), to: "/design/vip" },
    { label: t("design.sidebar.visual"), to: "/design/3d-visual" },
    { label: t("design.sidebar.supervision"), to: "/design/supervision" },
    { label: t("design.sidebar.warranty"), to: "/design/warranty" },
    { label: t("design.sidebar.discounts"), to: "/design/discounts" },
  ];

  const menuBottom = [
    { label: t("design.sidebar.apartments"), to: "/design/apartments" },
    { label: t("design.sidebar.houses"), to: "/design/houses" },
    { label: t("design.sidebar.decor"), to: "/design/decor" },
    { label: t("design.sidebar.interiors"), to: "/design/interiors" },
    { label: t("design.sidebar.offices"), to: "/design/offices" },
    { label: t("design.sidebar.restaurants"), to: "/design/restaurants" },
    { label: t("design.sidebar.nightclubs"), to: "/design/nightclubs" },
  ];

  return (
    <motion.div
      className="sticky top-28 w-full md:w-72 bg-white/80 backdrop-blur-xl border-2 border-blue-100 p-6 rounded-3xl shadow-xl"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* TOP SECTION */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <div className="relative mb-4">
          <div className="absolute -left-3 top-1 w-1 h-5 bg-gradient-to-b from-[#3B82F6] to-[#38BDF8] rounded-full"></div>
          <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wide">
            {t("design.sidebar.project")}
          </h3>
        </div>

        <div className="space-y-1">
          {menuTop.map((item, i) => {
            const slug = slugMap[item.to]?.[lang];
            const isActive = slug && location.pathname === slug;

            return (
              <NavLink
                key={i}
                to={translateSlug(item.to)}
                className={`
                  block px-4 py-3 rounded-xl text-sm font-semibold transition-all
                  ${
                    isActive
                      ? "bg-gradient-to-r from-[#3B82F6] to-[#38BDF8] text-white shadow-md"
                      : "text-gray-700 hover:bg-blue-50 hover:text-[#3B82F6]"
                  }
                `}
              >
                {item.label}
              </NavLink>
            );
          })}
        </div>
      </motion.div>

      {/* BOTTOM SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <div className="relative mb-4">
          <div className="absolute -left-3 top-1 w-1 h-5 bg-gradient-to-b from-[#3B82F6] to-[#38BDF8] rounded-full"></div>
          <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wide">
            {t("design.sidebar.clients")}
          </h3>
        </div>

        <div className="space-y-1">
          {menuBottom.map((item, i) => {
            const slug = slugMap[item.to]?.[lang];
            const isActive = slug && location.pathname === slug;

            return (
              <NavLink
                key={i}
                to={translateSlug(item.to)}
                className={`
                  block px-4 py-3 rounded-xl text-sm font-semibold transition-all
                  ${
                    isActive
                      ? "bg-gradient-to-r from-[#3B82F6] to-[#38BDF8] text-white shadow-md"
                      : "text-gray-700 hover:bg-blue-50 hover:text-[#3B82F6]"
                  }
                `}
              >
                {item.label}
              </NavLink>
            );
          })}
        </div>
      </motion.div>

      {/* Decorative bottom element */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent rounded-b-3xl"></div>
    </motion.div>
  );
}
