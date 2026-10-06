const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", function() {
    nav.classList.toggle("open");
});


const questions = document.querySelectorAll(".faq-question");

questions.forEach(function(question) {
    question.addEventListener("click", function() {
        const answer = question.parentElement.querySelector(".faq-answer");
        answer.classList.toggle("open");
        question.classList.toggle("open");
    });
});


const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if(entry.isIntersecting == true) {
            entry.target.classList.add("is-visible");
        }
    });
});

const sections = document.querySelectorAll("section");

sections.forEach(function(section) {
    observer.observe(section);
});