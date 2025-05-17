import React from "react";

function Languages() {
  return (
    <div dir="rtl" id="languages" className="py-24 max-w-5xl mx-auto relative">
      <div className="flex flex-col justify-center items-center mb-8 max-w-5xl mx-auto ">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center mb-4">
          زبان
        </h1>
        <div className="w-[70%] md:w-[70%] h-[1px] bg-fuchsia-800 mb-6"></div>
      </div>
      <h1 className="m-auto font-bold text-3xl mb-4 relative z-10">انگلیسی:</h1>

      <div className="grid grid-cols-1 gap-6 relative z-10 ">
        {[
          { label: "گفتاری", value: "100%" },
          { label: "خواندن", value: "100%" },
          { label: "نوشتاری", value: "80%" },
          { label: "شنیداری", value: "80%" },
        ].map((item, index) => (
          <div key={index} className="w-[40%] relative z-10">
            <p className="text-lg font-semibold mb-2">{item.label}:</p>
            <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
              <div
                className="bg-fuchsia-900 text-xs font-medium text-blue-100 text-center p-1 leading-none rounded-full transition-all duration-500"
                style={{ width: item.value }}
              >
                {item.value}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Languages;
