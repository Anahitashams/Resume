import React from "react";
import Image from "next/image";

function Language() {
  const skills = [
    { name: "Speaking (صحبت کردن)", level: 100 },
    { name: "Listening (شنیداری)", level: 80 },
    { name: "Reading (خواندن)", level: 100 },
    { name: "Writing (نوشتن)", level: 80 },
  ];

  return (
    <div dir="rtl" className="w-full px-4 sm:px-8 md:px-16 lg:px-32 py-12">
      <div className="flex flex-col justify-center items-center w-full max-w-xs mx-auto">
        <h1 className="text-xl sm:text-2xl font-bold">زبان</h1>
        <div className="h-[2px] w-[150px] sm:w-[200px] bg-[#1E3A8A] mt-2"></div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mt-12">
        {/* Blob image */}
        <div className="relative w-full max-w-md aspect-square">
          <Image
            src="/blob-1-opacity-90.gif"
            alt="blob"
            fill
            className="object-contain z-0"
          />
          <div className="absolute inset-0 flex items-center justify-center z-10">
            <p className="text-lg font-semibold text-white rounded-xl px-4 py-2 ">
              مسلط به زبان انگلیسی
            </p>
          </div>
        </div>

        {/* Language Cards + Skill Progress */}
        <div className="flex flex-col items-center w-full max-w-xl">
          <div className="flex flex-col sm:flex-row justify-center gap-4 w-full mt-8 text-right">
            <div className="bg-[#f1f3f6e5] rounded-2xl shadow-lg p-6 w-full sm:w-1/2">
              <h2 className="font-semibold text-lg sm:text-xl mb-2">فارسی</h2>
              <p className="text-sm text-gray-600">زبان مادری</p>
            </div>
            <div className="bg-[#f1f3f6e5] rounded-2xl shadow-lg p-6 w-full sm:w-1/2">
              <h2 className="font-semibold text-lg sm:text-xl mb-2">انگلیسی</h2>
              <p className="text-sm text-gray-600">سطح پیشرفته (Advanced)</p>
            </div>
          </div>

          <div className="bg-[#f1f3f6e5] rounded-2xl shadow-lg p-6 w-full mt-8 text-right">
            <h2 className="font-semibold text-lg sm:text-xl mb-4">
              مهارت‌های زبان انگلیسی
            </h2>
            {skills.map((skill, index) => (
              <div key={index} className="mb-4">
                <p className="text-sm text-gray-700 mb-1">{skill.name}</p>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-[#1E3A8A] h-3 rounded-full transition-all duration-500"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Language;
