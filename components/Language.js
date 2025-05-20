import React from "react";

function Language() {
  const educationData = [
    {
      degree: "کارشناسی مهندسی آب",
      university: "دانشگاه تهران",
      years: "۱۳۸۵ - ۱۳۸۹",
    },
  ];

  return (
    <div id="Language" dir="rtl" className="px-4 py-24 max-w-5xl mx-auto">
      <div className="flex flex-col justify-center items-center mb-8 max-w-5xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4 mx-auto">
          سوابق تحصیلی
        </h1>
        <div className="w-[70%] md:w-[70%] h-[1px] bg-fuchsia-800 mb-6"></div>
      </div>
      <div dir="rtl" className="px-4  max-w-3xl mx-auto">
        <div className="space-y-6">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="relative border border-gray-300 rounded-xl shadow-sm p-6 bg-white"
            >
              <div className="absolute -right-5 top-1/2 transform -translate-y-1/2 bg-white border border-fuchsia-800 rounded-full p-2 shadow-md">
                {/* <GraduationCap className="text-fuchsia-800" size={24} /> */}
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

export default Language;
