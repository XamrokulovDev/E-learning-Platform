import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Select } from "antd";

const languages = [
  { code: "uz", fullLabel: "O'zbek", shortLabel: "UZB", flag: "🇺🇿" },
  { code: "ru", fullLabel: "Русский", shortLabel: "RUS", flag: "🇷🇺" },
  { code: "en", fullLabel: "English", shortLabel: "ENG", flag: "🇬🇧" },
];

const Translation = () => {
  const { i18n } = useTranslation();
  const [lang, setLang] = useState("uz");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const handleChange = (selectedLang: string) => {
    setLang(selectedLang);
    i18n.changeLanguage(selectedLang);
  };

  useEffect(() => {
    i18n.changeLanguage(lang);
  }, [i18n, lang]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex items-center justify-center">
      <Select
        value={lang}
        onChange={handleChange}
        options={languages.map(({ code, fullLabel, shortLabel, flag }) => ({
          value: code,
          label: (
            <div className="flex items-center gap-2">
              <span>{flag}</span>
              <span>{isMobile ? shortLabel : fullLabel}</span>
            </div>
          ),
        }))}
      />
    </div>
  );
};

export default Translation;