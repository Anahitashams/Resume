"use client";

import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

function About() {
  const [Form, setForm] = useState({
    name: "",
    lname: "",
    age: "",
    text: "",
  });

  const ChangeHandler = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const SubmitHandler = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:3002/posts", Form)
      .then(() => toast.success("ارسال اطلاعات با موفقیت انجام شد"));
  };

  return (
    <>
      <Toaster />
      <div
        dir="rtl"
        className="w-full max-w-md mb-0 md:max-w-5xl lg:max-w-2xl mx-auto m-auto flex flex-col justify-center items-center  md:p-8 rounded-lg"
      >
        <div className="flex flex-col m-auto justify-center items-center w-[300px] h-[100px]">
          <h1 className="text-2xl font-bold">تماس با من</h1>
          <div className="h-[2px] w-[200px] bg-[#1E3A8A]"></div>
        </div>
        <form onSubmit={SubmitHandler}>
          <input
            type="text"
            name="name"
            value={Form.name}
            onChange={ChangeHandler}
            className="w-full p-2 md:p-3 lg:mt-8   bg-white  rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-[#1E3A8A]"
            placeholder=" نام خود را وارد کنید"
          />
          <input
            type="text"
            name="lname"
            value={Form.lname}
            onChange={ChangeHandler}
            className="w-full p-2 md:p-3 lg:mt-8  bg-white  rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-[#1E3A8A]"
            placeholder=" نام خوانوادگی خود را وارد کنید"
          />
          <input
            type="email"
            name="age"
            value={Form.age}
            onChange={ChangeHandler}
            className="w-full p-2 md:p-3 lg:mt-8 bg-white  rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-[#1E3A8A]"
            placeholder=" ایمیل خود را وارد کنید"
          />
          <textarea
            type="text"
            name="text"
            value={Form.text}
            onChange={ChangeHandler}
            className="w-full p-2 md:p-3 lg:mt-8  bg-white  rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:border-[#1E3A8A]"
            placeholder="متن پیام خود را وارد کنید"
          />
          <div className="flex justify-center">
            <button
              type="submit"
              className="w-[50%] p-3 lg:mt-8 bg-[#1e3a8a] text-white font-semibold rounded-lg hover:bg-[#374eb0] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              ارسال پیام
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default About;
