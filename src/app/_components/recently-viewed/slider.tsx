"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Pagination, Autoplay, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { Product, ProductCard } from "../product-card";

import mic from "./_assets/mic.jpg";
import tablet from "./_assets/tablet.jpg";
import headphone from "./_assets/headphone.jpg";
import smartphone from "./_assets/smart-phone.jpg";
import camera from "./_assets/camera.jpg";
import printer from "./_assets/printer.jpg";

const PRODUCTS = [
  {
    category: "Audio",
    name: "Wireless Audio System Multiroom 360 degree",
    img: mic,
    originalPrice: null,
    price: 685,
  },
  {
    category: "Smart Devices",
    name: "Tablet White EliteBook Revolve 810 G2",
    img: tablet,
    originalPrice: null,
    price: 1999,
  },
  {
    category: "Audio",
    name: "Purple Solo 2 Wireless",
    img: headphone,
    originalPrice: null,
    price: 685,
  },
  {
    category: "Smart Devices",
    name: "Smartphone 6S 32GB LTE",
    img: smartphone,
    originalPrice: null,
    price: 525,
  },
  {
    category: "Smart Devices",
    name: "Widescreen NX Mini F1 Smart NX",
    img: camera,
    originalPrice: null,
    price: 525,
  },
  {
    category: "Office",
    name: "Full Color Leserjet Pro M452dn",
    img: printer,
    originalPrice: null,
    price: 2499,
  },
];

const renderCard = (product: Product, index: number) => (
  <ProductCard key={index} product={product} />
);

export function Slider() {
  return (
    <div className="w-full h-full bg-gray-100/75 rounded">
      <Swiper
        className="h-full"
        modules={[Navigation, Pagination, A11y, Autoplay]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2500 }}
        navigation
        loop
        spaceBetween={12}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1280: {
            slidesPerView: 5,
          },
        }}
      >
        {PRODUCTS.map((product, i) => (
          <SwiperSlide key={i}>
            <ProductCard product={product} showMore={false} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
