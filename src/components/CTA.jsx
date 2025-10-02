import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import img1 from "../assets/images/Frame 1244830965.png";
import img2 from "../assets/images/Frame 1244830968.png";
import img3 from "../assets/images/Frame 1244830965.png";
import img4 from "../assets/images/Frame 1244830966.png";
import img5 from "../assets/images/Frame 1244830967.png";
import img6 from "../assets/images/Frame 1244830968.png";

import img7 from "../assets/images/Новая папка/image 85.svg";
import img8 from "../assets/images/Новая папка/image 85 (1).svg";
import img9 from "../assets/images/Новая папка/image 85 (2).svg";
import img10 from "../assets/images/Новая папка/image 85 (3).svg";
import img11 from "../assets/images/Новая папка/image 85 (4).svg";
import img12 from "../assets/images/Новая папка/image 85 (5).svg";

export default function CTA() {
  const images = [img1, img2, img3, img4, img5, img6];

  return (
    <div className="max-w-[1920px] mx-auto">
      <div className="md:px-20 text-neutral-700 md:max-md:pl-5">
        <div className="flex flex-col md:hidden py-[100px] px-[16px] gap-[50px]">
          <div className="flex flex-col gap-[50px]">
            <h4 className="font-sora font-semibold text-[12.4px] leading-[15.4px] tracking-[3%] uppercase">
              Наши партнёры
            </h4>
            <h2 className="font-sora font-semibold text-[40px] leading-[120%] tracking-[-1.88px] uppercase">
              МЕЖДУНАРОДНЫЕ И ЛОКАЛЬНЫЕ СОЮЗЫ
            </h2>
            <div className="pt-[30px] pb-[10px]">
              <div className="border-t border-solid border-t-[#343438] pt-[60px] flex flex-col gap-[50px]">
                <p className="font-sora font-semibold text-[13.4px] leading-[16.94px] tracking-[0px] uppercase">
                  Мы сотрудничаем с ведущими поставщиками топлива из России,
                  Ирана и стран Европы. Каждое партнёрство строится на принципах
                  прозрачности, ответственности и взаимного доверия. Такой
                  подход позволяет Uzenco обеспечивать клиентов стабильными
                  поставками и продукцией высокого качества.
                </p>
              </div>
            </div>
            <div>
              <header className="items-stretch flex w-full max-w-full gap-[0.01px] text-[#343438] font-normal py-[60px]">
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
                      Мы объединяем опыт мировых компаний и локальные ценности,
                      чтобы создавать надёжные цепочки поставок и укреплять
                      энергетическую безопасность Узбекистана.
                    </p>
                  </div>
                </div>
              </header>
            </div>
          </div>
          <div className="w-full flex flex-col items-center">
            <div className="flex">
              <div className="flex items-center justify-center min-w-[180px] min-h-[180px] rounded-full border -mr-4">
                <img
                  src={img7}
                  alt="img1"
                  className="max-w-[114px] max-h-[114px]"
                />
              </div>
              <div className="flex items-center justify-center min-w-[180px] min-h-[180px] rounded-full border -ml-4">
                <img
                  src={img8}
                  alt="img2"
                  className="max-w-[114px] max-h-[114px]"
                />
              </div>
            </div>
            <div className=" flex -mt-4">
              <div className="flex items-center justify-center min-w-[180px] min-h-[180px] rounded-full border -mr-4">
                <img
                  src={img7}
                  alt="img1"
                  className="max-w-[114px] max-h-[114px]"
                />
              </div>
              <div className="flex items-center justify-center min-w-[180px] min-h-[180px] rounded-full border -ml-4">
                <img
                  src={img8}
                  alt="img2"
                  className="max-w-[114px] max-h-[114px]"
                />
              </div>
            </div>
            <div className=" flex -mt-4">
              <div className="flex items-center justify-center min-w-[180px] min-h-[180px] rounded-full border -mr-4">
                <img
                  src={img7}
                  alt="img1"
                  className="max-w-[114px] max-h-[114px]"
                />
              </div>
              <div className="flex items-center justify-center min-w-[180px] min-h-[180px] rounded-full border -ml-4">
                <img
                  src={img8}
                  alt="img2"
                  className="max-w-[114px] max-h-[114px]"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:flex overflow-hidden flex-col justify-center items-center  pb-52 bg-white max-md:py-24 max-md:max-w-full">
          <div className="w-[1520px] py-[50px] flex justify-start">
            <div className="max-w-[1920px] w-full flex justify-start  items-start gap-[23.2px]">
              <nav className="">
                <span className="w-full text-[#343438] text-[15.4px] font-semibold leading-[15.4px] tracking-[0.462px] uppercase text-center">
                  География поставок
                </span>
              </nav>
            </div>
          </div>
          <div className="pt-12 pb-52 max-w-full w-[1521px] max-md:pb-24">
            <div className="flex flex-wrap gap-0 pb-16 w-full max-w-[1521px] max-md:max-w-full">
              <div className="flex grow shrink items-end pt-16 pr-24 h-full text-8xl tracking-tighter border-t border-r border-solid border-r-neutral-700 border-t-neutral-700 leading-[100px] min-w-60 w-[1007px] max-md:max-w-full max-md:text-4xl max-md:leading-10">
                <div className="min-w-60 w-[993px] max-md:text-4xl max-md:leading-10">
                  <div className="text-neutral-700 max-md:max-w-full max-md:text-4xl max-md:leading-10">
                    МЕЖДУНАРОДНЫЕИ ЛОКАЛЬНЫЕСОЮЗЫ
                  </div>
                </div>
              </div>
              <div className="flex grow shrink gap-40 items-center pt-11 pb-5 pl-24 h-full text-base font-semibold leading-5 uppercase border-t border-solid border-t-neutral-700 min-w-60 w-[342px] max-md:max-w-full">
                <div className="self-stretch my-auto min-w-60 w-[328px]">
                  <div className="font-semibold text-neutral-700">
                    Мы сотрудничаем с ведущими поставщиками топлива из России,
                    Ирана и стран Европы. Каждое партнёрство строится на
                    принципах прозрачности, ответственности и взаимного доверия.
                    Такой подхо позволяет Uzenco обеспечивать клиентов
                    стабильными поставками и продукцией высокого качества.
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-0 w-full text-lg leading-5 uppercase max-md:max-w-full">
              <div className="flex gap-10 items-center h-full min-w-60 w-[900px]">
                <div className="self-stretch my-auto min-w-60 w-[641px]">
                  <div className="text-neutral-700 max-md:max-w-full">
                    Мы объединяем опыт мировых компаний и локальные ценности,
                    чтобы создавать надёжные цепочки поставок и укреплять
                    энергетическую безопасность Узбекистана.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full py-10 bg-white">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={10}
              slidesPerView={5}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              loop={true}
              className="w-full mx-auto"
              breakpoints={{
                320: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 5 }, // 1024 dan katta ekranlarda 5 ta ko‘rsatadi
              }}
            >
              {images.map((src, index) => (
                <SwiperSlide key={index}>
                  <div className="flex justify-center items-center">
                    <img
                      src={src}
                      alt={`Partner ${index + 1}`}
                      className="object-contain max-w-[385px] max-h-[385px] ml-3"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
