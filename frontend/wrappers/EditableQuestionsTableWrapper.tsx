'use client'

import { GET } from '../app/api/v1/questions/route'
import { NextRequest } from "next/server";
import { Fragment, useState, useEffect } from 'react'
import { Session } from 'next-auth';
import { DELETE, PUT } from '../app/api/v1/questions/route'
import { useAddButtonPress } from '../app/manageQuestions/ManageQuestionsContext'
import { Dialog, Transition } from '@headlessui/react'

interface Question {
    title: string;
    complexity: string;
    category: string;
    _id: string;
    owner: string;
    description: string
}

export default function EditableQuestionsTableWrapper({
    session
}: {
    session: Session | null;
}) {

    const [questions, setQuestions] = useState<Question[]>([]);
    const { addButtonPressed } = useAddButtonPress();
    const { setAddButtonPressed } = useAddButtonPress();
    let [isOpen, setIsOpen] = useState(false)

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        category: "",
        complexity: "", 
        _id: ""
    });

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

    const handleCloseClick = () => {
        closeModal()
    }

    const BASE_URL = process.env.BASE_URL || 'http://localhost:8080'

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await GET(new NextRequest(BASE_URL + '/api/v1/questions?page=1&limit=10', { method: 'GET' }));
                const data = await response.json();
                console.log(data)

                const filteredData = data.filter(item => item.owner === session.user.name);

                setQuestions(filteredData);
                setAddButtonPressed(false)
            } catch (error: any) {
                console.error('Error fetching data:', error.message);
            }
        };
        fetchData();
    }, [addButtonPressed]);

    const handleDelete = async (index: any) => {
        try {
            const questionId = index
            const endpoint = `/api/v1/questions/${questionId}`;
            const response = await DELETE(new NextRequest(BASE_URL + endpoint), endpoint);
            if (response.status == 204) { // succesfully added 
                setAddButtonPressed(true)
            }
            console.log(response)
        } catch (error: any) {
            console.error('Error deleting question:', error.message);
        }
    };

    const handleQuestionClick = (question: any) => {
        /* setSelectedQuestion(question); */
    };

    const handleEdit = (formData: any) => {
        setFormData(formData)
        openModal()
    }

    const editQuestion = async () => {
        try {
            const requestBody = {
              title: formData.title,
              description: formData.description,
              category: formData.category,
              complexity: formData.complexity
            };
      
            const BASE_URL = process.env.BASE_URL || 'http://localhost:8080'
            const endpoint = `/api/v1/questions/${formData._id}`;

            const response = await PUT(new NextRequest(BASE_URL + endpoint, { method: 'PUT' }), endpoint, requestBody);
            if (response.status == 200) { // succesfully added 
              setAddButtonPressed(true)
              closeModal()
              /* setFormData((prevData) => ({
                  title: "",
                  description: "",
                  category: "",
                  complexity: ""
                }) 
              ) */
            }
          } catch (error) {
            console.error("Error updating question:", error);
          }
    }

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
                                    className="delete-button bg-red-500 hover:bg-opacity-60 text-white px-3 py-1 rounded font-medium"
                                    data-index={index}
                                    onClick={() => handleDelete(question._id)}
                                >
                                    Delete
                                </button>
                            </td>
                            <td className="py-1">
                                <button
                                    className="delete-button bg-gray-500 hover:bg-opacity-60 text-white px-3 py-1 rounded font-medium"
                                    data-index={index}
                                    onClick={() => handleEdit(question)}
                                >
                                    Edit
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
                                    <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
                                    </Dialog.Title>

                                    <form
                                        onSubmit={(e) => {
                                            e.preventDefault();
                                            editQuestion();
                                        }}
                                        className="flex flex-col space-y-4 bg-gray-100 p-6 rounded-md"
                                    >
                                        <div>
                                            <label className="block text-xs text-gray-600 uppercase">Title</label>
                                            <input
                                                id="title"
                                                name="title"
                                                type="text"
                                                value={formData.title}
                                                onChange={handleChange}
                                                required
                                                className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs text-gray-600 uppercase">Description</label>
                                            <textarea
                                                id="description"
                                                name="description"
                                                value={formData.description}
                                                onChange={handleChange}
                                                rows={4} // You can adjust the number of rows as needed
                                                className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs text-gray-600 uppercase">Category</label>
                                            <input
                                                id="category"
                                                name="category"
                                                type="text"
                                                value={formData.category}
                                                onChange={handleChange}
                                                required
                                                className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs text-gray-600 uppercase">Complexity</label>
                                            <input
                                                id="complexity"
                                                name="complexity"
                                                type="text"
                                                value={formData.complexity}
                                                onChange={handleChange}
                                                required
                                                className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            className="border-black bg-black text-white hover:bg-theme hover:text-black flex h-10 w-full items-center justify-center rounded-md border text-sm transition-all focus:outline-none"
                                        >
                                            Update
                                        </button>
                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </div>
    )
}