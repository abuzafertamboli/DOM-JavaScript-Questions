// Task 1: Edit "Contact" from the nav list and replace it with "Reach Me"

const myLi = document.createElement('li');

const myAnchorTag = document.createElement('a')
myAnchorTag.setAttribute("href", "../assignment_3/contact.html");

const text = document.createTextNode("Reach Me");
myAnchorTag.appendChild(text);

myLi.appendChild(myAnchorTag);

const reachMe = document.querySelector('header nav ul li:nth-child(3)');
reachMe.replaceWith(myLi);


// Task 2: Add li to the nav list and name it as "My Projects"

const liTwo = document.createElement('li');

const anchorTagTwo = document.createElement('a');
anchorTagTwo.setAttribute("href", "https://github.com/abuzafertamboli?tab=repositories");

const textTwo = document.createTextNode("My Projects");
anchorTagTwo.appendChild(textTwo);

liTwo.appendChild(anchorTagTwo);

const myUl = document.querySelector('header nav ul');
myUl.appendChild(liTwo);


// Task 3: Change the placeholder text in the search bar

const newPlaceholder = document.querySelector('.search-field input');
newPlaceholder.placeholder = "Search My Project";


// Task 4: Change the company name in the description

const mySpan = document.querySelectorAll('.hero-left-section p span:last-child');
mySpan.innerText = "Google LLC";


// Task 5: Update the profile image

const updatedImage = document.querySelector('.hero-right-section img');
updatedImage.src = "https://avatars.githubusercontent.com/u/132331956?v=4";


// Task 6: Add the "Support Me" button beside the "Chat with Me" button

const newButton = document.createElement('button');
const textThree = document.createTextNode("Support Me");
newButton.appendChild(textThree);

document.querySelector('.hero-right-section-btns').appendChild(newButton);