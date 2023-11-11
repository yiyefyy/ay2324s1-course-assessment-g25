'use client'

import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import io, { Socket } from 'socket.io-client'
import { cancelMatch, deletePair, findMatch } from '../app/api/match/routes'

import { Session } from 'next-auth'
import { signIn } from "next-auth/react"
import { NextRequest } from 'next/server'
import { GET } from '../app/api/v1/questions/route'
import { PrismaClientValidationError } from '@prisma/client/runtime/library'
import { useSetDifficulty } from './DifficultySelectionContext'

interface Question {
  title: string;
  complexity: string;
  category: string;
}

interface PAIR {
  username: string,
  complexity: string
}

export default function MatchButtonWrapper({
  children,
  session
}: {
  children: React.ReactNode;
  session: Session | null;
}) {

  let [isOpen, setIsOpen] = useState(false)
  const [seconds, setSeconds] = useState(30);
  const { difficultySelected } = useSetDifficulty();


  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const [questions, setQuestions] = useState<Question[]>([]);
  const [otherMatch, setOtherMatch] = useState('');
  const [isPairCreated, setIsPairCreated] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [name, setName] = useState(session?.user?.name ?? localStorage.getItem("name") ?? 'null')
  const [isTimerFinished, setIsTimerFinished] = useState(false);

  const socket: Socket = io('http://localhost:8081');

  const connect = () => {
    console.log("socket connected");
    socket.on('match-found', (msg) => {
      setName((msg.username2 === session?.user?.name) ? msg.username2: msg.username1)
      const match = (msg.username2 === session?.user?.name) ? msg.username1: msg.username2;
      //setRoomId(msg.room)
      setIsPairCreated(true);
      setOtherMatch(match);
      console.log(`Match found with: ${match}`);
      socket.emit('join-room', {room: msg.room});
    });
    socket.on("disconnect", () => {
      console.log(socket.connected); // false
    });
    return socket;
  };



  async function handleMatch() {
    try {
      const response = await GET(new NextRequest('http://localhost:8080' + '/api/v1/questions?page=1&limit=10', { method: 'GET' }));
      const data = await response.json();
      const filteredQuestions = data.filter((qn: Question) => qn.complexity === localStorage.getItem('selectedDifficulty'));

      setQuestions(filteredQuestions);

      const username = session?.user?.name ?? localStorage.getItem("name") ?? 'null';
      if (username == null) {
        return;
      } else if (!isConnected) {
        connect();
        setIsConnected(true);
        findMatch(username, difficultySelected);
      }
    } catch (error) {
      //handle error
    }
  }

  async function handleCancelMatch() {
    try {
      cancelMatch(name);
      console.log("heyy " + name)
      await deletePair(session?.user?.name ?? localStorage.getItem("name") ?? 'null')
      setIsPairCreated(false);
      setIsConnected(false);
      socket.disconnect();
    } catch (error) {

    }
  }
  /*   useEffect(() => { */
  /*  async function getPair() {
     try {
       const pair = await fetchPair(session?.user?.name ?? localStorage.getItem("name") ?? 'null')
       console.log(pair)
       if (pair) {
         if (pair.username1 === session?.user?.name) {
           setOtherMatch(pair.username2)
         } else {
           setOtherMatch(pair.username1)
         }
         setIsPairCreated(true);
       } else {
         setIsPairCreated(false);
       }
     } catch {

     }
   } */
  /*    getPair()
     const intervalId = setInterval(getPair, 30000);
     return () => clearInterval(intervalId);
   }, [seconds]); */

  const handleButtonClick = () => {
    console.log("button pressed")
    if (session) {
      // User is logged in
      handleMatch()
      openModal()
    } else {
      // User is not logged in
      signIn()
    }
  }

  const handleCloseClick = () => {
    handleCancelMatch()
    setOtherMatch('')
    socket.disconnect()
    closeModal()
    setSeconds(30)
  }

  const handleClickOutside = () => {
    handleCancelMatch()
    setOtherMatch('')
    socket.disconnect()
    closeModal()
    setSeconds(30)
    setIsTimerFinished(false);
  }

  const handleRetry = () => {
    setSeconds(30);
    setIsTimerFinished(false);
  };

  const handleTryLater = () => {
    setSeconds(30)
    setIsOpen(false);
    setIsTimerFinished(false);
  };

  const handleTimeRunOut = () => {
    setIsTimerFinished(true);
    handleCloseClick();

  }

  useEffect(() => {
    let interval: number;
    /* getPair(); */

    if (isOpen) {
      interval = window.setInterval(() => {
        if (seconds > 0) {
          setSeconds((prevSeconds) => prevSeconds - 1);
        } else {
          window.clearInterval(interval);
          handleTimeRunOut();
          openModal();
        }
      }, 1000);
    }

    return () => window.clearInterval(interval);
  }, [isOpen, seconds]);



  return (
    <>
      <button
        onClick={handleButtonClick}
        className="flex items-center bg-theme text-gray-800 font-dmserif font-medium text-lg border rounded py-2 px-5 shadow-md cursor-pointer font-dmserif transition-all duration-300 hover:shadow-lg active:scale-95">
        {children}
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={() => handleClickOutside()}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          {isTimerFinished ? (

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Match failed. Would you like to:
                    </Dialog.Title>

                    <div className="mt-4">
                      {/* <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={handleRetry}
                      >
                        Retry
                      </button> */}
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 ml-4 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={handleTryLater}
                      >
                        Try Later
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>


          ) : (
            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    {isPairCreated ? (
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        You have been matched with {otherMatch}
                      </Dialog.Title>


                      // <RoomProvider id="my-room" initialPresence={{}}>
                      //   <ClientSideSuspense fallback="Loading…">
                      //     {() => <Editor />}
                      //   </ClientSideSuspense>
                      // </RoomProvider>


                    ) : <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Matching you with a peer...
                    </Dialog.Title>}

                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        {seconds} seconds left
                      </p>

                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={handleCloseClick}
                      >
                        I'm impatient
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          )}
        </Dialog>

      </Transition>
    </>

  )
}
