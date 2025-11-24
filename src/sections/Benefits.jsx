import { motion } from "framer-motion";
import { Shield, Star, Award, Zap } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Benefits() {
  const { t } = useTranslation();

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const benefits = [
    {
      icon: <Shield className="w-12 h-12 text-[#3B82F6]" />,
      title: t("benefits.specialists"),
      desc: t("benefits.specialistsDesc"),
    },
    {
      icon: <Star className="w-12 h-12 text-[#3B82F6]" />,
      title: t("benefits.difficultCeilings"),
      desc: t("benefits.difficultCeilingsDesc"),
    },
    {
      icon: <Award className="w-12 h-12 text-[#3B82F6]" />,
      title: t("benefits.certified"),
      desc: t("benefits.certifiedDesc"),
    },
    {
      icon: <Zap className="w-12 h-12 text-[#3B82F6]" />,
      title: t("benefits.warranty"),
      desc: t("benefits.warrantyDesc"),
    },
  ];

  return (
    <section
      className="min-h-screen pt-32 pb-20 px-6 relative overflow-hidden flex flex-col items-center justify-center"
      id="benefits"
    >
      {/* Decorative background with disabled blur on mobile */}
      <div className="absolute inset-0 -z-10">
        <div
          className={`absolute top-20 left-10 w-72 h-72 bg-blue-500/10 rounded-full ${
            isMobile ? "" : "blur-3xl"
          }`}
        ></div>
        <div
          className={`absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full ${
            isMobile ? "" : "blur-3xl"
          }`}
        ></div>
      </div>

      <motion.div
        className="text-center mb-20 w-full"
        initial={isMobile ? false : { opacity: 0, y: 40 }}
        whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[#3B82F6] via-[#60A5FA] to-[#3B82F6] bg-clip-text text-transparent drop-shadow-sm">
          {t("benefits.title")}
        </h2>

        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
          {t("benefits.subtitle")}
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 max-w-7xl w-full">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            className={`group relative p-10 ${
              isMobile
                ? "bg-white/90 rounded-3xl border border-blue-100 shadow-lg"
                : "bg-white/80 backdrop-blur-xl border-2 border-blue-100 shadow-xl"
            } transition-all duration-500 cursor-pointer overflow-hidden`}
            initial={isMobile ? false : { opacity: 0, y: 40 }}
            whileInView={isMobile ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={isMobile ? undefined : { y: -12, scale: 1.02 }}
          >
            <div className="relative z-10">
              {/* icon animation disabled on mobile */}
              <motion.div
                className="w-20 h-20 mb-6 bg-gradient-to-br from-[#3B82F6]/20 to-[#60A5FA]/10 rounded-2xl flex items-center justify-center shadow-lg"
                whileHover={
                  isMobile ? undefined : { rotate: [0, -10, 10, -10, 0] }
                }
                transition={{ duration: 0.5 }}
              >
                {benefit.icon}
              </motion.div>

              <h3 className="text-2xl font-bold text-[#3B82F6] mb-3">
                {benefit.title}
              </h3>

              <p className="text-gray-600 leading-relaxed font-medium">
                {benefit.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
