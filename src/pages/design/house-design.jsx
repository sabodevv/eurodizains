import { motion } from "framer-motion";
import DesignSidebar from "../../components/DesignSidebar";
import ContactPopup from "../../components/ContactPopup"; // <<< добавлено
import { useTranslation } from "react-i18next";
import { useState } from "react"; // <<< добавлено
import {
  Home,
  Check,
  Star,
  ArrowRight,
  LayoutTemplate,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";

export default function HouseDesign() {
  const { t } = useTranslation();
  const [isPopupOpen, setIsPopupOpen] = useState(false); // <<< добавлено

  const toArray = (value) =>
    Array.isArray(value) ? value : value ? [value] : [];

  const overviewItems = toArray(
    t("design.houses.overview", { returnObjects: true })
  );

  const designParagraphs = toArray(
    t("design.houses.designText", { returnObjects: true })
  );

  const rules = toArray(t("design.houses.rules", { returnObjects: true }));

  const servicesList = toArray(
    t("design.houses.services", { returnObjects: true })
  );

  const geoParagraphs = toArray(
    t("design.houses.geoText", { returnObjects: true })
  );

  const repairParagraphs = toArray(
    t("design.houses.repairText", { returnObjects: true })
  );

  const packages = [
    {
      key: "standard",
      name: t("design.houses.packages.standard.name"),
      projectType: t("design.houses.packages.standard.projectType"),
      composition: t("design.houses.packages.standard.composition"),
      gradient: "from-[#3B82F6] to-[#38BDF8]",
      icon: Target,
    },
    {
      key: "premium",
      name: t("design.houses.packages.premium.name"),
      projectType: t("design.houses.packages.premium.projectType"),
      composition: t("design.houses.packages.premium.composition"),
      gradient: "from-[#38BDF8] to-[#3B82F6]",
      popular: true,
      icon: Star,
    },
    {
      key: "vip",
      name: t("design.houses.packages.vip.name"),
      projectType: t("design.houses.packages.vip.projectType"),
      composition: t("design.houses.packages.vip.composition"),
      gradient: "from-[#3B82F6] to-[#38BDF8]",
      icon: Sparkles,
    },
  ];

  return (
    <>
      <div className="pt-28 flex relative overflow-hidden min-h-screen">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-gradient-to-tr from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-blue-500/5 rounded-full blur-3xl" />

          {/* Particles */}
          <motion.div
            className="absolute top-40 right-1/4 w-2 h-2 bg-blue-400 rounded-full"
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/3 left-1/4 w-3 h-3 bg-cyan-400 rounded-full"
            animate={{
              y: [0, 40, 0],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>

        {/* Sidebar */}
        <div className="hidden md:block w-72 px-6">
          <DesignSidebar />
        </div>

        {/* Content */}
        <div className="flex-1 px-6 md:px-14 max-w-5xl mx-auto pb-24">
          {/* HERO */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-full mb-8 shadow-lg"
            >
              <Home className="w-5 h-5 text-[#3B82F6]" />
              <span className="text-sm font-bold text-[#3B82F6] tracking-wide">
                {t("design.houses.intro")}
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-[#3B82F6] via-[#38BDF8] to-[#60A5FA] bg-clip-text text-transparent leading-tight">
              {t("design.houses.title")}
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-600 text-xl mt-6 font-semibold"
            >
              {t("design.houses.subtitle")}
            </motion.p>

            {/* Overview */}
            <div className="mt-10 grid md:grid-cols-2 gap-5">
              {overviewItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="group relative p-5 rounded-2xl bg-gradient-to-br from-white/90 to-blue-50/50 backdrop-blur-sm border-2 border-blue-200 hover:border-blue-400 shadow-lg"
                >
                  <div className="relative flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#38BDF8] flex items-center justify-center text-base font-black text-white shadow-lg">
                      {i + 1}
                    </div>
                    <span className="flex-1 font-semibold text-gray-700 pt-1.5">
                      {item}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* DESIGN TEXT */}
          <div className="space-y-8 mt-20">
            {designParagraphs.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + i * 0.1 }}
                className="p-6 rounded-2xl bg-white/60 border border-blue-100"
              >
                <p className="text-lg text-gray-700">{p}</p>
              </motion.div>
            ))}

            {/* RULES */}
            {rules.length > 0 && (
              <motion.div
                className="mt-12 p-10 bg-gradient-to-br from-white/95 to-blue-50/80 rounded-3xl border-2 border-blue-300 shadow-2xl relative"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#3B82F6] to-[#38BDF8] flex items-center justify-center shadow-xl">
                    <LayoutTemplate className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-3xl font-black bg-gradient-to-r from-[#3B82F6] to-[#38BDF8] bg-clip-text text-transparent">
                    {t("design.houses.rulesTitle")}
                  </h3>
                </div>

                <div className="space-y-4">
                  {rules.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 + i * 0.08 }}
                      className="flex items-start gap-5 p-5 rounded-2xl bg-white/80 border border-transparent hover:border-blue-300"
                    >
                      <div className="w-3 h-3 bg-gradient-to-br from-[#3B82F6] to-[#38BDF8] rounded-full mt-1.5" />
                      <span className="text-gray-700 font-semibold">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </div>

          {/* PACKAGES */}
          <motion.div
            className="mt-24"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="text-center mb-14">
              <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-[#3B82F6] via-[#38BDF8] to-[#60A5FA] bg-clip-text text-transparent">
                {t("design.houses.packagesTitle")}
              </h2>
              <p className="text-gray-600 text-xl max-w-3xl mx-auto font-semibold">
                {t("design.houses.packagesSubtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {packages.map((pkg, index) => {
                const Icon = pkg.icon;
                return (
                  <motion.div
                    key={pkg.key}
                    className={`group relative ${
                      pkg.popular ? "md:scale-110 z-10" : ""
                    }`}
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.3 + index * 0.15,
                    }}
                  >
                    {pkg.popular && (
                      <motion.div
                        className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-[#3B82F6] to-[#38BDF8] rounded-full text-white text-sm font-black shadow-xl flex items-center gap-2 z-30"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                      >
                        <Zap className="w-4 h-4" />
                        {t("design.houses.recommended")}
                      </motion.div>
                    )}

                    <div className="rounded-3xl backdrop-blur-xl overflow-hidden">
                      <div
                        className={`relative p-8 bg-white/90 border-2 rounded-3xl ${
                          pkg.popular
                            ? "border-[#3B82F6] shadow-2xl"
                            : "border-blue-200 shadow-xl"
                        }`}
                      >
                        <div className="relative z-10">
                          <div
                            className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${pkg.gradient} flex items-center justify-center mb-6 shadow-xl`}
                          >
                            <Icon className="w-10 h-10 text-white" />
                          </div>

                          <h3 className="text-3xl font-black mb-2 bg-gradient-to-r from-[#3B82F6] to-[#38BDF8] bg-clip-text text-transparent">
                            {pkg.name}
                          </h3>
                          <p className="text-sm font-bold text-gray-500 mb-6 uppercase">
                            {pkg.projectType}
                          </p>

                          <p className="text-gray-700 font-semibold min-h-[80px] mb-8">
                            {pkg.composition}
                          </p>

                          {/* CTA BUTTON — shows popup */}
                          <motion.button
                            className="w-full py-4 rounded-2xl text-white font-black bg-gradient-to-r from-[#3B82F6] to-[#38BDF8] shadow-xl"
                            whileHover={{ scale: 1.05 }}
                            onClick={() => setIsPopupOpen(true)} // <<< заменено
                          >
                            {t("design.houses.packagesCta")}
                          </motion.button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* SERVICES */}
          {servicesList.length > 0 && (
            <motion.div
              className="mt-24 p-10 bg-gradient-to-br from-cyan-50/90 to-white/95 rounded-3xl border-2 border-cyan-300 shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#3B82F6] to-[#38BDF8] flex items-center justify-center shadow-xl">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-black bg-gradient-to-r from-[#3B82F6] to-[#38BDF8] bg-clip-text text-transparent">
                  {t("design.houses.servicesTitle")}
                </h3>
              </div>

              <div className="space-y-4">
                {servicesList.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + i * 0.08 }}
                    className="flex items-start gap-5 p-5 rounded-2xl bg-white/80 border hover:border-cyan-300"
                  >
                    <div className="w-3 h-3 bg-gradient-to-br from-[#3B82F6] to-[#38BDF8] rounded-full mt-1.5" />
                    <span className="text-gray-700 font-semibold">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* GEO */}
          {geoParagraphs.length > 0 && (
            <div className="space-y-6 mt-20">
              {geoParagraphs.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + i * 0.08 }}
                  className="p-6 rounded-2xl bg-white/60 border border-blue-100"
                >
                  <p className="text-lg text-gray-700">{p}</p>
                </motion.div>
              ))}
            </div>
          )}

          {/* REPAIR */}
          {repairParagraphs.length > 0 && (
            <motion.div
              className="mt-24"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-10 bg-gradient-to-r from-[#3B82F6] via-[#38BDF8] to-[#60A5FA] bg-clip-text text-transparent">
                {t("design.houses.repairTitle")}
              </h2>

              <div className="space-y-6">
                {repairParagraphs.map((p, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 + i * 0.08 }}
                    className="p-6 rounded-2xl bg-white/60 border border-blue-100"
                  >
                    <p className="text-lg text-gray-700">{p}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* CTA FINAL */}
          <motion.div
            className="mt-20 text-center relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <motion.button
              className="group relative px-12 py-6 bg-gradient-to-r from-[#3B82F6] via-[#38BDF8] to-[#3B82F6] rounded-full text-white font-black text-xl shadow-2xl inline-flex items-center justify-center gap-3"
              whileHover={{ scale: 1.08, y: -5 }}
              onClick={() => setIsPopupOpen(true)} // <<< заменено
            >
              {t("design.houses.cta")}
              <ArrowRight className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* POPUP */}
      <ContactPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </>
  );
}
