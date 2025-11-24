import { motion } from "framer-motion";
import DesignSidebar from "../../components/DesignSidebar";
import ContactPopup from "../../components/ContactPopup"; // ← добавлено
import { useTranslation } from "react-i18next";
import { useState } from "react"; // ← добавлено
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

export default function LivingRoomDesign() {
  const { t } = useTranslation();

  const [isPopupOpen, setIsPopupOpen] = useState(false); // ← добавлено

  const toArray = (value) =>
    Array.isArray(value) ? value : value ? [value] : [];

  const overviewItems = toArray(
    t("design.apartments.overview", { returnObjects: true })
  );

  const designParagraphs = toArray(
    t("design.apartments.designText", { returnObjects: true })
  );

  const rules = toArray(t("design.apartments.rules", { returnObjects: true }));

  const servicesList = toArray(
    t("design.apartments.services", { returnObjects: true })
  );

  const geoParagraphs = toArray(
    t("design.apartments.geoText", { returnObjects: true })
  );

  const repairParagraphs = toArray(
    t("design.apartments.repairText", { returnObjects: true })
  );

  const packages = [
    {
      key: "standard",
      name: t("design.apartments.packages.standard.name"),
      projectType: t("design.apartments.packages.standard.projectType"),
      composition: t("design.apartments.packages.standard.composition"),
      gradient: "from-[#3B82F6] to-[#38BDF8]",
      icon: Target,
    },
    {
      key: "premium",
      name: t("design.apartments.packages.premium.name"),
      projectType: t("design.apartments.packages.premium.projectType"),
      composition: t("design.apartments.packages.premium.composition"),
      gradient: "from-[#38BDF8] to-[#3B82F6]",
      popular: true,
      icon: Star,
    },
    {
      key: "vip",
      name: t("design.apartments.packages.vip.name"),
      projectType: t("design.apartments.packages.vip.projectType"),
      composition: t("design.apartments.packages.vip.composition"),
      gradient: "from-[#3B82F6] to-[#38BDF8]",
      icon: Sparkles,
    },
  ];

  return (
    <>
      <div className="pt-28 flex relative overflow-hidden min-h-screen">
        {/* Animated Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-10 w-[500px] h-[500px] bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-20 left-10 w-[400px] h-[400px] bg-gradient-to-tr from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-blue-500/5 rounded-full blur-3xl" />

          {/* Floating particles */}
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

        {/* Main Content */}
        <div className="flex-1 px-6 md:px-14 max-w-5xl mx-auto pb-24">
          {/* HERO SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-full mb-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Home className="w-5 h-5 text-[#3B82F6]" />
              </motion.div>
              <span className="text-sm font-bold text-[#3B82F6] tracking-wide">
                {t("design.apartments.intro")}
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-[#3B82F6] via-[#38BDF8] to-[#60A5FA] bg-clip-text text-transparent leading-tight drop-shadow-sm">
              {t("design.apartments.title")}
            </h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gray-600 text-xl mt-6 font-semibold leading-relaxed"
            >
              {t("design.apartments.subtitle")}
            </motion.p>

            {/* Overview Cards Grid */}
            <div className="mt-10 grid md:grid-cols-2 gap-5">
              {overviewItems.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + i * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="group relative p-5 rounded-2xl bg-gradient-to-br from-white/90 to-blue-50/50 backdrop-blur-sm border-2 border-blue-200 hover:border-blue-400 shadow-lg hover:shadow-2xl transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 rounded-2xl transition-all duration-300" />

                  <div className="relative flex items-start gap-4">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#38BDF8] flex items-center justify-center text-base font-black text-white shadow-lg group-hover:shadow-xl"
                    >
                      {i + 1}
                    </motion.div>
                    <span className="flex-1 font-semibold text-gray-700 leading-relaxed pt-1.5">
                      {item}
                    </span>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* DESIGN FEATURES SECTION */}
          <div className="space-y-8 mt-20">
            {designParagraphs.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + i * 0.1, duration: 0.6 }}
                className="p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
              >
                <p className="text-lg text-gray-700 leading-loose font-medium">
                  {p}
                </p>
              </motion.div>
            ))}

            {/* Rules Section */}
            {rules.length > 0 && (
              <motion.div
                className="mt-12 p-10 bg-gradient-to-br from-white/95 to-blue-50/80 backdrop-blur-xl rounded-3xl border-2 border-blue-300 shadow-2xl hover:shadow-blue-300/50 transition-all duration-500 relative overflow-hidden"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                whileHover={{ y: -8 }}
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-cyan-500/10 to-transparent rounded-full blur-2xl" />

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-8">
                    <motion.div
                      whileHover={{ rotate: 12, scale: 1.1 }}
                      className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#3B82F6] to-[#38BDF8] flex items-center justify-center shadow-xl"
                    >
                      <LayoutTemplate className="w-7 h-7 text-white" />
                    </motion.div>
                    <h3 className="text-3xl font-black bg-gradient-to-r from-[#3B82F6] to-[#38BDF8] bg-clip-text text-transparent">
                      {t("design.apartments.rulesTitle")}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {rules.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1 + i * 0.08 }}
                        whileHover={{ x: 10 }}
                        className="flex items-start gap-5 p-5 rounded-2xl bg-white/80 hover:bg-white border-2 border-transparent hover:border-blue-300 hover:shadow-xl transition-all duration-300 group"
                      >
                        <motion.div
                          whileHover={{ scale: 2, rotate: 180 }}
                          transition={{ duration: 0.4 }}
                          className="w-3 h-3 bg-gradient-to-br from-[#3B82F6] to-[#38BDF8] rounded-full mt-1.5 shadow-md"
                        />
                        <span className="text-gray-700 font-semibold leading-relaxed">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* PACKAGES SECTION */}
          <motion.div
            className="mt-24"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-center mb-14">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, type: "spring" }}
              >
                <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-[#3B82F6] via-[#38BDF8] to-[#60A5FA] bg-clip-text text-transparent drop-shadow-sm">
                  {t("design.apartments.packagesTitle")}
                </h2>
              </motion.div>
              <p className="text-gray-600 text-xl max-w-3xl mx-auto font-semibold leading-relaxed">
                {t("design.apartments.packagesSubtitle")}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {packages.map((pkg, index) => {
                const Icon = pkg.icon;
                return (
                  <motion.div
                    key={pkg.key}
                    className={`group relative ${
                      pkg.popular ? "md:scale-110 z-10" : "md:scale-100"
                    }`}
                    initial={{ opacity: 0, y: 60 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: 0.3 + index * 0.15,
                      type: "spring",
                      bounce: 0.4,
                    }}
                    whileHover={{ y: -15, scale: pkg.popular ? 1.12 : 1.05 }}
                  >
                    {pkg.popular && (
                      <motion.div
                        className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-[#3B82F6] to-[#38BDF8] rounded-full text-white text-sm font-black shadow-xl flex items-center gap-2 z-30"
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{
                          delay: 0.6,
                          type: "spring",
                        }}
                      >
                        <Zap className="w-4 h-4" />
                        {t("design.apartments.recommended")}
                      </motion.div>
                    )}

                    <div className="rounded-3xl backdrop-blur-xl overflow-hidden">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${pkg.gradient} opacity-5 rounded-3xl`}
                      />

                      <div
                        className={`relative p-8 bg-white/90 backdrop-blur-xl border-2 transition-all duration-500 rounded-3xl ${
                          pkg.popular
                            ? "border-[#3B82F6] shadow-2xl shadow-blue-500/30"
                            : "border-blue-200 shadow-xl hover:shadow-2xl hover:border-[#3B82F6]"
                        }`}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/0 via-transparent to-[#38BDF8]/0 group-hover:from-[#3B82F6]/10 group-hover:to-[#38BDF8]/10 transition-all duration-700 rounded-3xl" />

                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        <div className="relative z-10">
                          <motion.div
                            className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${pkg.gradient} flex items-center justify-center mb-6 shadow-xl group-hover:shadow-2xl transition-all duration-500`}
                            whileHover={{
                              rotate: [0, -10, 10, -10, 0],
                              scale: 1.1,
                            }}
                            transition={{ duration: 0.5 }}
                          >
                            <Icon className="w-10 h-10 text-white" />
                          </motion.div>

                          <h3 className="text-3xl font-black mb-2 bg-gradient-to-r from-[#3B82F6] to-[#38BDF8] bg-clip-text text-transparent">
                            {pkg.name}
                          </h3>

                          <p className="text-sm font-bold text-gray-500 mb-6 uppercase tracking-wider">
                            {pkg.projectType}
                          </p>

                          <p className="text-gray-700 font-semibold leading-relaxed mb-8 min-h-[80px]">
                            {pkg.composition}
                          </p>

                          {/* BUTTON WITH POPUP */}
                          <motion.button
                            className="w-full py-4 rounded-2xl text-white font-black bg-gradient-to-r from-[#3B82F6] to-[#38BDF8] shadow-xl hover:shadow-2xl transition-all relative overflow-hidden group/btn"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsPopupOpen(true)} // <<< заменено
                          >
                            <span className="relative z-10 flex items-center justify-center gap-2">
                              {t("design.apartments.packagesCta")}
                              <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-2 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB] to-[#0EA5E9] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300" />
                          </motion.button>
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-b-3xl" />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* SERVICES SECTION */}
          {servicesList.length > 0 && (
            <motion.div
              className="mt-24 p-10 bg-gradient-to-br from-cyan-50/90 to-white/95 backdrop-blur-xl rounded-3xl border-2 border-cyan-300 shadow-2xl hover:shadow-cyan-300/50 transition-all duration-500 relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              whileHover={{ y: -8 }}
            >
              <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-full blur-2xl" />
              <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-blue-500/10 to-transparent rounded-full blur-2xl" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#3B82F6] to-[#38BDF8] flex items-center justify-center shadow-xl"
                  >
                    <Check className="w-8 h-8 text-white" strokeWidth={3} />
                  </motion.div>
                  <h3 className="text-3xl font-black bg-gradient-to-r from-[#3B82F6] to-[#38BDF8] bg-clip-text text-transparent">
                    {t("design.apartments.servicesTitle")}
                  </h3>
                </div>

                <div className="space-y-4">
                  {servicesList.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.9 + i * 0.08 }}
                      whileHover={{ x: 10 }}
                      className="flex items-start gap-5 p-5 rounded-2xl bg-white/80 hover:bg-white border-2 border-transparent hover:border-cyan-300 hover:shadow-xl transition-all duration-300 group"
                    >
                      <motion.div
                        whileHover={{ scale: 2, rotate: 180 }}
                        transition={{ duration: 0.4 }}
                        className="w-3 h-3 bg-gradient-to-br from-[#3B82F6] to-[#38BDF8] rounded-full mt-1.5 shadow-md"
                      />
                      <span className="text-gray-700 font-semibold leading-relaxed">
                        {item}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* GEOGRAPHY SECTION */}
          {geoParagraphs.length > 0 && (
            <div className="space-y-6 mt-20">
              {geoParagraphs.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + i * 0.08, duration: 0.5 }}
                  className="p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
                >
                  <p className="text-lg text-gray-700 leading-loose font-medium">
                    {p}
                  </p>
                </motion.div>
              ))}
            </div>
          )}

          {/* REPAIR SECTION */}
          {repairParagraphs.length > 0 && (
            <motion.div
              className="mt-24"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-10 bg-gradient-to-r from-[#3B82F6] via-[#38BDF8] to-[#60A5FA] bg-clip-text text-transparent drop-shadow-sm">
                {t("design.apartments.repairTitle")}
              </h2>

              <div className="space-y-6">
                {repairParagraphs.map((p, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 + i * 0.08, duration: 0.5 }}
                    className="p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300"
                  >
                    <p className="text-lg text-gray-700 leading-loose font-medium">
                      {p}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* FINAL CTA */}
          <motion.div
            className="mt-20 text-center relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.button
              className="group relative px-12 py-6 bg-gradient-to-r from-[#3B82F6] via-[#38BDF8] to-[#3B82F6] rounded-full text-white font-black text-xl shadow-2xl hover:shadow-blue-500/50 transition-all inline-flex items-center justify-center gap-3 overflow-hidden"
              whileHover={{ scale: 1.08, y: -5 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsPopupOpen(true)} // <<< заменено
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#2563EB] to-[#0EA5E9] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">
                {t("design.apartments.cta")}
              </span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="relative z-10"
              >
                <ArrowRight className="w-6 h-6" />
              </motion.div>
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
