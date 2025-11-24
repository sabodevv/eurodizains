import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import i18next from "i18next";

export default function useLanguageSync() {
  const location = useLocation();
  const navigate = useNavigate();

  // Когда URL изменился → обновить язык
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const lang = params.get("language");

    if (lang && i18next.language !== lang) {
      i18next.changeLanguage(lang);
    }
  }, [location.search]);

  // Когда язык изменился → обновить URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const currentLang = params.get("language");

    if (i18next.language !== currentLang) {
      params.set("language", i18next.language);
      navigate(`${location.pathname}?${params.toString()}`, { replace: true });
    }
  }, [i18next.language]);
}
