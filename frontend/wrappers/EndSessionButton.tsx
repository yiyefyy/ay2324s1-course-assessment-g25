'use client'

import { CollaborativeEditor } from "@/components/CollaborativeEditor";
import { Fragment, useEffect, useState } from 'react'
import React from 'react';
import io, { Socket } from 'socket.io-client'
import { useParams, useSearchParams } from "next/navigation";
import { fetchQuestionByRoomId } from "@/app/api/match/routes";
import { useRouter } from 'next/navigation';
import { deletePair } from "@/app/api/match/routes";
import { Dialog, Transition } from '@headlessui/react'
import { addHistory } from "@/app/api/history/routes";
import { Session } from 'next-auth'

export default function EndSessionButton({
    roomId,
    socket,
    session,
    isEnd
}: {
    roomId: string | string[];
    socket: Socket | null;
    session: Session | null;
    isEnd: boolean | null
}) {

    // dummy question. input api here or wtv to call for correct question

    /* const question = {
      "_id": "654289d66292a524af80e0ab",
      "owner": "Deon",
      "title": "Palindrome Checker",
      "description": "Write a Python function to check if a given string is a palindrome. Palindromes are strings that read the same backward as forward.",
      "category": "String Manipulation",
      "complexity": "Easy",
      "__v": 0
    } */

    let [isOpen, setIsOpen] = useState(true)
    let [end, setIsEnd] = useState(isEnd)
    //let [end, setEnd] = useState(false)
    const [messages, setMessages] = useState([]);

    let [isStart, setIsStart] = useState(false)
    let [isSender, setIsSender] = useState(false)
    let [confirmed, setConfirmed] = useState(false)
    let [stay, setStay] = useState(false)
    const [question, setQuestion] = useState('')
    const [name, setName] = useState('')
    const room = roomId

    const router = useRouter()

    /* const handleEndSession = () => {
        setIsSender(true)
        setEnd(true)
        socket?.emit('message', { room: room, message: "Partner wishes to end session, do you wish to proceed?" })
        console.log(room, isSender)
    } */

    useEffect(() => {
        setName(session?.user?.name ?? '')
        console.log(question)
        connect()
        const handleBeforeUnload = () => {
            socket?.emit('partner-disconnect', { room, message: "Partner is disconnected" });
        };
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [isStart]);

    const connect = () => {
        fetchQuestionByRoomId(room).then(result => setQuestion(result))
        //socket.emit('join-room', { room: room })
        console.log("Socket connected" + socket?.connected)
        console.log("connect message")
        socket?.on('end-session', ({ message }) => {
            console.log("end session received")
            setMessages(message);
            setIsOpen(true)
            setIsEnd(true)
        });
        socket?.on('confirmed', ({ message }) => {
            setIsOpen(true)
            setMessages(message)
            setConfirmed(true)
            addHistory(room, name, question)
            router.push('/')
        })
        socket?.on('partner-stay', ({ message }) => {
            setIsOpen(true)
            setIsEnd(false)
            setMessages(message)
            setStay(true)
            setIsSender(false)
            //closeModal()
        })
        socket?.on('partner-left', ({ room, message }) => {
            setIsOpen(true)
            setIsEnd(true)
            setMessages(message)
        })
        //handleEndSession();
        return socket
    }

    function closeModal() {
        setIsOpen(false)
        setIsEnd(false)
    }

    const handleStay = () => {
        closeModal()
        setStay(false)
    }

    const handleStayClick = () => {
        // socket.disconnect()
        socket?.emit('stay-session', { room, message: "Partner wants to stay" })
        closeModal()
    }

    const handleConfirmEndSession = () => {
        deletePair(room)
        console.log("User confirmed end session");
        // Send a confirmation message to the backend
        socket?.emit('confirmEndSession', { room, message: "partner ended session" });
        socket?.disconnect()
        addHistory(room, name, question)
        router.push(`/`)
    };

    /* const handleStart = () => {
        const socket = io('http://localhost:8081');
        setSocket(socket)
        socket?.emit('join-room', { room: room })
        setIsStart(true)
    } */

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() => { }}>
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
                            <div>
                                {end ? (
                                    <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                        <Dialog.Title className="text-lg font-medium leading-6 text-gray-900 pb-4">
                                            {messages}
                                        </Dialog.Title>
                                        <div className="flex flex-row gap-2 w-full justify-between">
                                            <button
                                                onClick={handleStayClick}
                                                type="button"
                                                className="rounded-md border w-full border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 h-10"
                                            >
                                                Stay
                                            </button>
                                            <button
                                                onClick={handleConfirmEndSession}
                                                type="button"
                                                className="rounded-md border w-full border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 h-10"
                                            >
                                                End
                                            </button>
                                        </div>
                                    </Dialog.Panel>
                                ) : <></>}
                                {isSender ? (
                                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                        <Dialog.Title
                                            as="h3"
                                            className="text-lg font-medium leading-6 text-gray-900 pb-4"
                                        >
                                            Waiting for your partner's response
                                        </Dialog.Title>
                                        <div>
                                            {confirmed ? (
                                                <Dialog.Title
                                                    as="h3"
                                                    className="text-lg font-medium leading-6 text-gray-900"
                                                >
                                                    {messages}
                                                </Dialog.Title>) : (<div></div>)}
                                        </div>
                                    </Dialog.Panel>
                                ) : <></>}
                                {stay ? (
                                    <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                        <Dialog.Title className="text-lg font-medium leading-6 text-gray-900">
                                            {messages}
                                        </Dialog.Title>
                                        <div className="mt-4">
                                            <button
                                                onClick={handleStay}
                                                type="button"
                                                className="rounded-md border w-full border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 h-10"
                                            >
                                                OK
                                            </button>
                                        </div>
                                    </Dialog.Panel>


                                ) : (<div><Dialog.Panel></Dialog.Panel></div>)}
                            </div>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );

}

