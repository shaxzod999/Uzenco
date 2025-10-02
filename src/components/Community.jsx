import React, { useState } from "react";
import icon1 from "../assets/icons/icon1.svg";
import icon2 from "../assets/icons/icon2.svg";

const processSteps = [
  {
    number: "04",
    title: "ДОСТАВКА КЛИЕНТУ",
    description:
      "Обеспечиваем надёжную поставку топлива прямо до склада или объекта заказчика.",
    spacerHeight: 0,
  },
  {
    number: "03",
    title: "ТАМОЖЕННОЕ ОФОРМЛЕНИЕ",
    description:
      "Берём на себя все процессы сертификации и оформления, экономя время клиентов.",
    spacerHeight: 100,
  },
  {
    number: "02",
    title: "ЛОГИСТИКА И ТРАНСПОРТИРОВКА",
    description:
      "Организуем безопасную и своевременную доставку топлива по всему маршруту.",
    spacerHeight: 200,
  },
  {
    number: "01",
    title: "ЗАКУПКА ТОПЛИВА",
    description:
      "Мы сотрудничаем только с проверенными международными поставщиками, чтобы гарантировать качество каждой партии.",
    spacerHeight: 300,
  },
];

export default function Community() {
  const handleOrderClick = () => {
    console.log("Order button clicked");
  };

  const cards = [
    {
      id: 1,
      number: "01",
      title: "Закупка топлива",
      text: "Мы сотрудничаем только с проверенными международными поставщиками, чтобы гарантировать качество каждой партии.",
    },
    {
      id: 2,
      number: "02",
      title: "Логистика и транспортировка",
      text: "Организуем безопасную и своевременную доставку топлива по всему маршруту.",
    },
    {
      id: 3,
      number: "03",
      title: "Таможенное оформление",
      text: "Берём на себя все процессы сертификации и оформления, экономя время клиентов.",
    },
    {
      id: 4,
      number: "04",
      title: "Доставка клиенту",
      text: "Обеспечиваем надёжную поставку топлива прямо до склада или объекта заказчика.",
    },
  ];

  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % cards.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + cards.length) % cards.length);
  };

  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="block md:hidden w-full mx-auto px-[16px] py-[100px] text-[#343438] flex flex-col gap-[30px]">
        <h4 className="font-sora font-semibold text-[12.4px] leading-[15.4px] tracking-[3%] uppercase">
          Наши преимущества
        </h4>
        <h1 className="font-sora font-semibold text-[40px] leading-[120%] tracking-[-1.88px] uppercase">
          СТАНДАРТЫ, ГАРАНТИРУЮЩИЕ БЕЗОПАСНОСТЬ
        </h1>

        {/* Text + Buttons */}
        <div className="py-[30px]">
          <div className="border-t border-[#343438] pt-[30px] flex flex-col gap-[40px]">
            <p className="w-[251px] font-sora font-semibold text-[13px] leading-[16.94px] tracking-[0px] uppercase">
              Команда Uzenco — это профессионалы с опытом в сфере логистики,
              энергетики и международных поставок. Мы объединяем знания и
              практику, чтобы гарантировать клиентам качество, прозрачность и
              надёжность на каждом этапе.
            </p>
            <div className="flex gap-[10px]">
              <button onClick={prevSlide}>
                <img src={icon1} alt="prev" />
              </button>
              <button onClick={nextSlide}>
                <img src={icon2} alt="next" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel */}
        <div className="overflow-hidden w-full">
          <div
            className=" flex gap-[10px] transition-transform duration-500"
            style={{ transform: `translateX(-${index * 90}%)` }}
          >
            {cards.map((card) => (
              <div
                key={card.id}
                className="w-[90%] min-h-[341px] flex-shrink-0 py-[30px] flex flex-col gap-[30px] border-l border-r border-[#858591] text-[#343438]"
              >
                <div className="px-[30px] text-[#858591] font-montserrat font-medium text-[58.07px] leading-[77.43px] tracking-[-3.56px]">
                  <h3>{card.number}</h3>
                </div>
                <div className="w-full h-[10px] bg-[#343438]"></div>
                <div className="px-[30px] flex flex-col gap-[20px]">
                  <h4 className="font-sora font-semibold text-[18.4px] leading-[130%] uppercase">
                    {card.title}
                  </h4>
                  <p className="font-sora font-normal text-[13.6px] leading-[130%]">
                    {card.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hidden md:block max-w-[1920px] mx-auto px-[200px] max-md:pl-5 md:py-[150px] pt-[50px] pb-[100px]">
        <div className="bg-white">
          <div className="container mx-auto">
            <section>
              <header className="flex w-full items-stretch text-[15px] text-[#343438] font-semibold uppercase tracking-[0.46px] leading-none max-md:max-w-full">
                <h1 className="text-[#343438] leading-[15.4px]">
                  Наши преимущества
                </h1>
              </header>

              <div className="flex gap-[0.01px] pt-[50px] pb-[60px] max-md:flex-col max-md:max-w-full">
                <div className="flex text-8xl text-[#343438] font-normal uppercase tracking-[-3.88px] leading-[110px] w-[990px] pr-[37px] pt-[70px] border-t border-r border-[#343438] max-md:w-full max-md:text-[40px] max-md:leading-[51px]">
                  <h2>Мы соединяем международный опыт и локальные ценности</h2>
                </div>

                <aside className="flex flex-col w-[530px] gap-[158.39px] pl-[100px] pt-[70px] pb-5 border-t border-[#343438] max-md:w-full max-md:gap-10">
                  <button
                    onClick={handleOrderClick}
                    className="flex justify-center items-center border border-[#343438] w-[155px] h-[155px] rounded-full hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-[#343438] focus:ring-offset-2"
                    aria-label="Buyurtma berish"
                  >
                    <img
                      src="https://api.builder.io/api/v1/image/assets/cb15d3f09a3b4320b834af2eefdebf28/63e62ebf31de8cc5512db6dbcc709d49a3c3e951?placeholderIfAbsent=true"
                      alt="Order icon"
                      className="w-[19px]"
                    />
                  </button>

                  <p className="w-[293px] text-[15px] text-[#343438] font-semibold uppercase leading-5">
                    Команда Uzenco — это профессионалы с опытом в сфере
                    логистики, энергетики и международных поставок. Мы
                    объединяем знания и практику, чтобы гарантировать клиентам
                    качество, прозрачность и надёжность на каждом этапе.
                  </p>
                </aside>
              </div>
            </section>
          </div>
        </div>

        <div className="w-full flex items-center justify-center gap-2.5 bg-white max-md:flex-col">
          <div className="relative">
            <div className="absolute bottom-[-425px] left-0 w-[0.5px] h-[774px] bg-[#858591]" />
          </div>

          <section className="flex gap-2.5 justify-start items-start md:flex-row-reverse">
            {processSteps.map((step) => (
              <article
                key={step.number}
                className="flex max-md:w-full max-md:max-w-[373px] items-center px-0 py-10 border-x-[0.5px] border-x-[#858591] border-solid max-md:border-x-0 max-md:border-y-[0.5px] max-md:border-y-[#858591]"
              >
                <div className="flex flex-col items-start gap-5">
                  <header className="px-10">
                    <div
                      style={{ height: `${step.spacerHeight}px` }}
                      aria-hidden="true"
                    />
                    <h2 className="text-[#858591] text-6xl font-medium leading-[80px] tracking-[-3.68px] max-sm:text-[40px] max-sm:leading-[60px]">
                      {step.number}
                    </h2>
                  </header>

                  <div className="w-[340px] h-2.5 bg-[#343438] md:w-[373px]" />

                  <div className="flex flex-col gap-5 px-10">
                    <h3 className="w-[228px] text-[#343438] text-[22px] font-semibold leading-[30.8px] uppercase">
                      {step.title}
                    </h3>
                    <p className="w-[239px] text-[#343438] text-[17.6px] leading-[22.88px] max-sm:w-full max-sm:text-base">
                      {step.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </section>

          <div className="relative">
            <div className="absolute bottom-[50px] left-0 w-[0.5px] h-[295px] bg-[#858591]" />
          </div>
        </div>
      </div>
    </section>
  );
}
