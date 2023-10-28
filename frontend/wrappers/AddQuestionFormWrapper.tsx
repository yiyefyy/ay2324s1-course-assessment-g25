"use client";
import React, { useState } from "react";
import { POST } from '../app/api/v1/questions/route'
import { NextRequest } from "next/server";
import { Session } from 'next-auth';
import { useAddButtonPress } from '../app/manageQuestions/ManageQuestionsContext'

export default function AddQuestionForm({
    session
  }: {
    session: Session | null;
  }) {

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    complexity: ""
  });

  const { setAddButtonPressed } = useAddButtonPress()

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const addQuestion = async () => {
    try {
      const requestBody = {
        owner: session.user.name,
        title: formData.title,
        description: formData.description,
        category: formData.category,
        complexity: formData.complexity
      };

      const BASE_URL = process.env.BASE_URL || 'http://localhost:8080'

      const response = await POST(new NextRequest(BASE_URL + '/api/v1/questions', { method: 'POST' }), requestBody);
      if (response.status == 200) { // succesfully added 
        setAddButtonPressed(true)
        setFormData((prevData) => ({
            title: "",
            description: "",
            category: "",
            complexity: ""
          })
        )
      }
    } catch (error) {
      console.error("Error saving form data:", error);
    }
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        addQuestion();
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
      <div>
        <label className="block text-xs text-gray-600 uppercase">Category</label>
        <input
          id="category"
          name="category"
          type="text"
          value={formData.category}
          onChange={handleChange}
          required
          className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
        />
      </div>
      <div>
        <label className="block text-xs text-gray-600 uppercase">Complexity</label>
        <input
          id="complexity"
          name="complexity"
          type="text"
          value={formData.complexity}
          onChange={handleChange}
          required
          className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
        />
      </div>
      <button
        type="submit"
        className="border-black bg-black text-white hover:bg-theme hover:text-black flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none"
      >
        Add
      </button>
    </form>
  );
}
