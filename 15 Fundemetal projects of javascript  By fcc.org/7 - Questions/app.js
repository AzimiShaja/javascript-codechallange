const btns = document.querySelectorAll('.question-btn');
const questions = document.querySelector('.question');

btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const question = e.currentTarget.parentElement.parentElement; 

        question.classList.toggle('show-text');
    });
});
