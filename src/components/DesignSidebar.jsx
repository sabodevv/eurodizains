import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function DesignSidebar() {
  const { t } = useTranslation();
  const location = useLocation();

  const menuTop = [
    {
      label: t("design.sidebar.composition"),
      path: "/design/composition",
    },
    {
      label: t("design.sidebar.standard"),
      path: "/design/standard",
    },
    {
      label: t("design.sidebar.premium"),
      path: "/design/premium",
    },
    {
      label: t("design.sidebar.vip"),
      path: "/design/vip",
    },
    {
      label: t("design.sidebar.visual"),
      path: "/design/3d-visual",
    },
    {
      label: t("design.sidebar.supervision"),
      path: "/design/supervision",
    },
    {
      label: t("design.sidebar.warranty"),
      path: "/design/warranty",
    },
    {
      label: t("design.sidebar.discounts"),
      path: "/design/discounts",
    },
  ];

  const menuBottom = [
    {
      label: t("design.sidebar.apartments"),
      path: "/design/apartments",
    },
    {
      label: t("design.sidebar.houses"),
      path: "/design/houses",
    },
    {
      label: t("design.sidebar.decor"),
      path: "/design/decor",
    },
    {
      label: t("design.sidebar.interiors"),
      path: "/design/interiors",
    },
    {
      label: t("design.sidebar.offices"),
      path: "/design/offices",
    },
    {
      label: t("design.sidebar.restaurants"),
      path: "/design/restaurants",
    },
    {
      label: t("design.sidebar.nightclubs"),
      path: "/design/nightclubs",
    },
  ];

  return (
    <motion.div
      className="sticky top-28 w-72 bg-white/80 backdrop-blur-xl border-2 border-blue-100 p-6 rounded-3xl shadow-xl"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* PROJECT */}
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
          {menuTop.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                location.pathname === item.path
                  ? "bg-gradient-to-r from-[#3B82F6] to-[#38BDF8] text-white shadow-md"
                  : "text-gray-700 hover:bg-blue-50 hover:text-[#3B82F6]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </motion.div>

      {/* CLIENTS */}
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
          {menuBottom.map((item, i) => (
            <Link
              key={i}
              to={item.path}
              className={`block px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                location.pathname === item.path
                  ? "bg-gradient-to-r from-[#3B82F6] to-[#38BDF8] text-white shadow-md"
                  : "text-gray-700 hover:bg-blue-50 hover:text-[#3B82F6]"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </motion.div>

      {/* Decorative bottom element */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent rounded-b-3xl"></div>
    </motion.div>
  );
}
