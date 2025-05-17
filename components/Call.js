"use client";

import React, { useState } from "react";
import WaveAnimation from "@/components/WaveAnimation";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("پیام شما ارسال شد!");
  };

  return (
    <div id="call" className="px-4  h-auto w-full">
      <div className="flex flex-col m-auto justify-center items-center w-[300px] h-[100px]">
        <h1 className="text-2xl font-bold">تماس با من</h1>
        <div className="h-[2px] w-[200px] bg-[#1E3A8A]"></div>
      </div>
      <div
        dir="rtl"
        className="w-full max-w-md mb-0 md:max-w-5xl lg:max-w-3xl mx-auto p-6 md:p-8 bg-white rounded-lg shadow-lg"
      >
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-semibold mb-2"
            >
              نام
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 md:p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1E3A8A] focus:border-[#1E3A8A]"
              placeholder="نام خود را وارد کنید"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              ایمیل
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 md:p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1E3A8A] focus:border-[#1E3A8A]"
              placeholder="ایمیل خود را وارد کنید"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="subject"
              className="block text-gray-700 font-semibold mb-2"
            >
              موضوع
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-2 md:p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1E3A8A] focus:border-[#1E3A8A]"
              placeholder="موضوع پیام خود را وارد کنید"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-gray-700 font-semibold mb-2"
            >
              متن پیام
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 md:p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#1E3A8A] focus:border-[#1E3A8A]"
              placeholder="متن پیام خود را وارد کنید"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full p-3 bg-gray-600 text-white font-semibold rounded-md hover:bg-[#1e3b8a41] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-fuchsia-500"
          >
            ارسال پیام
          </button>
        </form>
      </div>
      <div className="relative w-full h-[400px]">
        <div className="absolute bottom-0 left-0 right-0">
          <WaveAnimation />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
