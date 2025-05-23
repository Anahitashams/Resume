"use client";

import React from "react";
import Image from "next/image";

const BlobImage = () => {
  return (
    <div
      id="about-me"
      dir="rtl"
      className="relative flex flex-row-reverse items-center h-screen overflow-hidden w-full"
    >
      <div className="flex flex-col w-[55%] px-36 text-justify h-[400px] items-center justify-start">
        <h1 className="font-bold text-5xl text-justify">آناهیتا شمس</h1>
        <h2 className="mt-10 text-[20px]">
          من برنامه نویس و طراح سایت هستم , توسعه و تولید وبسایت های مختلف برای
          انواع کسب و کارها و شرکت ها از خدمات ما تخصصی ما محسوب میشود.با ما
          تجربه فروش,معرفی و محبوبیتی . لذتبخش را تجربه کنید
        </h2>

        <div className="flex flex-row w-full justify-center items-center mt-10">
          <button
            className="w-[200px] h-[60px] text-[#F3F4F6] rounded-xl ml-2 bg-[#1E3A8A] shadow-md shadow-gray-400 hover:cursor-pointer hover:scale-110 duration-300 animate-bounce"
            style={{ animationDelay: "0s", animationDuration: "2s" }}
          >
            گیت هاب
          </button>

          <button
            className="w-[200px] h-[60px] text-[#F3F4F6] rounded-xl mr-2 bg-[#374151] shadow-md shadow-gray-400 hover:cursor-pointer hover:scale-110 duration-300 animate-bounce"
            style={{ animationDelay: "0.5s", animationDuration: "2s" }}
            type="submit"
          >
            لینکدین
          </button>
        </div>

        {/* فلش متحرک بزرگ که فقط به دکمه گیت‌هاب اشاره می‌کند */}
        {/* <div className="relative w-full">
          <div className="absolute ml-80 top-[20px] animate-bounce">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-24 h-24 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </div>
        </div> */}
      </div>

      <div className="absolute w-[60%] h-[50%] -top-56 -right-[250px] z-0">
        <svg
          className="top-0 right-0"
          viewBox="0 0 405 405"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M202.5,380.4430135685834C226.39253461802244,385.4957955265634,247.46091777204836,362.1792467185125,267.1791834238087,347.7718244759704C284.78442766499785,334.9083104151761,296.76399103502564,316.7125354085024,311.5960243538856,300.7305015450542C326.62438257974355,284.53692073828233,349.27987148231534,273.41839523665834,355.77833111899264,252.30314878626993C362.28120538804757,231.17355800570903,351.79770059179623,208.82635890782996,346.48508005840995,187.36655827079366C341.64583897254045,167.81892668583635,337.0520625909023,148.01573743021757,325.82253550920905,131.29970092661102C314.87590920469376,115.00478453641647,299.3197009323337,102.53647684136075,282.5941461231664,92.25986534049743C266.49708100235245,82.36941408562883,246.74062001285873,81.50845513691354,230.13137744792604,72.50458969212346C207.04091813213833,59.98725857813868,191.62567579487077,32.25633641452073,165.5851591791365,28.829328387561066C140.50720821032672,25.528996810503042,111.76207434819227,35.669016692739234,95.14618038741244,54.74014359171073C77.97845926635503,74.44463790532713,90.7239101623515,107.79334693115409,77.26760798351961,130.19704475802422C63.48589853996375,153.14252040265268,26.514052291542768,157.72264067063784,18.041961257533785,183.11267889936644C9.962961160026644,207.32466157308693,18.965679682947908,237.05484541083126,34.97939086807595,256.9307454318961C51.340781346961805,277.23817808160874,82.0664578330286,277.5617499712679,104.64798310137532,290.6063517582221C120.62481179459114,299.83563833850116,135.36104459483144,310.29106158815637,148.95264362166625,322.76933157109175C168.49026611232543,340.7065682260117,176.55103885143325,374.9553394973318,202.5,380.4430135685834"
            fill="#1E3A8A"
          />
        </svg>
        <div className="absolute top-48 right-48 z-10 w-[200px] h-[200px] sm:w-32 sm:h-32 md:w-36 md:h-36 overflow-hidden shadow-lg">
          <Image
            src="/img/images.pg"
            alt="Your profile"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default BlobImage;
