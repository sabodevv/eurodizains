import { motion } from "framer-motion";
import DesignSidebar from "../../components/DesignSidebar";
import DesignSidebarMobile from "../../components/DesignSidebarMobile";
import ContactPopup from "../../components/ContactPopup";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Layers, Sparkles, ArrowRight, Menu } from "lucide-react";

export default function AuthorSupervision() {
  const { t } = useTranslation();

  const [showPopup, setShowPopup] = useState(false);
  const [mobileSidebar, setMobileSidebar] = useState(false);

  const paragraphs = t("design.supervision.text", { returnObjects: true });
  const structure = t("design.supervision.list", { returnObjects: true });

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
            fixed top-20 left-4 z-40
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
          <Menu className="w-6 h-6 text-[#3B82F6] relative z-10" />
        </motion.button>
      )}

      {/* MOBILE SIDEBAR */}
      <DesignSidebarMobile
        isOpen={mobileSidebar}
        onClose={() => setMobileSidebar(false)}
      />

      {/* MAIN PAGE */}
      <div className="pt-28 flex relative min-h-[100dvh] overflow-hidden">
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
        <div className="hidden lg:block w-72 px-6 relative z-20">
          <DesignSidebar />
        </div>

        {/* CONTENT */}
        <div className="flex-1 px-4 sm:px-6 md:px-10 lg:px-14 max-w-5xl mx-auto pb-20 relative z-20">
          {/* HEADER */}
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 30 }}
            animate={isMobile ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-6">
              <Sparkles className="w-5 h-5 text-[#3B82F6]" />
              <span className="text-sm font-semibold text-[#3B82F6]">
                {t("design.supervision.intro")}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-[#3B82F6] via-[#38BDF8] to-[#60A5FA] bg-clip-text text-transparent leading-tight">
              {t("design.supervision.title")}
            </h1>
          </motion.div>

          {/* PARAGRAPHS */}
          <div className="space-y-8 mt-10">
            {paragraphs.map((text, index) => (
              <motion.p
                key={index}
                initial={isMobile ? false : { opacity: 0, y: 30 }}
                animate={isMobile ? {} : { opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: isMobile ? 0 : 0.3 + index * 0.1,
                }}
                className="text-lg text-gray-900 leading-relaxed font-semibold"
              >
                {text}
              </motion.p>
            ))}
          </div>

          {/* STRUCTURE LIST */}
          <motion.div
            className={`mt-16 p-8 rounded-3xl border-2 border-blue-100 shadow-xl ${
              isMobile ? "bg-white/95" : "bg-white/80 backdrop-blur-xl"
            }`}
            initial={isMobile ? false : { opacity: 0, y: 30 }}
            animate={isMobile ? {} : { opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Layers className="w-7 h-7 text-[#3B82F6]" />
              {t("design.supervision.listTitle")}
            </h3>

            <ul className="grid sm:grid-cols-2 gap-4">
              {structure.map((item, i) => (
                <motion.li
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-blue-50 transition"
                  initial={isMobile ? false : { opacity: 0, x: -20 }}
                  animate={isMobile ? {} : { opacity: 1, x: 0 }}
                  transition={{ delay: 0.9 + i * 0.05 }}
                >
                  <div className="w-2 h-2 mt-2 bg-gradient-to-r from-[#3B82F6] to-[#38BDF8] rounded-full" />
                  <span className="text-gray-900 font-semibold">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* CTA */}
          <div className="text-center mt-12">
            <motion.button
              className="px-10 py-5 bg-gradient-to-r from-[#3B82F6] to-[#38BDF8] rounded-full text-white font-bold text-lg shadow-xl hover:shadow-2xl transition relative inline-flex items-center gap-2"
              whileHover={isMobile ? {} : { scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowPopup(true)}
            >
              {t("design.supervision.cta")}
              <ArrowRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
}
