import React from "react";

export default function MapShowcase() {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="max-w-[1920px] mx-auto max-h-[1249px]">
        <div className="self-stretch py-36 pr-48 pl-52 bg-zinc-300 text-neutral-700 max-md:px-5 max-md:py-24">
          <div className="flex w-full text-base font-semibold tracking-wide leading-none uppercase max-md:max-w-full">
            <div className="flex flex-1 shrink items-end basis-0 min-w-60 size-full max-md:max-w-full">
              <div className="gap-6">
                <div className="w-full">
                  <div className="leading-4 text-neutral-700">
                    Как мы работаем
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-0 pt-12 pb-16 max-md:max-w-full">
            <div className="flex flex-col justify-between items-start self-start pt-16 pr-24 border-t border-r border-solid border-r-neutral-700 border-t-neutral-700 min-h-[823px] min-w-60 w-[705px] max-md:max-w-full">
              <div className="flex flex-col justify-center max-w-full text-8xl tracking-tighter leading-[100px] w-[605px] max-md:text-4xl max-md:leading-10">
                <div className="text-neutral-700 max-md:max-w-full max-md:text-4xl max-md:leading-10">
                  ПОЛНЫЙ КОНТРОЛЬ ПОСТАВОК
                </div>
              </div>
              <div className="flex flex-col justify-center py-5 mt-72 max-w-full text-base font-semibold leading-5 uppercase w-[373px] max-md:mt-10">
                <div className="font-semibold text-neutral-700">
                  Мы предлагаем нашим клиентам удобный и прозрачный сервис:
                  берем на себя закупку, логистику, таможенные процедуры и
                  доставку, полностью контролируем процесс и гарантируем
                  надежное выполнение обязательств.
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start pl-24 border-t border-solid border-t-neutral-700 min-w-60 w-[818px] max-md:max-w-full">
              <div className="flex items-center px-12 py-5 max-w-full w-[722px] max-md:px-5">
                <div className="self-stretch my-auto min-w-60 w-[622px]">
                  <div className="text-6xl font-medium tracking-tighter leading-none text-gray-500 max-md:max-w-full max-md:text-4xl">
                    01
                  </div>
                  <div className="mt-5 text-2xl font-semibold leading-snug uppercase text-neutral-700">
                    Надежные поставки топлива
                  </div>
                  <div className="mt-5 text-lg leading-6 text-neutral-700 max-md:max-w-full">
                    Мы обеспечиваем контроль на всех этапах — от закупки и
                    транспортировки до таможенного оформления и доставки,
                    гарантируя стабильность и доверие.
                  </div>
                </div>
              </div>
              <div className="flex items-center px-12 py-5 max-w-full w-[722px] max-md:px-5">
                <div className="self-stretch my-auto min-w-60 w-[622px]">
                  <div className="text-6xl font-medium tracking-tighter leading-none text-gray-500 max-md:max-w-full max-md:text-4xl">
                    02
                  </div>
                  <div className="mt-5 text-2xl font-semibold leading-snug uppercase text-neutral-700">
                    Прозрачные процессы и сервис
                  </div>
                  <div className="mt-5 text-lg leading-6 text-neutral-700 max-md:max-w-full">
                    Каждый шаг открыт для клиента: мы демонстрируем честность и
                    обеспечиваем полную ясность сотрудничества.
                  </div>
                </div>
              </div>
              <div className="flex items-center px-12 py-5 max-w-full w-[722px] max-md:px-5">
                <div className="self-stretch my-auto min-w-60 w-[622px]">
                  <div className="text-6xl font-medium tracking-tighter leading-none text-gray-500 max-md:max-w-full max-md:text-4xl">
                    03
                  </div>
                  <div className="mt-5 text-2xl font-semibold leading-snug uppercase text-neutral-700">
                    Гарантия качества и стандартов
                  </div>
                  <div className="mt-5 text-lg leading-6 text-neutral-700 max-md:max-w-full">
                    Вся продукция Uzenco соответствует международным нормам и
                    подтверждается сертификатами качества.
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
