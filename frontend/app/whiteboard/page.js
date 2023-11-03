import Link from 'next/link';
import React from 'react';
import { Room } from "./Room";
import { CollaborativeEditor } from "@/components/CollaborativeEditor";

export default function FirstPost() {
  const externalPageUrl = 'http://localhost:3001'; // Change the port as needed

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>

      
      <div className="bg-theme flex justify-between items-center">
        <div className='flex items-center'>

          <img src="/logo.svg" alt="Logo" width="128" height="128" />

        </div>
      </div>
  
      <Room>
        <CollaborativeEditor />
      </Room>

{/* 
      <iframe
        src={externalPageUrl}
        width="100%"
        style={{ flex: 1 }} // Use flex: 1 to fill remaining vertical space
        title="Embedded Page"
      ></iframe> */}



    </div>
  );
  
}


