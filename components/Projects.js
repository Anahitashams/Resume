import React from "react";
import Image from "next/image";

function Projects() {
  return (
    <div
      id="Projects"
      className="w-full h-auto flex flex-col justify-center items-center overflow-hidden"
    >
      <div className="flex flex-col justify-center items-center w-[300px] h-[100px]">
        <h1 className="text-2xl font-bold">پروژه های من</h1>
        <div className="h-[2px] w-[200px] bg-[#1E3A8A]"></div>
      </div>

      <div className="h-[300px] mt-16 w-[40%] flex flex-row items-center rounded-2xl overflow-hidden bg-white shadow-lg">
        <div className="w-1/2 h-full bg-amber-600">
          <Image
            className="h-full w-full object-cover"
            src="/img/images.jpg"
            width={500}
            height={500}
            alt="project"
          />
        </div>
        <div className="w-1/2 h-full bg-white flex items-center justify-end flex-col px-4">
          <h1 className="mt-6 font-bold text-lg">dacsczf</h1>
          <p className="mt-4 text-base text-center">
            lorem10 fvfzzzzzzzzzzzzzvffdfvdxdlorem10 fvfzzzzzzzzzzzzzvffdfvdxd
          </p>
          <h2 className="mt-10 font-bold text-xl">123</h2>
        </div>
      </div>

      <div className="h-[300px] mt-16 w-[40%] flex flex-row items-center rounded-2xl overflow-hidden bg-white shadow-lg">
        <div className="w-1/2 h-full bg-white flex items-center justify-end flex-col px-4">
          <h1 className="mt-6 font-bold text-lg">dacsczf</h1>
          <p className="mt-4 text-base text-center">
            lorem10 fvfzzzzzzzzzzzzzvffdfvdxdlorem10 fvfzzzzzzzzzzzzzvffdfvdxd
          </p>
          <h2 className="mt-10 font-bold text-xl">123</h2>
        </div>
        <div className="w-1/2 h-full bg-amber-600">
          <Image
            className="h-full w-full object-cover"
            src="/img/images.jpg"
            width={500}
            height={500}
            alt="project"
          />
        </div>
      </div>

      <div className="h-[300px] mt-16 w-[40%] flex flex-row items-center rounded-2xl overflow-hidden bg-white shadow-lg">
        <div className="w-1/2 h-full bg-amber-600">
          <Image
            className="h-full w-full object-cover"
            src="/img/images.jpg"
            width={500}
            height={500}
            alt="project"
          />
        </div>
        <div className="w-1/2 h-full bg-white flex items-center justify-end flex-col px-4">
          <h1 className="mt-6 font-bold text-lg">dacsczf</h1>
          <p className="mt-4 text-base text-center">
            lorem10 fvfzzzzzzzzzzzzzvffdfvdxdlorem10 fvfzzzzzzzzzzzzzvffdfvdxd
          </p>
          <h2 className="mt-10 font-bold text-xl">123</h2>
        </div>
      </div>
    </div>
  );
}

export default Projects;
