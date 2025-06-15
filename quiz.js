// function checkAnswer() {
//     const correctAnswer = "4";
//     const userAnswer = document.querySelector('input[name="quiz"]:checked');
//     const feedback = document.getElementById("feedback");
//     if (!userAnswer) {
//         feedback.textContent = "Please select an answer before submitting.";
//         feedback.style.color = "red";
//         return;
//     }
//     if (userAnswer.value === correctAnswer) {
//         feedback.textContent = "Correct! Well done.";
//         feedback.style.color = "green";
//     } else {
//         feedback.textContent = "That's incorrect. Try again!";
//         feedback.style.color = "red";
//     }
// }
// document.getElementById("submit-answer").addEventListener("click", checkAnswer);
function checkAnswer() {
    const correctAnswer = "4";
    const selected = document.querySelector('input[name="quiz"]:checked');
    const feedback = document.getElementById("feedback");

    let userAnswer = null;
    if (selected) {
        userAnswer = selected.value;
    }

    if (!userAnswer) {
        feedback.textContent = "Please select an answer before submitting.";
        return;
    }

    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

const submitButton = document.getElementById("submit-answer");
submitButton.addEventListener("click", checkAnswer);
