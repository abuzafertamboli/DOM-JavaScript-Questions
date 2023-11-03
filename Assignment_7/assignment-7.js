// Task 1: Remove the languages that have 2.0 in their name(Every alternative language)

let courses = document.querySelectorAll('.main__languages a');

courses.forEach((item) => {
    if (item.innerText.includes("2.0")) {
        item.remove();
    }
});


// Task 2: Use JavaScript to write something in the input box and submit the form

let getInput = document.querySelector('.main__form-input');

getInput.disabled = false;

let getButton = document.querySelector('.main__form-btn');

getButton.disabled = false;


let getForm = document.querySelector('form');

getForm.addEventListener("submit", (event) => {
    event.preventDefault();
});