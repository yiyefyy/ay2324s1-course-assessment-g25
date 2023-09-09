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
            <td class="question-id">${index + 1}</td>
            <td class="question-title">${question.title}</td>
            <td>${question.complexity}</td>
            <td>${question.category}</td>
            `;

            // Add an id to each row for easier manipulation
            // row.setAttribute("id", `question-row-${index}`);

            // Add a click event listener to the row
            row.addEventListener("click", function () {
                displayQuestionDetails(question); // Call function to display details
            });

            questionTableBody.appendChild(row);
        });
    }

    // Function to display question details
    function displayQuestionDetails(question) {
        const detailsContainer = document.querySelector(".question-details");
    
        // Create a template for displaying question details
        const detailsHTML = `
            <h2>${question.id}. ${question.title}</h2>
            <p><strong>Description:</strong> ${question.description}</p>
            <p><strong>Complexity:</strong> ${question.complexity}</p>
            <p><strong>Category:</strong> ${question.category}</p>
        `;

        detailsContainer.innerHTML = detailsHTML;
}

    // Handle form submission to add a new question
    const addQuestionForm = document.getElementById("questionForm");
    addQuestionForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Retrieve form values
        // const id = document.getElementById("question").value;
        const title = document.getElementById("questionTitle").value;
        const description = document.getElementById("questionDescription").value;
        const category = document.getElementById("questionCategory").value;
        const complexity = document.querySelector("select[name='questionComplexity']").value;

        // Get the existing questions from local storage
        const questions = getQuestionsFromLocalStorage();

        // Create a new question object
        const newQuestion = {
            id: questions.length + 1, // Assign the next available ID
            title,
            description,
            category,
            complexity,
        };

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

    // Display initial list of questions
    displayQuestions();
});
