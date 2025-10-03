import React from "react";

export default function Features() {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="max-w-[1920px] mx-auto relative">
        <div className="max-w-[1920px] mx-auto flex flex-col md:gap-0 gap-[30px] items-start justify-center px-[16px] md:px-[200px] max-md:pl-5 py-[100px] md:py-[50px] pb-[100px]">
          <h4 className="md:mb-[50px]">Наша миссия</h4>
          <div className="max-w-[1920px] mx-auto flex flex-col md:gap-0 gap-[30px] md:flex-row items-center md:items-start justify-center md:border-t-[#343438] border-[sectionpx] md:border-t border-solid">
            <div className="w-full md:w-[701px] flex flex-col gap-4">
              <div className="w-full md:w-[701px] h-auto md:h-[606px] md:border-r md:border-r-[#343438] md:pt-[70px] md:pr-[100px] md:pb-[20px] flex flex-col gap-[30px] md:gap-[100px]">
                <h1 className="max-w-[360px] md:max-w-[606px] text-[#343438] text-[40px] md:text-[96px] font-normal leading-[100px] relative  max-md:text-[96px] max-md:leading-[68px] max-md:tracking-[-1px] max-sm:text-5xl max-sm:leading-[52px] max-sm:tracking-[-0.5px] md:mr-[70px]">
                  СТАНДАРТЫ МИРОВОГО КАЧЕСТВА
                </h1>
                <div className="w-full flex flex-col gap-[30px] md:gap-[50px] md:border-none border-t border-t-[#343438]">
                  <p className="block md:hidden pr-[30px] py-[30px] font-semibold text-[13px] text-[rgba(52,52,56,1)] max-md:text-sm max-sm:text-[13px]">
                    Наша миссия — обеспечить страну стабильными поставками
                    топлива, соответствующего международным стандартам. Мы
                    создаём прозрачные процессы и формируем доверие, делая
                    энергию доступной и надежной для каждого клиента.
                  </p>
                  <h4 className="md:w-full w-[132px] font-semibold text-[15px] text-[rgba(52,52,56,1)] max-md:text-sm max-sm:text-[13px]">
                    КАЧЕСТВО И НАДЁЖНОСТЬ
                  </h4>
                  <p className="md:w-full w-[288px] font-normal text-[13px] md:text-lg text-[rgba(52,52,56,1)] md:text-base ">
                    Мы гарантируем контроль всех этапов — от закупки до
                    доставки, обеспечивая своевременное выполнение обязательств
                    и долгосрочное партнёрство.
                  </p>
                </div>
              </div>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/a82dfa89a110e64111e2022f66d58a22f129b4cd?width=1400"
                alt="Fuel pump and car - quality fuel supply process"
                className="w-full h-auto md:w-[700px] md:h-[434px] object-contain md:object-cover max-md:w-full md:h-[320px] mt-[50px] md:mt-[100px] md:pr-[5px]"
              />
            </div>
            <div className="w-full md:pt-[70px]">
              <div className="hidden md:block w-auto pb-[153px] pl-[100px]">
                <p className="max-w-[328px] font-semibold text-[15px] text-[rgba(52,52,56,1)] max-md:text-sm max-sm:text-[13px]">
                  Наша миссия — обеспечить страну стабильными поставками
                  топлива, соответствующего международным стандартам. Мы создаём
                  прозрачные процессы и формируем доверие, делая энергию
                  доступной и надежной для каждого клиента.
                </p>
              </div>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/6dc154155847bafd0d61c7629f5a3a9e2a54a674?width=2618"
                alt="Modern Uzenco gas station with quality standards"
                className="flex-1 w-full h-auto md:h-[774px] object-contain md:object-cover max-md:w-full  md:pl-[5px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
