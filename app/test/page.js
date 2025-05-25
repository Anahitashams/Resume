"use client";
import React, { useState } from "react";

function Page() {
  const [Form, setForm] = useState({
    fname: "",
    lname: "",
    age: "",
  });

  const ChangeHandler = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log(Form);
  };

  return (
    <>
      <div className="h-[600px] m-auto flex flex-col">
        <form onSubmit={SubmitHandler}>
          <input
            type="text"
            name="fname"
            value={Form.fname}
            onChange={ChangeHandler}
            className="size-7 bg-amber-600"
          />
          <input
            type="text"
            name="lname"
            value={Form.lname}
            onChange={ChangeHandler}
            className="size-7 bg-amber-600"
          />
          <input
            type="text"
            name="age"
            value={Form.age}
            onChange={ChangeHandler}
            className="size-7 bg-amber-600"
          />
          <button type="submit" className="size-10 bg-blue-800">
            click
          </button>
        </form>
      </div>
    </>
  );
}

export default Page;
