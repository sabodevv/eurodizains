import { motion, AnimatePresence } from "framer-motion";
import RepairsSidebar from "../../components/RepairsSidebar";
import RepairsSidebarMobile from "../../components/RepairsSidebarMobile"; // Мобильная версия бокового меню
import ContactPopup from "../../components/ContactPopup"; // ✅ добавлено
import { useTranslation } from "react-i18next";
import {
  CheckCircle,
  ArrowRight,
  Sparkles,
  Shield,
  Clock,
  ZoomIn,
  X,
  LayoutGrid,
} from "lucide-react";
import { useState } from "react";

export default function Apartments() {
  const { t } = useTranslation();
  const [selectedImage, setSelectedImage] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [mobileSidebar, setMobileSidebar] = useState(false);

  const advantages = t("repairs.apartments.advantages.list", {
    returnObjects: true,
  });
  const guarantees = t("repairs.apartments.guarantees.list", {
    returnObjects: true,
  });
  const steps = t("repairs.apartments.steps.list", { returnObjects: true });

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <>
      {/* CONTACT POPUP */}
      <ContactPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />

      {/* MOBILE SIDEBAR BUTTON */}
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

      {/* MAIN WRAPPER */}
      <div className="pt-28 flex relative overflow-hidden">
        {/* BACKGROUND */}
        <div className="absolute inset-0 -z-10">
          {/* Мобильные фоны */}
          {isMobile ? (
            <>
              <div className="absolute top-24 right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-16 left-10 w-56 h-56 bg-cyan-500/10 rounded-full blur-3xl"></div>
            </>
          ) : (
            <>
              <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="absolute bottom-40 left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl"></div>
            </>
          )}
        </div>

        {/* SIDEBAR DESKTOP */}
        <div className="hidden md:block w-72 px-6 relative z-20">
          <RepairsSidebar />
        </div>

        {/* CONTENT */}
        <div className="flex-1 px-6 md:px-14 max-w-5xl mx-auto pb-24 relative z-20">
          {/* HEADER */}
          <motion.div
            initial={isMobile ? { opacity: 1 } : { opacity: 0, y: 30 }}
            animate={isMobile ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[#3B82F6] via-[#38BDF8] to-[#60A5FA] bg-clip-text text-transparent leading-tight">
              {t("repairs.apartments.title")}
            </h1>
          </motion.div>

          {/* Intro */}
          <div className="space-y-6 mb-16">
            {t("repairs.apartments.text", { returnObjects: true }).map(
              (p, i) => (
                <motion.div
                  key={i}
                  initial={isMobile ? { opacity: 1 } : { opacity: 0, y: 30 }}
                  animate={isMobile ? { opacity: 1 } : { opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1, duration: 0.6 }}
                  className="relative"
                >
                  <div className="absolute -left-4 top-2 w-1 h-6 bg-gradient-to-b from-[#3B82F6] to-[#38BDF8] rounded-full"></div>
                  <p className="text-lg text-gray-700 font-medium leading-relaxed">
                    {p}
                  </p>
                </motion.div>
              )
            )}
          </div>

          {/* Advantages */}
          <motion.div
            className="group relative p-8 bg-white/80 backdrop-blur-xl border-2 border-blue-100 rounded-3xl shadow-xl hover:shadow-2xl transition-all mb-12"
            initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            animate={isMobile ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#3B82F6]/20 to-[#38BDF8]/10 rounded-xl flex items-center justify-center">
                  <CheckCircle className="text-[#3B82F6] w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  {t("repairs.apartments.advantages.title")}
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {advantages.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={isMobile ? { opacity: 1 } : { opacity: 0, x: -20 }}
                    animate={isMobile ? { opacity: 1 } : { opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.05 }}
                    className="flex gap-3 items-start p-3 rounded-xl hover:bg-blue-50 transition-colors"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-[#3B82F6] to-[#38BDF8] rounded-full mt-2" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Guarantees */}
          <motion.div
            className="group relative p-8 bg-white/80 backdrop-blur-xl border-2 border-blue-100 rounded-3xl shadow-xl hover:shadow-2xl transition-all mb-12"
            initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            animate={isMobile ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
          >
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#38BDF8]/20 to-[#3B82F6]/10 rounded-xl flex items-center justify-center">
                  <Shield className="text-[#38BDF8] w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  {t("repairs.apartments.guarantees.title")}
                </h3>
              </div>

              <div className="space-y-3">
                {guarantees.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={isMobile ? { opacity: 1 } : { opacity: 0, x: -20 }}
                    animate={isMobile ? { opacity: 1 } : { opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + i * 0.05 }}
                    className="flex gap-3 items-start p-3 rounded-xl hover:bg-blue-50 transition-colors"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-[#38BDF8] to-[#60A5FA] rounded-full mt-2" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Steps */}
          <motion.div
            className="group relative p-8 bg-white/80 backdrop-blur-xl border-2 border-blue-100 rounded-3xl shadow-xl hover:shadow-2xl transition-all mb-12"
            initial={isMobile ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            animate={isMobile ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
          >
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#3B82F6]/20 to-[#38BDF8]/10 rounded-xl flex items-center justify-center">
                  <Clock className="text-[#3B82F6] w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">
                  {t("repairs.apartments.steps.title")}
                </h3>
              </div>

              <div className="space-y-4">
                {steps.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={isMobile ? { opacity: 1 } : { opacity: 0, x: -20 }}
                    animate={isMobile ? { opacity: 1 } : { opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + i * 0.05 }}
                    className="flex gap-4 items-start p-4 rounded-xl hover:bg-blue-50 transition-colors"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-[#3B82F6] to-[#38BDF8] rounded-full flex items-center justify-center shadow-md">
                      <span className="text-white font-bold text-sm">
                        {i + 1}
                      </span>
                    </div>
                    <span className="text-gray-700 font-medium pt-1">
                      {item}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            className="group relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all border-2 border-blue-100 cursor-pointer mb-16"
            onClick={() => setSelectedImage("/repairs/apartments/1.jpg")}
            initial={isMobile ? { opacity: 1 } : { opacity: 0, y: 30 }}
            animate={isMobile ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <img
              src="/repairs/apartments/1.jpg"
              alt="Apartment repair"
              className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </motion.div>

          {/* CTA — OPENS POPUP */}
          <motion.div
            className="text-center"
            initial={isMobile ? { opacity: 1 } : { opacity: 0, y: 20 }}
            animate={isMobile ? { opacity: 1 } : { opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
          >
            <button
              className="group relative px-10 py-5 bg-gradient-to-r from-[#3B82F6] to-[#38BDF8] rounded-full text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-all overflow-hidden"
              onClick={() => setShowPopup(true)} // ✅ open popup
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                {t("repairs.apartments.cta")}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          </motion.div>
        </div>
      </div>

      {/* FULLSCREEN IMAGE MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white z-10">
              <X className="w-6 h-6" />
            </button>

            <img
              src={selectedImage}
              alt="Full size"
              className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
            />
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
