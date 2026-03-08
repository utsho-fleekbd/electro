"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Pagination, Scrollbar, Autoplay } from "swiper/modules";

import { Button } from "@/components/ui/button";

import product01 from "./_assets/product-01.png";
import product02 from "./_assets/product-02.png";
import product03 from "./_assets/product-03.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const SLIDE_ITEMS = [
  { img: product01 },
  { img: product02 },
  { img: product03 },
];

export function Slider() {
  return (
    <div className="w-full h-fit bg-gray-100 rounded">
      <Swiper
        className="h-full"
        modules={[Pagination, Scrollbar, A11y, Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        autoplay={{ delay: 2500 }}
        loop
      >
        {SLIDE_ITEMS.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="grid grid-cols-2 items-center h-full max-w-7xl mx-auto px-10">
              <div className="space-y-6 uppercase">
                <div>
                  <h2 className="text-3xl lg:text-6xl font-light tracking-tight">
                    The New <br /> Standard
                  </h2>

                  <p className="text-sm lg:text-xl font-semibold text-gray-600">
                    Under favorable <br /> smartwatches
                  </p>
                </div>

                <div>
                  <p className="text-sm lg:text-lg text-gray-500">From</p>

                  <h2 className="text-2xl lg:text-5xl font-bold flex items-start gap-1">
                    <span className="text-base lg:text-2xl">$</span>
                    749
                    <span className="text-base lg:text-2xl">99</span>
                  </h2>
                </div>

                <Button className="py-5.5 px-12 text-base font-normal">
                  Start Buying
                </Button>
              </div>

              {/* IMAGE */}
              <div className="flex justify-center">
                <Image
                  src={item.img}
                  alt="Product"
                  width={450}
                  height={450}
                  className="object-contain"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
