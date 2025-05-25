import React from "react";
import { GraduationCap } from "lucide-react";

function EducationBox() {
  const educationData = [
    {
      degree: "کارشناسی مهندسی کامپیوتر/IT",
      university: "دانشگاه کرج واحد اسلامی",
      years: "1403 مشغول به تحصیل",
    },
  ];

  return (
    <div id="education" dir="rtl" className="px-4 py-24 max-w-5xl mx-auto">
      <div className="flex flex-col justify-center items-center w-[300px] h-[100px] m-auto">
        <h1 className="text-2xl font-bold">سوابق تحصیلی</h1>
        <div className="h-[2px] w-[200px] bg-[#1E3A8A]"></div>
      </div>
      <div dir="rtl" className="px-4  max-w-3xl mx-auto">
        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="relative border border-gray-300 rounded-xl shadow-sm p-6 bg-white"
            >
              <div className="absolute -right-5 top-1/2 transform -translate-y-1/2 bg-white border border-[#1E3A8A] rounded-full p-2 shadow-md">
                <GraduationCap className="text-[#1E3A8A]" size={24} />
              </div>

              <div className="pr-12">
                <p className="text-lg font-semibold text-gray-800">
                  {edu.degree}
                </p>
                <p className="text-sm text-gray-600">{edu.university}</p>
                <p className="text-sm text-gray-400 mt-1">{edu.years}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EducationBox;
