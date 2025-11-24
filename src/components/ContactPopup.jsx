import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ContactPopup({ isOpen, onClose }) {
  const { t } = useTranslation();

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[200] bg-black/40 backdrop-blur-sm flex items-center justify-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className={`
              bg-white rounded-2xl shadow-2xl relative w-full max-w-md border border-blue-100
              ${isMobile ? "p-6" : "p-8"}
            `}
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.25 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="absolute top-3 right-3 p-2 bg-blue-50 rounded-full hover:bg-blue-100 transition active:scale-95"
              onClick={onClose}
            >
              <X className="w-5 h-5 text-blue-600" />
            </button>

            {/* Title */}
            <h2 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-5">
              {t("contactPopup.title")}
            </h2>

            {/* Items */}
            <div className="space-y-3">
              {/* Phone */}
              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl border border-blue-100">
                <Phone className="w-6 h-6 text-blue-600" />
                <div>
                  <p className="text-xs text-gray-500">
                    {t("contactPopup.phoneLabel")}
                  </p>
                  <p className="font-semibold text-gray-800">
                    {t("contactPopup.phone")}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-xl border border-blue-100">
                <Mail className="w-6 h-6 text-blue-600" />
                <div>
                  <p className="text-xs text-gray-500">
                    {t("contactPopup.emailLabel")}
                  </p>
                  <p className="font-semibold text-gray-800">
                    {t("contactPopup.email")}
                  </p>
                </div>
              </div>
            </div>

            {/* Close button bottom */}
            <button
              onClick={onClose}
              className="
                w-full mt-6 py-3 rounded-full 
                bg-gradient-to-r from-blue-600 to-cyan-500 
                text-white font-bold shadow-lg hover:shadow-xl 
                active:scale-95 transition
              "
            >
              {t("contactPopup.close")}
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
