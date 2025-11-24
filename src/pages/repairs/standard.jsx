import { motion, AnimatePresence } from "framer-motion";
import RepairsSidebar from "../../components/RepairsSidebar";
import { useTranslation } from "react-i18next";
import { ArrowRight, CheckCircle, Sparkles, X, ZoomIn } from "lucide-react";
import { useState } from "react";
import ContactPopup from "../../components/ContactPopup";

export default function Standard() {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);

  // POPUP CONTACT
  const [showPopup, setShowPopup] = useState(false);

  const paragraphs = [
    t("repairs.standard.p1"),
    t("repairs.standard.p2"),
    t("repairs.standard.p3"),
    t("repairs.standard.p4"),
    t("repairs.standard.p5"),
    t("repairs.standard.p6"),
    t("repairs.standard.p7"),
  ];

  const images = [
    "/repairs/standart/1.jpg",
    "/repairs/standart/2.jpg",
    "/repairs/standart/3.jpg",
    "/repairs/standart/4.jpg",
  ];

  const imagePositions = [0, 1, 3, 5];
  const listItems = t("repairs.standard.list", { returnObjects: true });

  return (
    <>
      {/* POPUP */}
      <ContactPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />

      <div className="pt-28 flex relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        {/* Sidebar */}
        <div className="hidden md:block w-72 px-6">
          <RepairsSidebar />
        </div>

        {/* Main content */}
        <div className="flex-1 px-6 md:px-14 max-w-5xl mx-auto pb-20">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border-2 border-blue-100 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 text-[#3B82F6]" />
              <span className="text-sm font-semibold text-[#3B82F6]">
                {t("repairs.standard.free")}
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-[#3B82F6] via-[#38BDF8] to-[#60A5FA] bg-clip-text text-transparent leading-tight">
              {t("repairs.standard.title")}
            </h1>
          </motion.div>

          {/* Text + IMAGES */}
          <div className="space-y-12 mt-10">
            {paragraphs.map((text, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <p className="text-lg text-gray-700 leading-relaxed mb-6 font-medium">
                  {text}
                </p>

                {imagePositions.includes(index) && (
                  <motion.div
                    className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl border-2 border-blue-100 cursor-pointer"
                    whileHover={{ y: -6, scale: 1.01 }}
                    onClick={() =>
                      setSelectedImage(images[imagePositions.indexOf(index)])
                    }
                  >
                    <img
                      src={images[imagePositions.indexOf(index)]}
                      className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                      <div className="w-16 h-16 bg-white/90 backdrop-blur-lg rounded-full shadow-2xl flex items-center justify-center">
                        <ZoomIn className="w-8 h-8 text-[#3B82F6]" />
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Features list */}
          <motion.div
            className="mt-16 p-8 bg-white/80 backdrop-blur-xl rounded-3xl border-2 border-blue-100 shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-gray-800">
              <CheckCircle className="w-7 h-7 text-[#3B82F6]" />
              {t("repairs.standard.listTitle")}
            </h3>

            <div className="grid md:grid-cols-2 gap-4">
              {listItems.map((item, i) => (
                <div key={i} className="flex items-start gap-3 p-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-[#3B82F6] to-[#38BDF8] rounded-full mt-2" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA BUTTON — WITH POPUP */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <motion.button
              className="group relative px-10 py-5 bg-gradient-to-r from-[#3B82F6] to-[#38BDF8] rounded-full text-white font-bold text-lg shadow-xl hover:shadow-2xl overflow-hidden"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowPopup(true)}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {t("repairs.standard.cta")}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB] to-[#0EA5E9] opacity-0 group-hover:opacity-100 transition" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* IMAGE FULLSCREEN MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.img
              src={selectedImage}
              className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            />

            <button
              className="absolute top-6 right-6 w-12 h-12 bg-white/20 rounded-full backdrop-blur-md flex items-center justify-center text-white"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
