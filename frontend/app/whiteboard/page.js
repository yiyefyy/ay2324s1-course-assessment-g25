import Link from 'next/link';
import React from 'react';

import io from 'socket.io-client';
const socket = io('http://localhost:8081');



const handleEndSession = () => {
  io.to(localStorage.getItem('roomId')).emit("session ended by partner")
  socket.disconnect();
}

export default function FirstPost() {
  const externalPageUrl = 'http://localhost:3001'; // Change the port as needed

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>


      <div className="bg-theme flex justify-between items-center">
        <div className='flex items-center'>

          <img src="/logo.svg" alt="Logo" width="128" height="128" />

        </div>
      </div>



      <iframe
        src={externalPageUrl}
        width="100%"
        style={{ flex: 1 }} // Use flex: 1 to fill remaining vertical space
        title="Embedded Page"
      ></iframe>
      <div className="self-end py-2 px-5">
        <button
          type="button"
          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        >
          endSession
        </button>
      </div>


    </div>
  );

}


