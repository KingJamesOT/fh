 
 //fade in effect
 document.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.fade-in-right, .fade-in-left, .fade-in-up');
    const windowHeight = window.innerHeight;

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;

        if (elementTop < windowHeight * 0.9 && elementBottom > windowHeight * 0.1) {
            element.classList.add('visible');
        } else {
            element.classList.remove('visible');
        }
    });
});


// Fade everything in at the same time
window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});



// give class scrolled
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const hamburger = document.querySelector('.hamburger');
    const brand = document.querySelector('.brand-logo')

    window.addEventListener('scroll', function() {
        if (window.scrollY > 75) { 
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        if (window.scrollY > 76) { 
            hamburger.classList.add('scrolled');

        } else {
            hamburger.classList.remove('scrolled');
        }

        
        if (window.scrollY >76) { 
            brand.classList.add('scrolled');
        } else {
            brand.classList.remove('scrolled');
        }
    });
});



//Giving opening the locations bank details

const dropdownButtons = document.querySelectorAll('.drop-down-button');

// Add an event listener to each button
dropdownButtons.forEach(button => {
  button.addEventListener('click', function() {
    // Get the associated drop-down content
    const content = this.nextElementSibling;

    // Check if the content is already expanded
    if (content.style.maxHeight) {
      // If it's already expanded, collapse it
      content.style.maxHeight = null;
    } else {
      // If it's collapsed, expand it by setting maxHeight to the scrollHeight
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});






// arrow hero

document.querySelector('.arrow-container').addEventListener('click', function (event) {
  event.preventDefault(); // Prevent default link behavior

  // Scroll smoothly to the next section
  document.querySelector('#next-section').scrollIntoView({ behavior: 'smooth' });
});



// arrow nav

document.querySelector('.scroll-to-top').addEventListener('click', function (event) {
  event.preventDefault(); // Prevent default link behavior

  // Scroll smoothly to the next section
  document.querySelector('#top').scrollIntoView({ behavior: 'smooth' });
});



const next = document.querySelector(".next");
const prev = document.querySelector(".previous");

const numImg = document.querySelectorAll("img").length;
let currImg = 1;

let timeoutID;

next.addEventListener("click", () => {
  currImg++;
  clearTimeout(timeoutID);
  updateImage();
});

prev.addEventListener("click", () => {
  currImg--;
  clearTimeout(timeoutID);

  updateImage();
});

const imgcontainer = document.querySelector(".img-container");

function updateImage() {
  if (currImg > numImg) {
    currImg = 1;
  } else if (currImg < 1) {
    currImg = numImg;
  }
  imgcontainer.style.transform = `translateX(-${(currImg - 1) * 800}px)`;

  timeoutID = setTimeout(() => {
    currImg++;
    updateImage();
  }, 2000);
}

updateImage();