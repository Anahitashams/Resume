import React from "react";
import Image from "next/image";

function Projects() {
  return (
    <>
      <div
        id="Projects"
        className="flex flex-col justify-center items-center w-[300px] h-[100px] m-auto"
      >
        <h1 className="text-2xl font-bold">پروژه های من</h1>
        <div className="h-[2px] w-[200px] bg-[#1E3A8A]"></div>
      </div>

      <div className="w-full flex flex-col items-center">
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          <div className="h-[300px] w-[500px]  flex flex-row items-center rounded-2xl overflow-hidden bg-white shadow-lg shadow-gray-200">
            <div className="w-1/2 h-full">
              <Image
                className="w-full h-full object-cover"
                src="/resrutant.png"
                width={500}
                height={500}
                alt="project"
              />
            </div>
            <div className="w-1/2 h-full bg-white flex flex-col items-center justify-center px-4 text-center">
              <h1 className="font-bold text-lg">رستوران گلبرگ</h1>
              <p className="text-base py-4">
                یک وبسایت شیک، خاص و لوکس برای یک رستوران برند و شیک
              </p>
              <h2 className="font-bold text-xl">1403</h2>
            </div>
          </div>

          <div className="h-[300px] w-[500px] flex flex-row items-center rounded-2xl overflow-hidden bg-white shadow-lg shadow-gray-200">
            <div className="w-1/2 h-full bg-white flex flex-col items-center justify-center px-4 text-center">
              <h1 className="font-bold text-lg">رستوران گلبرگ</h1>
              <p className="text-base py-4">
                یک وبسایت شیک، خاص و لوکس برای یک رستوران برند و شیک
              </p>
              <h2 className="font-bold text-xl">1403</h2>
            </div>
            <div className="w-1/2 h-full">
              <Image
                className="w-full h-full object-cover"
                src="/plants.png"
                width={500}
                height={500}
                alt="project"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-8 mt-8">
          <div className="h-[300px] w-[500px] flex flex-row items-center rounded-2xl overflow-hidden bg-white shadow-lg shadow-gray-200">
            <div className="w-1/2 h-full">
              <Image
                className="w-full h-full object-cover"
                src="/resturant.png"
                width={500}
                height={500}
                alt="project"
              />
            </div>
            <div className="w-1/2 h-full bg-white flex flex-col items-center justify-center px-4 text-center">
              <h1 className="font-bold text-lg">رستوران گلبرگ</h1>
              <p className="text-base py-4">
                یک وبسایت شیک، خاص و لوکس برای یک رستوران برند و شیک
              </p>
              <h2 className="font-bold text-xl">1403</h2>
            </div>
          </div>

          <div className="h-[300px] w-[500px] flex flex-row items-center rounded-2xl overflow-hidden bg-white shadow-lg shadow-gray-200">
            <div className="w-1/2 h-full bg-white flex flex-col items-center justify-center px-4 text-center">
              <h1 className="font-bold text-lg"> اکسسوری موانا</h1>
              <p className="text-base py-4">
                یک وبسایت شیک، خاص و لوکس برای یک رستوران اکسسوری خاص
              </p>
              <h2 className="font-bold text-xl">1403</h2>
            </div>
            <div className="w-1/2 h-full">
              <Image
                className="w-full h-full object-cover"
                src="/accessury.png"
                width={500}
                height={500}
                alt="project"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
