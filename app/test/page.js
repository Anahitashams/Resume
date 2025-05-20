"use client";

import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    age: "",
  });

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [age, setAge] = useState("");

  const changeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setForm({ [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    console.log(form);
  };
  return (
    <form onSubmit={submitHandler} className="flex flex-col w-36">
      <input
        className="bg-red-200 mt-2"
        type="text"
        name="fname"
        value={fname}
        onChange={(e) => setFname(e.target.value)}
      />
      <input
        className="bg-red-200 mt-2"
        type="text"
        name="lname"
        value={lname}
        onChange={(e) => setLname(e.target.value)}
      />
      <input
        className="bg-red-200 mt-2"
        type="text"
        name="age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <button className="bg-blue-300" type="submit">
        submit
      </button>
    </form>
  );
}
