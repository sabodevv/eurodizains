import { motion, AnimatePresence } from "framer-motion";
import DesignSidebar from "../../components/DesignSidebar";
import DesignSidebarMobile from "../../components/DesignSidebarMobile";
import ContactPopup from "../../components/ContactPopup";

import { useTranslation } from "react-i18next";
import {
  FileText,
  Layers,
  CheckCircle,
  ArrowRight,
  ListChecks,
  Menu,
  LayoutGrid,
} from "lucide-react";

import { useState } from "react";

export default function Composition() {
  const { t } = useTranslation();

  const [showPopup, setShowPopup] = useState(false);
  const [mobileSidebar, setMobileSidebar] = useState(false);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const paragraphs = t("design.composition.text", { returnObjects: true });
  const types = t("design.composition.types", { returnObjects: true });
  const structure = t("design.composition.structure", {
    returnObjects: true,
  });
  const faq = t("design.composition.faq", { returnObjects: true });

  return (
    <>
      {/* POPUP */}
      <ContactPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />

      {/* === MOBILE SIDEBAR BUTTON === */}
      {isMobile && (
        <motion.button
          onClick={() => setMobileSidebar(true)}
          className="
    fixed top-20 right-4 z-40  {/* Исправлено: теперь кнопка справа */}
    w-14 h-14
    rounded-2xl
    flex items-center justify-center
    bg-white/60
    backdrop-blur-xl
    shadow-xl shadow-blue-200/50
    border border-white/40
    active:scale-95
  "
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#3B82F6]/10 to-[#38BDF8]/10 pointer-events-none" />
          <LayoutGrid className="w-6 h-6 text-[#3B82F6] relative z-10" />
        </motion.button>
      )}

      {/* === MOBILE SIDEBAR COMPONENT === */}
      <DesignSidebarMobile
        isOpen={mobileSidebar}
        onClose={() => setMobileSidebar(false)}
      />

      {/* MAIN WRAPPER */}
      <div className="pt-28 flex relative overflow-hidden min-h-[100dvh]">
        {/* BACKGROUND */}
        <div className="absolute inset-0 -z-10">
          {!isMobile ? (
            <>
              <div className="absolute top-40 right-20 w-[28rem] h-[28rem] bg-blue-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-40 left-20 w-[22rem] h-[22rem] bg-cyan-500/10 rounded-full blur-3xl" />
            </>
          ) : (
            <>
              <div className="absolute top-24 right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-xl" />
              <div className="absolute bottom-16 left-10 w-52 h-52 bg-cyan-500/10 rounded-full blur-xl" />
            </>
          )}
        </div>

        {/* DESKTOP SIDEBAR */}
        <div className="hidden md:block w-72 px-6 relative z-20">
          <DesignSidebar />
        </div>

        {/* CONTENT */}
        <div className="flex-1 px-4 sm:px-6 md:px-14 max-w-5xl mx-auto pb-24 relative z-20">
          {/* HEADER */}
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={isMobile ? false : { opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border-2 border-blue-100 rounded-full mb-6"
            >
              <FileText className="w-4 h-4 text-[#3B82F6]" />
              <span className="text-sm font-semibold text-[#3B82F6]">
                {t("design.composition.intro")}
              </span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-[#3B82F6] via-[#38BDF8] to-[#60A5FA] bg-clip-text text-transparent leading-tight">
              {t("design.composition.title")}
            </h1>
          </motion.div>

          {/* PARAGRAPHS */}
          <div className="space-y-10 mt-10">
            {paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={isMobile ? false : { opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: isMobile ? 0 : 0.3 + i * 0.1 }}
                className="text-lg text-gray-700 leading-relaxed font-medium"
              >
                {p}
              </motion.p>
            ))}
          </div>

          {/* PROJECT TYPES */}
          <motion.div
            className="mt-16 p-8 rounded-3xl border-2 border-blue-100 shadow-xl bg-white/80 backdrop-blur-xl"
            initial={isMobile ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <Layers className="w-7 h-7 text-[#3B82F6]" />
              {t("design.composition.typesTitle")}
            </h3>

            <ul className="space-y-4">
              {types.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 p-2 rounded-xl hover:bg-blue-50 transition"
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* STRUCTURE */}
          <motion.div
            className="mt-16 p-8 rounded-3xl border-2 border-cyan-100 shadow-xl bg-white/80 backdrop-blur-xl"
            initial={isMobile ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <ListChecks className="w-7 h-7 text-[#3B82F6]" />
              {t("design.composition.structureTitle")}
            </h3>

            <ul className="space-y-4">
              {structure.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 p-2 rounded-xl hover:bg-blue-50 transition"
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* FAQ */}
          <motion.div
            className="mt-16 p-8 rounded-3xl border-2 border-blue-100 shadow-xl bg-white/80 backdrop-blur-xl"
            initial={isMobile ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <CheckCircle className="w-7 h-7 text-[#3B82F6]" />
              {t("design.composition.faqTitle")}
            </h3>

            <ul className="space-y-4">
              {faq.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 p-2 rounded-xl hover:bg-blue-50 transition"
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="mt-12 text-center"
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <motion.button
              className="px-10 py-5 bg-gradient-to-r from-[#3B82F6] to-[#38BDF8] rounded-full text-white font-bold text-lg shadow-xl hover:shadow-2xl transition relative flex items-center gap-2 justify-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowPopup(true)}
            >
              {t("design.composition.cta")}
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Mobile sidebar animated overlay — already handled above */}
    </>
  );
}
