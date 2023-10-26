"use client";
import React, { useState } from "react";

export default function AddQuestionForm() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const saveChanges = async () => {
    try {
      // Handle saving the form data, e.g., send it to an API.
      console.log("Form data:", formData);
    } catch (error) {
      // Handle errors, e.g., display an error message
      console.error("Error saving form data:", error);
    }
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        saveChanges();
      }}
      className="flex flex-col space-y-4 bg-gray-100 px-2 pb-5 pt-2 w-full sm:px-16"
    >
      <div>
        <label className="block text-xs text-gray-600 uppercase">Title</label>
        <input
          id="title"
          name="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
          required
          className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
        />
      </div>
      <div>
        <label className="block text-xs text-gray-600 uppercase">Description</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          rows={4} // You can adjust the number of rows as needed
          className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
        />
      </div>
      <button
        type="submit"
        className="border-black bg-black text-white hover:bg-white hover:text-black flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none"
      >
        Add
      </button>
    </form>
  );
}
