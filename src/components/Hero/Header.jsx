import React, { useState } from "react";
import logo from "../../assets/images/header-logo.png";
import logo2 from "../../assets/icons/Vector.png";
import Button1 from "../../assets/icons/Button1.png";
import Button from "../../assets/icons/Button.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full flex items-center justify-between py-6 px-6 z-20 relative">
      {/* Logo */}
      <div className="flex items-center gap-4">
        <img src={logo} alt="logo" className="h-12 w-auto" />
      </div>

      {/* Mobile menu toggle (dots icon) */}
      <button
        className="md:hidden w-10 h-10 flex items-center justify-center "
        onClick={() => setMenuOpen(true)}
      >
        <div className="">
          <img src={Button1} alt="" />
        </div>
      </button>

      {/* Slide-in menu */}
      <div
        className={`fixed top-0 right-0 h-full w-full bg-[#343438] transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Top section: logo + close button */}
        <div className="flex justify-between items-center px-12 py-7">
          <img src={logo2} alt="logo" className="h-12 w-auto" />
          <button
            onClick={() => setMenuOpen(false)}
            className="md:hidden w-10 h-10 flex items-center justify-center "
          >
            <img src={Button} alt="" />
          </button>
        </div>

        {/* Menu items */}
        <nav className="flex flex-col gap-6 px-10 mt-10 text-white text-lg font-medium">
          <a href="#about" onClick={() => setMenuOpen(false)}>
            О КОМПАНИИ
          </a>
          <a href="#mission" onClick={() => setMenuOpen(false)}>
            НАША МИССИЯ
          </a>
          <a href="#work" onClick={() => setMenuOpen(false)}>
            КАК МЫ РАБОТАЕМ
          </a>
          <a href="#advantages" onClick={() => setMenuOpen(false)}>
            НАШИ ПРЕИМУЩЕСТВА
          </a>
          <a href="#team" onClick={() => setMenuOpen(false)}>
            НАША КОМАНДА
          </a>
          <a href="#certificates" onClick={() => setMenuOpen(false)}>
            СЕРТИФИКАТЫ И ДОВЕРИЕ
          </a>
          <a href="#partners" onClick={() => setMenuOpen(false)}>
            НАШИ ПАРТНЁРЫ
          </a>
          <a href="#contacts" onClick={() => setMenuOpen(false)}>
            КОНТАКТЫ
          </a>
        </nav>
      </div>
    </header>
  );
}
