import { motion } from "framer-motion";
import { Check, Star } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Services() {
  const { t } = useTranslation();

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const services = [
    {
      name: t("services.standard.name"),
      gradient: "from-[#3B82F6] to-[#38BDF8]",
      features: t("services.standard.features", { returnObjects: true }),
      note: t("services.standard.note"),
    },
    {
      name: t("services.premium.name"),
      gradient: "from-[#38BDF8] to-[#3B82F6]",
      popular: true,
      features: t("services.premium.features", { returnObjects: true }),
      note: t("services.premium.note"),
    },
    {
      name: t("services.vip.name"),
      gradient: "from-[#3B82F6] to-[#38BDF8]",
      features: t("services.vip.features", { returnObjects: true }),
      note: t("services.vip.note"),
    },
  ];

  return (
    <section
      id="services"
      className="min-h-screen pt-32 pb-20 px-6 relative overflow-hidden flex flex-col items-center justify-center"
    >
      {/* !!! Убрали circles/background — используем AnimatedBackground */}

      {/* Header */}
      <motion.div
        className="text-center mb-20 w-full"
        initial={isMobile ? false : { opacity: 0, y: 40 }}
        whileInView={isMobile ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[#3B82F6] via-[#38BDF8] to-[#60A5FA] bg-clip-text text-transparent">
          {t("services.title")}
        </h2>

        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
          {t("services.subtitle")}
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-10 max-w-7xl w-full">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`
              group relative p-10 rounded-3xl 
              ${
                isMobile
                  ? "bg-white/95 border border-blue-100 shadow-lg"
                  : "bg-white/80 backdrop-blur-xl border-2 border-blue-100 shadow-xl"
              }
              transition-all duration-500 
              ${
                service.popular && !isMobile
                  ? "border-[#3B82F6] shadow-2xl shadow-blue-500/20 scale-105"
                  : ""
              }
              hover:border-[#3B82F6]
            `}
            initial={isMobile ? false : { opacity: 0, y: 40 }}
            whileInView={isMobile ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={
              isMobile
                ? undefined
                : { y: -10, scale: service.popular ? 1.05 : 1.02 }
            }
          >
            {/* Popular badge */}
            {service.popular && (
              <motion.div
                className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-[#3B82F6] to-[#38BDF8] rounded-full text-white text-sm font-bold shadow-lg"
                initial={isMobile ? false : { scale: 0 }}
                animate={isMobile ? {} : { scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
              >
                ⭐ {t("services.recommended")}
              </motion.div>
            )}

            {/* Glow */}
            {!isMobile && (
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-transparent group-hover:from-[#3B82F6]/10 group-hover:to-[#38BDF8]/5 transition-all duration-500 rounded-3xl"></div>
            )}

            {/* Сorner decoration */}
            {!isMobile && (
              <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-br from-[#3B82F6]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            )}

            <div className="relative z-10">
              {/* Icon */}
              <motion.div
                className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 shadow-lg`}
                whileHover={
                  isMobile
                    ? undefined
                    : { rotate: [0, -10, 10, -10, 0], scale: 1.1 }
                }
                transition={{ duration: 0.5 }}
              >
                <Star className="w-10 h-10 text-white" />
              </motion.div>

              {/* Title */}
              <h3 className="text-3xl font-bold mb-3 bg-gradient-to-r from-[#3B82F6] to-[#38BDF8] bg-clip-text text-transparent">
                {service.name}
              </h3>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {service.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3 text-gray-600 group-hover:text-gray-800 transition-colors"
                    initial={isMobile ? false : { opacity: 0, x: -20 }}
                    whileInView={isMobile ? {} : { opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: isMobile ? 0 : index * 0.1 + i * 0.05,
                    }}
                  >
                    <Check className="w-5 h-5 text-[#3B82F6] flex-shrink-0 mt-0.5" />
                    <span className="font-medium">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Note */}
              <p className="text-gray-500 text-sm italic mb-8 font-medium min-h-[2.5rem]">
                {service.note}
              </p>

              {/* CTA */}
              <motion.button
                className="w-full py-4 rounded-full text-white font-bold bg-gradient-to-r from-[#3B82F6] to-[#38BDF8] shadow-lg hover:shadow-xl transition-all relative overflow-hidden group/btn"
                whileHover={isMobile ? {} : { scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              >
                <span className="relative z-10">{t("services.button")}</span>
                <div
                  className={`absolute inset-0 bg-gradient-to-r from-[#2563EB] to-[#0EA5E9] opacity-0 ${
                    isMobile ? "" : "group-hover/btn:opacity-100"
                  } transition-opacity duration-300`}
                ></div>
              </motion.button>
            </div>

            {/* Shine */}
            {!isMobile && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
