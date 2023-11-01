// Create and add 6th Card to the recipe gallery

let divOne = document.createElement('div');
divOne.className = "card";

let anchorTag = document.createElement('a');
anchorTag.setAttribute('href', '#');
anchorTag.className = "recipe-text";

let newImage = document.createElement('img');
newImage.className = "recipe-img";
newImage.src = "https://cdn.pixabay.com/photo/2018/07/18/19/12/pasta-3547078_1280.jpg";

let heading = document.createElement('h5');
heading.className = "recipe-name";
let textOne = document.createTextNode("Pasta");
heading.appendChild(textOne);

let para = document.createElement('p');
para.className = "recipe-disp";
let textTwo = document.createTextNode("Prep : 15min | Cook : 15min");
para.appendChild(textTwo);

anchorTag.append(newImage, heading, para);

divOne.appendChild(anchorTag);

let parentDiv = document.querySelector('.recipe-gallery');
parentDiv.appendChild(divOne);