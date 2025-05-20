import React from "react";

function Courses() {
  return (
    <div dir="rtl" id="experience" className="py-10 mb-20">
      <div className="flex flex-col m-auto justify-center items-center w-[300px] h-[100px]">
        <h1 className="text-2xl font-bold"> سوابق کاری</h1>
        <div className="h-[2px] w-[200px] bg-[#1E3A8A]"></div>
      </div>

      <div className="flex flex-col items-center space-y-10 mt-16">
        <ol className="flex flex-col sm:flex-row w-full max-w-5xl justify-center items-center gap-10">
          {[
            {
              title: "Flowbite Library v1.0.0",
              date: "Released on December 2, 2021",
              desc: "Get started with dozens of web components and interactive elements.",
            },
            {
              title: "Flowbite Library v1.2.0",
              date: "Released on December 23, 2021",
              desc: "Get started with dozens of web components and interactive elements.",
            },
            {
              title: "Flowbite Library v1.3.0",
              date: "Released on January 5, 2022",
              desc: "Get started with dozens of web components and interactive elements.",
            },
          ].map((item, idx) => (
            <li
              key={idx}
              className="relative flex-1 flex flex-col items-center"
            >
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full dark:bg-blue-900 ring-8 ring-white dark:ring-gray-900">
                  <svg
                    className="w-3 h-3 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                {idx !== 2 && (
                  <div className="hidden sm:block w-24 h-0.5 bg-gray-200 dark:bg-gray-700"></div>
                )}
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <time className="block mb-2 text-sm text-gray-400 dark:text-gray-500">
                  {item.date}
                </time>
                <p className="text-base text-gray-500 dark:text-gray-400">
                  {item.desc}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <ol className="flex flex-col sm:flex-row w-full max-w-4xl justify-center items-center gap-10">
          {[
            {
              title: "Flowbite Library v1.0.0",
              date: "Released on December 2, 2021",
              desc: "Get started with dozens of web components and interactive elements.",
            },
            {
              title: "Flowbite Library v1.2.0",
              date: "Released on December 23, 2021",
              desc: "Get started with dozens of web components and interactive elements.",
            },
            {
              title: "Flowbite Library v1.3.0",
              date: "Released on January 5, 2022",
              desc: "Get started with dozens of web components and interactive elements.",
            },
          ].map((item, idx) => (
            <li
              key={idx}
              className="relative flex-1 flex flex-col items-center"
            >
              <div className="flex items-center">
                <div className="z-10 flex items-center justify-center w-8 h-8 bg-blue-100 rounded-full dark:bg-blue-900 ring-8 ring-white dark:ring-gray-900">
                  <svg
                    className="w-3 h-3 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                {idx !== 2 && (
                  <div className="hidden sm:block w-24 h-0.5 bg-gray-200 dark:bg-gray-700"></div>
                )}
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <time className="block mb-2 text-sm text-gray-400 dark:text-gray-500">
                  {item.date}
                </time>
                <p className="text-base text-gray-500 dark:text-gray-400">
                  {item.desc}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Courses;
