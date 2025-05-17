import React from "react";
import { GraduationCap } from "lucide-react";

function Experience() {
  const experienceData = [
    {
      degree: "مدیر فروش منطقه‌ای",
      university: "شرکت پخش دارویی الف",
      years: "۱۳۹۰ - ۱۳۹۵",
    },
    {
      degree: "کارشناس فروش",
      university: "شرکت دارویی ب",
      years: "۱۳۹۵ - ۱۳۹۸",
    },
    {
      degree: "مدیر بازرگانی",
      university: "شرکت دارویی ج",
      years: "۱۳۹۸ - اکنون",
    },
    {
      degree: "مدیر بازرگانی",
      university: "شرکت دارویی ج",
      years: "۱۳۹۸ - اکنون",
    },
  ];

  return (
    <div>
      <div
        id="experience"
        className="flex flex-col justify-center items-center mb-8 max-w-5xl m-auto"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">
          سوابق کاری
        </h1>
        <div className="w-[70%] md:w-[70%] h-[1px] bg-fuchsia-800 mb-6 "></div>
      </div>
      <div
        dir="rtl"
        className="px-10 py-24 max-w-6xl m-auto rounded-3xl bg-[#fff] relative"
      >
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="relative border border-gray-300 rounded-xl shadow-sm p-6 bg-white"
            >
              <div className="absolute -right-5 top-1/2 transform -translate-y-1/2 bg-white border border-fuchsia-800 rounded-full p-2 shadow-md">
                <GraduationCap className="text-fuchsia-800" size={24} />
              </div>

              <div className="pr-12">
                <p className="text-lg font-semibold text-gray-800">
                  {exp.degree}
                </p>
                <p className="text-sm text-gray-600">{exp.university}</p>
                <p className="text-sm text-gray-400 mt-1">{exp.years}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
