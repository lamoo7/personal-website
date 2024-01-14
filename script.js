var sliderCounter = 0;
var sliderContent = [
  "web development",
  "writing optimized code",
  "app development",
  "overcoming problems",
  "having fun all the time :)"
];
var slider = document.querySelector("#slider");
var sliderValue = document.querySelector("#sliderValue");

function slide() {
  if (sliderCounter >= sliderContent.length) {
    sliderCounter = 0;
  }

  sliderValue.innerHTML = "";
  
  sliderValue.classList.remove("holder-animation");
  void sliderValue.offsetWidth;
  sliderValue.classList.add("holder-animation");
  
  for (i = 0; i < sliderContent[sliderCounter].length; i++) {
    let letterDiv = document.createElement("div");
    letterDiv.innerHTML = sliderContent[sliderCounter][i];

    if (letterDiv.innerHTML == " ") {
      letterDiv.innerHTML = "&nbsp;";
    }
    letterDiv.classList.add("start");
    letterDiv.classList.add("animation");
    letterDiv.style.animationDelay = i / 10 + "s";
    sliderValue.appendChild(letterDiv);
  }

  sliderCounter++;
}

slide();
setInterval(slide, 4000);


const menuLinks = document.querySelectorAll('.sidebar-menu__link');
const sections = document.querySelectorAll('section');

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