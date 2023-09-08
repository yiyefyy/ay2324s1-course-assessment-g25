document.addEventListener("DOMContentLoaded", function () {
    // Function to get questions from local storage
    function getQuestionsFromLocalStorage() {
        const storedQuestions = localStorage.getItem("questions");
        return storedQuestions ? JSON.parse(storedQuestions) : [];
    }

    // Function to save questions to local storage
    function saveQuestionsToLocalStorage(questions) {
        localStorage.setItem("questions", JSON.stringify(questions));
    }

    // Function to display questions in the table
    function displayQuestions() {
        const questionTableBody = document.querySelector("table tbody");
        questionTableBody.innerHTML = "";

        const questions = getQuestionsFromLocalStorage();

        questions.forEach((question, index) => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${question.title}</td>
                <td>${question.complexity}</td>
                <td>${question.category}</td>
            `;

            // Add an id to each row for easier manipulation
            row.setAttribute("id", `question-row-${index}`);

            questionTableBody.appendChild(row);
        });
    }

    // Display initial list of questions
    displayQuestions();

    // Handle form submission to add a new question
    const addQuestionForm = document.getElementById("questionForm");
    addQuestionForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Retrieve form values
        const title = document.getElementById("questionTitle").value;
        const description = document.getElementById("questionDescription").value;
        const category = document.getElementById("questionCategory").value;
        const complexity = document.querySelector("select[name='questionComplexity']").value;

        // Create a new question object
        const newQuestion = {
            title,
            description,
            category,
            complexity,
        };

        // Get the existing questions from local storage
        const questions = getQuestionsFromLocalStorage();

        // Add the new question to the existing questions
        questions.push(newQuestion);

        // Save the updated questions to local storage
        saveQuestionsToLocalStorage(questions);

        // Clear form fields
        addQuestionForm.reset();

        // Refresh the question list
        displayQuestions();
    });

    // Clear all questions from local storage
    const clearAllButton = document.getElementById("clearAllButton");
    clearAllButton.addEventListener("click", function () {
        localStorage.removeItem("questions");
        displayQuestions();
    });

    // Button to check local storage content
    const checkLocalStorageButton = document.getElementById("checkLocalStorageButton");
    checkLocalStorageButton.addEventListener("click", function () {
        const content = localStorage.getItem("questions");
        if (content) {
            console.log(JSON.parse(content));
        } else {
            console.log("Local storage is empty.");
        }
    });
});
