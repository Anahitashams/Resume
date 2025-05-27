import React from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGithub,
  FaDatabase,
  FaMobileAlt,
  FaFigma,
  FaServer,
  FaSitemap, // برای SEO
  FaProjectDiagram, // برای Context یا UX
} from "react-icons/fa";

import { SiRedux, SiTypescript, SiNextdotjs } from "react-icons/si";

const cards = [
  {
    icon: <FaReact size={32} />,
    text: "تسلط بر React و ساخت رابط کاربری حرفه‌ای",
  },
  {
    icon: <FaServer size={32} />,
    text: "طراحی و پیاده‌سازی RESTful API حرفه‌ای",
  },
  { icon: <SiNextdotjs size={32} />, text: "برنامه‌نویسی SSR با Next.js" },
  {
    icon: <SiTypescript size={32} />,
    text: "توسعه با TypeScript و تایپ‌سیستم قوی",
  },
  { icon: <SiRedux size={32} />, text: "مدیریت حالت با Redux" },
  {
    icon: <FaProjectDiagram size={32} />,
    text: "Context API برای مدیریت state ساده‌تر",
  },
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
    text: "طراحی UI با Figma و طراحی تجربه کاربری (UX/UI)",
  },
  {
    icon: <FaSitemap size={32} />,
    text: "بهینه‌سازی سئو و ساختار سایت برای موتورهای جستجو",
  },
  {
    icon: <FaReact size={32} />,
    text: "کار با React Hooks برای مدیریت lifecycle و state",
  },
];

export default function Projects() {
  return (
    <div id="skills" dir="rtl" className=" px-4 max-w-6xl mx-auto">
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
