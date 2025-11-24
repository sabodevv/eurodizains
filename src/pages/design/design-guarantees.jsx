import { motion } from "framer-motion";
import DesignSidebar from "../../components/DesignSidebar";
import { useTranslation } from "react-i18next";
import { ShieldCheck, ArrowRight, CheckCircle, Sparkles } from "lucide-react";
import { useState } from "react";
import ContactPopup from "../../components/ContactPopup";

export default function DesignGuarantees() {
  const { t } = useTranslation();

  const [showPopup, setShowPopup] = useState(false);

  const paragraphs = t("design.guarantees.text", { returnObjects: true });

  return (
    <>
      <div className="pt-28 flex relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/30">
          <div className="absolute top-40 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-40 left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(56,189,248,0.05),transparent_50%)]"></div>
        </div>

        {/* Sidebar */}
        <div className="hidden md:block w-72 px-6">
          <DesignSidebar />
        </div>

        {/* Content */}
        <div className="flex-1 px-6 md:px-14 max-w-5xl mx-auto pb-24">
          {/* HEADER */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200/50 rounded-full mb-8 shadow-lg hover:shadow-xl transition-all backdrop-blur-sm"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-9 h-9 bg-gradient-to-br from-[#3B82F6] to-[#38BDF8] rounded-full flex items-center justify-center shadow-md">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-bold text-[#3B82F6] tracking-wide">
                {t("design.guarantees.intro")}
              </span>
              <Sparkles className="w-4 h-4 text-[#38BDF8] animate-pulse" />
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-extrabold mb-8 bg-gradient-to-r from-[#3B82F6] via-[#38BDF8] to-[#60A5FA] bg-clip-text text-transparent leading-tight">
              {t("design.guarantees.title")}
            </h1>
            <div className="w-32 h-1.5 bg-gradient-to-r from-[#3B82F6] to-[#38BDF8] rounded-full shadow-lg"></div>
          </motion.div>

          {/* INTRO TEXT */}
          <motion.div
            className="group relative p-10 bg-gradient-to-br from-white via-blue-50/20 to-cyan-50/20 backdrop-blur-xl border border-blue-100/50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            whileHover={{ y: -4 }}
          >
            <div className="absolute -top-2 -right-2 w-32 h-32 bg-gradient-to-br from-[#3B82F6]/20 via-[#38BDF8]/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

            <div className="space-y-6 mt-4">
              {paragraphs.slice(0, 3).map((p, idx) => (
                <div key={idx} className="relative pl-6">
                  <div className="absolute left-0 top-2 w-2 h-2 bg-gradient-to-br from-[#3B82F6] to-[#38BDF8] rounded-full"></div>
                  <p className="text-lg text-gray-800 leading-relaxed font-medium">
                    {p}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* SECTION TITLE */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-50 to-cyan-50 border border-blue-200/50 rounded-2xl shadow-lg">
              <Sparkles className="w-6 h-6 text-[#3B82F6]" />
              <p className="text-xl text-gray-800 font-bold">{paragraphs[3]}</p>
              <Sparkles className="w-6 h-6 text-[#38BDF8]" />
            </div>
          </motion.div>

          {/* GUARANTEES */}
          <div className="space-y-8 mt-12">
            {[4, 5].map((i) => {
              const numberBadge = i === 4 ? "1" : "2";

              return (
                <motion.div
                  key={i}
                  className="group relative p-10 bg-gradient-to-br from-white via-white to-blue-50/30 backdrop-blur-xl border border-blue-100/50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + (i - 4) * 0.15, duration: 0.6 }}
                  whileHover={{ y: -6, scale: 1.01 }}
                >
                  <div className="absolute -top-5 -left-5 w-12 h-12 bg-gradient-to-br from-[#3B82F6] via-[#38BDF8] to-[#60A5FA] rounded-2xl flex items-center justify-center shadow-2xl transform group-hover:rotate-6 transition-transform duration-300">
                    <span className="text-white font-bold text-lg">
                      {numberBadge}
                    </span>
                  </div>

                  <div className="absolute -top-2 -right-2 w-32 h-32 bg-gradient-to-br from-[#3B82F6]/20 via-[#38BDF8]/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#3B82F6]/0 via-[#38BDF8]/30 to-[#3B82F6]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>

                  <div className="relative">
                    <div className="absolute -left-6 top-1 w-1.5 h-8 bg-gradient-to-b from-[#3B82F6] via-[#38BDF8] to-[#60A5FA] rounded-full shadow-lg"></div>
                    <p className="text-lg text-gray-800 leading-relaxed font-medium pl-2">
                      {paragraphs[i].replace(/^\d+\.\s*/, "")}
                    </p>
                  </div>

                  <div className="absolute bottom-0 left-8 right-8 h-0.5 bg-gradient-to-r from-transparent via-[#3B82F6]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="absolute top-6 right-6 w-8 h-8 bg-gradient-to-br from-[#3B82F6]/10 to-[#38BDF8]/10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <CheckCircle className="w-5 h-5 text-[#3B82F6]" />
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* FINAL TEXT */}
          <motion.div
            className="group relative p-10 bg-gradient-to-br from-blue-50/30 via-white to-cyan-50/30 backdrop-blur-xl border border-blue-100/50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            whileHover={{ y: -4 }}
          >
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-24 h-24 bg-gradient-to-br from-[#3B82F6]/10 to-[#38BDF8]/10 rounded-full blur-2xl"></div>

            <div className="space-y-6 relative">
              {paragraphs.slice(6, 9).map((p, idx) => (
                <div key={idx} className="text-center">
                  <p className="text-xl text-gray-800 leading-relaxed font-bold bg-gradient-to-r from-[#3B82F6] to-[#38BDF8] bg-clip-text text-transparent">
                    {p}
                  </p>
                  {idx < 2 && (
                    <div className="mt-4 w-16 h-0.5 bg-gradient-to-r from-transparent via-[#3B82F6]/30 to-transparent mx-auto"></div>
                  )}
                </div>
              ))}
            </div>

            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2">
              <div className="w-2 h-2 bg-[#3B82F6] rounded-full animate-pulse"></div>
              <div
                className="w-2 h-2 bg-[#38BDF8] rounded-full animate-pulse"
                style={{ animationDelay: "0.3s" }}
              ></div>
              <div
                className="w-2 h-2 bg-[#60A5FA] rounded-full animate-pulse"
                style={{ animationDelay: "0.6s" }}
              ></div>
            </div>
          </motion.div>

          {/* CTA - POPUP */}
          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
          >
            <motion.button
              onClick={() => setShowPopup(true)}
              className="group relative px-12 py-6 bg-gradient-to-r from-[#3B82F6] via-[#38BDF8] to-[#3B82F6] bg-[length:200%_100%] rounded-full text-white font-bold text-lg shadow-2xl hover:shadow-[0_20px_60px_rgba(59,130,246,0.4)] transition-all inline-flex items-center justify-center gap-3 overflow-hidden"
              whileHover={{ scale: 1.06, y: -3, backgroundPosition: "100% 0" }}
              whileTap={{ scale: 0.96 }}
              animate={{ backgroundPosition: ["0% 0", "100% 0", "0% 0"] }}
              transition={{
                backgroundPosition: {
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear",
                },
              }}
            >
              <span className="relative z-10 flex items-center gap-3">
                <ShieldCheck className="w-6 h-6" />
                {t("design.guarantees.cta")}
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>

              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB] via-[#0EA5E9] to-[#2563EB] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full blur-xl"></div>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* POPUP */}
      <ContactPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </>
  );
}
