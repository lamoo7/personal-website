  window.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('.section');
    var links = document.querySelectorAll('.menu-link');
    
    sections.forEach(function(section, index) {
      var rect = section.getBoundingClientRect();
      
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        links[index].classList.add('active');
      } else {
        links[index].classList.remove('active');
      }
    });
  });

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