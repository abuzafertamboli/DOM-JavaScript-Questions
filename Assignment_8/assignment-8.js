// Task 1: Adding a scroll bar to the left section

const scrollSection = document.querySelector('.new');

scrollSection.style.overflow = "scroll";


// Task 2: Removing the background pattern

document.body.style.backgroundImage = "none";


// Task 3: Activate the Hamburger Icon

const hamburgerButton = document.querySelector('.navbar-toggler');

const hamburgerList = document.querySelector('.navbar-collapse');


hamburgerButton.addEventListener('click', (event) => {
    if (hamburgerList.style.display === "block") {
        hamburgerList.style.display = "none";
    } else {
        hamburgerList.style.display = "block";
    }
});