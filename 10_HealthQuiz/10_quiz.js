function submitQuiz() {
    let score = 0;
    const correctAnswers = {
        q1: "b",  // 98.6°F
        q2: "b",  // Vitamin D
        q3: "b",  // Kidney
        q4: "b",  // 60-70% water
        q5: "b"   // HDL is good cholesterol
    };
    const quizItems = document.querySelectorAll('.quiz-item');
    quizItems.forEach((item, index) => {
        const questionKey = `q${index + 1}`;
        const selectedOption = item.querySelector(`input[name="${questionKey}"]:checked`);
        item.classList.remove('correct', 'wrong');
        if (selectedOption) {
            if (selectedOption.value === correctAnswers[questionKey]) {
                item.classList.add('correct');
                score++;
            } else {
                item.classList.add('wrong');
            }
        }
    });
    document.getElementById('result').textContent = `Your Score: ${score} / 
    ${Object.keys(correctAnswers).length}`;
}