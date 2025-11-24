import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function RepairsSidebar() {
  const { t } = useTranslation();

  const sections = [
    {
      title: t("repairs.sidebar.categories"),
      links: [
        { to: "/repairs/standard", label: t("repairs.sidebar.standard") },
        { to: "/repairs/premium", label: t("repairs.sidebar.premium") },
        { to: "/repairs/vip", label: t("repairs.sidebar.vip") },
      ],
    },
    {
      title: t("repairs.sidebar.clients"),
      links: [
        { to: "/repairs/apartments", label: t("repairs.sidebar.apartments") },
        { to: "/repairs/houses", label: t("repairs.sidebar.houses") },
        { to: "/repairs/offices", label: t("repairs.sidebar.offices") },
      ],
    },
    {
      title: t("repairs.sidebar.technology"),
      links: [
        { to: "/repairs/ceilings", label: t("repairs.sidebar.ceilings") },
        { to: "/repairs/floors", label: t("repairs.sidebar.floors") },
        { to: "/repairs/plumbing", label: t("repairs.sidebar.plumbing") },
        { to: "/repairs/walls", label: t("repairs.sidebar.walls") },
        { to: "/repairs/electrics", label: t("repairs.sidebar.electrics") },
        { to: "/repairs/openings", label: t("repairs.sidebar.openings") },
        { to: "/repairs/demolition", label: t("repairs.sidebar.demolition") },
        { to: "/repairs/finishing", label: t("repairs.sidebar.finishing") },
      ],
    },
  ];

  return (
    <motion.aside
      className="sticky top-28 w-full md:w-72 bg-white/80 backdrop-blur-xl border-2 border-blue-100 p-6 rounded-3xl shadow-xl"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      {sections.map((block, i) => (
        <motion.div
          key={i}
          className="mb-8 last:mb-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          {/* Section title */}
          <div className="relative mb-4">
            <div className="absolute -left-3 top-1 w-1 h-5 bg-gradient-to-b from-[#3B82F6] to-[#38BDF8] rounded-full"></div>
            <p className="text-sm font-bold text-gray-800 uppercase tracking-wide">
              {block.title}
            </p>
          </div>

          {/* Links */}
          <div className="space-y-1">
            {block.links.map((l, idx) => (
              <NavLink
                key={idx}
                to={l.to}
                className={({ isActive }) =>
                  `group flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                    isActive
                      ? "bg-gradient-to-r from-[#3B82F6] to-[#38BDF8] text-white shadow-md"
                      : "text-gray-700 hover:bg-blue-50 hover:text-[#3B82F6]"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{l.label}</span>
                    <motion.div
                      initial={{ opacity: 0, x: -5 }}
                      animate={{
                        opacity: isActive ? 1 : 0,
                        x: isActive ? 0 : -5,
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronRight
                        className={`w-4 h-4 ${
                          isActive
                            ? "text-white"
                            : "text-transparent group-hover:text-[#3B82F6]"
                        }`}
                      />
                    </motion.div>
                  </>
                )}
              </NavLink>
            ))}
          </div>
        </motion.div>
      ))}

      {/* Decorative bottom element */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent rounded-b-3xl"></div>
    </motion.aside>
  );
}
