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
  
  const menuLinks = document.querySelectorAll('.menu-link');
      const sections = document.querySelectorAll('.section');

      function isElementInMiddle(element) {
        const elementRect = element.getBoundingClientRect();
        const middleOfScreen = window.innerHeight / 2;

        // Calculate the middle position of the element
        const elementMiddle = elementRect.top + elementRect.height / 2;

        return Math.abs(elementMiddle - middleOfScreen) < elementRect.height / 2;
      }

      function updateActiveLink() {
        sections.forEach((section, index) => {
          if (isElementInMiddle(section)) {
            menuLinks.forEach((link) => link.classList.remove('active'));
            menuLinks[index].classList.add('active');
          }
        });
      }

      window.addEventListener('scroll', updateActiveLink);
      window.addEventListener('load', updateActiveLink);