import React, { useState } from "react";
import alram from "../assets/icons/Alram.svg";
import ausinessgrowth1 from "../assets/icons/BusinessGrowth1.svg";
import manager from "../assets/icons/Manager.svg";
import setting from "../assets/icons/Setting.svg";

export default function HowItWorks() {
  const [hasNotification, setHasNotification] = useState(true);
  const [isButtonHovered, setIsButtonHovered] = useState(false);

  const handleNotificationClick = () => {
    setHasNotification(!hasNotification);
  };

  const handleLearnMore = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const features = [
    {
      number: "01",
      title: "СТРАТЕГИЧЕСКОЕ ВИДЕНИЕ",
      description:
        "Наша команда формирует долгосрочную стратегию развития, объединяя международный опыт и потребности местного рынка.",
    },
    {
      number: "02",
      title: "ЭФФЕКТИВНОЕ УПРАВЛЕНИЕ",
      description:
        "Мы выстраиваем процессы так, чтобы каждая поставка была прозрачной, надёжной и соответствовала мировым стандартам.",
    },
    {
      number: "03",
      title: "ПРОФЕССИОНАЛЬНАЯ КОМАНДА",
      description:
        "Uzenco объединяет экспертов в сфере энергетики и логистики, которые ежедневно обеспечивают стабильность и качество.",
    },
    {
      number: "04",
      title: "ОТВЕТСТВЕННОСТЬ И НАДЁЖНОСТЬ",
      description:
        "Мы строим доверие с клиентами и партнёрами, принимая ответственность за каждый этап поставок — от закупки до доставки.",
    },
  ];
  return (
    <section className="w-full bg-[#D9D9DD] overflow-hidden">
      <div className="max-w-[1920px] mx-auto relative">
        <main className="w-full flex flex-col justify-start items-start self-stretch">
          <div className="flex flex-col items-center self-stretch py-[100px] md:py-0 px-[16px] md:px-0">
            <header className="max-w-[1920px] w-full flex flex-col ga-[30px] md:gap-0 items-center self-stretch ">
              <div className="w-full md:w-[1520px] md:py-[100px] flex justify-start">
                <div className="max-w-[1920px] w-full flex justify-start  items-start gap-[23.2px]">
                  <nav className="">
                    <span className="w-full text-[#343438] text-[12px] md:text-[15.4px] font-semibold leading-[15.4px] tracking-normal md:tracking-[0.462px] uppercase text-center">
                      НАША КОМАНДА
                    </span>
                  </nav>
                </div>
              </div>

              <div className="flex items-start gap-[0.01px] flex-col md:flex-row max-sm:gap-5 px-0 md:px-[200px]">
                <div className="flex md:w-[757px] items-end self-stretch pl-0 pr-[100px] md:pt-[70px] pb-0 md:border-r-[#343438] md:border-t-[#343438] md:border-t md:border-solid md:border-r max-md:w-auto max-md:pl-0 max-md:pr-[50px] max-md:pt-[50px] max-md:pb-0 max-sm:w-full max-sm:pt-[30px] max-sm:pb-0 max-sm:px-0 max-sm:border-r-[none]">
                  <div className="flex flex-col items-start">
                    <h1 className="md:w-[605px] text-[#343438] text-[40px] md:text-8xl font-normal leading-[100px] md:tracking-[-2px] max-md:text-7xl max-md:leading-[76px] max-md:w-auto max-sm:text-5xl max-sm:leading-[52px] max-sm:w-full">
                      ЛЮДИ, КОТОРЫЕ СОЗДАЮТ ЭНЕРГИЮ
                    </h1>
                  </div>
                </div>

                <div className="flex md:w-[754px] h-auto my-[30px] md:my-0 items-start gap-[50x] md:gap-0 flex-col md:flex-row justify-between self-stretch md:pl-[100px] pr-0 pt-[70px]  border-t-[#343438] border-t border-solid max-sm:pt-[30px] max-sm:px-0 ">
                  <div className="w-full flex items-start justify-between gap-0 md:gap-[309px] max-md:gap-[50px] max-sm:gap-[30px]">
                    <p className=" md:w-[293px] text-[#343438] text-[13px] md:text-[15.4px] font-semibold leading-[19.9px] uppercase ">
                      Команда Uzenco — это профессионалы с опытом в сфере
                      логистики, энергетики и международных поставок. Мы
                      объединяем знания и практику, чтобы гарантировать клиентам
                      качество, прозрачность и надёжность на каждом этапе.
                    </p>
                    <button
                      onClick={handleNotificationClick}
                      className="flex w-[51px] h-[51px] justify-center items-center bg-[#343438] rounded-[25.3px] hover:bg-[#4a4a4f] transition-colors duration-200 relative"
                      aria-label={
                        hasNotification
                          ? "You have notifications"
                          : "No notifications"
                      }
                    >
                      <div className="flex w-[52px] h-[52px] md:w-[22px] md:h-[22px] justify-center items-center">
                        <svg
                          width="23"
                          height="23"
                          viewBox="0 0 23 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-[22px] h-[22px]"
                        >
                          <path
                            d="M18.6384 17.3862L19.0051 17.8751C19.157 18.0776 19.1159 18.3648 18.9134 18.5167C18.8341 18.5762 18.7376 18.6084 18.6384 18.6084H3.97176C3.71863 18.6084 3.51343 18.4032 3.51343 18.1501C3.51343 18.0509 3.54559 17.9544 3.60509 17.8751L3.97176 17.3862V9.44173C3.97176 5.39164 7.255 2.1084 11.3051 2.1084C15.3552 2.1084 18.6384 5.39164 18.6384 9.44173V17.3862ZM9.01343 19.5251H13.5968C13.5968 20.7907 12.5707 21.8167 11.3051 21.8167C10.0395 21.8167 9.01343 20.7907 9.01343 19.5251Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                      {hasNotification && (
                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                      )}
                    </button>
                  </div>
                  <div className="block md:hidden flex-col flex gap-[50px] mt-[50px]">
                    <div className="py-[30px] pr-[30px] max-w-[361px] max-h-[242px] flex flex-col gap-[20px]">
                      <img
                        className="w-[60px] h-[60px]"
                        src={ausinessgrowth1}
                        alt=""
                      />
                      <h4 className="font-sora font-semibold text-[16.4px] leading-[120%] tracking-[0] uppercase text-[#343438]">
                        СТРАТЕГИЧЕСКОЕ ВИДЕНИЕ
                      </h4>
                      <p className="text-[#343438] font-sora font-normal text-[13.6px] leading-[130%] tracking-[0]">
                        Наша команда формирует долгосрочную стратегию развития,
                        объединяя международный опыт и потребности местного
                        рынка.
                      </p>
                    </div>
                    <div className="py-[30px] pr-[30px] max-w-[361px] max-h-[242px] flex flex-col gap-[20px] border-t-[#343438] border-t border-solid">
                      <img className="w-[60px] h-[60px]" src={manager} alt="" />
                      <h4 className="font-sora font-semibold text-[16.4px] leading-[120%] tracking-[0] uppercase text-[#343438]">
                        СТРАТЕГИЧЕСКОЕ ВИДЕНИЕ
                      </h4>
                      <p className="text-[#343438] font-sora font-normal text-[13.6px] leading-[130%] tracking-[0]">
                        Наша команда формирует долгосрочную стратегию развития,
                        объединяя международный опыт и потребности местного
                        рынка.
                      </p>
                    </div>
                    <div className="py-[30px] pr-[30px] max-w-[361px] max-h-[242px] flex flex-col gap-[20px] border-t-[#343438] border-t border-solid">
                      <img className="w-[60px] h-[60px]" src={setting} alt="" />
                      <h4 className="font-sora font-semibold text-[16.4px] leading-[120%] tracking-[0] uppercase text-[#343438]">
                        СТРАТЕГИЧЕСКОЕ ВИДЕНИЕ
                      </h4>
                      <p className="text-[#343438] font-sora font-normal text-[13.6px] leading-[130%] tracking-[0]">
                        Наша команда формирует долгосрочную стратегию развития,
                        объединяя международный опыт и потребности местного
                        рынка.
                      </p>
                    </div>
                    <div className="py-[30px] pr-[30px] max-w-[361px] max-h-[242px] flex flex-col gap-[20px] border-t-[#343438] border-t border-solid">
                      <img className="w-[60px] h-[60px]" src={alram} alt="" />
                      <h4 className="font-sora font-semibold text-[16.4px] leading-[120%] tracking-[0] uppercase text-[#343438]">
                        СТРАТЕГИЧЕСКОЕ ВИДЕНИЕ
                      </h4>
                      <p className="text-[#343438] font-sora font-normal text-[13.6px] leading-[130%] tracking-[0]">
                        Наша команда формирует долгосрочную стратегию развития,
                        объединяя международный опыт и потребности местного
                        рынка.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </header>

            <section className="hidden md:block flex flex-col justify-end items-start pt-[50px] px-0 ">
              <div className="flex items-start gap-[0.01px] pb-[60px] max-md:flex-wrap max-sm:flex-col">
                {features.map((feature, index) => (
                  <article
                    key={feature.number}
                    className={`
                  flex items-center h-[540px] pl-[50px] pr-[100px] pt-[70px] pb-0 border-t-[#343438] border-t border-solid
                  w-[378px] 
                  ${
                    index === 0
                      ? "border-x-[#343438] border-r border-l max-md:border-l-[none] max-sm:border-l-[none]"
                      : "border-r-[#343438] border-r"
                  }
                  max-md:w-[calc(50%_-_10px)] max-md:h-auto max-md:min-h-[400px]
                  max-sm:w-full max-sm:h-auto max-sm:pt-10 max-sm:pb-[30px] max-sm:px-[30px]
                `}
                  >
                    <div className="flex flex-col items-start gap-5">
                      <span className="self-stretch text-[#858591] text-6xl font-medium leading-[80px] tracking-[-3.68px]">
                        {feature.number}
                      </span>
                      <h3 className="w-[228px] text-[#343438] text-[22px] font-semibold leading-[30.8px] uppercase max-sm:w-full">
                        {feature.title}
                      </h3>
                      <p className="w-[239px] text-[#343438] text-[17.6px] font-normal leading-[22.88px] max-sm:w-full">
                        {feature.description}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            <section className="w-full flex items-start gap-[180px] self-stretch max-md:flex-col max-md:h-auto max-md:gap-[50px]  md:py-[100px] md:pt-[50px]">
              <div className="hidden md:block flex items-start  self-stretch relative max-md:order-2 left-0">
                <div className="bottom-[-50.41px] bg-white max-md:hidden" />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/bc4969cf54db4a3ac0bb92b6a1a78e22e10391ac?width=1566"
                  alt="Professional team member representing Uzenco's expertise in energy logistics"
                  className="w-[783px] h-auto object-cover aspect-[783/1109] relative max-md:w-full max-md:h-auto max-md:static max-md:right-auto max-md:bottom-auto"
                />
                <span className="absolute left-[10%] text-[#343438] text-[15.4px] font-semibold leading-[15.4px] uppercase top-[75.41px] max-md:static max-md:mb-5 max-md:top-auto">
                  НАША КОМАНДА
                </span>
              </div>
              <div className="block md:hidden">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/bc4969cf54db4a3ac0bb92b6a1a78e22e10391ac?width=1566"
                  alt="Professional team member representing Uzenco's expertise in energy logistics"
                  className="w-full h-auto object-contain"
                />
              </div>
              <div className="flex flex-col items-start gap-[30px] md:gap-[50px] flex-1 max-md:order-1">
                <h2 className="hidden md:block self-stretch text-[#343438] text-[150px] font-semibold md:font-normal md:tracking-[3.88px] uppercase  md:text-[100px] md:leading-[100px] text-[40px] md:text-[150px] md:mr-[200px]">
                  ОПЫТ И ПРОФЕС СИОНАЛ ИЗМ
                </h2>

                <h2 className="font-sora font-semibold text-[40px] leading-[120%] tracking-[-1.88px] uppercase text-[#343438]">
                  ОПЫТ И ПРОФЕССИОНАЛ ИЗМ
                </h2>

                <p className="w-[260px] md:w-[293px] text-[#343438] text-[13px] md:text-[15.4px] font-semibold leading-[19.9px] uppercase">
                  Команда Uzenco — это профессионалы с опытом в сфере логистики,
                  энергетики и международных поставок. Мы объединяем знания и
                  практику, чтобы гарантировать клиентам качество, прозрачность
                  и надёжность на каждом этапе.
                </p>

                <button
                  onClick={handleLearnMore}
                  onMouseEnter={() => setIsButtonHovered(true)}
                  onMouseLeave={() => setIsButtonHovered(false)}
                  className="flex w-[100px] h-[100px] md:w-[155px] md:h-[154px] p-[19px] justify-center items-center gap-[10px] rounded-[100px] border border-[#343438] hover:bg-[#343438] hover:text-white transition-all duration-300 group"
                  aria-label="Learn more about our team"
                >
                  <svg
                    width="155"
                    height="155"
                    viewBox="0 0 155 155"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                  >
                    <rect
                      x="0.5"
                      y="1.48047"
                      rx="76.5"
                      stroke="#343438"
                      className="group-hover:stroke-white transition-colors duration-300"
                    />
                    <circle
                      cx="78"
                      cy="77.9805"
                      r="1"
                      fill={isButtonHovered ? "white" : "#343438"}
                      className="transition-colors duration-300"
                    />
                    <path
                      d="M88 68.4805C88 67.9282 87.5523 67.4805 87 67.4805L78 67.4805C77.4477 67.4805 77 67.9282 77 68.4805C77 69.0328 77.4477 69.4805 78 69.4805L86 69.4805L86 77.4805C86 78.0328 86.4477 78.4805 87 78.4805C87.5523 78.4805 88 78.0328 88 77.4805L88 68.4805ZM68 87.4805L68.7071 88.1876L87.7071 69.1876L87 68.4805L86.2929 67.7734L67.2929 86.7734L68 87.4805Z"
                      fill={isButtonHovered ? "white" : "#343438"}
                      className="transition-colors duration-300"
                    />
                  </svg>
                </button>
              </div>
            </section>
          </div>
        </main>
      </div>
    </section>
  );
}
