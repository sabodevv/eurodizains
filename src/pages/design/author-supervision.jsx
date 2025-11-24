import { motion } from "framer-motion";
import DesignSidebar from "../../components/DesignSidebar";
import ContactPopup from "../../components/ContactPopup"; // ✅ popup added
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { Layers, Sparkles, ArrowRight } from "lucide-react";

export default function AuthorSupervision() {
  const { t } = useTranslation();

  // popup state
  const [showPopup, setShowPopup] = useState(false); // ✅

  const paragraphs = t("design.supervision.text", { returnObjects: true });
  const structure = t("design.supervision.list", { returnObjects: true });

  return (
    <div className="pt-28 flex relative overflow-hidden">
      {/* POPUP */}
      <ContactPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
      />{" "}
      {/* ✅ */}
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
              {t("design.supervision.intro")}
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-6xl font-extrabold mb-8 bg-gradient-to-r from-[#3B82F6] via-[#38BDF8] to-[#60A5FA] bg-clip-text text-transparent leading-tight">
            {t("design.supervision.title")}
          </h1>
        </motion.div>

        {/* Text Blocks */}
        <div className="space-y-10 mt-12">
          {paragraphs.map((text, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              className="text-lg text-gray-700 leading-relaxed font-medium"
            >
              {text}
            </motion.p>
          ))}
        </div>

        {/* Structure Section */}
        <motion.div
          className="mt-16 p-8 bg-white/80 backdrop-blur-xl rounded-3xl border-2 border-blue-100 shadow-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <Layers className="w-7 h-7 text-[#3B82F6]" />
            {t("design.supervision.listTitle")}
          </h3>

          <ul className="grid md:grid-cols-2 gap-4">
            {structure.map((item, i) => (
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

        {/* CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <motion.button
            className="group relative px-10 py-5 bg-gradient-to-r from-[#3B82F6] to-[#38BDF8] rounded-full text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-all overflow-hidden inline-flex items-center justify-center gap-2"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowPopup(true)} // ✅ TRIGGER POPUP
          >
            {t("design.supervision.cta")}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
