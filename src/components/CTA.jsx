import React from "react";

export default function CTA() {
  return (
    <div className="">
      <div className="px-20 text-neutral-700 max-md:pl-5">
        <div className="flex overflow-hidden flex-col justify-center items-center pt-36 pb-52 bg-white max-md:py-24 max-md:max-w-full">
          <div className="flex self-stretch w-full text-base font-semibold tracking-wide leading-none uppercase max-md:max-w-full">
            <div className="flex flex-1 shrink items-end basis-0 min-w-60 size-full max-md:max-w-full">
              <div className="gap-6 w-full">
                <div className="w-full">
                  <div className="leading-4 text-neutral-700">
                    Наши партнёры
                  </div>
                </div>
              </div>
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
          <img
            src="https://api.builder.io/api/v1/image/assets/cb15d3f09a3b4320b834af2eefdebf28/02a07dd73ddb2596dc8ef3e8c33a7602e4693c9f?placeholderIfAbsent=true"
            className="object-contain gap-0 max-w-full aspect-[5.41] w-[2085px]"
            alt="Partners visual representation"
          />
        </div>
      </div>
    </div>
  );
}
