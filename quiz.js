const initQuiz = () => {
    let questions = ["Bias ko sa STAYC?", "Who's our dog", "Where it all started?", 'Comeback year?', "First year as a couple:)"];
    const answers = ["yoon", "dot", 'merryhills', '2019', '2020'];
    let questionContainer = document.getElementById("question");
    questionContainer.textContent = questions[0];
    const submitButton = document.getElementById("submit-button");
    let checking = document.getElementById('correctWrong');
    let questionIndex = 0;
    let userAnswer = document.getElementById("answer");
    let buttonClicked = false;

    submitButton.addEventListener("click", () => {
        buttonClicked = true;
        checkingAnswers();
    });

    userAnswer.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            buttonClicked = true;
            checkingAnswers();
        }
    });

    const checkingAnswers = () => {
        if (questionIndex < questions.length) {
            const correctAnswer = answers[questionIndex].toLowerCase();
            const enteredAnswer = userAnswer.value.toLowerCase();

            if (enteredAnswer === correctAnswer && buttonClicked === true) {
                checking.textContent = 'You are tama!';
                userAnswer.value = '';
                // Move to the next question
                questionIndex++;

                if (questionIndex < questions.length) {
                    questionContainer.textContent = questions[questionIndex];
                } else {
                    questionContainer.textContent = "Done!";
                    // Add your redirection logic here
                    window.location.href = 'index2.html';
                }
            } else {
                checking.textContent = 'You are wrong! Try again::)';
                userAnswer.textContent = '';
            }
        }
    };
}

window.addEventListener('load', initQuiz)