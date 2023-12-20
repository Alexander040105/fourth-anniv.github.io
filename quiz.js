const initQuiz = () => {
    let questions = ["Bias ko sa STAYC?", "Who's our dog"];
    const answers = ["yoon", "dot"];
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

    const checkingAnswers = () => {
        if (questionIndex < questions.length) {
            const correctAnswer = answers[questionIndex].toLowerCase();
            const enteredAnswer = userAnswer.value.toLowerCase();

            if (enteredAnswer === correctAnswer && buttonClicked === true) {
                checking.textContent = 'You are tama!';
                // Move to the next question
                questionIndex++;

                if (questionIndex < questions.length) {
                    questionContainer.textContent = questions[questionIndex];
                    userAnswer.textContent = '';
                } else {
                    questionContainer.textContent = "Done!";
                    // Add your redirection logic here
                    window.location.href = 'index.html';
                }
            } else {
                checking.textContent = 'You are wrong! Try again::)';
            }
        }
    };
}

window.addEventListener('load', initQuiz)