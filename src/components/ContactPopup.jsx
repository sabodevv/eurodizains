import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function ContactPopup({ isOpen, onClose }) {
  const { t } = useTranslation();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[200] bg-black/50 backdrop-blur-sm flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-white rounded-3xl shadow-2xl p-8 relative w-[90%] max-w-md border border-blue-100"
            initial={{ scale: 0.8, opacity: 0, y: 40 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 40 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              className="absolute top-4 right-4 p-2 bg-blue-50 rounded-full hover:bg-blue-100 transition"
              onClick={onClose}
            >
              <X className="w-5 h-5 text-blue-600" />
            </button>

            <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
              {t("contactPopup.title")}
            </h2>

            <div className="space-y-4">
              <div className="flex items-center gap-3 p-3 bg-blue-50/60 rounded-xl border border-blue-100">
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

              <div className="flex items-center gap-3 p-3 bg-blue-50/60 rounded-xl border border-blue-100">
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

            <button
              onClick={onClose}
              className="w-full mt-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold shadow-lg hover:shadow-xl"
            >
              {t("contactPopup.close")}
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
