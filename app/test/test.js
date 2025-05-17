import React, { useState } from "react";

function UserForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    job: "",
  });

  const [users, setUsers] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // ذخیره اطلاعات وارد شده در آرایه
    setUsers((prev) => [...prev, formData]);
    console.log([...users, formData]); // نمایش در کنسول
    // پاک کردن فرم
    setFormData({
      firstName: "",
      lastName: "",
      job: "",
    });
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="firstName"
          placeholder="نام"
          value={formData.firstName}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="lastName"
          placeholder="نام خانوادگی"
          value={formData.lastName}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="job"
          placeholder="شغل"
          value={formData.job}
          onChange={handleChange}
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          افزودن
        </button>
      </form>
    </div>
  );
}

export default UserForm;
