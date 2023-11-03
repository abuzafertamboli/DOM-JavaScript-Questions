// Task 1: Change the brand logos on the web page

const logo = document.querySelectorAll('.logo');

logo.forEach((icon) => {
    icon.setAttribute('src', './assets/equalizer.png');
});

logo[0].style.width = '250px';
logo[1].style.width = '90px';


// Task 2: Change the subscription price of the app

const newSpan = document.createElement('span');
const text = document.createTextNode('$10');
newSpan.appendChild(text);

const price = document.querySelector('.app_price span');
price.replaceWith(newSpan);