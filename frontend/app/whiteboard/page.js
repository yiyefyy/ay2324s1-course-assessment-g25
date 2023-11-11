import { CollaborativeEditor } from "@/components/CollaborativeEditor";
import Image from 'next/image';
import React from 'react';
import io from 'socket.io-client';
import { Room } from "./Room";
import AIChatButton from "@/components/AIChatButton"
import QuestionSelectionWrapper from "@/wrappers/QuestionSelectionWrapper";

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
  const socket = io('http://localhost:8081');

  const handleEndSession = () => {
    io.to(localStorage.getItem('roomId')).emit("session ended by partner")
    socket.disconnect();
  }

  return (
    <div className='flex flex-col bg-theme bg-opacity-10 min-h-screen'>

      <div className="bg-theme flex justify-between items-center h-16">
        <div className='flex items-center'>

          <Image src="/logo.svg" alt="Logo" width="80" height="80" />

          <h2 className='font-dmserif italic text-xl'>  prep with peers for technical assessments</h2>

        </div>
      </div>

      <div className='flex flex-row h-full mx-2 mt-2 '>
        <div className='w-5/12 '>
          <div className='bg-white rounded-lg overflow-auto mr-2 py-4 px-5 h-[calc(100vh-20rem)]'>
            <QuestionSelectionWrapper complexity={"Easy"}/>
          </div>

          <div className='bg-gray-500 rounded-lg overflow-auto mr-2 py-4 px-5 h-56 mt-4'>
            <div className="text-white">
              <h2 className="text-2xl font-semibold mb-4">AI Assistant</h2>
              <p className="text-gray-300 mb-4">
                Welcome! How can I assist you today?
              </p>
              <div className="flex justify-center gap-4">
                {/* <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-600 focus:outline-none">
                  Generate Prompt
                </button>
                <button className="bg-green-500 text-white font-semibold py-2 px-4 rounded-full hover:bg-green-600 focus:outline-none">
                  Get Hint
                </button> */}
                <AIChatButton />
              </div>
            </div>
          </div>


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
