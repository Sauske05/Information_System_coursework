
var slides = document.querySelectorAll(".image_sliders");
var count = 0;

slides.forEach((slide, index) => {
  slide.style.left = index * 100 + "%";
  console.log(slide.style.left);

});

const slideImage = function() {
  slides.forEach((slide, index) => {
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
  }
};


window.onload = function() {
  setInterval(slideImage, 4000);
  
};
