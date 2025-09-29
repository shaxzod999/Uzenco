import React from "react";
import logo from "../../assets/images/header-logo.png";

export default function Header({
  language = "ru",
  onChangeLanguage,
  onCtaClick,
}) {
  const handleLangClick = (lang) => {
    if (onChangeLanguage) onChangeLanguage(lang);
  };

  return (
    <header className="w-full flex items-center justify-between py-6 z-10 relative">
      <div className="flex items-center gap-4">
        <img src={logo} alt="logo" className="h-20 w-auto" />
      </div>

      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={() => handleLangClick(language === "ru" ? "uz" : "ru")}
          className="h-10 px-4 rounded-full border text-sm hover:bg-white/10 transition border-white/60 text-white"
          aria-label="Change language"
          title="Change language"
        >
          {language?.toUpperCase() === "UZ" ? "UZ" : "RU"}
        </button>

        <button
          type="button"
          onClick={onCtaClick}
          className="h-10 px-5 rounded-full border border-white/60 text-white text-sm hover:bg-white/10 transition"
        >
          ОСТАВИТЬ ЗАЯВКУ
        </button>
      </div>
    </header>
  );
}
