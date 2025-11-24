import { motion, AnimatePresence } from "framer-motion";
import DesignSidebar from "../../components/DesignSidebar";
import { useTranslation } from "react-i18next";
import { Sparkles, ZoomIn, X } from "lucide-react";
import { useState } from "react";

export default function Decoration() {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);

  const paragraphs = t("design.decoration.text", { returnObjects: true });
  const steps = t("design.decoration.steps", { returnObjects: true });

  const image = "/public/design/decoration/1.jpg";

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
        <div className="flex-1 px-6 md:px-14 max-w-5xl mx-auto pb-20">
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
                {t("design.decoration.intro")}
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-[#3B82F6] via-[#38BDF8] to-[#60A5FA] bg-clip-text text-transparent leading-tight">
              {t("design.decoration.title")}
            </h1>
          </motion.div>

          {/* Paragraphs */}
          <div className="space-y-10 mt-12">
            {paragraphs.map((text, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                className="text-lg text-gray-700 leading-relaxed font-medium"
              >
                {text}
              </motion.p>
            ))}

            {/* IMAGE WITH MODAL ZOOM */}
            <motion.div
              className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all border-2 border-blue-100 cursor-pointer"
              whileHover={{ scale: 1.01, y: -4 }}
              transition={{ duration: 0.4 }}
              onClick={() => setSelectedImage(image)}
            >
              <img
                src={image}
                alt="Decoration example"
                className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#3B82F6]/60 via-[#3B82F6]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl">
                  <ZoomIn className="w-8 h-8 text-[#3B82F6]" />
                </div>
              </div>
            </motion.div>
          </div>

          {/* Steps */}
          <motion.div
            className="mt-16 p-8 bg-white/80 backdrop-blur-xl rounded-3xl border-2 border-blue-100 shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              {t("design.decoration.stepsTitle")}
            </h3>

            <ul className="space-y-4">
              {steps.map((step, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3 p-2 rounded-xl hover:bg-blue-50 transition-colors"
                >
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <span className="text-gray-700 font-medium">{step}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>

      {/* FULLSCREEN MODAL */}
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
            >
              <X className="w-6 h-6" />
            </motion.button>

            <motion.img
              src={selectedImage}
              alt="Zoom"
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
