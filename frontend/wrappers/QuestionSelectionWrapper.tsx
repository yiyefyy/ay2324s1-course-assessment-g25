'use client'

import { GET } from '../app/api/v1/questions/route'
import { NextRequest } from "next/server";
import { Fragment, useState, useEffect } from 'react'
import { DELETE, PUT } from '../app/api/v1/questions/route'
import { Dialog, Transition, Listbox } from '@headlessui/react'
import { CrossIcon } from '../icons/Cross'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'

interface Question {
    title: string;
    complexity: string;
    category: string;
    _id: string;
    owner: string;
    description: string
}

export default function EditableQuestionsTableWrapper({
    complexity
}: {
    complexity: string | null;
}) {

    const [questions, setQuestions] = useState<Question[]>([]);
    let [isOpen, setIsOpen] = useState(false)

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        category: "",
        complexity: "",
        _id: ""
    });

    const difficulty = [
        { id: 1, name: 'Easy' },
        { id: 2, name: 'Medium' },
        { id: 3, name: 'Hard' },
      ]
    
    const [selectedDifficulty, setSelectedDifficulty] = useState(difficulty[0])

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

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

                const filteredData = data.filter((item : Question) => item.complexity === complexity || '');

                setQuestions(filteredData);
            } catch (error: any) {
                console.error('Error fetching data:', error.message);
            }
        };
        fetchData();
    }, []);

    const handleSelect = async (index: any) => {
        try {
            const questionId = index
            const endpoint = `/api/v1/questions/${questionId}`;
            const response = await DELETE(new NextRequest(BASE_URL + endpoint), endpoint);
        } catch (error: any) {
            console.error('Error deleting question:', error.message);
        }
    };

    const handleQuestionClick = (question: any) => {
        /* setSelectedQuestion(question); */
    };

    return (
        <div className="table-container">
            <table className="min-w-full">
                <caption className="text-lg font-semibold mb-2">Your Questions</caption>
                <thead>
                    <tr className="border-b bg-white">
                        <th className="py-2 text-left font-medium pl-1">ID</th>
                        <th className="py-2 text-left font-medium">Title</th>
                        <th className="py-2 text-left font-medium">Complexity</th>
                        <th className="py-2 text-left font-medium">Category</th>
                        <th className="py-2 text-left font-medium">Delete</th>
                        <th className="py-2 text-left font-medium">Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {questions.map((question, index) => (
                        <tr
                            key={index}
                            onClick={() => handleQuestionClick(question)}
                            className={index % 2 === 1 ? 'bg-theme bg-opacity-20' : 'bg-white'}
                        >
                            <td className="py-1 pl-1">{index + 1}</td>
                            <td className="py-1 ">{question.title || ''}</td>
                            <td className="py-1 ">{question.complexity || ''}</td>
                            <td className="py-1 ">{question.category || ''}</td>
                            <td className="py-1">
                                <button
                                    className="bg-red-500 hover:bg-opacity-60 text-white px-3 py-1 rounded font-medium"
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
                                <Dialog.Panel className="w-full max-w-screen-ld mx-auto transform overflow-hidden rounded-2xl bg-theme bg-opacity-80 px-20 py-6 text-left align-middle shadow-xl transition-all">
                                    <button
                                        onClick={closeModal}
                                        className="absolute top-4 right-4 cursor-pointer text-gray-600 hover:text-gray-900"
                                    >
                                        <CrossIcon />
                                    </button>

                                    <h1>Confirm select?</h1>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    )
}