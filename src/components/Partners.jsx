import React from "react";
import img1 from "../assets/images/image1.svg";
import img2 from "../assets/images/image2.svg";
import img3 from "../assets/images/image3.svg";

export default function Partners() {
  const BellIcon = () => (
    <svg
      width="22"
      height="22"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-[22px] h-[22px]"
    >
      <g clipPath="url(#clip0_577_443)">
        <path
          d="M18.6384 17.5952L19.0051 18.0841C19.157 18.2865 19.1159 18.5738 18.9134 18.7257C18.8341 18.7852 18.7376 18.8174 18.6384 18.8174H3.97176C3.71863 18.8174 3.51343 18.6121 3.51343 18.3591C3.51343 18.2599 3.54559 18.1633 3.60509 18.0841L3.97176 17.5952V9.65072C3.97176 5.60063 7.255 2.31738 11.3051 2.31738C15.3552 2.31738 18.6384 5.60063 18.6384 9.65072V17.5952ZM9.01343 19.7341H13.5968C13.5968 20.9997 12.5707 22.0257 11.3051 22.0257C10.0395 22.0257 9.01343 20.9997 9.01343 19.7341Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_577_443">
          <rect
            width="22"
            height="22"
            fill="white"
            transform="translate(0.305054 0.484375)"
          />
        </clipPath>
      </defs>
    </svg>
  );

  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="max-w-[1280px] w-full mx-auto relative">
        <div className="w-[100%] py-[100px] px-[16px] flex md:hidden text-[#343438] flex flex-col gap-[30px]">
          <div className="flex flex-col gap-[50px]">
            <h4 className="font-sora font-semibold text-[12.4px] leading-[15.4px] tracking-[3%] uppercase">
              Сертификаты и доверие
            </h4>
            <h2 className="font-sora font-semibold text-[40px] leading-[120%] tracking-[-1.88px] uppercase">
              МЕЖДУНАРОДНЫЕ СТАНДАРТЫ КАЧЕСТВА
            </h2>
            <div className="pt-[30px] pb-[10px]">
              <div className="border-t border-solid border-t-[#343438] pt-[30px] flex flex-col gap-[50px]">
                <p className="font-sora font-semibold text-[13.4px] leading-[16.94px] tracking-[0px] uppercase">
                  Мы работаем исключительно в рамках международных стандартов
                  качества. Каждая партия топлива Uzenco проходит обязательную
                  сертификацию и сопровождается полным пакетом документов. Такой
                  подход позволяет нашим клиентам быть уверенными в прозрачности
                  поставок и надёжности партнёрства.
                </p>
                <p className="font-sora font-semibold text-[13.4px] leading-[16.94px] tracking-[0px] uppercase">
                  Для Uzenco приоритетом является безопасность и доверие
                  клиентов. Мы применяем систему многоуровневого контроля и
                  предоставляем официальные сертификаты качества на все виды
                  топлива. Это подтверждает, что наши поставки соответствуют
                  международным нормам и экологическим требованиям.
                </p>
              </div>
            </div>
            <div>
              <header className="items-stretch flex w-full max-w-full gap-[0.01px] text-[#343438] font-normal pb-[60px]">
                <div className="flex items-start justify-start pr-[30px] pt-[30px] border-r-[#343438] border-t-[#343438] border-t border-solid border-r">
                  <div
                    className="justify-center items-center self-stretch flex w-[32px] h-[32px] bg-[#343438] rounded-[25.3px]"
                    role="img"
                    aria-label="Quality fuel icon"
                  >
                    <div className="min-w-[14px] self-stretch min-h-[14px] w-[14px] max-w-[14px] max-h-[14px] my-auto">
                      <img
                        src="https://api.builder.io/api/v1/image/assets/cb15d3f09a3b4320b834af2eefdebf28/e8cd881e8e35db0af96f3442ceb22be36e2d9a61?placeholderIfAbsent=true"
                        className="aspect-[1] object-contain w-full"
                        alt="Quality fuel supply icon"
                      />
                    </div>
                  </div>
                </div>
                <div className="items-start flex  gap-[158.39px] text-[13px] md:text-lg leading-normal md:leading-[23px] h-full md:w-[363px] pl-[30px] pt-[30px] md:pl-[100px] md:pt-[45px] pb-[0] md:pb-5 border-t-[#343438] border-t border-solid">
                  <div className="self-stretch w-full h-[140px]">
                    <p className="text-[#343438] font-sora font-normal text-[13.6px] leading-[130%] tracking-[0px] uppercase">
                      Сертификаты качества и соблюдение международных стандартов
                      подтверждают надёжность и безопасность нашей работы.
                    </p>
                  </div>
                </div>
              </header>
            </div>
          </div>
          <div className="w-[100%] object-contain h-auto">
            <img className="w-full" src={img1} alt="" />
          </div>
          <div className="w-[100%] object-contain h-auto">
            <img className="w-full" src={img2} alt="" />
          </div>
          <div className="w-[100%] object-contain h-auto">
            <img className="w-full" src={img3} alt="" />
          </div>
        </div>
        <div className="hidden md:flex relative flex-col justify-end items-center self-stretch px-4 sm:px-6 lg:px-0 py-36 bg-white max-md:px-12 max-md:py-24 max-sm:px-5 max-sm:py-12">
          <div className="max-w-[1280px] w-full py-[30px] flex justify-start">
            <div className="max-w-[1280px] w-full flex justify-start  items-start gap-[23.2px]">
              <nav className="">
                <span className="w-full text-[#343438] text-[15.4px] font-semibold leading-[15.4px] tracking-[0.462px] uppercase text-start">
                  Сертификаты и доверие
                </span>
              </nav>
            </div>
          </div>

          <div className="max-w-[1280px] flex relative flex-col justify-end items-start px-0 pt-12 pb-16">
            <div className="flex relative gap-0 items-start pb-16 max-md:flex-col max-md:gap-12">
              <div className="flex relative flex-col justify-between items-start self-stretch pt-16 pr-24 pb-0 pl-0 border-t border-r border-solid border-r-neutral-700 border-t-neutral-700 w-full lg:w-2/3 max-md:pt-12 max-md:pr-12 max-md:pb-0 max-md:pl-0 max-md:w-full max-md:border-r-[none] max-sm:pt-8 max-sm:pr-5 max-sm:pb-0 max-sm:pl-0">
                <div className="flex relative flex-col items-start">
                  <div className="relative text-8xl tracking-tighter leading-[100px] text-neutral-700 w-[578px] max-md:w-full max-md:text-7xl max-md:leading-[76px] max-sm:text-5xl max-sm:leading-[52px]">
                    <span className="text-8xl text-neutral-700 max-sm:text-5xl">
                      МЕЖДУНАР ОДНЫЕ
                      <br />
                      СТАНДАРТЫ
                      <br />
                      КАЧЕСТВА
                    </span>
                  </div>
                </div>

                <div className="flex relative items-start px-0 py-5">
                  <div className="relative text-base font-semibold leading-5 uppercase text-neutral-700 w-[328px] max-sm:w-full max-sm:text-sm max-sm:leading-5">
                    <div className="text-base font-bold text-neutral-700 max-sm:text-sm">
                      Мы работаем исключительно в рамках международных
                      стандартов качества. Каждая партия топлива Uzenco проходит
                      обязательную сертификацию и сопровождается полным пакетом
                      документов. Такой подход позволяет нашим клиентам быть
                      уверенными в прозрачности поставок и надёжности
                      партнёрства.
                    </div>
                  </div>
                </div>

                <div className="flex relative items-start px-0 py-5">
                  <div className="relative text-base font-semibold leading-5 uppercase text-neutral-700 w-[328px] max-sm:w-full max-sm:text-sm max-sm:leading-5">
                    <div className="text-base font-bold text-neutral-700 max-sm:text-sm">
                      Для Uzenco приоритетом является безопасность и доверие
                      клиентов. Мы применяем систему многоуровневого контроля и
                      предоставляем официальные сертификаты качества на все виды
                      топлива. Это подтверждает, чо наши поставки соответствуют
                      международным нормам и экологическим требованиям.
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex relative flex-col gap-36 justify-end items-start self-stretch pt-16 pr-0 pb-5 pl-24 border-t border-solid border-t-neutral-700 w-full lg:w-1/2 max-md:gap-24 max-md:px-0 max-md:pt-12 max-md:pb-5 max-md:w-full max-sm:gap-12 max-sm:px-0 max-sm:pt-8 max-sm:pb-5">
                <div className="flex relative gap-10 items-start self-stretch h-[51px] max-md:flex-col max-md:gap-8 max-md:h-auto max-sm:gap-5">
                  <div className="flex relative flex-col items-start">
                    <div className="relative text-lg leading-5 uppercase text-neutral-700 w-[453px] max-md:w-full max-sm:w-full max-sm:text-base">
                      <div className="text-lg text-neutral-700 max-sm:text-base">
                        Сертификаты качества и соблюдение международных
                        стандартов подтверждают надёжность и безопасность нашей
                        работы.
                      </div>
                    </div>
                  </div>

                  <div className="flex relative justify-center items-center rounded-3xl bg-neutral-700 h-[51px] w-[51px]">
                    <div className="flex relative flex-col items-start max-h-[22px] max-w-[22px] min-h-[22px] min-w-[22px]">
                      <div className="flex relative justify-center items-center h-[22px] w-[22px]">
                        <div className="flex absolute top-0 left-0 shrink-0 justify-center items-center h-[22px] w-[22px]">
                          <BellIcon />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full flex relative flex-col gap-24 items-start max-md:gap-12 max-sm:gap-8">
                  <div className="relative h-[700px] w-full max-w-[600px] mx-auto max-md:h-[600px] max-md:w-[600px] max-sm:w-full max-sm:h-[400px] max-sm:max-w-[400px]">
                    <div className="absolute top-0 left-0 shrink-0 bg-neutral-700 h-[700px] w-full max-w-[600px] mx-auto max-md:h-[600px] max-md:w-[600px] max-sm:w-full max-sm:h-[400px]" />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/b5745a8932c35b2db1425b46ef3123fcbad52571?width=1564"
                      alt=""
                      className="absolute top-0 left-0 shrink-0 opacity-70 bg-blend-multiply aspect-[1/1] h-full w-full max-w-[600px] mx-auto"
                    />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/8473fa28c476228d061a3035882dfeee7f262152?width=875"
                      alt="Certificate A4 - 20"
                      className="absolute shrink-0 h-auto left-[53px] top-[40px] w-auto"
                    />
                  </div>
                  <div className="relative h-[700px] w-full max-w-[600px] mx-auto max-md:h-[600px] max-md:w-[600px] max-sm:w-full max-sm:h-[400px] max-sm:max-w-[400px]">
                    <div className="absolute top-0 left-0 shrink-0 bg-neutral-700 h-[700px] w-full max-w-[600px] mx-auto max-md:h-[600px] max-md:w-[600px] max-sm:w-full max-sm:h-[400px]" />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/b5745a8932c35b2db1425b46ef3123fcbad52571?width=1564"
                      alt=""
                      className="absolute top-0 left-0 shrink-0 opacity-70 bg-blend-multiply aspect-[1/1] h-full w-full max-w-[600px] mx-auto"
                    />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/51c95739f3480a3aa7bc32083942edad162cb16c?width=875"
                      alt="Certificate A4 - 20"
                      className="absolute shrink-0 h-auto left-[53px] top-[40px] w-auto"
                    />
                  </div>
                  <div className="relative h-[700px] w-full max-w-[600px] mx-auto max-md:h-[600px] max-md:w-[600px] max-sm:w-full max-sm:h-[400px] max-sm:max-w-[400px]">
                    <div className="absolute top-0 left-0 shrink-0 bg-neutral-700 h-[700px] w-full max-w-[600px] mx-auto max-md:h-[600px] max-md:w-[600px] max-sm:w-full max-sm:h-[400px]" />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/b5745a8932c35b2db1425b46ef3123fcbad52571?width=1564"
                      alt=""
                      className="absolute top-0 left-0 shrink-0 opacity-70 bg-blend-multiply aspect-[1/1] h-full w-full max-w-[600px] mx-auto"
                    />
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/d0a9eaf48f6a11361c4b5b3cd6c187eac8f47ec1?width=875"
                      alt="Certificate A4 - 20"
                      className="absolute shrink-0 h-auto left-[53px] top-[40px] w-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
