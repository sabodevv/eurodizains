import { motion, AnimatePresence } from "framer-motion";
import DesignSidebar from "../../components/DesignSidebar.jsx";
import DesignSidebarMobile from "../../components/DesignSidebarMobile.jsx";
import ContactPopup from "../../components/ContactPopup";
import { useTranslation } from "react-i18next";
import {
  ArrowRight,
  CheckCircle,
  Sparkles,
  X,
  ZoomIn,
  Menu,
} from "lucide-react";
import { useState } from "react";

export default function Visualization3D() {
  const { t } = useTranslation();

  const [selectedImage, setSelectedImage] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [mobileSidebar, setMobileSidebar] = useState(false);

  const paragraphs = t("design.visualization3d.text", { returnObjects: true });
  const images = t("design.visualization3d.images", { returnObjects: true });

  const imagePositions = [1, 4, 6]; // где вставлять картинки
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

      {/* === MOBILE SIDEBAR === */}
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
                {t("design.visualization3d.intro")}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-[#3B82F6] via-[#38BDF8] to-[#60A5FA] bg-clip-text text-transparent leading-tight">
              {t("design.visualization3d.title")}
            </h1>
          </motion.div>

          {/* TEXT + IMAGES */}
          <div className="space-y-10 mt-10">
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
                <p className="text-lg text-gray-900 leading-relaxed font-semibold mb-6">
                  {text}
                </p>

                {/* IMAGE BLOCK */}
                {imagePositions.includes(index) && (
                  <motion.div
                    className="group relative rounded-3xl overflow-hidden shadow-xl border-2 border-blue-100 cursor-pointer"
                    whileHover={isMobile ? {} : { scale: 1.02, y: -8 }}
                    onClick={() =>
                      setSelectedImage(images[imagePositions.indexOf(index)])
                    }
                  >
                    <img
                      src={images[imagePositions.indexOf(index)]}
                      className="w-full h-[320px] sm:h-[420px] md:h-[480px] object-cover transition-transform duration-700 group-hover:scale-110"
                      alt=""
                    />

                    {!isMobile && (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-t from-[#3B82F6]/60 via-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

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

          {/* LIST */}
          <motion.div
            className={`mt-16 p-8 rounded-3xl border-2 border-blue-100 shadow-xl ${
              isMobile ? "bg-white/95" : "bg-white/80 backdrop-blur-xl"
            }`}
            initial={isMobile ? false : { opacity: 0, y: 30 }}
            animate={isMobile ? {} : { opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <CheckCircle className="w-7 h-7 text-[#3B82F6]" />
              {t("design.visualization3d.listTitle")}
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              {t("design.visualization3d.list", { returnObjects: true }).map(
                (item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-3 p-3 rounded-xl hover:bg-blue-50 transition"
                    initial={isMobile ? false : { opacity: 0, x: -20 }}
                    animate={isMobile ? {} : { opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + i * 0.05 }}
                  >
                    <div className="w-2 h-2 mt-2 bg-gradient-to-r from-[#3B82F6] to-[#38BDF8] rounded-full" />
                    <span className="text-gray-900 font-semibold">{item}</span>
                  </motion.div>
                )
              )}
            </div>
          </motion.div>

          {/* CTA */}
          <div className="text-center mt-12">
            <motion.button
              className="px-10 py-5 bg-gradient-to-r from-[#3B82F6] to-[#38BDF8] rounded-full text-white font-bold text-lg shadow-xl hover:shadow-2xl transition relative inline-flex items-center gap-2"
              whileHover={isMobile ? {} : { scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowPopup(true)}
            >
              {t("design.visualization3d.cta")}
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
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
