import React from "react";
import { FaThumbtack } from "react-icons/fa";

function Projects() {
  return (
    <div id="projects" dir="rtl" className="py-24 px-4 max-w-5xl mx-auto">
      <div
        id="experience"
        className="flex flex-col justify-center items-center mb-8"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-4">
          سوابق کاری
        </h1>
        <div className="w-[70%] md:w-[70%] h-[1px] bg-fuchsia-800 mb-6 "></div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[...Array(9)].map((_, index) => (
          <div
            key={index}
            className="relative bg-purple-50 shadow-lg rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:scale-105 transition-transform duration-300"
          >
            <div className="absolute -top-5">
              <FaThumbtack className="text-purple-900 text-3xl rotate-45" />
            </div>

            <p className="text-gray-700 text-sm sm:text-base">
              این یک توضیح کوتاه برای پروژه است. حداکثر در دو خط نوشته شود.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
