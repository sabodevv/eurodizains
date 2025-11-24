import { motion, AnimatePresence } from "framer-motion";
import DesignSidebar from "../../components/DesignSidebar";
import DesignSidebarMobile from "../../components/DesignSidebarMobile";
import ContactPopup from "../../components/ContactPopup";
import { useTranslation } from "react-i18next";
import { Briefcase, ZoomIn, X, ArrowRight, Menu } from "lucide-react";
import { useState } from "react";

export default function OfficeDesign() {
  const { t } = useTranslation();

  const [selectedImage, setSelectedImage] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [mobileSidebar, setMobileSidebar] = useState(false);

  const paragraphs = t("design.office.text", { returnObjects: true });

  const image = "/design/office/1.jpg";

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
        <div className="flex-1 px-4 sm:px-6 md:px-10 lg:px-14 max-w-5xl mx-auto pb-24 relative z-20">
          {/* HEADER */}
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 30 }}
            animate={isMobile ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-6">
              <Briefcase className="w-5 h-5 text-[#3B82F6]" />
              <span className="text-sm font-semibold text-[#3B82F6]">
                {t("design.office.intro")}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[#3B82F6] via-[#38BDF8] to-[#60A5FA] bg-clip-text text-transparent leading-tight">
              {t("design.office.title")}
            </h1>
          </motion.div>

          {/* PARAGRAPHS + IMAGE */}
          <div className="space-y-10 mt-12">
            {paragraphs.map((text, index) => (
              <motion.div
                key={index}
                initial={isMobile ? false : { opacity: 0, y: 25 }}
                animate={isMobile ? {} : { opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: isMobile ? 0 : 0.3 + index * 0.1,
                }}
              >
                <p className="text-lg text-gray-900 leading-relaxed font-medium mb-6">
                  {text}
                </p>

                {index === 0 && (
                  <motion.div
                    className="group relative rounded-3xl overflow-hidden border-2 border-blue-100 shadow-xl cursor-pointer"
                    whileHover={isMobile ? {} : { scale: 1.02, y: -6 }}
                    onClick={() => setSelectedImage(image)}
                  >
                    <img
                      src={image}
                      alt="Office Design"
                      className="w-full h-[300px] sm:h-[400px] md:h-[450px] object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {!isMobile && (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#3B82F6]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                          <div className="w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl">
                            <ZoomIn className="w-7 h-7 text-[#3B82F6]" />
                          </div>
                        </div>
                      </>
                    )}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA BUTTON */}
          <div className="text-center mt-16">
            <motion.button
              className="px-10 py-5 bg-gradient-to-r from-[#3B82F6] to-[#38BDF8] rounded-full text-white font-bold text-lg shadow-xl inline-flex items-center gap-2"
              whileHover={isMobile ? {} : { scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsPopupOpen(true)}
            >
              {t("design.office.cta")}
              <ArrowRight className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* FULLSCREEN IMAGE */}
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
