"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { SideBar } from '../../components/sideBar';
import '/Users/wangxinyi/Desktop/3219 Assignment/frontend/src/app/styles.css';

export default function Homepage() {
    const [sidebar, setsidebar] = useState(false);
    const showSideBar = () => setsidebar(!sidebar);
    const [storedName, setStoredName] = useState('');
    const [questions, setQuestions] = useState([]);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
        complexity: 'Easy',
    });
    
    useEffect(() => {
        const name = localStorage.getItem('name');
        if (name) {
            setStoredName(name)
        }
        
        // Load questions from localStorage on the client-side
        const storedQuestions = localStorage.getItem("questions");
        const parsedQuestions = storedQuestions ? JSON.parse(storedQuestions) : [];
        setQuestions(parsedQuestions);
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const { title, description, category, complexity } = formData;
    
        if (title.trim() === "") {
            alert("Title cannot be empty.");
            return;
        }
    
        if (isDuplicateQuestion(title, questions)) {
            alert("A question with the same title already exists. Please enter a unique title.");
            return;
        }
    
        const newQuestion = {
            id: questions.length + 1,
            title,
            description,
            category,
            complexity,
        };
    
        const updatedQuestions = [...questions, newQuestion];
        setQuestions(updatedQuestions);
    
        // Save the updated questions to local storage
        localStorage.setItem("questions", JSON.stringify(updatedQuestions));
    
        // Clear form fields
        setFormData({
            title: '',
            description: '',
            category: '',
            complexity: 'Easy',
        });
    
        console.log("New question added:", newQuestion); // Log the new question for debugging
    };

    const isDuplicateQuestion = (title, questions) => {
        return questions.some((question) => question.title === title);
    };


    const handleDelete = (index) => {
        const updatedQuestions = [...questions];
        updatedQuestions.splice(index, 1);
        setQuestions(updatedQuestions);
        localStorage.setItem("questions", JSON.stringify(updatedQuestions));
    };


    // useEffect(() => {
    //     const name = localStorage.getItem('name');
    //     if (name) {
    //         setStoredName(name)
    //     }
    //     // Load questions from localStorage on the client-side
    //     const storedQuestions = localStorage.getItem("questions");
    //     const parsedQuestions = storedQuestions ? JSON.parse(storedQuestions) : [];
    //     setQuestions(parsedQuestions);
    // }, []);


    // // Handle form input changes
    // const handleInputChange = (e) => {
    //     const { name, value } = e.target;
    //     setFormData((prevData) => ({
    //         ...prevData,
    //         [name]: value,
    //     }));
    // };

    // // Handle form submission
    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     const { title, description, category, complexity } = formData;

    //     if (title.trim() === "") {
    //         alert("Title cannot be empty.");
    //         return;
    //     }

    //     if (isDuplicateQuestion(title, questions)) {
    //         alert("A question with the same title already exists. Please enter a unique title.");
    //         return;
    //     }

    //     const newQuestion = {
    //         id: questions.length + 1,
    //         title,
    //         description,
    //         category,
    //         complexity,
    //     };

    //     const updatedQuestions = [...questions, newQuestion];
    //     setQuestions(updatedQuestions);

    //     // Save the updated questions to local storage
    //     localStorage.setItem("questions", JSON.stringify(updatedQuestions));

    //     // Clear form fields
    //     setFormData({
    //         title: '',
    //         description: '',
    //         category: '',
    //         complexity: 'Easy',
    //     });
    // };

    // // Function to check if a question with the same title already exists
    // const isDuplicateQuestion = (title, questions) => {
    //     return questions.some((question) => question.title === title);
    // };
    

    // useEffect(() => {
    //     // Add your DOM manipulation and event handling code here
    //     document.addEventListener("DOMContentLoaded", function () {
    //         // Function to get questions from local storage
    //         function getQuestionsFromLocalStorage() {
    //             const storedQuestions = localStorage.getItem("questions");
    //             return storedQuestions ? JSON.parse(storedQuestions) : [];
    //         }
        
    //         // Function to save questions to local storage
    //         function saveQuestionsToLocalStorage(questions) {
    //             localStorage.setItem("questions", JSON.stringify(questions));
    //         }
        
    //         // Function to display questions in the table
    //         function displayQuestions() {
    //             const questionTableBody = document.querySelector("table tbody");
    //             questionTableBody.innerHTML = "";
        
    //             const questions = getQuestionsFromLocalStorage();
        
    //             questions.forEach((question, index) => {
    //                 const row = document.createElement("tr");
    //                 row.innerHTML = `
    //                 <td class="question-id">${index + 1}</td>
    //                 <td class="question-title">${question.title}</td>
    //                 <td>${question.complexity}</td>
    //                 <td>${question.category}</td>
    //                 <td><button class="delete-button" data-index="${index + 1}">Delete</button></td> <!-- Add data-index attribute -->
    //                 `;
        
    //                 // Add an id to each row for easier manipulation
    //                 // row.setAttribute("id", `question-row-${index}`);
        
    //                 // Add a click event listener to the row
    //                 row.addEventListener("click", function () {
    //                     displayQuestionDetails(question); // Call function to display details
    //                 });
        
    //                 // Add a click event listener to the delete button
    //                 row.querySelector(".delete-button").addEventListener("click", function () {
    //                     deleteQuestion(index); // Call function to delete question
    //                 });
        
    //                 questionTableBody.appendChild(row);
    //             });
    //         }
        
        
    //         // Function to delete a question
    //         function deleteQuestion(index) {
    //             const questions = getQuestionsFromLocalStorage();
        
    //         if (index >= 0 && index < questions.length) {
    //             const confirmationModal = document.getElementById("confirmationModal");
    //             const confirmDeleteButton = document.getElementById("confirmDeleteButton");
    //             const cancelDeleteButton = document.getElementById("cancelDeleteButton");
        
    //             // Show the confirmation modal
    //             confirmationModal.style.display = "block";
        
    //             // Handle the "Yes" button click
    //             confirmDeleteButton.onclick = function () {
    //                 // Remove the question at the specified index
    //                 questions.splice(index, 1);
        
    //                 // Update the IDs of the remaining questions
    //                 for (let i = index; i < questions.length; i++) {
    //                     questions[i].id = i + 1;
    //                 }
        
    //                 // Save the updated questions to local storage
    //                 saveQuestionsToLocalStorage(questions);
        
    //                 // Refresh the question list
    //                 displayQuestions();
        
    //                 // Close the confirmation modal
    //                 confirmationModal.style.display = "none";
    //             };
        
    //             // Handle the "No" button click
    //             cancelDeleteButton.onclick = function () {
    //                 // Close the confirmation modal without deleting the question
    //                 confirmationModal.style.display = "none";
    //             };
    //         }
    //         }
        
    //         // Function to display question details
    //         function displayQuestionDetails(question) {
    //             const detailsContainer = document.querySelector(".question-details");
        
    //             // Replace newline characters with <br> tags and preserve indentation
    //             const descriptionHTML = question.description.replace(/\n/g, '<br>').replace(/ /g, '&nbsp;');
            
    //             // Create a template for displaying question details
    //             const detailsHTML = `
    //                 <h2>${question.id}. ${question.title}</h2>
    //                 <p><strong>Description:</strong><br>${descriptionHTML}</p>
    //                 <p><strong>Complexity:</strong> ${question.complexity}</p>
    //                 <p><strong>Category:</strong> ${question.category}</p>
    //             `;
        
    //             detailsContainer.innerHTML = detailsHTML;
    //         }
        
    //         // Function to check if a question with the same title already exists
    //         function isDuplicateQuestion(title, questions) {
    //             return questions.some((question) => question.title === title);
    //         }
        
    //         // Handle form submission to add a new question
    //         const addQuestionForm = document.getElementById("questionForm");
    //         addQuestionForm.addEventListener("submit", function (e) {
    //             e.preventDefault();
        
    //             // Retrieve form values
    //             // const id = document.getElementById("question").value;
    //             const title = document.getElementById("questionTitle").value;
    //             const description = document.getElementById("questionDescription").value;
    //             const category = document.getElementById("questionCategory").value;
    //             const complexity = document.querySelector("select[name='questionComplexity']").value;
        
    //             // Check if the title is empty or contains only whitespace
    //             if (title.trim() === "") {
    //                 alert("Title cannot be empty.");
    //                 return; // Exit the function without adding the question
    //             }
        
    //             // Get the existing questions from local storage
    //             const questions = getQuestionsFromLocalStorage();
        
    //             // Check if a question with the same title already exists
    //             if (isDuplicateQuestion(title, questions)) {
    //                 alert("A question with the same title already exists. Please enter a unique title.");
    //                 return; // Exit the function without adding the question
    //             }
        
    //             // Create a new question object
    //             const newQuestion = {
    //                 id: questions.length + 1, // Assign the next available ID
    //                 title,
    //                 description,
    //                 category,
    //                 complexity,
    //             };
        
    //             // Add the new question to the existing questions
    //             questions.push(newQuestion);
        
    //             // Save the updated questions to local storage
    //             saveQuestionsToLocalStorage(questions);
        
    //             // Clear form fields
    //             addQuestionForm.reset();
        
    //             // Refresh the question list
    //             displayQuestions();
    //         });
        
    //         // Clear all questions from local storage
    //         const clearAllButton = document.getElementById("clearAllButton");
    //         clearAllButton.addEventListener("click", function () {
    //             localStorage.removeItem("questions");
    //             // Clear the content of the question details container
    //             const questionDetailsContainer = document.getElementById("questionDetailsContainer");
    //             questionDetailsContainer.innerHTML = "";
                
    //             // Refresh the question list
    //             displayQuestions();
    //         });
        
    //         // // Function to display questions from local storage in the table
    //         // function displayQuestionsFromLocalStorage() {
    //         //     const questionTableBody = document.getElementById("questionTableBody");
    //         //     questionTableBody.innerHTML = "";
    //         //     const questions = getQuestionsFromLocalStorage(); 
    //         //     questions.forEach((question, index) => {
    //         //         const row = document.createElement("tr");
    //         //         row.innerHTML = `
    //         //             <td>${question.id}</td>
    //         //             <td>${question.title}</td>
    //         //             <td>${question.complexity}</td>
    //         //             <td>${question.category}</td>
    //         //         `;
        
    //         //         questionTableBody.appendChild(row);
    //         //     });
    //         // }
        
    //         // Button to check local storage content
    //         const checkLocalStorageButton = document.getElementById("checkLocalStorageButton");
    //         checkLocalStorageButton.addEventListener("click", function () {
    //             const content = localStorage.getItem("questions");
    //             if (content) {
    //                 console.log(JSON.parse(content));
    //             } else {
    //                 console.log("Local storage is empty.");
    //             }
    //             // displayQuestionsFromLocalStorage();
    //         });
        
    //         // Display initial list of questions
    //         displayQuestions();
    //     });

    //     // Don't forget to remove the event listener when the component unmounts
    //     return () => {
    //         document.removeEventListener("DOMContentLoaded", function () {
    //             // Cleanup logic if needed
    //         });
    //     };
    // }, []);



    return (

        <div className="bg-black min-h-screen">
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

            <div className="text-center mt-10 mb-10">
                <p className="text-3xl font-semibold mb-4">Welcome to PeerPrep, {storedName}</p>
                <p className="text-lg font-normal">Here are some questions to get you started</p>
            </div>

            <main>
                <h2>Add a new question here: </h2>
                <div className="form-center">
                    <form id="questionForm" onSubmit={handleSubmit}>
                    <label htmlFor="questionTitle">Title:</label>
                    <input
                        type="text"
                        placeholder="Title"
                        id="questionTitle"
                        name="title"
                        autoComplete="off"
                        maxLength="100"
                        onChange={handleInputChange} // Add an onChange event handler
                        value={formData.title} // Bind the value to your component state
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

                {/* Add a modal for confirmation
                <div id="confirmationModal" className="modal">
                    <div className="modal-content">
                    <p>Are you sure you want to delete this question?</p>
                    <button id="confirmDeleteButton">Yes</button>
                    <button id="cancelDeleteButton">No</button>
                    </div>
                </div> */}

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
                    <tbody>
                        {/* This is where questions will be dynamically added */}
                        {questions.map((question, index) => (
                            <tr key={index}>
                                <td className="question-id">{index + 1}</td>
                                <td className="question-title">{question.title}</td>
                                <td>{question.complexity}</td>
                                <td>{question.category}</td>
                                <td>
                                    <button
                                        className="delete-button"
                                        onClick={() => handleDelete(index)}
                                    >
                                        Delete
                                     </button>
                                 </td>
                            </tr>
                        ))}
                    </tbody>
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

    );
}
