import React from "react";
import Image from "next/image";

function Projects() {
  return (
    <>
      <div
        id="Projects"
        className="flex flex-col justify-center items-center w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl m-auto pt-8"
      >
        <div className="flex flex-col py-24 justify-center items-center w-full max-w-xs mx-auto">
          <h1 className="text-xl sm:text-2xl font-bold">پروژه ها</h1>
          <div className="h-[2px] w-[150px] sm:w-[200px] bg-[#1E3A8A] mt-2"></div>
        </div>
      </div>

      <div className="w-full flex flex-col items-center px-4 sm:px-8 md:px-16 lg:px-32 py-8 space-y-8">
        {[
          {
            title: "رستوران گلبرگ",
            desc: "یک وبسایت شیک، خاص و لوکس برای یک رستوران برند و شیک",
            year: "1403",
            image: "/plants.png",
            reverse: false,
          },
          {
            title: "رستوران گلبرگ",
            desc: "یک وبسایت شیک، خاص و لوکس برای یک رستوران برند و شیک",
            year: "1403",
            image: "/plants.png",
            reverse: true,
          },
          {
            title: "رستوران گلبرگ",
            desc: "یک وبسایت شیک، خاص و لوکس برای یک رستوران برند و شیک",
            year: "1403",
            image: "/resturant.png",
            reverse: false,
          },
          {
            title: "اکسسوری موانا",
            desc: "یک وبسایت شیک، خاص و لوکس برای یک رستوران اکسسوری خاص",
            year: "1403",
            image: "/accessury.png",
            reverse: true,
          },
        ].map((project, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              project.reverse ? "md:flex-row-reverse" : "md:flex-row"
            } items-center rounded-2xl overflow-hidden bg-white shadow-lg shadow-gray-200 w-full max-w-4xl`}
          >
            <div className="w-full md:w-1/2 h-60 sm:h-72 md:h-80 lg:h-96">
              <Image
                className="w-full h-full object-cover"
                src={project.image}
                width={600}
                height={600}
                alt="project"
              />
            </div>
            <div className="w-full md:w-1/2 h-full bg-white flex flex-col items-center justify-center p-4 text-center space-y-2">
              <h1 className="font-bold text-lg sm:text-xl md:text-2xl">
                {project.title}
              </h1>
              <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                {project.desc}
              </p>
              <h2 className="font-bold text-base sm:text-lg md:text-xl">
                {project.year}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Projects;
