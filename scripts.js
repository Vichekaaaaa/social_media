// Function to toggle menu for mobile
function toggleMenu() {
    const nav = document.querySelector('nav');
    if (nav) {
      nav.classList.toggle('active');
    }
  }
  
  // Add event listener for hamburger menu
  document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    if (hamburger) {
      // Handle click event for desktop
      hamburger.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent any default behavior
        toggleMenu();
      });
  
      // Handle touch event for mobile
      hamburger.addEventListener('touchstart', (e) => {
        e.preventDefault(); // Prevent default touch behavior (like scrolling)
        toggleMenu();
      });
    }
  });