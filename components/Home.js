"use client";

import React from "react";
import Clouds from "./Clouds";
import Image from "next/image";

function Home() {
  return (
    <div className="h-screen w-full bg-white relative overflow-hidden">
      <Clouds />

      <div className="absolute top-20 sm:top-40 md:top-44 lg:top-36 left-0 right-0 flex flex-col-reverse lg:flex-row items-center lg:items-start justify-center px-4 sm:px-8 md:px-12 lg:px-20 z-10 space-y-10 lg:space-y-0 lg:space-x-8">
        {/* متن و دکمه‌ها */}
        <div className="flex flex-col w-full lg:w-[50%] text-justify px-2 sm:px-4">
          <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center sm:mt-20">
            آناهیتا شمس
          </h1>
          <h2 className="mt-4 sm:mt-6 md:mt-8 text-sm sm:text-base md:text-lg lg:text-[20px] text-center leading-7 sm:leading-8 md:leading-9">
            من برنامه نویس و طراح سایت هستم، توسعه و تولید وبسایت‌های مختلف برای
            انواع کسب و کارها و شرکت‌ها از خدمات تخصصی ما محسوب می‌شود. با ما
            تجربه فروش، معرفی و محبوبیتی لذت‌بخش را تجربه کنید.
          </h2>

          <div className="flex flex-col sm:flex-row justify-center items-center mt-6 md:mt-8 lg:mt-10 gap-4 sm:gap-3 rtl:gap-x-reverse">
            <button
              className="w-32 sm:w-28 md:w-40 lg:w-[200px] h-10 sm:h-9 md:h-12 lg:h-[60px] text-xs sm:text-sm md:text-base lg:text-lg text-white rounded-xl bg-[#1E3A8A] shadow-md shadow-gray-400 hover:cursor-pointer hover:scale-105 duration-300 animate-bounce"
              style={{ animationDelay: "0s", animationDuration: "2s" }}
            >
              گیت هاب
            </button>

            <button
              className="w-32 sm:w-28 md:w-40 lg:w-[200px] h-10 sm:h-9 md:h-12 lg:h-[60px] text-xs sm:text-sm md:text-base lg:text-lg text-white rounded-xl bg-[#374151] shadow-md shadow-gray-400 hover:cursor-pointer hover:scale-105 duration-300 animate-bounce"
              style={{ animationDelay: "0.5s", animationDuration: "2s" }}
              type="submit"
            >
              لینکدین
            </button>
          </div>
        </div>

        {/* عکس سمت راست */}
        <div className="w-full lg:w-1/2 flex justify-center items-center px-4 sm:mt-10">
          <Image
            src="/accessury.png"
            alt="Anahita"
            width={300}
            height={300}
            className="object-contain sm:w-[300px] md:w-[350px] lg:w-[400px] h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
