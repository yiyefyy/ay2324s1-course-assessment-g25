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

export default function EndSessionWrapper({
  children,
  session
}: {
  children: React.ReactNode;
  session: Session | null;
}) {

  let [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState("")


  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    setIsOpen(true)
  }

  const socket: Socket = io('http://localhost:8081');

  const handleEndSession = () => {
    socket.emit('message', "partner wishes to end session, do you wish to proceed?")
    socket.disconnect();
  }


  const handleButtonClick = () => {
    console.log("button pressed")
    if (session) {
      openModal()
    } else {
      // User is not logged in
      signIn()
    }
  }

  const handleCloseClick = () => {
    socket.disconnect()
    closeModal()
  }

  const handleClickOutside = () => {
    socket.disconnect()
    closeModal()
  }

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
                        You have been matched with 
                      </Dialog.Title>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={handleCloseClick}
                      >
                        End now
                      </button>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
        </Dialog>

      </Transition>
    </>

  )
}
