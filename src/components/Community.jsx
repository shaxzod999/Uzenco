import React from "react";

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

  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="max-w-[1920px] mx-auto py-[150px]">
        {/* === Наши преимущества === */}
        <div className="bg-white">
          <div className="container mx-auto">
            <section>
              <header className="flex w-full items-stretch text-[15px] text-[#343438] font-semibold uppercase tracking-[0.46px] leading-none max-md:max-w-full">
                <h1 className="text-[#343438] leading-[15.4px]">
                  Наши преимущества
                </h1>
              </header>

              <div className="flex gap-[0.01px] pt-[50px] pb-[60px] max-md:flex-col max-md:max-w-full">
                {/* Left side */}
                <div className="flex text-8xl text-[#343438] font-normal uppercase tracking-[-3.88px] leading-[110px] w-[990px] pr-[37px] pt-[70px] border-t border-r border-[#343438] max-md:w-full max-md:text-[40px] max-md:leading-[51px]">
                  <h2>Мы соединяем международный опыт и локальные ценности</h2>
                </div>

                {/* Right side */}
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

        {/* === Process steps === */}
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
                  {/* Step number */}
                  <header className="px-10">
                    <div
                      style={{ height: `${step.spacerHeight}px` }}
                      aria-hidden="true"
                    />
                    <h2 className="text-[#858591] text-6xl font-medium leading-[80px] tracking-[-3.68px] max-sm:text-[40px] max-sm:leading-[60px]">
                      {step.number}
                    </h2>
                  </header>

                  {/* Line */}
                  <div className="w-[340px] h-2.5 bg-[#343438] md:w-[373px]" />

                  {/* Title + Description */}
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
