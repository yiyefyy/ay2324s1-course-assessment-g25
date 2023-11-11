'use client'

import { GET } from '../app/api/v1/questions/route'
import { NextRequest } from "next/server";
import { Fragment, useState, useEffect } from 'react'
import { DELETE, PUT } from '../app/api/v1/questions/route'
import { Dialog, Transition, Listbox } from '@headlessui/react'
import { CrossIcon } from '../icons/Cross'

interface Question {
    title: string;
    complexity: string;
    category: string;
    _id: string;
    owner: string;
    description: string
}

export default function QuestionSelectionWrapper({
    complexity
}: {
    complexity: string | null;
}) {

    const [questions, setQuestions] = useState<Question[]>([]);
    let [isOpen, setIsOpen] = useState(false)
    const [chosen, setChosen] = useState(false);

    const question = {
        "_id": "654289d66292a524af80e0ab",
        "owner": "Deon",
        "title": "Palindrome Checker",
        "description": "Write a Python function to check if a given string is a palindrome. Palindromes are strings that read the same backward as forward.",
        "category": "String Manipulation",
        "complexity": "Easy",
        "__v": 0
    }

    const [chosenQuestion, setChosenQuestion] = useState<Question>(question)

    const difficulty = [
        { id: 1, name: 'Easy' },
        { id: 2, name: 'Medium' },
        { id: 3, name: 'Hard' },
    ]

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    const BASE_URL = process.env.BASE_URL || 'http://localhost:8080'

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await GET(new NextRequest(BASE_URL + '/api/v1/questions?page=1&limit=10', { method: 'GET' }));
                const data = await response.json();
                console.log(data)

                const filteredData = data.filter((item: Question) => item.complexity === complexity || '');

                setQuestions(filteredData);
            } catch (error: any) {
                console.error('Error fetching data:', error.message);
            }
        };
        fetchData();
    }, []);

    const handleSelect = async (index: any) => {
        openModal()
        const foundQuestion = questions.find((question) => question._id === index);
        setChosenQuestion(foundQuestion ? foundQuestion : chosenQuestion)
    };

    const handleConfirm = (index: any) => {
        setChosen(true)
    };

    return (
        <div>
            {chosen ?
                <div>
                    <h2 className="text-2xl font-semibold">{chosenQuestion.title}</h2>
                    <p className="text-gray-500 mt-2">
                        Category: {chosenQuestion.category} | Complexity: {chosenQuestion.complexity}
                    </p>
                    <hr className="my-4" />
                    <p className="text-gray-700">{chosenQuestion.description}</p>
                </div>
                :
                <div className="table-container">
                    <table className="min-w-full">
                        <caption className="text-lg font-semibold mb-2">Select a question here!</caption>
                        <thead>
                            <tr className="border-b bg-white">
                                <th className="py-2 text-left font-medium text-sm pl-1">ID</th>
                                <th className="py-2 text-left font-medium text-sm">Title</th>
                                <th className="py-2 text-left font-medium text-sm">Category</th>
                                <th className="py-2 text-left font-medium text-sm">Select</th>
                            </tr>
                        </thead>
                        <tbody>
                            {questions.map((question, index) => (
                                <tr
                                    key={index}
                                    className={index % 2 === 1 ? 'bg-theme bg-opacity-20' : 'bg-white'}
                                >
                                    <td className="py-1 pl-1 text-sm">{index + 1}</td>
                                    <td className="py-1 text-sm">{question.title || ''}</td>
                                    <td className="py-1 text-sm">{question.category || ''}</td>
                                    <td className="py-1">
                                        <button
                                            className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-full font-medium"
                                            data-index={index}
                                            onClick={() => handleSelect(question._id)}
                                        >
                                            Select
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Transition appear show={isOpen} as={Fragment}>
                        <Dialog as="div" className="relative z-10" onClose={closeModal}>
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
                                        <Dialog.Panel className="w-1/2 mx-auto transform overflow-hidden rounded-2xl bg-theme bg-opacity-95 px-20 py-6 text-left align-middle shadow-xl transition-all">
                                            <button
                                                onClick={closeModal}
                                                className="absolute top-4 right-4 cursor-pointer text-gray-600 hover:text-gray-900"
                                            >
                                                <CrossIcon />
                                            </button>
                                            <h1>Confirm Attempt:</h1>
                                            <div className='bg-white bg-opacity-50 p-3 mt-4 rounded-2xl'>
                                                <h2 className="text-lg font-semibold">{chosenQuestion.title} | Category: {chosenQuestion.category}</h2>
                                                <p className="text-gray-700 mt-2">{chosenQuestion.description}</p>
                                            </div>
                                           
                                            <button
                                                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 mt-4 rounded-full font-medium"
                                                onClick={handleConfirm}
                                            >
                                                Confirm
                                            </button>
                                        </Dialog.Panel>

                                    </Transition.Child>
                                </div>
                            </div>
                        </Dialog>
                    </Transition>
                </div>

            }
        </div>

    )
}