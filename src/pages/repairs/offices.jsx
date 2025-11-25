import { motion, AnimatePresence } from "framer-motion";
import RepairsSidebar from "../../components/RepairsSidebar";
import RepairsSidebarMobile from "../../components/RepairsSidebarMobile"; // Мобильная версия бокового меню
import ContactPopup from "../../components/ContactPopup"; // ✅ added
import { useTranslation } from "react-i18next";
import {
  ArrowRight,
  CheckCircle,
  Sparkles,
  X,
  ZoomIn,
  LayoutGrid,
} from "lucide-react";
import { useState } from "react";

export default function Offices() {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [mobileSidebar, setMobileSidebar] = useState(false); // добавлена переменная для мобильного меню

  const paragraphs = t("repairs.offices.text", { returnObjects: true });
  const listItems = t("repairs.offices.list", { returnObjects: true });

  const images = [
    "/repairs/offices/1.jpg",
    "/repairs/offices/2.jpg",
    "/repairs/offices/3.jpg",
  ];

  const imagePositions = [1, 3, 5];

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <>
      {/* CONTACT POPUP */}
      <ContactPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
      />{" "}
      {/* ✅ added */}
      {/* Мобильная версия бокового меню */}
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
      <div className="pt-28 flex relative overflow-hidden">
        {/* BACKGROUND */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        {/* SIDEBAR DESKTOP */}
        <div className="hidden md:block w-72 px-6">
          <RepairsSidebar />
        </div>

        {/* MAIN CONTENT */}
        <div className="flex-1 px-6 md:px-14 max-w-5xl mx-auto pb-24 relative z-20">
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
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border-2 border-blue-100 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-[#3B82F6]" />
              <span className="text-sm font-semibold text-[#3B82F6]">
                {t("repairs.offices.free")}
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-[#3B82F6] via-[#38BDF8] to-[#60A5FA] bg-clip-text text-transparent leading-tight">
              {t("repairs.offices.title")}
            </h1>
          </motion.div>

          {/* TEXT + IMAGES */}
          <div className="space-y-10 mt-12">
            {paragraphs.map((text, index) => (
              <motion.div
                key={index}
                initial={isMobile ? false : { opacity: 0, y: 30 }}
                animate={isMobile ? {} : { opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              >
                <p className="text-lg text-gray-700 leading-relaxed mb-8 font-medium">
                  {text}
                </p>

                {imagePositions.includes(index) && (
                  <motion.div
                    className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all border-2 border-blue-100 cursor-pointer"
                    whileHover={isMobile ? {} : { y: -8, scale: 1.01 }}
                    transition={{ duration: 0.4 }}
                    onClick={() =>
                      setSelectedImage(images[imagePositions.indexOf(index)])
                    }
                  >
                    <img
                      src={images[imagePositions.indexOf(index)]}
                      alt=""
                      className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Убираем синий эффект на мобильной версии */}
                    {!isMobile && (
                      <div className="absolute inset-0 bg-gradient-to-t from-[#3B82F6]/60 via-[#3B82F6]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                    )}

                    {/* Для мобильной версии без увеличения и с эффектом увеличения для десктопа */}
                    {!isMobile && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl">
                          <ZoomIn className="w-8 h-8 text-[#3B82F6]" />
                        </div>
                      </div>
                    )}
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* LIST */}
          <motion.div
            className="mt-16 p-8 bg-white/80 backdrop-blur-xl rounded-3xl border-2 border-blue-100 shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <CheckCircle className="w-7 h-7 text-[#3B82F6]" />
              {t("repairs.offices.listTitle")}
            </h3>

            <ul className="grid md:grid-cols-2 gap-3">
              {listItems.map((item, i) => (
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <motion.button
              className="group relative px-10 py-5 bg-gradient-to-r from-[#3B82F6] to-[#38BDF8] rounded-full text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-all overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowPopup(true)}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {t("repairs.offices.cta")}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>
      {/* Modal */}
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
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-colors z-10"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </motion.button>

            <motion.img
              src={selectedImage}
              alt="Full size"
              className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
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
