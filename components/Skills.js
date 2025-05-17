import React from "react";
import Image from "next/image";

function Skills() {
  return (
    <div
      id="skills"
      className="w-full h-auto flex flex-col justify-center items-center overflow-hidden"
    >
      <div className="flex flex-col justify-center items-center w-[300px] h-[100px]">
        <h1 className="text-2xl font-bold">پروژه های من</h1>
        <div className="h-[2px] w-[200px] bg-[#1E3A8A]"></div>
      </div>
      <div className="h-[45%] mt-24 w-[50%] m-auto flex shadow-gray-400   flex-row items-center rounded-2xl overflow-hidden bg-white shadow-lg">
        <div className="w-[50%] h-full bg-amber-600">
          <Image
            className="h-full w-full object-cover"
            src="/img/images.jpg"
            width={500}
            height={500}
            alt="project"
          />
        </div>
        <div className="w-[50%] h-full  bg-white flex items-center justify-end flex-col">
          <h1 className="mt-10 font-bold ">dacsczf</h1>
          <p className="mt-10  text-xl  text-center">
            lorem10 fvfzzzzzzzzzzzzzvffdfvdxdlorem10 fvfzzzzzzzzzzzzzvffdfvdxd
          </p>
          <h2 className="mt-20 font-bold text-2xl">123</h2>
        </div>{" "}
      </div>
      <div className="h-[45%] mt-24 w-[50%] m-auto flex shadow-gray-400   flex-row items-start rounded-2xl overflow-hidden bg-white shadow-lg">
        <div className="w-[50%] h-full  bg-white flex items-center justify-end flex-col">
          <h1 className="mt-10 font-bold ">dacsczf</h1>
          <p className="mt-10  text-xl  text-center">
            lorem10 fvfzzzzzzzzzzzzzvffdfvdxdlorem10 fvfzzzzzzzzzzzzzvffdfvdxd
          </p>
          <h2 className="mt-20 font-bold text-2xl">123</h2>
        </div>
        <div className="w-[50%] h-full bg-amber-600">
          <Image
            className="h-full w-full object-cover"
            src="/img/images.jpg"
            width={500}
            height={500}
            alt="project"
          />
        </div>
      </div>
      <div className="h-[45%] mt-24 w-[50%] m-auto flex shadow-gray-400   flex-row items-center rounded-2xl overflow-hidden bg-white shadow-lg">
        <div className="w-[50%] h-full bg-amber-600">
          <Image
            className="h-full w-full object-cover"
            src="/img/images.jpg"
            width={500}
            height={500}
            alt="project"
          />
        </div>
        <div className="w-[50%] h-full  bg-white flex items-center justify-end flex-col">
          <h1 className="mt-10 font-bold ">dacsczf</h1>
          <p className="mt-10  text-xl  text-center">
            lorem10 fvfzzzzzzzzzzzzzvffdfvdxdlorem10 fvfzzzzzzzzzzzzzvffdfvdxd
          </p>
          <h2 className="mt-20 font-bold text-2xl">123</h2>
        </div>{" "}
      </div>
      <div className="h-[45%] mt-24 w-[50%] m-auto flex shadow-gray-400   flex-row items-center rounded-2xl overflow-hidden bg-white shadow-lg">
        <div className="w-[50%] h-full  bg-white flex items-center justify-end flex-col">
          <h1 className="mt-10 font-bold ">dacsczf</h1>
          <p className="mt-10  text-xl  text-center">
            lorem10 fvfzzzzzzzzzzzzzvffdfvdxdlorem10 fvfzzzzzzzzzzzzzvffdfvdxd
          </p>
          <h2 className="mt-20 font-bold text-2xl">123</h2>
        </div>{" "}
        <div className="w-[50%] h-full bg-amber-600">
          <Image
            className="h-full w-full object-cover"
            src="/img/images.jpg"
            width={500}
            height={500}
            alt="project"
          />
        </div>
      </div>
    </div>
  );
}

export default Skills;
