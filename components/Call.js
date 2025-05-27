"use client";

import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

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
      .then(() => toast.success("ارسال اطلاعات با موفقیت انجام شد"))
      .catch(() => toast.error("خطا در ارسال اطلاعات"));
  };

  return (
    <>
      <Toaster />
      <div
        dir="rtl"
        className="w-full px-4 sm:px-8 md:px-16 lg:px-32 py-10 flex flex-col items-center"
      >
        <div className="text-center mb-8">
          <h1 className="text-xl sm:text-2xl font-bold">تماس با من</h1>
          <div className="h-[2px] w-[150px] sm:w-[200px] bg-[#1E3A8A] mt-2 mx-auto"></div>
        </div>

        <form
          onSubmit={SubmitHandler}
          className="w-full max-w-md sm:max-w-lg lg:max-w-xl bg-white p-6 sm:p-8 rounded-xl shadow-md space-y-5"
        >
          <input
            type="text"
            name="name"
            value={Form.name}
            onChange={ChangeHandler}
            className="w-full p-3 bg-gray-100 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:outline-none"
            placeholder="نام خود را وارد کنید"
          />
          <input
            type="text"
            name="lname"
            value={Form.lname}
            onChange={ChangeHandler}
            className="w-full p-3 bg-gray-100 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:outline-none"
            placeholder="نام خانوادگی خود را وارد کنید"
          />
          <input
            type="email"
            name="age"
            value={Form.age}
            onChange={ChangeHandler}
            className="w-full p-3 bg-gray-100 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:outline-none"
            placeholder="ایمیل خود را وارد کنید"
          />
          <textarea
            name="text"
            value={Form.text}
            onChange={ChangeHandler}
            rows={5}
            className="w-full p-3 bg-gray-100 rounded-lg focus:ring-2 focus:ring-[#1E3A8A] focus:outline-none resize-none"
            placeholder="متن پیام خود را وارد کنید"
          ></textarea>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-1/2 sm:w-1/3 bg-[#1e3a8a] text-white p-3 rounded-lg font-semibold hover:bg-[#374eb0] transition duration-300 focus:ring-2 focus:ring-offset-2 focus:outline-none"
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
