import React from "react";

export default function Testimonials() {
  return (
    <section className="w-full bg-white overflow-hidden">
      <div className="max-w-[1920px] mx-auto">
        <div className="flex relative flex-col justify-end items-start self-stretch px-52 py-36 bg-white max-md:px-12 max-md:py-24 max-sm:px-5 max-sm:py-12">
          <div className="flex relative items-end self-stretch">
            <div className="flex relative items-end self-stretch flex-[1_0_0]">
              <div className="flex relative flex-col gap-6 justify-end items-start">
                <div className="flex relative flex-col items-start self-stretch">
                  <div
                    className="relative text-base font-semibold tracking-wide leading-4 uppercase text-neutral-700"
                    style={{ color: "#343438" }}
                  >
                    География поставок
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex relative flex-col justify-end items-start px-0 pt-12 pb-24">
            <div className="flex relative gap-0 items-start pb-16">
              <div className="flex relative items-end self-stretch pt-16 pr-24 pb-0 pl-0 border-t border-r border-solid border-r-neutral-700 border-t-neutral-700 max-md:pt-12 max-md:pr-12 max-md:pb-0 max-md:pl-0 max-sm:pt-8 max-sm:pr-5 max-sm:pb-0 max-sm:pl-0 max-sm:border-r-[none]">
                <div className="flex relative flex-col items-start">
                  <div
                    className="relative text-8xl tracking-tighter leading-[100px] text-neutral-700 w-[993px] max-md:w-full max-md:text-6xl max-md:leading-[70px] max-sm:text-4xl max-sm:leading-10"
                    style={{ color: "#343438" }}
                  >
                    СТАНДАРТЫ, ГАРАНТИРУЮЩИЕ БЕЗОПАСНОСТЬ
                  </div>
                </div>
              </div>

              <div className="flex relative gap-40 items-center self-stretch pt-11 pr-0 pb-5 pl-24 border-t border-solid border-t-neutral-700 max-md:gap-12 max-md:pt-8 max-md:pr-0 max-md:pb-5 max-md:pl-12 max-sm:flex-col max-sm:gap-5 max-sm:items-start max-sm:px-0 max-sm:py-5">
                <div className="flex relative flex-col items-start">
                  <div
                    className="relative text-base font-semibold leading-5 uppercase text-neutral-700 w-[306px] max-md:w-full"
                    style={{ color: "#343438" }}
                  >
                    Мы гарантируем, что каждая партия топлива соотве ствует
                    международным нормам и проходит строгий контроль качества.
                    Uzenco работает прозрачно: все поставки сопровождаются
                    официальными документами и сертификатами, что укрепляет
                    доверие партнёров и клиентов.
                  </div>
                </div>
              </div>
            </div>

            <div className="flex relative gap-0 items-center self-stretch">
              <div className="flex relative gap-36 items-center self-stretch w-[900px] max-md:flex-col max-md:gap-12 max-md:items-start max-md:w-full max-sm:gap-5">
                <div className="flex relative shrink-0 justify-center items-center rounded-3xl bg-neutral-700 h-[51px] w-[51px]">
                  <div className="flex relative flex-col items-start max-h-[22px] max-w-[22px] min-h-[22px] min-w-[22px]">
                    <div className="flex relative justify-center items-center h-[22px] w-[22px]">
                      <div className="flex absolute top-0 left-0 shrink-0 justify-center items-center h-[22px] w-[22px]">
                        <svg
                          width="23"
                          height="23"
                          viewBox="0 0 23 23"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-[22px] h-[22px]"
                        >
                          <path
                            d="M18.6283 17.3862L18.995 17.8751C19.1469 18.0776 19.1058 18.3648 18.9033 18.5167C18.824 18.5762 18.7275 18.6084 18.6283 18.6084H3.96166C3.70853 18.6084 3.50333 18.4032 3.50333 18.1501C3.50333 18.0509 3.53549 17.9544 3.59499 17.8751L3.96166 17.3862V9.44173C3.96166 5.39164 7.2449 2.1084 11.295 2.1084C15.3451 2.1084 18.6283 5.39164 18.6283 9.44173V17.3862ZM9.00333 19.5251H13.5867C13.5867 20.7907 12.5606 21.8167 11.295 21.8167C10.0294 21.8167 9.00333 20.7907 9.00333 19.5251Z"
                            fill="white"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex relative flex-col items-start">
                  <div
                    className="relative text-base font-semibold leading-4 uppercase text-neutral-700 w-[140px] max-sm:w-full"
                    style={{ color: "#343438" }}
                  >
                    НАШИ ГАРАНТИИ
                  </div>
                </div>

                <div className="flex relative flex-col items-start">
                  <div
                    className="relative text-lg leading-5 text-neutral-700 w-[621px] max-md:w-full max-sm:text-base"
                    style={{ color: "#343438" }}
                  >
                    Сертификаты качества и соблюдение международных стандарт в
                    подтверждают надёжность и безопасность нашей работы.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/f630495d4253df204397899ab6f2f518597f3335?width=3040"
            alt="Faoliyat geografiyasi"
            className="flex relative flex-col gap-2.5 items-start w-[1520px] max-md:w-full"
          />

          <div className="flex relative gap-5 items-center max-md:flex-wrap max-md:gap-4 max-sm:flex-col max-sm:gap-4">
            <div className=" flex relative flex-col justify-between items-start px-7 py-7 backdrop-blur-[12.5px] bg-neutral-800 bg-opacity-0 h-[366px] w-[366px] max-md:w-[calc(50%_-_7.5px)] max-sm:w-full">
              <div className="absolute top-0 left-0 bg-gray-500 backdrop-blur-[10px] h-[366px] w-[366px]" />

              <div className="flex relative justify-between items-start self-stretch z-[1]">
                <div className="flex relative flex-col items-start self-stretch">
                  <div className="relative text-base font-semibold tracking-tight leading-5 text-white uppercase max-sm:text-sm max-sm:leading-4">
                    ПОСТАВКИ ИЗ РОССИИ
                  </div>
                </div>
                <div className="flex relative flex-col items-start self-stretch">
                  <div className="relative text-base font-semibold tracking-tight leading-5 uppercase text-zinc-300 max-sm:text-sm max-sm:leading-4">
                    [ 01 ]
                  </div>
                </div>
              </div>

              <div className="flex relative flex-col items-start self-stretch pt-9 z-[1]">
                <div className="flex relative flex-col items-start self-stretch">
                  <div className="relative self-stretch text-sm font-medium leading-4 uppercase text-zinc-300 max-sm:text-xs max-sm:leading-4">
                    Надёжный источник топлива с гибкой логистикой и
                    долгосрочными партнёрскими отношениями.
                  </div>
                </div>
              </div>

              <div className="flex relative flex-col justify-end items-start self-stretch flex-[1_0_0] min-h-[51px] z-[1]">
                <div className="flex relative items-end self-stretch">
                  <div className="flex relative justify-center items-center rounded-3xl bg-neutral-700 h-[51px] w-[51px]">
                    <div className="flex relative flex-col items-start max-h-[22px] max-w-[22px] min-h-[22px] min-w-[22px]">
                      <div className="flex relative justify-center items-center h-[22px] w-[22px]">
                        <div className="flex absolute top-0 left-0 shrink-0 justify-center items-center h-[22px] w-[22px]">
                          <svg
                            width="23"
                            height="23"
                            viewBox="0 0 23 23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-[22px] h-[22px]"
                          >
                            <path
                              d="M10.52 15.8428H4.56167V14.0094H10.52C12.2919 14.0094 13.7283 15.4459 13.7283 17.2178C13.7283 18.9897 12.2919 20.4261 10.52 20.4261C9.14461 20.4261 7.97135 19.5607 7.51513 18.3446L9.2322 17.7007C9.42773 18.2219 9.93055 18.5928 10.52 18.5928C11.2794 18.5928 11.895 17.9771 11.895 17.2178C11.895 16.4584 11.2794 15.8428 10.52 15.8428ZM5.47833 10.3428H17.8533C19.6252 10.3428 21.0617 11.7792 21.0617 13.5511C21.0617 15.323 19.6252 16.7594 17.8533 16.7594C16.478 16.7594 15.3047 15.894 14.8485 14.678L16.5655 14.034C16.761 14.5552 17.2639 14.9261 17.8533 14.9261C18.6127 14.9261 19.2283 14.3105 19.2283 13.5511C19.2283 12.7917 18.6127 12.1761 17.8533 12.1761H5.47833C3.95955 12.1761 2.72833 10.9449 2.72833 9.42611C2.72833 7.90733 3.95955 6.67611 5.47833 6.67611H13.27C14.0294 6.67611 14.645 6.0605 14.645 5.30111C14.645 4.54171 14.0294 3.92611 13.27 3.92611C12.6806 3.92611 12.1777 4.29702 11.9822 4.81818L10.2652 4.17428C10.7214 2.95824 11.8946 2.09277 13.27 2.09277C15.0419 2.09277 16.4783 3.52919 16.4783 5.30111C16.4783 7.07302 15.0419 8.50944 13.27 8.50944H5.47833C4.97208 8.50944 4.56167 8.91985 4.56167 9.42611C4.56167 9.93238 4.97208 10.3428 5.47833 10.3428Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex relative flex-col justify-between items-start px-7 py-7 backdrop-blur-[12.5px] bg-neutral-800 bg-opacity-0 h-[366px] w-[366px] max-md:w-[calc(50%_-_7.5px)] max-sm:w-full">
              <div className="absolute top-0 left-0 bg-gray-500 backdrop-blur-[10px] h-[366px] w-[366px]" />

              <div className=" flex relative justify-between items-start self-stretch z-[1]">
                <div className="flex relative flex-col items-start self-stretch">
                  <div className="relative text-base font-semibold tracking-tight leading-5 text-white uppercase max-sm:text-sm max-sm:leading-4">
                    СТРАТЕГИЧЕСКИЕ МАРШРУТЫ <br /> ПОСТАВОК
                  </div>
                </div>
                <div className="flex relative flex-col items-start self-stretch">
                  <div className="relative text-base font-semibold tracking-tight leading-5 uppercase text-zinc-300 max-sm:text-sm max-sm:leading-4">
                    [ 02 ]
                  </div>
                </div>
              </div>

              <div className="flex relative flex-col items-start self-stretch pt-9 z-[1]">
                <div className="flex relative flex-col items-start self-stretch">
                  <div className="relative self-stretch text-sm font-medium leading-4 uppercase text-zinc-300 max-sm:text-xs max-sm:leading-4">
                    Мы используем проверенные международные транспортные
                    коридоры, что позволяет минимизировать риски и гарантировать
                    бесперебойные поставки топлива. Благодаря этому клиенты
                    Uzenco получают продукцию в срок и с сохранением качества.
                  </div>
                </div>
              </div>

              <div className="flex relative flex-col justify-end items-start self-stretch flex-[1_0_0] min-h-[51px] z-[1]">
                <div className="flex relative items-end self-stretch">
                  <div className="flex relative justify-center items-center rounded-3xl bg-neutral-700 h-[51px] w-[51px]">
                    <div className="flex relative flex-col items-start max-h-[22px] max-w-[22px] min-h-[22px] min-w-[22px]">
                      <div className="flex relative justify-center items-center h-[22px] w-[22px]">
                        <div className="flex absolute top-0 left-0 shrink-0 justify-center items-center h-[22px] w-[22px]">
                          <svg
                            width="23"
                            height="23"
                            viewBox="0 0 23 23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-[22px] h-[22px]"
                          >
                            <g clipPath="url(#clip0_577_377)">
                              <path
                                d="M18.6383 17.605L19.005 18.0938C19.1569 18.2963 19.1158 18.5836 18.9133 18.7355C18.834 18.795 18.7375 18.8271 18.6383 18.8271H3.97164C3.71851 18.8271 3.51331 18.6219 3.51331 18.3688C3.51331 18.2696 3.54547 18.1731 3.60497 18.0938L3.97164 17.605V9.66048C3.97164 5.61039 7.25488 2.32715 11.305 2.32715C15.3551 2.32715 18.6383 5.61039 18.6383 9.66048V17.605ZM9.01331 19.7438H13.5966C13.5966 21.0095 12.5706 22.0355 11.305 22.0355C10.0393 22.0355 9.01331 21.0095 9.01331 19.7438Z"
                                fill="white"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_577_377">
                                <rect
                                  width="22"
                                  height="22"
                                  fill="white"
                                  transform="translate(0.304993 0.494141)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex relative flex-col justify-between items-start px-7 py-7 backdrop-blur-[12.5px] bg-neutral-800 bg-opacity-0 h-[366px] w-[366px] max-md:w-[calc(50%_-_7.5px)] max-sm:w-full">
              <div className="absolute top-0 left-0 bg-gray-500 backdrop-blur-[10px] h-[366px] w-[366px]" />

              <div className="flex relative justify-between items-start self-stretch z-[1]">
                <div className="flex relative flex-col items-start self-stretch">
                  <div className="relative text-base font-semibold tracking-tight leading-5 text-white uppercase max-sm:text-sm max-sm:leading-4">
                    ШИРОКОЕ ПРИСУТСТВИЕ В <br /> РЕГИОНАХ
                  </div>
                </div>
                <div className="flex relative flex-col items-start self-stretch">
                  <div className="relative text-base font-semibold tracking-tight leading-5 uppercase text-zinc-300 max-sm:text-sm max-sm:leading-4">
                    [ 03 ]
                  </div>
                </div>
              </div>

              <div className="flex relative flex-col items-start self-stretch pt-9 z-[1]">
                <div className="flex relative flex-col items-start self-stretch">
                  <div className="relative self-stretch text-sm font-medium leading-4 uppercase text-zinc-300 max-sm:text-xs max-sm:leading-4">
                    Широкая география снабжения позволяет нам охватывать все
                    ключевые регионы Узбекистана. Это обеспечивает равномерное
                    распределение топлива и доступность для бизнеса любого
                    масштаба — от крупных заводов до локальных предприятий.
                  </div>
                </div>
              </div>

              <div className="flex relative flex-col justify-end items-start self-stretch flex-[1_0_0] min-h-[51px] z-[1]">
                <div className="flex relative items-end self-stretch">
                  <div className="flex relative justify-center items-center rounded-3xl bg-neutral-700 h-[51px] w-[51px]">
                    <div className="flex relative flex-col items-start max-h-[22px] max-w-[22px] min-h-[22px] min-w-[22px]">
                      <div className="flex relative justify-center items-center h-[22px] w-[22px]">
                        <div className="flex absolute top-0 left-0 shrink-0 justify-center items-center h-[22px] w-[22px]">
                          <svg
                            width="23"
                            height="23"
                            viewBox="0 0 23 23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-[22px] h-[22px]"
                          >
                            <g clipPath="url(#clip0_577_395)">
                              <mask
                                id="mask0_577_395"
                                style={{ maskType: "luminance" }}
                                maskUnits="userSpaceOnUse"
                                x="6"
                                y="0"
                                width="11"
                                height="23"
                              >
                                <path
                                  d="M16.7919 0.494141H6.63806V22.4941H16.7919V0.494141Z"
                                  fill="white"
                                />
                              </mask>
                              <g mask="url(#mask0_577_395)">
                                <path
                                  d="M8.75342 2.18652V22.4942"
                                  stroke="white"
                                  strokeWidth="3.38462"
                                  strokeLinecap="round"
                                />
                                <path
                                  d="M14.2534 2.18652V22.4942"
                                  stroke="white"
                                  strokeWidth="3.38462"
                                  strokeLinecap="round"
                                />
                              </g>
                            </g>
                            <defs>
                              <clipPath id="clip0_577_395">
                                <rect
                                  width="22"
                                  height="22"
                                  fill="white"
                                  transform="translate(0.714966 0.494141)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex relative flex-col justify-between items-start px-7 py-7 backdrop-blur-[12.5px] bg-neutral-800 bg-opacity-0 h-[366px] w-[366px] max-md:w-[calc(50%_-_7.5px)] max-sm:w-full">
              <div className="absolute top-0 left-0 bg-gray-500 backdrop-blur-[10px] h-[366px] w-[366px]" />

              <div className="flex relative justify-between items-start self-stretch z-[1]">
                <div className="flex relative flex-col items-start self-stretch">
                  <div className="relative text-base font-semibold tracking-tight leading-5 text-white uppercase max-sm:text-sm max-sm:leading-4">
                    ГЛОБАЛЬНЫЕ ПАРТНЁРСТВА И <br /> РЫНКИ
                  </div>
                </div>
                <div className="flex relative flex-col items-start self-stretch">
                  <div className="relative text-base font-semibold tracking-tight leading-5 uppercase text-zinc-300 max-sm:text-sm max-sm:leading-4">
                    [ 04 ]
                  </div>
                </div>
              </div>

              <div className="flex relative flex-col items-start self-stretch pt-9 z-[1]">
                <div className="flex relative flex-col items-start self-stretch">
                  <div className="relative self-stretch text-sm font-medium leading-4 uppercase text-zinc-300 max-sm:text-xs max-sm:leading-4">
                    Мы выстраиваем сотрудничество с ведущими компаниями в сфере
                    энергети��и и логистики. Это открывает доступ к качественным
                    нефтепродуктам разных категорий и подтверждает статус Uzenco
                    как надёжного и прозрачного поставщика.
                  </div>
                </div>
              </div>

              <div className="flex relative flex-col justify-end items-start self-stretch flex-[1_0_0] min-h-[51px] z-[1]">
                <div className="flex relative items-end self-stretch">
                  <div className="flex relative justify-center items-center rounded-3xl bg-neutral-700 h-[51px] w-[51px]">
                    <div className="flex relative flex-col items-start max-h-[22px] max-w-[22px] min-h-[22px] min-w-[22px]">
                      <div className="flex relative justify-center items-center h-[22px] w-[22px]">
                        <div className="flex absolute top-0 left-0 shrink-0 justify-center items-center h-[22px] w-[22px]">
                          <svg
                            width="23"
                            height="23"
                            viewBox="0 0 23 23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-[22px] h-[22px]"
                          >
                            <g clipPath="url(#clip0_577_418)">
                              <path
                                d="M11.125 0.384766L17.489 6.74873C21.0037 10.2634 21.0037 15.962 17.489 19.4767C13.9742 22.9914 8.27576 22.9914 4.76104 19.4767C1.24632 15.962 1.24632 10.2634 4.76104 6.74873L11.125 0.384766ZM11.125 3.2132L6.17525 8.16295C3.44158 10.8967 3.44158 15.3288 6.17525 18.0625C7.54314 19.4304 9.3363 20.1138 11.1292 20.1127L11.125 3.2132Z"
                                fill="white"
                              />
                            </g>
                            <defs>
                              <clipPath id="clip0_577_418">
                                <rect
                                  width="22"
                                  height="22"
                                  fill="white"
                                  transform="translate(0.125 0.384766)"
                                />
                              </clipPath>
                            </defs>
                          </svg>
                        </div>
                      </div>
                    </div>
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
