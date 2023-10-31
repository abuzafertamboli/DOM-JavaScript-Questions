let accordian = document.querySelectorAll(".accordian h3"); // Selecting h3

accordian.forEach((element) => { // Applying for each loop to h3

  element.addEventListener("click", () => { // Adding event listener
    let para = element.nextElementSibling; // selecting the paragraph
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });

});


// Task 1: Edit "Contact" from the nav list and replace it with "Reach Me"

const myLi = document.createElement('li');

const myAnchorTag = document.createElement('a')
myAnchorTag.setAttribute("href", "./contact.html");

const text = document.createTextNode("Reach Me");
myAnchorTag.appendChild(text);

myLi.appendChild(myAnchorTag);

const reachMe = document.querySelector('header nav ul li:nth-child(3)');
reachMe.replaceWith(myLi);


// Task 2:  Change the font color and background color of all the descriptions

const getPara = document.querySelectorAll('.accordian p');

getPara.forEach((paraText) => {
  paraText.style.backgroundColor = "#129B9B";
  paraText.style.color ="#ffffff";
});


// Task 3: Add Skills section

const newDiv = document.createElement('div');
newDiv.className = "accordian";

const newH3 = document.createElement('h3');
const h3Text = document.createTextNode("Skills");
newH3.appendChild(h3Text);

const newPara = document.createElement('p');
const paraTextTwo = document.createTextNode("I possess a very good command over the Front-End Development technologies which can be seen in my work over the GitHub.");
newPara.style.backgroundColor = "#129B9B";
newPara.style.color = "#ffffff";

newPara.appendChild(paraTextTwo);

newDiv.appendChild(newH3);
newDiv.appendChild(newPara);

newH3.addEventListener("click", () => {
  if (newPara.style.display === "block") {
    newPara.style.display = "none";
  } else {
    newPara.style.display = "block";
  }
});

document.querySelector('.accordian-wrapper').appendChild(newDiv);