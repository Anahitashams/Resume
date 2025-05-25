"use client";

import React from "react";
import Clouds from "./Clouds";
import Image from "next/image";

function Home() {
  return (
    <div className="h-screen w-full bg-white relative overflow-hidden">
      <Clouds />

      <div className="absolute top-56 left-0 right-0 flex flex-row items-start justify-center px-20 z-10">
        {/* متن و دکمه‌ها */}
        <div className="flex flex-col w-[50%] text-justify">
          <h1 className="font-bold text-5xl text-center">آناهیتا شمس</h1>
          <h2 className="mt-10 text-[20px] text-center leading-9">
            من برنامه نویس و طراح سایت هستم، توسعه و تولید وبسایت‌های مختلف برای
            انواع کسب و کارها و شرکت‌ها از خدمات تخصصی ما محسوب می‌شود. با ما
            تجربه فروش، معرفی و محبوبیتی لذت‌بخش را تجربه کنید.
          </h2>

          <div className="flex flex-row justify-center items-center mt-10 space-x-4">
            <button
              className="w-[200px] h-[60px] text-[#F3F4F6] rounded-xl bg-[#1E3A8A] shadow-md shadow-gray-400 hover:cursor-pointer hover:scale-110 duration-300 animate-bounce"
              style={{ animationDelay: "0s", animationDuration: "2s" }}
            >
              گیت هاب
            </button>

            <button
              className="w-[200px] h-[60px] text-[#F3F4F6] rounded-xl bg-[#374151] shadow-md shadow-gray-400 hover:cursor-pointer hover:scale-110 duration-300 animate-bounce"
              style={{ animationDelay: "0.5s", animationDuration: "2s" }}
              type="submit"
            >
              لینکدین
            </button>
          </div>
        </div>

        {/* عکس سمت راست */}
        <div className="w-1/2 flex justify-center items-center">
          <Image
            src="/accessury.png"
            alt="Anahita"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
