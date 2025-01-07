 
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
    const brand = document.querySelector('.brand-logo')

    window.addEventListener('scroll', function() {
        if (window.scrollY > 75) { 
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
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



// Select elements
const slider = document.querySelector(".img-container"); // The container holding the images
const images = document.querySelectorAll(".img-container img"); // All images
const prevButton = document.querySelector(".previous"); // Previous button
const nextButton = document.querySelector(".next"); // Next button
const dots = document.querySelectorAll(".dot"); // All dots

let currentIndex = 0; // Track the current image index
const totalImages = images.length; // Total number of images

// Function to update the slider position
function updateSliderPosition() {
  const offset = -currentIndex * 100; // Calculate the translation percentage
  slider.style.transform = `translateX(${offset}%)`;
  updateDots(); // Highlight the correct dot
}

// Function to update the active dot
function updateDots() {
  dots.forEach((dot, index) => {
    if (index === currentIndex) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

// Event listener for the 'previous' button
prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages; // Move to the previous image (looping)
  updateSliderPosition();
});

// Event listener for the 'next' button
nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalImages; // Move to the next image (looping)
  updateSliderPosition();
});

// Add click event listeners to dots
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentIndex = index; // Update the currentIndex to the clicked dot
    updateSliderPosition();
  });
});

// Initialize the first dot as active
updateDots();
