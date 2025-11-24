import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ExternalLink, Eye } from "lucide-react";
import { useState } from "react";
import ContactPopup from "../components/ContactPopup";

export default function Gallery() {
  const { t } = useTranslation();
  const [showPopup, setShowPopup] = useState(false);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const items = [
    {
      id: 1,
      img: "/gallery/1.jpg",
      link: "https://www.360cities.net/image/shadow-adjacency-to-the-wall/vr",
      title: t("gallery.item1"),
    },
    {
      id: 2,
      img: "/gallery/2.jpg",
      link: "https://www.360cities.net/image/stretch-ceiling/vr",
      title: t("gallery.item2"),
    },
    {
      id: 3,
      img: "/gallery/3.jpg",
      link: "https://www.360cities.net/image/gapless-ceiling/vr",
      title: t("gallery.item3"),
    },
    {
      id: 4,
      img: "/gallery/4.jpg",
      link: "https://www.360cities.net/image/soaring-ceiling-1/vr",
      title: t("gallery.item4"),
    },
  ];

  return (
    <section
      id="gallery"
      className="pt-32 pb-20 px-6 relative overflow-hidden flex flex-col items-center justify-center"
    >
      {/* POPUP */}
      <ContactPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />

      {/* ⛔ НЕТ локального фона — фон только из AnimatedBackground */}

      {/* HEADER */}
      <motion.div
        className="text-center mb-20 w-full"
        initial={isMobile ? false : { opacity: 0, y: 40 }}
        animate={isMobile ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-[#3B82F6] via-[#38BDF8] to-[#60A5FA] bg-clip-text text-transparent drop-shadow-sm">
          {t("gallery.title")}
        </h2>

        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
          {t("gallery.subtitle")}
        </p>
      </motion.div>

      {/* GRID */}
      <div
        className={`grid ${
          isMobile ? "grid-cols-1" : "sm:grid-cols-2 lg:grid-cols-4"
        } gap-8 max-w-7xl w-full`}
      >
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            className={`
              group relative w-full aspect-square rounded-3xl overflow-hidden 
              border-2 border-blue-100 
              ${
                isMobile
                  ? "shadow-md bg-white/80"
                  : "bg-white/80 backdrop-blur-xl shadow-xl"
              }
              hover:shadow-2xl hover:border-[#3B82F6] 
              transition-all cursor-pointer
            `}
            initial={isMobile ? false : { opacity: 0, y: 40 }}
            whileInView={isMobile ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: isMobile ? 0 : index * 0.1, duration: 0.6 }}
            whileHover={isMobile ? {} : { y: -8, scale: 1.02 }}
          >
            {/* Кликабельная ссылка поверх всей карточки */}
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-20"
              aria-label={`View ${item.title} in 360°`}
            />

            {/* Картинка */}
            <div
              className={`absolute inset-0 bg-cover bg-center transition-all duration-700 ${
                isMobile ? "" : "group-hover:scale-110"
              }`}
              style={{ backgroundImage: `url(${item.img})` }}
            />

            {/* Десктопный градиент поверх картинки */}
            {!isMobile && (
              <div className="absolute inset-0 bg-gradient-to-t from-[#3B82F6]/80 via-[#3B82F6]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
            )}

            {/* Контент поверх */}
            <div
              className={`
                absolute inset-0 flex flex-col items-center justify-center p-6 
                ${
                  isMobile
                    ? "bg-black/40 opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }
                transition-all duration-500 z-10
              `}
            >
              <Eye className="w-12 h-12 text-white mb-3" />
              <h3 className="text-xl font-bold text-white mb-2 text-center px-2">
                {item.title}
              </h3>

              <div className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-semibold">
                {t("gallery.view360")}
                <ExternalLink className="w-4 h-4" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA НИЖЕ */}
      <motion.div
        className="mt-16 text-center"
        initial={isMobile ? false : { opacity: 0, y: 20 }}
        animate={isMobile ? {} : { opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-600 font-medium mb-4">{t("gallery.cta")}</p>

        <motion.button
          className="px-8 py-4 bg-gradient-to-r from-[#3B82F6] to-[#38BDF8] rounded-full text-white font-bold text-lg shadow-xl hover:shadow-2xl transition-all"
          whileHover={isMobile ? {} : { scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowPopup(true)}
        >
          {t("gallery.contactBtn")}
        </motion.button>
      </motion.div>
    </section>
  );
}
