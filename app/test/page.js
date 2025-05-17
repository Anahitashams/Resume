"use client";
import React, { useState } from "react";
import axios from "axios";
function page() {
  const [publicdata, setPublicdata] = useState({
    fname: "",
    lname: "",
    age: "",
    img: null,
  });

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("/sdfskldf", publicdata);
  };
  return (
    <form onSubmit={submitHandler} className="flex flex-col p-1.5 m-1.5">
      <input
        className="bg-blue-100 mt-2"
        type="text"
        name=""
        value={publicdata.fname}
        placeholder="fname"
        onChange={(e) => setPublicdata(e.target.value)}
      />
      <input
        className="bg-blue-100 mt-2"
        type="text"
        name=""
        value={publicdata.lname}
        placeholder="lname"
        onChange={(e) => setPublicdata(e.target.value)}
      />
      <input
        className="bg-blue-100 mt-2"
        type="text"
        name=""
        value={publicdata.age}
        placeholder="age"
        onChange={(e) => setPublicdata(e.target.value)}
      />
      <button type="submit">submit</button>
    </form>
  );
}

export default page;
