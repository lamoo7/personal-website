  var slideIndex = 0;
  slide();

  function slide() {
    var i;
    var x = document.getElementsByClassName("slider");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1} 
    x[slideIndex-1].style.display = "block"; 
    setTimeout(slide, 3000); 
  }
  
  // Function to check if at least 50% of an element is in the viewport
function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
  return (
    (rect.top <= 0 && rect.bottom >= 0) ||
    (rect.top >= 0 && rect.bottom <= windowHeight) ||
    (rect.top <= windowHeight && rect.bottom >= windowHeight)
  );
}

// Function to update the active link based on the section in the viewport
function updateActiveLink() {
  const sections = document.querySelectorAll('.section');
  const menuLinks = document.querySelectorAll('.menu-link');

  sections.forEach((section, index) => {
    if (isElementInViewport(section)) {
      menuLinks.forEach((link) => link.classList.remove('active'));
      menuLinks[index].classList.add('active');
    }
  });
}

// Add an event listener to update the active link when scrolling
window.addEventListener('scroll', updateActiveLink);

// Call the updateActiveLink function when the page loads to set the initial active link
window.addEventListener('load', updateActiveLink);
