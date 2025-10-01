function Footer() {
  return (
    <section className="w-full bg-[#343438] overflow-hidden">
      <div className="max-w-[1920px] mx-auto">
        <footer className="box-border flex flex-col justify-end items-start pt-36 pr-12 pb-10 pl-14 max-md:px-6 max-md:pt-20 max-md:pb-10 max-sm:px-4 max-sm:pt-10 max-sm:pb-5">
          <div className="flex items-end w-full max-md:flex-col max-md:gap-10 max-md:items-start max-sm:gap-8">
            {/* Left Section - Social Media */}
            <div className="flex flex-1 items-end">
              <div className="flex flex-col gap-6 justify-end items-start max-sm:gap-4">
                <div className="flex flex-col items-start">
                  <div className="text-base font-semibold tracking-wide leading-4 uppercase text-zinc-300 max-sm:text-sm max-sm:leading-4">
                    YOUTUBE
                  </div>
                </div>
                <div className="flex flex-col items-start">
                  <div className="text-base font-semibold tracking-wide leading-4 uppercase text-zinc-300 max-sm:text-sm max-sm:leading-4">
                    INSTAGRAM
                  </div>
                </div>
                <div className="flex flex-col items-start">
                  <div className="text-base font-semibold tracking-wide leading-4 uppercase text-zinc-300 max-sm:text-sm max-sm:leading-4">
                    INSTAGRAM
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Navigation */}
            <div className="flex flex-1 items-end pl-20">
              <div className="flex flex-col gap-6 justify-end items-start max-sm:gap-4">
                <div className="flex flex-col items-start">
                  <div className="text-base font-semibold tracking-wide leading-4 uppercase text-zinc-300 max-sm:text-sm max-sm:leading-4">
                    О КОМПАНИИ
                  </div>
                </div>
                <div className="flex flex-col items-start">
                  <div className="text-base font-semibold tracking-wide leading-4 uppercase text-zinc-300 max-sm:text-sm max-sm:leading-4">
                    НАША МИССИЯ
                  </div>
                </div>
                <div className="flex flex-col items-start">
                  <div className="text-base font-semibold tracking-wide leading-4 uppercase text-zinc-300 max-sm:text-sm max-sm:leading-4">
                    КАК МЫ РАБОТАЕМ
                  </div>
                </div>
                <div className="flex flex-col items-start">
                  <div className="text-base font-semibold tracking-wide leading-4 uppercase text-zinc-300 max-sm:text-sm max-sm:leading-4">
                    НАШИ ПРЕИМУЩЕСТВА
                  </div>
                </div>
                <div className="flex flex-col items-start">
                  <div className="text-base font-semibold tracking-wide leading-4 uppercase text-zinc-300 max-sm:text-sm max-sm:leading-4">
                    НАША КОМАНДА
                  </div>
                </div>
                <div className="flex flex-col items-start">
                  <div className="text-base font-semibold tracking-wide leading-4 uppercase text-zinc-300 max-sm:text-sm max-sm:leading-4">
                    СЕРТИФИКАТЫ И ДОВЕРИЕ
                  </div>
                </div>
                <div className="flex flex-col items-start">
                  <div className="text-base font-semibold tracking-wide leading-4 uppercase text-zinc-300 max-sm:text-sm max-sm:leading-4">
                    НАШИ ПАРТНЁРЫ
                  </div>
                </div>
                <div className="flex flex-col items-start">
                  <div className="text-base font-semibold tracking-wide leading-4 uppercase text-zinc-300 max-sm:text-sm max-sm:leading-4">
                    КОНТАКТЫ
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information Section */}
          <div className="flex flex-col justify-end items-start pt-20 w-full">
            <div className="flex gap-0 items-start w-full">
              {/* Phone Number */}
              <div className="flex flex-1 items-end pt-11 pr-24 pb-0 pl-0 border-t border-r border-solid border-r-zinc-300 border-t-zinc-300 max-sm:pt-8 max-sm:pr-5 max-sm:pb-0 max-sm:pl-0">
                <div className="flex flex-col items-start">
                  <div className="w-[887px] text-8xl tracking-tighter text-white uppercase leading-[96px] max-md:text-6xl max-md:leading-[64px] max-sm:text-4xl max-sm:tracking-tighter max-sm:leading-9">
                    +7 (967) 000 00 00
                  </div>
                </div>
              </div>

              {/* Office Information */}
              <div className="flex gap-40 items-end pt-11 pr-0 pb-5 pl-24 border-t border-solid border-t-zinc-300 w-[829px] max-md:gap-20 max-md:px-0 max-md:pt-11 max-md:pb-5 max-md:w-full max-sm:flex-col max-sm:gap-10 max-sm:items-start max-sm:px-0 max-sm:pt-8 max-sm:pb-4">
                <div className="flex flex-col items-start">
                  <div className="text-2xl font-semibold tracking-tight leading-7 text-white uppercase w-[121px] max-sm:text-xl max-sm:leading-6">
                    ОФИС
                  </div>
                </div>
                <div className="flex flex-col items-start">
                  <div className="text-lg leading-5 text-zinc-300 w-[191px] max-sm:w-full max-sm:text-base max-sm:leading-5">
                    Russia, Moscow, Example Street, 25
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons and Working Hours */}
            <div className="w-full flex flex-col items-end justify-end pt-16 max-sm:pt-10">
              <div className="flex gap-0 items-end w-full">
                {/* Action Buttons */}
                <div className="flex gap-40 items-end pr-20 w-[987px] max-md:flex-col max-md:gap-20 max-md:items-start max-md:w-full max-sm:gap-10">
                  <div className="flex flex-col items-start whitespace-nowrap">
                    <div className="text-base font-bold leading-4 text-white underline uppercase max-sm:text-sm max-sm:leading-4">
                      [ ЗАКАЗАТЬ ЗВОНОК ]
                    </div>
                  </div>
                  <div className="flex flex-col items-start whitespace-nowrap">
                    <div className="text-base font-bold leading-4 text-white underline uppercase max-sm:text-sm max-sm:leading-4">
                      [ НАПИСАТЬ СООБЩЕНИЕ УЧРЕДИТЕЛЮ UZENCO ]
                    </div>
                  </div>
                </div>

                {/* Working Hours and Route */}
                <div className="flex gap-36 items-end pl-24 w-[900px] max-md:flex-col max-md:gap-20 max-md:items-start max-md:w-full max-sm:gap-10">
                  <div className="flex flex-col items-start">
                    <div className="text-base font-semibold leading-4 uppercase text-zinc-300 w-[140px] max-sm:text-sm max-sm:leading-4">
                      РЕЖИМ РАБОТЫ
                      <br />
                      С 10:00 ДО 20:00
                      <br />
                      ПН — ПТ
                    </div>
                  </div>
                  <div className="flex flex-col items-start whitespace-nowrap">
                    <div className="text-base font-bold leading-4 text-white underline uppercase max-sm:text-sm max-sm:leading-4">
                      [ ПРОЛОЖИТЬ МАРШРУТ ]
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="flex flex-col items-start pt-36 w-full max-sm:pt-20">
              <div className="flex gap-0 justify-center items-start w-full">
                {/* Download Presentation */}
                <div className="flex items-end pr-20 w-[915px] max-md:w-full">
                  <div className="flex flex-col items-start whitespace-nowrap">
                    <div className="text-base font-semibold leading-4 text-white underline uppercase max-sm:text-sm max-sm:leading-4">
                      [ СКАЧАТЬ ПРЕЗЕНТАЦИЮ ]
                    </div>
                  </div>
                </div>

                {/* Disclaimer */}
                <div className="flex items-end pl-16 w-[900px] max-md:w-full">
                  <div className="flex flex-col items-start">
                    <div className="text-base font-semibold leading-4 text-gray-500 uppercase max-sm:text-sm max-sm:leading-4">
                      МАТЕРИАЛЫ, ПРЕДСТАВЛЕННЫЕ НА САЙТЕ,
                      <br />
                      НЕ ЯВЛЯЮТСЯ ПУБЛИЧНОЙ ОФЕРТОЙ.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}

export default Footer;
