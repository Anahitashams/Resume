import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaDatabase,
  FaMobileAlt,
  FaFigma,
} from "react-icons/fa";

const cards = [
  {
    icon: <FaReact size={32} />,
    text: "تسلط بر React و ساخت رابط کاربری حرفه‌ای",
  },
  { icon: <FaNodeJs size={32} />, text: "توسعه بک‌اند با Node.js و Express" },
  { icon: <FaHtml5 size={32} />, text: "ساخت صفحات وب با HTML5 استاندارد" },
  {
    icon: <FaCss3Alt size={32} />,
    text: "استایل‌دهی حرفه‌ای با CSS و Tailwind",
  },
  { icon: <FaJs size={32} />, text: "برنامه‌نویسی با JavaScript مدرن" },
  { icon: <FaGithub size={32} />, text: "مدیریت سورس‌کد با Git و GitHub" },
  {
    icon: <FaDatabase size={32} />,
    text: "کار با پایگاه‌داده‌های SQL و NoSQL",
  },
  {
    icon: <FaMobileAlt size={32} />,
    text: "ریسپانسیو‌سازی برای موبایل و تبلت",
  },
  {
    icon: <FaFigma size={32} />,
    text: "طراحی UI با Figma و طراحی تجربه کاربری",
  },
];

export default function Projects() {
  return (
    <div id="projects" dir="rtl" className="py-24 px-4 max-w-5xl mx-auto">
      <div className="flex flex-col m-auto justify-center items-center w-[300px] h-[100px]">
        <h1 className="text-2xl font-bold">مهارت‌ها</h1>
        <div className="h-[2px] w-[200px] bg-[#1E3A8A]"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative bg-[#f1f3f6e5] h-[200px] shadow-lg rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:scale-105 transition-transform duration-300"
          >
            <div className="mb-4 text-[#1E3A8A] animate-float">
              {React.cloneElement(card.icon, { color: "#1E3A8A", size: 48 })}
            </div>
            <p className="text-gray-700 text-sm sm:text-base">{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
