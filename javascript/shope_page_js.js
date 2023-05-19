// navbar js


    // When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
    window.onscroll = function() {scrollFunction()};
    
    function scrollFunction() {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("marq").style.top = "0px";
        document.getElementById("nav").style.width = "99%";
        document.getElementById("nav").style.marginLeft = "0";
        document.getElementById("nav").style.top = "-4px";
        document.getElementById("nav").style.borderRadius = "0";
      } else {
        document.getElementById("marq").style.top = "-100px";
        document.getElementById("nav").style.width = "90%";
        document.getElementById("nav").style.marginLeft = "5%";
        document.getElementById("nav").style.top = "20px";
        document.getElementById("nav").style.borderRadius = "35px";
      }
    };

//shop slider js

let Shopslide = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("shop_slider_content");  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  Shopslide++;
 if (Shopslide > slides.length) {Shopslide = 1}    
 for (i = 0; i < slides.length; i++) {
  slides[i].className = slides[i].className.replace(" active", "");
}
 
  slides[Shopslide-1].style.display = "block";  
  slides[Shopslide-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 10 seconds
}


// category adding and removing class

let scrollposs = window.scrollY;

const header = document.querySelector(".category_lists")
const scrollChange = 400;
const Scroll = 1400;

const add_class_on_scroll = () => header.classList.add("lists")
const remove_class_on_scroll = () => header.classList.remove("lists")

window.addEventListener('scroll', function () {
    scrollposs = window.scrollY;

    if (scrollposs >= scrollChange && scrollposs <= Scroll) { add_class_on_scroll() }
    // else if (scrollpos >= Scroll) { remove_class_on_scroll() }
    else { remove_class_on_scroll() }

})

// category js ended

// typing text animation
var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};

window.onload = function () {
    var elements = document.getElementsByClassName('typewrites');
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

// typing text animation ended



// rating js 

const stars = document.querySelectorAll('.star');
// const current_rating=document.querySelector('.current-rating');

stars.forEach((star, index) => {
  star.addEventListener('click', () => {

    let current_star = index + 1;
    // current_rating.innerText=`${current_star} of 5`;

    stars.forEach((star, i) => {
      if (current_star >= i + 1) {
        star.innerHTML = '&#9733;';
      } else {
        star.innerHTML = '&#9734;';
      }
    });

  });
});


  // category tab jas

  function openCity(cityName) {
    var i;
    var x = document.getElementsByClassName("shop_products");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    document.getElementById(cityName).style.display = "block";  
  }