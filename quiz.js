const initQuiz = () => {
    let questions = ["When is my birthday?:)", "Who's our dog"];
    const answers = ["hatdog", "dot"];
    let questionContainer = document.getElementById("question");
    questionContainer.textContent = questions[0];
    const submitButton = document.getElementById("submit-button");
    let questionIndex = 0;
    let userAnswer = document.getElementById("answer");
    let buttonClicked = false;

    submitButton.addEventListener("click", () => {
        buttonClicked = true;
        checkingAnswers();
    });

    const checkingAnswers = () => {
        if(userAnswer.value.toLowerCase() === answers[questionIndex] && buttonClicked === true){
            questionContainer.textContent = questions[1];
            userAnswer.value ='';
            buttonClicked = false;
            questionIndex++;
            if(questionIndex < questions.length){
                questionContainer.textContent = questions[questionIndex];
            } else{
                questionContainer.textContent = "Done!"
            }
        }
    }
    
    // if(userAnswer.value.toLowerCase() === answers[0].toLowerCase()){
    //     questionContainer.textContent = questions[1];
    //     userAnswer.value = '';
    //     if(userAnswer.value.toLowerCase() === answer[1].toLowerCase()){
            
    //     }
    // }
}

window.addEventListener('load', initQuiz)