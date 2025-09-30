import React from "react";

export default function Features() {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="max-w-[1920px] mx-auto relative">
        <div className="max-w-[1920px] mx-auto flex flex-col items-start justify-center px-[200px] max-md:pl-5 md:py-[50px] pb-[100px]">
          <h4 className="mb-[50px]">Наша миссия</h4>
          <div className="max-w-[1920px] mx-auto flex items-start justify-center  border-t-[#343438] border-[sectionpx] border-t border-solid">
            <div className="w-[701px] flex flex-col gap-4">
              <div className="w-[701px] h-[606px] border-r border-r-[#343438] pt-[70px] pr-[100px] pb-[20px] flex flex-col gap-[100px]">
                <h1 className="w-[606px] text-[#343438] text-[96px] font-normal leading-[100px] relative  max-md:text-[96px] max-md:leading-[68px] max-md:tracking-[-1px] max-sm:text-5xl max-sm:leading-[52px] max-sm:tracking-[-0.5px] mr-[70px]-">
                  СТАНДАРТЫ МИРОВОГО КАЧЕСТВА
                </h1>
                <div className="flex flex-col gap-[50px]">
                  <h4 className="font-semibold text-[15px] text-[rgba(52,52,56,1)] max-md:text-sm max-sm:text-[13px]">
                    КАЧЕСТВО И НАДЁЖНОСТЬ
                  </h4>
                  <p className="font-normal text-lg text-[rgba(52,52,56,1)] max-md:text-base max-sm:text-[15px]">
                    Мы гарантируем контроль всех этапов — от закупки до
                    доставки, обеспечивая своевременное выполнение обязательств
                    и долгосрочное партнёрство.
                  </p>
                </div>
              </div>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/a82dfa89a110e64111e2022f66d58a22f129b4cd?width=1400"
                alt="Fuel pump and car - quality fuel supply process"
                className="w-[700px] h-[434px] object-cover max-md:w-full max-md:h-[320px] mt-[100px] pr-[5px]"
              />
            </div>
            <div className="w-full pt-[70px]">
              <div className="w-[328px] pb-[153px] pl-[100px]">
                <p className="w-[328px] font-semibold text-[15px] text-[rgba(52,52,56,1)] max-md:text-sm max-sm:text-[13px]">
                  Наша миссия — обеспечить страну стабильными поставками
                  топлива, соответствующего международным стандартам. Мы создаём
                  прозрачные процессы и формируем доверие, делая энергию
                  доступной и надежной для каждого клиента.
                </p>
              </div>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/6dc154155847bafd0d61c7629f5a3a9e2a54a674?width=2618"
                alt="Modern Uzenco gas station with quality standards"
                className="flex-1 w-full h-[774px] object-cover max-md:w-full max-md:h-[420px] pl-[5px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

{
  /*<section className="w-full bg-white overflow-hidden">
      <div className="max-w-[1920px] mx-auto max-h-[868px] flex items-center justify-center gap-[0.01px]  bg-white pb-[60px] max-md:flex-col max-md:pb-10 max-sm:pb-[30px] max-md:px-[100px] px-[100px]">
        <section
          className="flex max-w-[1920px] flex-col justify-center items-center gap-[100px]  pl-0 md:pr-[150px] pr-[10px] pt-[70px] pb-0 border-r-[#343438] border-t-[#343438] border-[sectionpx] border-t border-solid border-r max-md:gap-[60px] max-md:pl-0 max-md:pr-[50px] max-md:pt-[50px] max-md:pb-0 max-sm:gap-10 max-sm:pl-0 max-sm:pr-5 max-sm:pt-[30px] max-sm:pb-0"
          aria-labelledby="main-heading"
        >
          <div className="flex flex-col items-start relative">
            <h1
              id="main-heading"
              className="w-[644px] text-[#343438] text-[96px] font-normal leading-[100px] tracking-[-2px] relative  max-md:text-[96px] max-md:leading-[68px] max-md:tracking-[-1px] max-sm:text-5xl max-sm:leading-[52px] max-sm:tracking-[-0.5px] mr-[70px]"
            >
              <span className="font-normal text-8xl text-[rgba(52,52,56,1)] max-md:text-[64px] max-sm:text-5xl">
                СТАНДАРТЫ МИРОВОГО КАЧЕСТВА
              </span>
            </h1>
          </div>

          <div className="flex flex-col items-start gap-[50px] relative max-md:gap-[30px] max-sm:gap-[25px]">
            <div className="flex flex-col items-start relative">
              <h2 className="w-[701px] text-[#343438] text-[15.4px] font-semibold leading-[17px] uppercase relative  max-md:text-sm max-md:leading-4 max-sm:text-[13px] max-sm:leading-[15px]">
                <span className="font-bold text-[15px] text-[rgba(52,52,56,1)] max-md:text-sm max-sm:text-[13px]">
                  КАЧЕСТВО И НАДЁЖНОСТЬ
                </span>
              </h2>
            </div>

            <div className="flex flex-col items-start relative">
              <p className="w-[498px] text-[#343438] text-[17.6px] font-normal leading-[22.88px] relative max-md:text-base max-sm:text-[15px]">
                <span className="font-normal text-lg text-[rgba(52,52,56,1)] max-md:text-base max-sm:text-[15px]">
                  Мы гарантируем контроль всех этапов — от закупки до доставки,
                  обеспечивая своевременное выполнение обязательств и
                  долгосрочное партнёрство.
                </span>
              </p>
            </div>
          </div>
        </section>

        <section
          className="flex w-[818px] items-start gap-[158.39px] self-stretch pl-[100px] pr-0 pt-[70px] pb-5 border-t-[#343438] border-t border-solid max-md:gap-20 max-md:pl-[50px] max-md:pr-0 max-md:pt-[50px] max-md:pb-5 max-sm:gap-10 max-sm:pl-5 max-sm:pr-0 max-sm:pt-[30px] max-sm:pb-[15px]"
          aria-labelledby="mission-heading"
        >
          <div className="flex flex-col items-start gap-[60px] relative">
            <p
              id="mission-heading"
              className="w-[328px] text-[#343438] text-[15.4px] font-semibold leading-[19.9px] uppercase relative max-md:text-sm max-md:leading-[18px] max-sm:text-[13px] max-sm:leading-[17px]"
            >
              <span className="font-bold text-[15px] text-[rgba(52,52,56,1)] max-md:text-sm max-sm:text-[13px]">
                Наша миссия — обеспечить страну стабильными поставками топлива,
                соответствующего международным стандартам. Мы создаём прозрачные
                процессы и формируем доверие, делая энергию доступной и надежной
                для каждого клиента.
              </span>
            </p>
          </div>
        </section>
      </div>
      <div className="max-w-[1920px] mx-auto flex items-end justify-between gap-6 px-[100px] max-lg:px-[50px] max-md:flex-col max-md:items-center relative top-[-250px] ml-[160px]">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/a82dfa89a110e64111e2022f66d58a22f129b4cd?width=1400"
          alt="Fuel pump and car - quality fuel supply process"
          className="w-[700px] h-[434px] object-cover max-md:w-full max-md:h-[320px]"
        />
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/6dc154155847bafd0d61c7629f5a3a9e2a54a674?width=2618"
          alt="Modern Uzenco gas station with quality standards"
          className="flex-1 w-[1309px] h-[774px] object-cover max-md:w-full max-md:h-[420px]"
        />
      </div>
    </section>
    */
}
