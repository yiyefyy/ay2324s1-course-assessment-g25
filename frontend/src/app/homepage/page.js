"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { SideBar } from '../../components/sideBar';
//import 'frontend/src/app/styles.css';


export default function Homepage() {
    const [sidebar, setsidebar] = useState(false);
    const showSideBar = () => setsidebar(!sidebar);

    const [storedName, setStoredName] = useState('');

    useEffect(() => {
        const name = localStorage.getItem('name');
        if (name) {
            setStoredName(name)
        }
    }, []);

    return (
        <div className="bg-white min-h-screen">
            <IconContext.Provider value={{ color: '#000000' }}>
                <div className="bg-green-50 flex justify-start items-center h-20">
                    <div className='flex items-center spcae-x-3' >
                        <Link href="#" className="ml-7 mr-2 text-black text-2xl">
                            <FaIcons.FaBars onClick={showSideBar} />
                        </Link>
                        <p className="flex items-center px-4 py-3 text-xl text-black font-semibold">Home</p>
                    </div>
                    <nav className={sidebar ? "bg-green-50 w-64 h-screen fixed top-0 left-0 transform transition-transform duration-300 translate-x-0 text-black" : "bg-gray-300 w-64 h-screen fixed top-0 left-0 -translate-x-full transition-transform duration-800 flex justify-center text-white"}>
                        <ul className="w-full" onClick={showSideBar}>
                            <li className="w-screen h-20 flex items-center">
                                <Link href='#' className="ml-8 text-black text-2xl">
                                    <AiIcons.AiOutlineClose />
                                </Link>
                            </li>
                            {SideBar.map((item, index) => {
                                return (
                                    <li key={index} className="text-black px-7 py-2 list-none h-16 no-underline text-sm w-5/6 h-full flex items-center px-4 rounded-md hover:underline">
                                        <Link href={item.path} className="flex items-center space-x-2">
                                            {item.icon}
                                            <span>{item.title}</span>
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                </div>
            </IconContext.Provider>
            <p className="p-7 text-lg font-semibold mb-2">Welcome to PeerPrep, {storedName}</p>
            <main>
                <h2>Add a new question</h2>
                <div className="form-center">
                    <form id="questionForm">
                    <label htmlFor="questionTitle">Title:</label>
                    <input
                        type="text"
                        placeholder="Title"
                        id="questionTitle"
                        name="questionTitle"
                        autoComplete="off"
                        maxLength="100"
                    />
                    <br /><br />
                    <label htmlFor="questionDescription">Description:</label>
                    <textarea
                        placeholder="Description"
                        id="questionDescription"
                        name="questionDescription"
                        wrap="soft"
                        maxLength="700"
                    ></textarea>
                    <br /><br />
                    <label htmlFor="questionComplexity">Complexity:</label>
                    <select name="questionComplexity" id="questionComplexity">
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                    <br /><br />
                    <label htmlFor="questionCategory">Category:</label>
                    <input
                        type="text"
                        placeholder="Category"
                        id="questionCategory"
                        name="questionCategory"
                        autoComplete="off"
                        maxLength="100"
                    />
                    <br /><br />
                    <div className="button-container">
                        <button type="submit">Add Question</button>
                        <button id="clearAllButton" type="button">Clear All</button>
                    </div>
                    </form>
                </div>

                {/* Add a modal for confirmation */}
                <div id="confirmationModal" className="modal">
                    <div className="modal-content">
                    <p>Are you sure you want to delete this question?</p>
                    <button id="confirmDeleteButton">Yes</button>
                    <button id="cancelDeleteButton">No</button>
                    </div>
                </div>

                <div className="table-conatiner">
                    <table>
                    <caption>
                        Questions
                    </caption>
                    <thead>
                        <tr>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Complexity</th>
                        <th>Category</th>
                        <th>Delete</th>
                        </tr>
                    </thead>
                    {/* This is where questions will be dynamically added */}
                    <tr>
                        {/* <td className="question-id">${question.id}</td>
                        <td className="question-title">${question.title}</td>
                        <td>${question.complexity}</td>
                        <td>${question.category}</td> */}
                        <td>
                        <button className="delete-button" data-index="${index}">Delete</button>
                        </td>
                    </tr>
                    </table>
                </div>

                <div className="question-details" id="questionDetailsContainer">
                    {/* Details of the selected question will be displayed here */}
                </div>

                {/* Button to check local storage content */}
                <div className="button-container">
                    <button id="checkLocalStorageButton">Check Local Storage in Console</button>
                </div>
            </main>
        </div>

        
        


    )
}