import { motion, AnimatePresence } from "framer-motion";
import DesignSidebar from "../../components/DesignSidebar";
import DesignSidebarMobile from "../../components/DesignSidebarMobile";
import ContactPopup from "../../components/ContactPopup";
import { useTranslation } from "react-i18next";
import {
  Sparkles,
  ListChecks,
  ArrowRight,
  ZoomIn,
  X,
  Menu,
} from "lucide-react";
import { useState } from "react";

export default function ClubDesign() {
  const { t } = useTranslation();

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [mobileSidebar, setMobileSidebar] = useState(false);

  const paragraphs = t("design.club.text", { returnObjects: true });
  const listItems = t("design.club.list", { returnObjects: true });

  const images = ["/design/club/club1.jpg", "/design/club/club2.jpg"];

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <>
      {/* POPUP */}
      <ContactPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />

      {/* MOBILE MENU BUTTON */}
      {isMobile && (
        <motion.button
          onClick={() => setMobileSidebar(true)}
          className="fixed top-20 left-4 z-40 w-14 h-14 bg-white/60 backdrop-blur-xl border border-white/40 shadow-xl rounded-2xl flex items-center justify-center active:scale-95"
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
        >
          <Menu className="w-6 h-6 text-[#3B82F6]" />
        </motion.button>
      )}

      {/* MOBILE SIDEBAR */}
      <DesignSidebarMobile
        isOpen={mobileSidebar}
        onClose={() => setMobileSidebar(false)}
      />

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
              <div className="absolute top-20 right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-xl" />
              <div className="absolute bottom-20 left-10 w-52 h-52 bg-cyan-500/10 rounded-xl blur-xl" />
            </>
          )}
        </div>

        {/* DESKTOP SIDEBAR */}
        <div className="hidden lg:block w-72 px-6 relative z-20">
          <DesignSidebar />
        </div>

        {/* MAIN CONTENT */}
        <div className="flex-1 px-4 sm:px-6 md:px-10 lg:px-14 max-w-5xl mx-auto pb-24 relative z-20">
          {/* HEADER */}
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 30 }}
            animate={isMobile ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-[#3B82F6]" />
              <span className="text-sm font-semibold text-[#3B82F6]">
                {t("design.club.intro")}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-[#3B82F6] via-[#38BDF8] to-[#60A5FA] bg-clip-text text-transparent leading-tight">
              {t("design.club.title")}
            </h1>
          </motion.div>

          {/* PHOTOS WITH ZOOM */}
          <div className="grid md:grid-cols-2 gap-6 mt-10">
            {images.map((src, i) => (
              <motion.div
                key={i}
                className="group relative overflow-hidden rounded-3xl shadow-xl border-2 border-blue-100 cursor-pointer"
                whileHover={isMobile ? {} : { scale: 1.02, y: -6 }}
                onClick={() => setSelectedImage(src)}
              >
                <img
                  src={src}
                  className="w-full h-[280px] sm:h-[340px] md:h-[420px] object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {!isMobile && (
                  <>
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                      <div className="w-16 h-16 bg-white/90 backdrop-blur-xl rounded-full flex items-center justify-center shadow-xl">
                        <ZoomIn className="w-7 h-7 text-[#3B82F6]" />
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>

          {/* TEXT PARAGRAPHS */}
          <div className="space-y-10 mt-12">
            {paragraphs.map((p, index) => (
              <motion.p
                key={index}
                initial={isMobile ? false : { opacity: 0, y: 30 }}
                animate={isMobile ? {} : { opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: isMobile ? 0 : 0.3 + index * 0.1,
                }}
                className="text-lg text-gray-700 leading-relaxed font-medium"
              >
                {p}
              </motion.p>
            ))}
          </div>

          {/* LIST BLOCK */}
          <motion.div
            className="mt-16 p-8 bg-white/80 backdrop-blur-xl rounded-3xl border-2 border-blue-100 shadow-xl"
            initial={isMobile ? false : { opacity: 0, y: 30 }}
            animate={isMobile ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <ListChecks className="w-7 h-7 text-[#3B82F6]" />
              {t("design.club.listTitle")}
            </h3>

            <ul className="grid md:grid-cols-2 gap-3">
              {listItems.map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 p-2 rounded-xl hover:bg-blue-50 transition-colors"
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">{t("design.club.contactText")}</p>

            <motion.button
              className="px-10 py-5 bg-gradient-to-r from-[#3B82F6] to-[#38BDF8] rounded-full text-white font-bold text-lg shadow-xl inline-flex items-center gap-2"
              whileHover={isMobile ? {} : { scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsPopupOpen(true)}
            >
              {t("design.club.cta")}
              <ArrowRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* FULLSCREEN ZOOM MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-[200] bg-black/90 backdrop-blur-sm flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              className="max-w-full max-h-[85vh] object-contain rounded-2xl shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
            />

            <motion.button
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white"
              whileHover={{ scale: 1.1, rotate: 90 }}
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
