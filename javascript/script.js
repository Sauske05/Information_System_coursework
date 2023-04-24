
var slides = document.querySelectorAll(".image_sliders");
var count = 0;


slides.forEach((slide, index) => {
  slide.style.left = index * 100 + "%";
  console.log(slide.style.left);

});

const slideImage = function() {
  console.log(slides)
  slides.forEach((slide, index) => {
    var angle = 360;
    slide.style.transform = "translateX(-" + count * 100 + "%)";
    if (index === count) {
      slide.classList.add("animate");
    } else {
      slide.classList.remove("animate");
    }
  });
  count++;   
  if (count > 2) {
    count = 0;
    angle = 0; 
  }
};

window.onload = function() {
  setInterval(slideImage, 3000);
  
};


document.addEventListener('DOMContentLoaded', function() {
  var demo = document.querySelector(".demo");
  var strings = ["Explore the World of Lens and Cameras"];
  var currentStringIndex = 0;
  var currentCharIndex = 0;
  var direction = 1;
  var intervalId = setInterval(function() {
    var currentString = strings[currentStringIndex];
    var currentChar = currentString.charAt(currentCharIndex);
    demo.textContent = currentString.substring(0, currentCharIndex + 1);
    currentCharIndex += direction;
    if (currentCharIndex === currentString.length || currentCharIndex === 0) {
      direction = -direction;
      currentStringIndex = (currentStringIndex + 1) % strings.length;
    }
  }, 70);
});