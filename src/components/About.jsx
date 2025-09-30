import React from "react";

export default function About() {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="max-w-[1920px] mx-auto max-h-[2426px] self-stretch flex flex-col bg-white px-[200px] max-md:pl-5 md:py-[150px]">
        <header className="self-stretch flex flex-col bg-white max-md:pl-5 max-md:pt-[100px]">
          <nav
            className="self-stretch flex w-full items-stretch text-[15px] text-[#343438] font-semibold uppercase tracking-[0.46px] leading-none max-md:max-w-full"
            aria-label="Breadcrumb navigation"
          >
            <div className="flex min-w-60 w-full h-full flex-1 shrink basis-[0%] max-md:max-w-full">
              <div className="w-[114px] gap-[23.2px]">
                <div className="w-full">
                  <a
                    href="#about"
                    className="text-[#343438] leading-[15.4px] hover:opacity-70 transition-opacity"
                    aria-label="О компании - About company"
                  >
                    О компании
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </header>

        <section className="w-full max-w-full pt-[50px] pb-[100px]">
          <header className="items-stretch flex w-full max-w-full gap-[0.01px] text-[#343438] font-normal pb-[60px] max-md:max-w-full">
            <div className="flex min-w-60 text-8xl uppercase tracking-[-3.88px] leading-[96px] h-full md:w-[1093px] pr-[100px] pt-[70px] border-r-[#343438] border-t-[#343438] border-t border-solid border-r max-md:max-w-full max-md:text-[40px] max-md:leading-[45px]">
              <h1 className="min-w-60 w-[993px] max-md:text-[40px] max-md:leading-[45px]">
                <span className="text-[#343438] leading-[96px] max-md:max-w-full max-md:text-[40px] max-md:leading-[45px]">
                  ЭНЕРГИЯ, КОТОРАЯ ДВИЖЕТ
                </span>
              </h1>
            </div>
            <div className="items-center flex min-w-60 gap-[158.39px] text-lg leading-[23px] h-full md:w-[363px] pl-[100px] pt-[45px] pb-5 border-t-[#343438] border-t border-solid">
              <div className="self-stretch min-w-60 w-[263px] my-auto">
                <p className="text-[#343438]">
                  Uzenco объединяет международный опыт и локальные ценности,
                  обеспечивая страну топливом, соответствующим мировым
                  стандартам.
                </p>
              </div>
            </div>
          </header>

          <div className="items-stretch flex w-full gap-[0.01px] max-md:max-w-full">
            <div className="flex min-w-60 w-[900px] items-center gap-[40px_140px] flex-wrap h-full">
              <div
                className="justify-center items-center self-stretch flex min-h-[51px] w-[51px] h-[51px] bg-[#343438] my-auto rounded-[25.3px]"
                role="img"
                aria-label="Quality fuel icon"
              >
                <div className="min-w-[22px] self-stretch min-h-[22px] w-[22px] max-w-[22px] max-h-[22px] my-auto">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/cb15d3f09a3b4320b834af2eefdebf28/e8cd881e8e35db0af96f3442ceb22be36e2d9a61?placeholderIfAbsent=true"
                    className="aspect-[1] object-contain w-full"
                    alt="Quality fuel supply icon"
                  />
                </div>
              </div>
              <div className="self-stretch text-[15px] text-[#343438] font-semibold uppercase leading-[17px] w-[220px] my-auto">
                <h2 className="text-[#343438] font-semibold leading-[17px]">
                  КАЧЕСТВЕННОЕ ТОПЛИВНОЕ ОБЕСПЕЧЕНИЕ
                </h2>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full" aria-label="Company gallery">
          <div className="flex gap-5 pt-5 items-end max-md:max-w-full">
            <img
              src="https://api.builder.io/api/v1/image/assets/cb15d3f09a3b4320b834af2eefdebf28/ba8034996a6f64de7ed5d209bb3fb11b8905a6d2?placeholderIfAbsent=true"
              className="aspect-[1.75] object-contain md:w-[1133px] min-w-60 max-md:max-w-full"
              alt="Uzenco energy facility - main operations view"
              loading="lazy"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/cb15d3f09a3b4320b834af2eefdebf28/0382865ede41aabc739193a11d346380d4d89f7d?placeholderIfAbsent=true"
              className="aspect-[1.08] object-contain md:w-[590px] min-w-60 max-md:max-w-full"
              alt="Uzenco energy infrastructure"
              loading="lazy"
            />
          </div>
          <div className="flex gap-5 pt-5 items-start pb-[100px] max-md:px-5 max-md:max-w-full">
            <img
              src="https://api.builder.io/api/v1/image/assets/cb15d3f09a3b4320b834af2eefdebf28/d672f60c4f04c8af87fa6cbd094bc256dd238fe0?placeholderIfAbsent=true"
              className="aspect-[1.08] object-contain md:w-[714px] min-w-60 max-md:max-w-full"
              alt="Uzenco fuel distribution network"
              loading="lazy"
            />
            <img
              src="https://api.builder.io/api/v1/image/assets/cb15d3f09a3b4320b834af2eefdebf28/2be65ec8d99da7ba90d22b29a123dc24f2d24d33?placeholderIfAbsent=true"
              className="aspect-[1.44] object-contain md:w-[786px] min-w-60 max-md:max-w-full"
              alt="Uzenco modern energy solutions"
              loading="lazy"
            />
          </div>
        </section>

        <section className="self-stretch flex w-full flex-col items-stretch text-[#343438] max-md:max-w-full">
          <header className="items-stretch flex w-full gap-[0.01px] text-[15px] font-semibold uppercase leading-[17px] max-md:max-w-full">
            <div className="flex min-w-60 w-[900px] items-center gap-[40px_140px] h-full">
              <div className="self-stretch w-[140px] my-auto">
                <h2 className="text-[#343438] font-semibold leading-[17px]">
                  ЦЕННОСТИ И ДОВЕРИЕ
                </h2>
              </div>
            </div>
          </header>

          <div className="flex gap-[40px_50px] text-lg font-normal leading-[23px] mt-[60px] max-md:max-w-full max-md:mt-10">
            <div className="flex min-w-60 items-center gap-2.5 w-[771px] max-md:max-w-full">
              <p className="text-[#343438] self-stretch w-[613px] my-auto max-md:max-w-full">
                Технологичность и инновации в каждой поставке — наш вклад в
                будущее энергетики Узбекистана.
              </p>
            </div>
            <p className="text-[#343438] w-[532px] max-md:max-w-full">
              Мы уверены, что сила бизнеса заключается в честности,
              ответственности и уважении к каждому клиенту и партнёру.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}
