import { motion } from "framer-motion";
import DesignSidebar from "../../components/DesignSidebar";
import DesignSidebarMobile from "../../components/DesignSidebarMobile";
import ContactPopup from "../../components/ContactPopup";

import { useTranslation } from "react-i18next";
import { useState } from "react";

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

export default function LivingRoomDesign() {
  const { t } = useTranslation();

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [mobileSidebar, setMobileSidebar] = useState(false);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  // Helpers
  const toArray = (value) =>
    Array.isArray(value) ? value : value ? [value] : [];

  // Data
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
      {/* POPUP */}
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

      {/* PAGE WRAPPER */}
      <div className="pt-28 flex relative min-h-screen overflow-hidden">
        {/* BACKGROUND */}
        <div className="absolute inset-0 -z-10">
          {!isMobile ? (
            <>
              <div className="absolute top-20 right-20 w-[450px] h-[450px] bg-blue-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-20 left-10 w-[350px] h-[350px] bg-cyan-500/10 rounded-full blur-3xl" />
            </>
          ) : (
            <>
              <div className="absolute top-24 right-10 w-72 h-72 bg-blue-500/10 rounded-full blur-xl" />
              <div className="absolute bottom-16 left-10 w-60 h-60 bg-cyan-500/10 rounded-full blur-xl" />
            </>
          )}
        </div>

        {/* DESKTOP SIDEBAR */}
        <div className="hidden lg:block w-72 px-6 z-20">
          <DesignSidebar />
        </div>

        {/* MAIN CONTENT */}
        <div className="flex-1 px-4 sm:px-6 md:px-10 lg:px-14 max-w-5xl mx-auto pb-24 z-20">
          {/* HEADER */}
          <motion.div
            initial={isMobile ? false : { opacity: 0, y: 30 }}
            animate={isMobile ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-blue-50 border border-blue-100 rounded-full mb-6 shadow">
              <Home className="w-5 h-5 text-[#3B82F6]" />
              <span className="text-sm font-semibold text-[#3B82F6]">
                {t("design.apartments.intro")}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-[#3B82F6] via-[#38BDF8] to-[#60A5FA] bg-clip-text text-transparent">
              {t("design.apartments.title")}
            </h1>

            <p className="text-gray-600 text-xl mt-4 font-medium">
              {t("design.apartments.subtitle")}
            </p>
          </motion.div>

          {/* OVERVIEW SECTION */}
          <div className="mt-10 grid md:grid-cols-2 gap-5">
            {overviewItems.map((item, i) => (
              <motion.div
                key={i}
                initial={isMobile ? false : { opacity: 0, y: 20 }}
                animate={isMobile ? {} : { opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="p-5 rounded-2xl bg-white/90 border border-blue-200 shadow hover:shadow-lg transition"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#38BDF8] flex items-center justify-center text-white font-bold shadow">
                    {i + 1}
                  </div>
                  <span className="font-medium text-gray-700">{item}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* DESIGN PARAGRAPHS */}
          <div className="space-y-8 mt-14">
            {designParagraphs.map((p, i) => (
              <motion.div
                key={i}
                initial={isMobile ? false : { opacity: 0, y: 20 }}
                animate={isMobile ? {} : { opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="p-6 rounded-2xl bg-white/80 border border-blue-100 shadow"
              >
                <p className="text-lg text-gray-700 font-medium">{p}</p>
              </motion.div>
            ))}
          </div>

          {/* RULES */}
          {rules.length > 0 && (
            <motion.div
              className="mt-16 p-10 bg-white/90 border-2 border-blue-200 rounded-3xl shadow-xl"
              initial={isMobile ? false : { opacity: 0, y: 30 }}
              animate={isMobile ? {} : { opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <LayoutTemplate className="w-10 h-10 text-[#3B82F6]" />
                <h3 className="text-3xl font-black text-[#3B82F6]">
                  {t("design.apartments.rulesTitle")}
                </h3>
              </div>

              <div className="space-y-4">
                {rules.map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl bg-white">
                    <div className="w-3 h-3 rounded-full bg-[#3B82F6] mt-2" />
                    <span className="font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* PACKAGES */}
          <motion.div
            className="mt-24"
            initial={isMobile ? false : { opacity: 0, y: 30 }}
            animate={isMobile ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-10 bg-gradient-to-r from-[#3B82F6] via-[#38BDF8] to-[#60A5FA] bg-clip-text text-transparent">
              {t("design.apartments.packagesTitle")}
            </h2>

            <div className="grid md:grid-cols-3 gap-10">
              {packages.map((pkg, index) => {
                const Icon = pkg.icon;
                return (
                  <motion.div
                    key={pkg.key}
                    initial={isMobile ? false : { opacity: 0, y: 40 }}
                    animate={isMobile ? {} : { opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + index * 0.15 }}
                    className={`rounded-3xl p-8 shadow-xl border-2 ${
                      pkg.popular ? "border-[#3B82F6]" : "border-blue-200"
                    } bg-white/90 backdrop-blur-xl`}
                  >
                    <div
                      className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${pkg.gradient} flex items-center justify-center mb-6 shadow-lg`}
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </div>

                    <h3 className="text-3xl font-black bg-gradient-to-r from-[#3B82F6] to-[#38BDF8] bg-clip-text text-transparent mb-4">
                      {pkg.name}
                    </h3>

                    <p className="text-gray-500 font-bold uppercase text-sm mb-6">
                      {pkg.projectType}
                    </p>

                    <p className="text-gray-700 font-medium mb-8">
                      {pkg.composition}
                    </p>

                    <motion.button
                      className="w-full py-4 rounded-2xl text-white font-black bg-gradient-to-r from-[#3B82F6] to-[#38BDF8] shadow-xl"
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsPopupOpen(true)}
                    >
                      {t("design.apartments.packagesCta")}
                    </motion.button>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* SERVICES */}
          {servicesList.length > 0 && (
            <motion.div
              className="mt-24 p-10 rounded-3xl bg-white/90 border-2 border-cyan-300 shadow-xl"
              initial={isMobile ? false : { opacity: 0, y: 40 }}
              animate={isMobile ? {} : { opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center gap-4 mb-8">
                <Check className="w-10 h-10 text-[#3B82F6]" />
                <h3 className="text-3xl font-black bg-gradient-to-r from-[#3B82F6] to-[#38BDF8] bg-clip-text text-transparent">
                  {t("design.apartments.servicesTitle")}
                </h3>
              </div>

              <div className="space-y-4">
                {servicesList.map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-xl bg-white">
                    <div className="w-3 h-3 rounded-full bg-[#3B82F6] mt-2" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
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
                  initial={isMobile ? false : { opacity: 0, y: 20 }}
                  animate={isMobile ? {} : { opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="p-6 rounded-2xl bg-white/70 border border-blue-100"
                >
                  <p className="text-lg text-gray-700 font-medium">{p}</p>
                </motion.div>
              ))}
            </div>
          )}

          {/* REPAIR SECTION */}
          {repairParagraphs.length > 0 && (
            <motion.div
              className="mt-20"
              initial={isMobile ? false : { opacity: 0, y: 30 }}
              animate={isMobile ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-4xl md:text-5xl font-black mb-10 bg-gradient-to-r from-[#3B82F6] via-[#38BDF8] to-[#60A5FA] bg-clip-text text-transparent">
                {t("design.apartments.repairTitle")}
              </h2>

              <div className="space-y-6">
                {repairParagraphs.map((p, i) => (
                  <motion.div
                    key={i}
                    initial={isMobile ? false : { opacity: 0, y: 15 }}
                    animate={isMobile ? {} : { opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.05 }}
                    className="p-6 rounded-2xl bg-white/70 border border-blue-100"
                  >
                    <p className="text-lg text-gray-700 font-medium">{p}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* CTA BUTTON */}
          <div className="text-center mt-20 relative">
            <motion.button
              className="px-12 py-6 bg-gradient-to-r from-[#3B82F6] via-[#38BDF8] to-[#3B82F6] rounded-full text-white font-black text-xl shadow-2xl"
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsPopupOpen(true)}
            >
              {t("design.apartments.cta")}{" "}
              <ArrowRight className="inline-block ml-2 w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </>
  );
}
