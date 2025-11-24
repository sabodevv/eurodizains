import { motion } from "framer-motion";
import RepairsSidebar from "../../components/RepairsSidebar";
import { useTranslation } from "react-i18next";
import { ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";
import ContactPopup from "../../components/ContactPopup";

export default function RepairsHome() {
  const { t } = useTranslation();
  const [showPopup, setShowPopup] = useState(false);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <>
      <ContactPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />

      <div className="pt-24 md:pt-28 flex relative overflow-hidden min-h-screen">
        {/* BACKGROUND */}
        <div className="absolute inset-0 -z-10">
          {/* Desktop */}
          {!isMobile && (
            <>
              <div className="absolute top-40 right-20 w-[28rem] h-[28rem] bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-40 left-20 w-[22rem] h-[22rem] bg-cyan-500/10 rounded-full blur-3xl"></div>
            </>
          )}

          {/* Mobile (такой же blur как desktop, только меньшие размеры) */}
          {isMobile && (
            <>
              <div className="absolute top-24 right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-16 left-10 w-56 h-56 bg-cyan-500/10 rounded-full blur-3xl"></div>
            </>
          )}
        </div>

        {/* Sidebar */}
        <div className="hidden md:block w-72 px-6">
          <RepairsSidebar />
        </div>

        {/* CONTENT */}
        <div className="flex-1 px-4 sm:px-6 md:px-14 max-w-5xl mx-auto pb-20 relative z-20">
          {/* HEADER */}
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 25 }}
            animate={isMobile ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <motion.div
              initial={isMobile ? false : { opacity: 0, scale: 0.9 }}
              animate={isMobile ? {} : { opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, delay: 0.15 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-blue-50 border-2 border-blue-100 rounded-full mb-4 sm:mb-6"
            >
              <Sparkles className="w-4 h-4 text-[#3B82F6]" />
              <span className="text-xs sm:text-sm font-semibold text-[#3B82F6]">
                {t("repairs.home.badge")}
              </span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 bg-gradient-to-r from-[#3B82F6] via-[#38BDF8] to-[#60A5FA] bg-clip-text text-transparent leading-tight">
              {t("repairs.home.title")}
            </h1>
          </motion.div>

          {/* PARAGRAPHS */}
          <div className="space-y-6 sm:space-y-8 mt-6 sm:mt-8">
            {t("repairs.home.paragraphs", { returnObjects: true }).map(
              (text, i) => (
                <motion.p
                  key={i}
                  className="text-base sm:text-lg text-gray-700 leading-relaxed font-medium"
                  initial={isMobile ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.35,
                    delay: isMobile ? 0 : 0.15 + i * 0.1,
                  }}
                >
                  {text}
                </motion.p>
              )
            )}
          </div>

          {/* CTA */}
          <motion.div
            className="mt-10 sm:mt-12 text-center"
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            animate={isMobile ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.6 }}
          >
            <motion.button
              className="group relative px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-[#3B82F6] to-[#38BDF8] rounded-full text-white font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all overflow-hidden w-full sm:w-auto"
              whileHover={isMobile ? {} : { scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowPopup(true)}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {t("repairs.home.cta")}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </>
  );
}
