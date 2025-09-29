import React from "react";
import Header from "./Header";

export default function Hero() {
  const [language, setLanguage] = React.useState("ru");

  const handleCtaClick = () => {
    // eslint-disable-next-line no-alert
    alert(language === "ru" ? "Оставить заявку" : "Ariza qoldirish");
  };

  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="max-w-[1920px] mx-auto max-h-[868px] relative">
        <div className="relative px-6 md:px-10 h-full w-[98%]">
          <img
            src="https://api.builder.io/api/v1/image/assets/cb15d3f09a3b4320b834af2eefdebf28/58defe7d912015cb89d0cab40cf6556aaa4ab84c?placeholderIfAbsent=true"
            alt="Energy infrastructure background"
            className="absolute h-full w-full object-[100% 100%] inset-0"
          />
          <Header
            language={language}
            onChangeLanguage={setLanguage}
            onCtaClick={handleCtaClick}
          />
          <div className="relative mt-[30px] pb-[212px]">
            <main className="relative flex w-full max-w-[1319px] items-stretch gap-5 font-semibold flex-wrap justify-between mt-[337px] max-md:max-w-full max-md:mt-10">
              <section className="text-[22px] leading-[31px] uppercase w-[263px]">
                <h1 className="text-white">
                  Uzbekistan <br />
                  energy company
                </h1>
              </section>
              <section className="flex items-center gap-[40px_50px] text-[17px] text-right leading-[22px] my-auto">
                <p className="self-stretch w-[315px] my-auto text-white">
                  Энергия качества и стабильности для будущего Узбекистана
                </p>
              </section>
            </main>
            <img
              src="https://api.builder.io/api/v1/image/assets/cb15d3f09a3b4320b834af2eefdebf28/2802f7ffe7eff690b08a54e51507195a69be516c?placeholderIfAbsent=true"
              alt="Decorative line separator"
              className="aspect-[5.99] object-contain w-full max-w-[1235px] max-md:max-w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
