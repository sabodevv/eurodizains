import { motion } from "framer-motion";
import RepairsSidebar from "../../components/RepairsSidebar";
import RepairsSidebarMobile from "../../components/RepairsSidebarMobile"; // Мобильная версия бокового меню
import ContactPopup from "../../components/ContactPopup"; // ✅ added
import { useTranslation } from "react-i18next";
import {
  Hammer,
  Layers,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  LayoutGrid,
} from "lucide-react";
import { useState } from "react";

export default function Demolition() {
  const { t } = useTranslation();

  // popup
  const [showPopup, setShowPopup] = useState(false); // ✅ added
  const [mobileSidebar, setMobileSidebar] = useState(false); // Для мобильной боковой панели

  const paragraphs = t("repairs.demolition.text", { returnObjects: true });
  const types = t("repairs.demolition.types", { returnObjects: true });
  const rules = t("repairs.demolition.rules", { returnObjects: true });
  const advantages = t("repairs.demolition.advantages", {
    returnObjects: true,
  });

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <div className="pt-28 flex relative overflow-hidden">
      {/* POPUP */}
      <ContactPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
      {/* MOBILE SIDEBAR BUTTON */}
      {isMobile && (
        <button
          onClick={() => setMobileSidebar(true)}
          className="fixed top-20 right-4 z-40 w-14 h-14 rounded-2xl flex items-center justify-center bg-white/60 backdrop-blur-xl shadow-xl shadow-blue-200/50 border border-white/40 active:scale-95"
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#3B82F6]/10 to-[#38BDF8]/10 pointer-events-none" />
          <LayoutGrid className="w-6 h-6 text-[#3B82F6] relative z-10" />
        </button>
      )}

      {/* MOBILE SIDEBAR */}
      <RepairsSidebarMobile
        isOpen={mobileSidebar}
        onClose={() => setMobileSidebar(false)}
      />

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      {/* Sidebar Desktop */}
      <div className="hidden md:block w-72 px-6">
        <RepairsSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 px-6 md:px-14 max-w-5xl mx-auto pb-24">
        {/* Header */}
        {!isMobile ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border-2 border-blue-100 rounded-full mb-6"
            >
              <Hammer className="w-4 h-4 text-[#3B82F6]" />
              <span className="text-sm font-semibold text-[#3B82F6]">
                {t("repairs.demolition.intro")}
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-[#3B82F6] via-[#38BDF8] to-[#60A5FA] bg-clip-text text-transparent leading-tight">
              {t("repairs.demolition.title")}
            </h1>
          </motion.div>
        ) : (
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border-2 border-blue-100 rounded-full mb-6">
              <Hammer className="w-4 h-4 text-[#3B82F6]" />
              <span className="text-sm font-semibold text-[#3B82F6]">
                {t("repairs.demolition.intro")}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-[#3B82F6] via-[#38BDF8] to-[#60A5FA] bg-clip-text text-transparent leading-tight">
              {t("repairs.demolition.title")}
            </h1>
          </div>
        )}

        {/* Text */}
        <div className="space-y-10 mt-12">
          {paragraphs.map((text, index) => (
            <motion.p
              key={index}
              initial={isMobile ? false : { opacity: 0, y: 30 }}
              animate={isMobile ? {} : { opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              className="text-lg text-gray-700 leading-relaxed font-medium"
            >
              {text}
            </motion.p>
          ))}
        </div>

        {/* Types */}
        <motion.div
          className="mt-16 p-8 bg-white/80 backdrop-blur-xl rounded-3xl border-2 border-blue-100 shadow-xl"
          initial={isMobile ? false : { opacity: 0, y: 30 }}
          animate={isMobile ? {} : { opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <Layers className="w-7 h-7 text-[#3B82F6]" />
            {t("repairs.demolition.typesTitle")}
          </h3>

          <ul className="grid md:grid-cols-2 gap-3">
            {types.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 p-2 rounded-xl hover:bg-blue-50 transition-colors"
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700 font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Rules */}
        <motion.div
          className="mt-16 p-8 bg-white/80 backdrop-blur-xl rounded-3xl border-2 border-cyan-100 shadow-xl"
          initial={isMobile ? false : { opacity: 0, y: 30 }}
          animate={isMobile ? {} : { opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <AlertTriangle className="w-7 h-7 text-[#3B82F6]" />
            {t("repairs.demolition.rulesTitle")}
          </h3>

          <ul className="grid md:grid-cols-1 gap-3">
            {rules.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 p-2 rounded-xl hover:bg-blue-50 transition-colors"
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700 font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Advantages */}
        <motion.div
          className="mt-16 p-8 bg-white/80 backdrop-blur-xl rounded-3xl border-2 border-blue-100 shadow-xl"
          initial={isMobile ? false : { opacity: 0, y: 30 }}
          animate={isMobile ? {} : { opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <CheckCircle className="w-7 h-7 text-[#3B82F6]" />
            {t("repairs.demolition.advantagesTitle")}
          </h3>

          <ul className="grid md:grid-cols-2 gap-3">
            {advantages.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-3 p-2 rounded-xl hover:bg-blue-50 transition-colors"
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <span className="text-gray-700 font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* CTA — OPEN POPUP */}
        <motion.div
          className="mt-12 text-center"
          initial={isMobile ? false : { opacity: 0, y: 20 }}
          animate={isMobile ? {} : { opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 0.6 }}
        >
          <p className="text-gray-600 mb-6">
            {t("repairs.demolition.contactText")}
          </p>
          <motion.button
            className="group relative px-10 py-5 bg-gradient-to-r from-[#3B82F6] to-[#38BDF8] rounded-full text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-all overflow-hidden inline-flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowPopup(true)} // ✅ popup trigger
          >
            {t("repairs.demolition.cta")}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
