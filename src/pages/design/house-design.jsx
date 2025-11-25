import { motion, AnimatePresence } from "framer-motion";
import DesignSidebar from "../../components/DesignSidebar.jsx";
import DesignSidebarMobile from "../../components/DesignSidebarMobile.jsx";
import ContactPopup from "../../components/ContactPopup";
import { useTranslation } from "react-i18next";
import {
  Home,
  Check,
  Star,
  ArrowRight,
  LayoutTemplate,
  Sparkles,
  Target,
  Zap,
  Menu,
  LayoutGrid,
} from "lucide-react";
import { useState } from "react";

export default function HouseDesign() {
  const { t } = useTranslation();

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [mobileSidebar, setMobileSidebar] = useState(false);
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  // UTILITY
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
      <ContactPopup
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />

      {/* MOBILE SIDEBAR BUTTON */}
      {isMobile && (
        <motion.button
          onClick={() => setMobileSidebar(true)}
          className="
    fixed top-20 right-4 z-40  {/* Исправлено: теперь кнопка справа */}
    w-14 h-14
    rounded-2xl
    flex items-center justify-center
    bg-white/60
    backdrop-blur-xl
    shadow-xl shadow-blue-200/50
    border border-white/40
    active:scale-95
  "
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#3B82F6]/10 to-[#38BDF8]/10 pointer-events-none" />
          <LayoutGrid className="w-6 h-6 text-[#3B82F6] relative z-10" />
        </motion.button>
      )}

      {/* MOBILE SIDEBAR */}
      <DesignSidebarMobile
        isOpen={mobileSidebar}
        onClose={() => setMobileSidebar(false)}
      />

      {/* MAIN WRAPPER */}
      <div className="pt-20 md:pt-28 flex relative min-h-[100dvh] overflow-hidden">
        {/* BACKGROUND */}
        <div className="absolute inset-0 -z-10">
          {!isMobile ? (
            <>
              <div className="absolute top-40 right-20 w-[28rem] h-[28rem] bg-blue-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-40 left-20 w-[22rem] h-[22rem] bg-cyan-500/10 rounded-full blur-3xl" />
            </>
          ) : (
            <>
              <div className="absolute top-24 right-10 w-64 h-64 bg-blue-500/10 rounded-full blur-xl" />
              <div className="absolute bottom-16 left-10 w-52 h-52 bg-cyan-500/10 rounded-xl blur-xl" />
            </>
          )}
        </div>

        {/* DESKTOP SIDEBAR */}
        <div className="hidden lg:block w-72 px-6 relative z-20">
          <DesignSidebar />
        </div>

        {/* CONTENT */}
        <div className="flex-1 px-4 sm:px-6 md:px-10 lg:px-14 max-w-5xl mx-auto pb-20 relative z-20">
          {/* HEADER */}
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 30 }}
            animate={isMobile ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-6">
              <Home className="w-5 h-5 text-[#3B82F6]" />
              <span className="text-sm font-semibold text-[#3B82F6]">
                {t("design.houses.intro")}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-[#3B82F6] via-[#38BDF8] to-[#60A5FA] bg-clip-text text-transparent leading-tight">
              {t("design.houses.title")}
            </h1>
          </motion.div>

          {/* OVERVIEW */}
          <div className="mt-10 grid md:grid-cols-2 gap-5">
            {overviewItems.map((item, i) => (
              <motion.div
                key={i}
                initial={isMobile ? false : { opacity: 0, y: 30 }}
                animate={isMobile ? {} : { opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="
        group relative p-5 rounded-2xl 
        bg-gradient-to-br from-white/90 to-blue-50/50 
        backdrop-blur-sm 
        border-2 border-blue-200 
        hover:border-blue-400 
        shadow-lg hover:shadow-2xl 
        transition-all duration-300
      "
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/5 group-hover:to-cyan-500/5 rounded-2xl transition-all" />

                <div className="relative flex items-start gap-4">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="
            w-10 h-10 rounded-xl
            bg-gradient-to-br from-[#3B82F6] to-[#38BDF8]
            flex items-center justify-center
            text-base font-black text-white 
            shadow-lg group-hover:shadow-xl
          "
                  >
                    {i + 1}
                  </motion.div>

                  <span className="flex-1 font-semibold text-gray-700 leading-relaxed pt-1.5">
                    {item}
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>

          {/* DESIGN TEXT */}
          <div className="space-y-8 mt-16">
            {designParagraphs.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="p-6 rounded-2xl bg-white/70 backdrop-blur-sm border border-blue-100"
              >
                <p className="text-lg text-gray-700 leading-relaxed font-medium">
                  {p}
                </p>
              </motion.div>
            ))}
          </div>

          {/* RULES */}
          {rules.length > 0 && (
            <motion.div
              className="mt-16 p-10 rounded-3xl bg-white/90 backdrop-blur-xl border-2 border-blue-200 shadow-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <LayoutTemplate className="w-10 h-10 text-[#3B82F6]" />
                <h3 className="text-3xl font-extrabold text-[#3B82F6]">
                  {t("design.houses.rulesTitle")}
                </h3>
              </div>

              <div className="space-y-4">
                {rules.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + i * 0.05 }}
                    className="flex items-start gap-5 p-5 rounded-2xl bg-white hover:bg-blue-50 transition"
                  >
                    <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#38BDF8] mt-1.5" />
                    <span className="text-gray-700 font-semibold">{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* PACKAGES */}
          <motion.div
            className="mt-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-[#3B82F6] via-[#38BDF8] to-[#60A5FA] bg-clip-text text-transparent">
              {t("design.houses.packagesTitle")}
            </h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {packages.map((pkg, index) => {
                const Icon = pkg.icon;

                return (
                  <motion.div
                    key={pkg.key}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.15 }}
                    whileHover={{ y: -10 }}
                    className={`group relative ${
                      pkg.popular ? "md:scale-110 z-10" : ""
                    }`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2 bg-gradient-to-r from-[#3B82F6] to-[#38BDF8] text-white font-bold rounded-full shadow-xl">
                        <Zap className="w-4 h-4" />
                        {t("design.houses.recommended")}
                      </div>
                    )}

                    <div className="rounded-3xl bg-white/90 backdrop-blur-xl border-2 border-blue-200 shadow-xl p-8">
                      <div
                        className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${pkg.gradient} flex items-center justify-center mb-6 shadow-xl`}
                      >
                        <Icon className="w-10 h-10 text-white" />
                      </div>

                      <h3 className="text-3xl font-black bg-gradient-to-r from-[#3B82F6] to-[#38BDF8] bg-clip-text text-transparent">
                        {pkg.name}
                      </h3>
                      <p className="text-sm text-gray-500 uppercase font-bold mt-2 mb-6">
                        {pkg.projectType}
                      </p>

                      <p className="min-h-[80px] text-gray-700 font-semibold mb-8">
                        {pkg.composition}
                      </p>

                      <motion.button
                        className="w-full py-4 bg-gradient-to-r from-[#3B82F6] to-[#38BDF8] rounded-2xl text-white font-bold shadow-xl"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setIsPopupOpen(true)}
                      >
                        {t("design.houses.packagesCta")}
                      </motion.button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* SERVICES */}
          {servicesList.length > 0 && (
            <motion.div
              className="mt-24 p-10 bg-white/90 backdrop-blur-xl rounded-3xl border-2 border-cyan-300 shadow-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <Check className="w-8 h-8 text-[#3B82F6]" />
                <h3 className="text-3xl font-black bg-gradient-to-r from-[#3B82F6] to-[#38BDF8] bg-clip-text text-transparent">
                  {t("design.houses.servicesTitle")}
                </h3>
              </div>

              <div className="space-y-4">
                {servicesList.map((item, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-5 p-5 rounded-2xl bg-white hover:bg-blue-50 border border-transparent hover:border-cyan-300 transition"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.05 }}
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
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.05 }}
                  className="p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-blue-100"
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
              <h2 className="text-4xl md:text-5xl font-black mb-10 bg-gradient-to-r from-[#3B82F6] to-[#38BDF8] bg-clip-text text-transparent">
                {t("design.houses.repairTitle")}
              </h2>

              <div className="space-y-6">
                {repairParagraphs.map((p, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + i * 0.05 }}
                    className="p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-blue-100"
                  >
                    <p className="text-lg text-gray-700">{p}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* FINAL CTA */}
          <motion.div
            className="mt-20 text-center relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <motion.button
              className="px-12 py-6 rounded-full bg-gradient-to-r from-[#3B82F6] via-[#38BDF8] to-[#3B82F6] text-white font-black text-xl shadow-xl"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsPopupOpen(true)}
            >
              {t("design.houses.cta")}
            </motion.button>
          </motion.div>
        </div>
      </div>
    </>
  );
}
