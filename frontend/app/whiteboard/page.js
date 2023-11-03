import Link from 'next/link';
import React from 'react';
import { Room } from "./Room";
import { CollaborativeEditor } from "@/components/CollaborativeEditor";

export default function Whiteboard() {

  return (
    <div className='flex flex-col bg-theme bg-opacity-10 min-h-screen'>

      <div className="bg-theme flex justify-between items-center h-16">
        <div className='flex items-center'>
          <img src="/logo.svg" alt="Logo" width="96" height="96" />
        </div>
      </div>
  
      <div className='flex flex-row h-full mx-2 mt-2'>
        <div className='w-5/12 bg-white rounded-lg overflow-auto mr-2'>
          <h1></h1>
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


