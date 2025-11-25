import { motion } from "framer-motion";
import DesignSidebar from "../../components/DesignSidebar";
import DesignSidebarMobile from "../../components/DesignSidebarMobile";
import ContactPopup from "../../components/ContactPopup";
import { useTranslation } from "react-i18next";
import {
  ShieldCheck,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Menu,
  LayoutGrid,
} from "lucide-react";
import { useState } from "react";

export default function DesignGuarantees() {
  const { t } = useTranslation();
  const [showPopup, setShowPopup] = useState(false);
  const [mobileSidebar, setMobileSidebar] = useState(false);

  const paragraphs = t("design.guarantees.text", { returnObjects: true });

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

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

      {/* === MOBILE SIDEBAR === */}
      <DesignSidebarMobile
        isOpen={mobileSidebar}
        onClose={() => setMobileSidebar(false)}
      />

      {/* MAIN WRAPPER */}
      <div className="pt-24 md:pt-28 flex relative min-h-[100dvh] overflow-hidden">
        {/* BACKGROUND */}
        <div className="absolute inset-0 -z-10">
          {!isMobile ? (
            <>
              <div className="absolute top-40 right-20 w-[26rem] h-[26rem] bg-blue-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-40 left-20 w-[22rem] h-[22rem] bg-cyan-500/10 rounded-full blur-3xl" />
            </>
          ) : (
            <>
              <div className="absolute top-24 right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-xl" />
              <div className="absolute bottom-16 left-10 w-52 h-52 bg-cyan-500/10 rounded-xl blur-xl" />
            </>
          )}
        </div>

        {/* SIDEBAR DESKTOP */}
        <div className="hidden lg:block w-72 px-6 relative z-20">
          <DesignSidebar />
        </div>

        {/* CONTENT */}
        <div className="flex-1 px-4 sm:px-6 md:px-10 lg:px-14 max-w-5xl mx-auto pb-24 relative z-20">
          {/* HEADER */}
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-blue-50 border border-blue-200 rounded-full mb-6 shadow-md">
              <ShieldCheck className="w-6 h-6 text-[#3B82F6]" />
              <span className="text-sm font-bold text-[#3B82F6]">
                {t("design.guarantees.intro")}
              </span>
              <Sparkles className="w-4 h-4 text-[#38BDF8]" />
            </div>

            <h1
              className="
              text-4xl sm:text-5xl md:text-6xl lg:text-7xl
              font-extrabold mb-8
              bg-gradient-to-r from-[#3B82F6] via-[#38BDF8] to-[#60A5FA]
              bg-clip-text text-transparent leading-tight
            "
            >
              {t("design.guarantees.title")}
            </h1>
          </motion.div>

          {/* FIRST BLOCK */}
          <motion.div
            className={`
              mt-10 p-8 rounded-3xl border-2 border-blue-100 shadow-xl
              ${isMobile ? "bg-white/95" : "bg-white/80 backdrop-blur-xl"}
            `}
            initial={isMobile ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="space-y-6">
              {paragraphs.slice(0, 3).map((p, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 mt-2 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#38BDF8]" />
                  <p className="text-lg text-gray-800 font-medium">{p}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* SECTION TITLE */}
          <motion.div
            className="mt-16 text-center"
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-blue-50 border border-blue-200 rounded-2xl shadow">
              <Sparkles className="w-6 h-6 text-[#3B82F6]" />
              <p className="text-xl font-bold text-gray-800">{paragraphs[3]}</p>
              <Sparkles className="w-6 h-6 text-[#38BDF8]" />
            </div>
          </motion.div>

          {/* GUARANTEE CARDS */}
          <div className="space-y-10 mt-12">
            {[4, 5].map((i, index) => (
              <motion.div
                key={i}
                className={`
                  p-8 rounded-3xl border-2 border-blue-100 shadow-xl relative overflow-hidden
                  ${isMobile ? "bg-white/95" : "bg-white/80 backdrop-blur-xl"}
                `}
                initial={isMobile ? false : { opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.15 }}
              >
                <div className="absolute top-4 left-4 w-10 h-10 bg-gradient-to-br from-[#3B82F6] to-[#38BDF8] rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
                  {index + 1}
                </div>

                <p className="text-lg font-medium text-gray-800 mt-6">
                  {paragraphs[i].replace(/^\d+.\s*/, "")}
                </p>
              </motion.div>
            ))}
          </div>

          {/* FINAL SECTION */}
          <motion.div
            className={`
              mt-12 p-10 rounded-3xl border-2 border-blue-100 shadow-xl text-center
              ${isMobile ? "bg-white/95" : "bg-white/80 backdrop-blur-xl"}
            `}
            initial={isMobile ? false : { opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            {paragraphs.slice(6, 9).map((p, i) => (
              <div key={i} className="mb-6">
                <p className="text-xl font-bold text-gray-800">{p}</p>
                {i < 2 && (
                  <div className="w-16 h-0.5 bg-blue-300 mx-auto mt-3" />
                )}
              </div>
            ))}
          </motion.div>

          {/* CTA BUTTON */}
          <div className="text-center mt-12">
            <motion.button
              onClick={() => setShowPopup(true)}
              className="
                px-10 py-5 rounded-full text-white font-bold text-lg
                bg-gradient-to-r from-[#3B82F6] to-[#38BDF8]
                shadow-xl hover:shadow-2xl flex items-center gap-3 mx-auto
              "
              whileHover={isMobile ? {} : { scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("design.guarantees.cta")}
              <ArrowRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
}
