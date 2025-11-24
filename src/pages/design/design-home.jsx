import { motion, AnimatePresence } from "framer-motion";
import DesignSidebar from "../../components/DesignSidebar.jsx";
import ContactPopup from "../../components/ContactPopup";
import { useTranslation } from "react-i18next";
import { ArrowRight, CheckCircle, Sparkles, X, ZoomIn } from "lucide-react";
import { useState } from "react";

export default function DesignHome() {
  const { t } = useTranslation();

  const [selectedImage, setSelectedImage] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const paragraphs = t("design.home.paragraphs", { returnObjects: true });
  const listItems = t("design.home.list", { returnObjects: true });
  const image = "/public/design/home/1.jpg";

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <>
      {/* POPUP */}
      <ContactPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />

      <div className="pt-20 md:pt-28 flex relative min-h-screen overflow-hidden">
        {/* 🎨 EXACT SAME BACKGROUND AS REPAIRSHOME */}
        <div className="absolute inset-0 -z-10">
          {/* Desktop */}
          {!isMobile && (
            <>
              <div className="absolute top-40 right-20 w-[28rem] h-[28rem] bg-blue-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-40 left-20 w-[22rem] h-[22rem] bg-cyan-500/10 rounded-full blur-3xl" />
            </>
          )}

          {/* Mobile — same shape, reduced blur */}
          {isMobile && (
            <>
              <div className="absolute top-24 right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-xl" />
              <div className="absolute bottom-16 left-10 w-52 h-52 bg-cyan-500/10 rounded-full blur-xl" />
            </>
          )}
        </div>

        {/* SIDEBAR */}
        <div className="hidden lg:block w-72 px-6 relative z-20">
          <DesignSidebar />
        </div>

        {/* CONTENT */}
        <div className="flex-1 px-4 sm:px-6 md:px-10 lg:px-14 max-w-5xl mx-auto pb-16 md:pb-20 relative z-20">
          {/* HEADER */}
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 30 }}
            animate={isMobile ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={isMobile ? false : { opacity: 0, scale: 0.9 }}
              animate={isMobile ? {} : { opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 bg-blue-50 border-2 border-blue-100 rounded-full mb-4 sm:mb-6"
            >
              <Sparkles className="w-4 h-4 text-[#3B82F6]" />
              <span className="text-xs sm:text-sm font-semibold text-[#3B82F6]">
                {t("design.home.intro")}
              </span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 bg-gradient-to-r from-[#3B82F6] via-[#38BDF8] to-[#60A5FA] bg-clip-text text-transparent leading-tight">
              {t("design.home.title")}
            </h1>
          </motion.div>

          {/* PARAGRAPHS + IMAGE */}
          <div className="space-y-6 sm:space-y-10 mt-8 sm:mt-12">
            {paragraphs.map((text, index) => (
              <motion.div
                key={index}
                initial={isMobile ? false : { opacity: 0, y: 30 }}
                animate={isMobile ? {} : { opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: isMobile ? 0 : 0.3 + index * 0.1,
                }}
              >
                <div className="relative">
                  <div className="absolute -left-2 sm:-left-4 top-2 w-1 h-4 sm:h-6 bg-gradient-to-b from-[#3B82F6] to-[#38BDF8] rounded-full" />
                  <p className="text-base sm:text-lg text-gray-900 leading-relaxed mb-6 sm:mb-8 font-semibold">
                    {text}
                  </p>
                </div>

                {index === 0 && (
                  <motion.div
                    className="group relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all border-2 border-blue-100 cursor-pointer"
                    whileHover={isMobile ? {} : { y: -8, scale: 1.01 }}
                    transition={{ duration: 0.4 }}
                    onClick={() => setSelectedImage(image)}
                  >
                    <img
                      src={image}
                      alt="Interior design example"
                      className="w-full h-[300px] sm:h-[400px] md:h-[450px] object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {!isMobile && (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#3B82F6]/60 via-[#3B82F6]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl">
                            <ZoomIn className="w-6 h-6 sm:w-8 sm:h-8 text-[#3B82F6]" />
                          </div>
                        </div>
                      </>
                    )}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* LIST OF SERVICES */}
          <motion.div
            className={`mt-10 sm:mt-16 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border-2 border-blue-100 shadow-xl ${
              isMobile ? "bg-white/95" : "bg-white/80 backdrop-blur-xl"
            }`}
            initial={isMobile ? false : { opacity: 0, y: 30 }}
            animate={isMobile ? {} : { opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
              <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-[#3B82F6]" />
              {t("design.home.listTitle")}
            </h3>

            <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
              {listItems.map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-blue-50 transition-colors"
                  initial={isMobile ? false : { opacity: 0, x: -20 }}
                  animate={isMobile ? {} : { opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: isMobile ? 0 : 0.9 + i * 0.05,
                  }}
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-[#3B82F6] to-[#38BDF8] rounded-full mt-2 flex-shrink-0" />
                  <span className="text-gray-900 font-semibold text-sm sm:text-base">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA BUTTON */}
          <motion.div
            className="mt-8 sm:mt-12 text-center"
            initial={isMobile ? false : { opacity: 0, y: 20 }}
            animate={isMobile ? {} : { opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <motion.button
              className="group relative px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-[#3B82F6] to-[#38BDF8] rounded-full text-white font-bold text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all overflow-hidden w-full sm:w-auto"
              whileHover={isMobile ? {} : { scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowPopup(true)}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {t("design.home.cta")}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* FULLSCREEN IMAGE MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors z-10"
              whileHover={isMobile ? {} : { scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6" />
            </motion.button>

            <motion.img
              src={selectedImage}
              alt="Full size"
              className="max-w-full max-h-[85vh] sm:max-h-[90vh] object-contain rounded-xl sm:rounded-2xl shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
