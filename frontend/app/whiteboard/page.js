import Link from 'next/link';
import React from 'react';
import { Room } from "./Room";
import { CollaborativeEditor } from "@/components/CollaborativeEditor";

export default function Whiteboard() {

  // dummy question. input api here or wtv to call for correct question 
  const question = {
    "_id": "654289d66292a524af80e0ab",
    "owner": "Deon",
    "title": "Palindrome Checker",
    "description": "Write a Python function to check if a given string is a palindrome. Palindromes are strings that read the same backward as forward.",
    "category": "String Manipulation",
    "complexity": "Easy",
    "__v": 0
  }

  return (
    <div className='flex flex-col bg-theme bg-opacity-10 min-h-screen'>

      <div className="bg-theme flex justify-between items-center h-16">
        <div className='flex items-center'>
          <img src="/logo.svg" alt="Logo" width="96" height="96" />
        </div>
      </div>

      <div className='flex flex-row h-full mx-2 mt-2 '>
        <div className='w-5/12 bg-white rounded-lg overflow-auto mr-2 py-4 px-5'>
          <h2 className="text-2xl font-semibold">{question.title}</h2>
          <p className="text-gray-500 mt-2">
            Category: {question.category} | Complexity: {question.complexity}
          </p>
          <hr className="my-4" />
          <p className="text-gray-700">{question.description}</p>
        </div>

        <div className='w-7/12 bg-white rounded-lg overflow-auto h-[calc(100vh-5rem)]'>
          <Room>
            <CollaborativeEditor />
          </Room>
        </div>

      </div>

    </div>
  );

}


