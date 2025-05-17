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
    <div
      dir="rtl"
      id="certifection"
      className="py-24 bg-[url('/img/mesh-819.png')] bg-cover bg-center bg-no-repeat"
    >
      <div className="flex flex-col m-auto justify-center items-center w-[300px] h-[100px]">
        <h1 className="text-2xl font-bold">دوره ها و مدارک</h1>
        <div className="h-[2px] w-[200px] bg-[#1E3A8A]"></div>
      </div>

      <div
        dir="rtl"
        className="px-10 py-24 max-w-6xl m-auto rounded-3xl relative"
      >
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-x-20 gap-y-20">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="relative border border-gray-300 rounded-xl shadow-sm p-6 bg-gray-50"
            >
              <div className="absolute -right-5 top-1/2 transform -translate-y-1/2 bg-white border border-[#1E3A8A] rounded-full p-2 shadow-md">
                <GraduationCap className="text-[#06257b]" size={24} />
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
