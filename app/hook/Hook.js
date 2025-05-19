"use client";
import { useState } from "react";
import React from "react";

function Hook() {
  const [SaveData, setSaveData] = useState({
    fname: "",
    lname: "",
    age: "",
  });
  const submitHandler = (e) => {
    e.PreventDefult();
    console.log(SaveData);
  };
  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type="text"
          name="fname"
          value={SaveData.fname}
          placeholder="نام خود را وارد کنید"
          onChange={(e) => setSaveData(e.target.value)}
        />
        <input
          type="text"
          name="lname"
          value={SaveData.lname}
          placeholder=" نام خوانوادگی خود را وارد کنید"
          onChange={(e) => setSaveData(e.target.value)}
        />
        <input
          type="text"
          name="age"
          value={SaveData.age}
          placeholder="سن خود را وارد کنید"
          onChange={(e) => setSaveData(e.target.value)}
        />

        <button type="submit"></button>
      </form>
    </div>
  );
}

export default Hook;
