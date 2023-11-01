// Task 1: Change the Character 2 card name to "Archer"

const divOne = document.createElement('div');
const textOne = document.createTextNode("Archer");
divOne.appendChild(textOne);

let oldDivOne = document.querySelector('.archer div:nth-child(3)');
oldDivOne.replaceWith(divOne);


// Task 2: Change the Character 4 card name to "The Goblin"

const divTwo = document.createElement('div');
const textTwo = document.createTextNode("The Goblin");
divTwo.appendChild(textTwo);

let oldDivTwo = document.querySelector('.goblin div:nth-child(3)');
oldDivTwo.replaceWith(divTwo);


// Task 3: Add the background color to the bottom section of the clash cards

const clashCard = document.querySelectorAll('.clash-card__unit-stats');

let colors = ['#EC9B3B', '#EE5487', '#F6901A', '#82BB30', '#4FACFF'];

clashCard.forEach((element, index) => {
    element.style.backgroundColor = colors[index];
});


// Task 4: Change the text color of the bottom section

const text = document.querySelectorAll('.one-third');

for (const colour of text) {
    colour.style.color = "#ffffff";
};