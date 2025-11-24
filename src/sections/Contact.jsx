import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer
      id="contact"
      className="bg-[#3d4554] py-8 border-t border-cyan-400/20"
    >
      <div className="container mx-auto px-6">
        {/* Контактная информация */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-6">
          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">{t("contact.phone")}</p>
              <a
                href="tel:+37122469222"
                className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors"
              >
                +371 22469222
              </a>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg">
              <Mail className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">{t("contact.email")}</p>
              <a
                href="mailto:eurodizains@inbox.lv"
                className="text-cyan-400 font-semibold hover:text-cyan-300 transition-colors"
              >
                eurodizains@inbox.lv
              </a>
            </div>
          </motion.div>

          <motion.div
            className="flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
          >
            <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg">
              <MapPin className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-gray-400 text-sm">{t("contact.address")}</p>
              <p className="text-cyan-400 font-semibold">{t("contact.city")}</p>
            </div>
          </motion.div>
        </div>

        {/* Копирайт */}
        <div className="text-center pt-6 border-t border-gray-600/30">
          <p className="text-gray-400 text-sm">
            © 2024{" "}
            <span className="text-cyan-400 font-semibold">EuroDizains</span>.{" "}
            {t("contact.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
}
