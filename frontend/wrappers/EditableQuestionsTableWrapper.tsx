'use client'

import { GET } from '../app/api/v1/questions/route'
import { NextRequest } from "next/server";
import { useEffect, useState } from 'react'
import { Session } from 'next-auth';
import { DELETE } from '../app/api/v1/questions/route'
import { useAddButtonPress } from '../app/manageQuestions/ManageQuestionsContext'

interface Question {
    title: string;
    complexity: string;
    category: string;
    _id: string;
    owner: string
}

export default function EditableQuestionsTableWrapper({
    session
  }: {
    session: Session | null;
  }) {

    const [questions, setQuestions] = useState<Question[]>([]);
    const { addButtonPressed } = useAddButtonPress();
    const { setAddButtonPressed } = useAddButtonPress();

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

    const handleEdit = (index: any) => {

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
                    onClick={() => handleEdit(question._id)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )
}