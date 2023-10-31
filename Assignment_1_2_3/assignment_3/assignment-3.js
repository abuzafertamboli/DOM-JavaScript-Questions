// Task 1: Edit "Contact" from the nav list and replace it with "Reach Me"

const myLi = document.createElement('li');

const myAnchorTag = document.createElement('a')
myAnchorTag.setAttribute("href", "./contact.html");

const text = document.createTextNode("Reach Me");
myAnchorTag.appendChild(text);

myLi.appendChild(myAnchorTag);

const reachMe = document.querySelector('header nav ul li:nth-child(3)');
reachMe.replaceWith(myLi);


// Task 2: Match the filled value of User Input Board and User Output Board when you click on Submit button

let getForm = document.querySelector('.mainRight form');

getForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let inputName = document.querySelector('.userName');
    let inputMail = document.querySelector('.userEmail');
    let inputMessage = document.querySelector('.userMessage');

    let outputName = document.querySelector('.enterName');
    let outputMail = document.querySelector('.enterMail');
    let outputMessage = document.querySelector('.enterMessage');

    outputName.value = inputName.value;
    outputMail.value = inputMail.value;
    outputMessage.value = inputMessage.value;
});