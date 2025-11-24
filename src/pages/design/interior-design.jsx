import { motion, AnimatePresence } from "framer-motion";
import DesignSidebar from "../../components/DesignSidebar";
import ContactPopup from "../../components/ContactPopup"; // <-- добавлено
import { useTranslation } from "react-i18next";
import { Sparkles, ZoomIn, X, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function InteriorDesign() {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);

  // popup
  const [isPopupOpen, setIsPopupOpen] = useState(false); // <-- добавлено

  const paragraphs = t("design.interior.text", { returnObjects: true });

  // 1 photo
  const image = "/public/design/interior/1.jpg";

  return (
    <>
      <div className="pt-28 flex relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        {/* Sidebar */}
        <div className="hidden md:block w-72 px-6">
          <DesignSidebar />
        </div>

        {/* Content */}
        <div className="flex-1 px-6 md:px-14 max-w-5xl mx-auto pb-24">
          {/* Header */}
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
              <Sparkles className="w-4 h-4 text-[#3B82F6]" />
              <span className="text-sm font-semibold text-[#3B82F6]">
                {t("design.interior.intro")}
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-[#3B82F6] via-[#38BDF8] to-[#60A5FA] bg-clip-text text-transparent leading-tight">
              {t("design.interior.title")}
            </h1>
          </motion.div>

          {/* Paragraphs + Image */}
          <div className="space-y-10 mt-12">
            {paragraphs.map((text, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              >
                <p className="text-lg text-gray-700 leading-relaxed font-medium mb-6">
                  {text}
                </p>

                {/* Insert image after first paragraph */}
                {index === 0 && (
                  <motion.div
                    className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all border-2 border-blue-100 cursor-pointer"
                    whileHover={{ y: -8, scale: 1.01 }}
                    transition={{ duration: 0.4 }}
                    onClick={() => setSelectedImage(image)}
                  >
                    <img
                      src={image}
                      alt="Interior design example"
                      className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#3B82F6]/60 via-[#3B82F6]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl">
                        <ZoomIn className="w-8 h-8 text-[#3B82F6]" />
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* CTA BUTTON */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <motion.button
              className="group relative px-10 py-5 bg-gradient-to-r from-[#3B82F6] to-[#38BDF8] rounded-full text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-all overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsPopupOpen(true)} // <-- popup open
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {t("design.interior.cta")}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>

              <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB] to-[#0EA5E9] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Fullscreen Modal */}
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
              alt="Full image"
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

      {/* CONTACT POPUP */}
      <ContactPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </>
  );
}
