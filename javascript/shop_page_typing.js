
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
    var elements = document.getElementsByClassName('typewrite');
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

// adding class and removing class js for category

let scrollpos = window.scrollY;

const header = document.querySelector(".category_list")
const scrollChange = 1180;
const Scroll = 2300;

const add_class_on_scroll = () => header.classList.add("list")
const remove_class_on_scroll = () => header.classList.remove("list")

window.addEventListener('scroll', function () {
    scrollpos = window.scrollY;

    if (scrollpos >= scrollChange && scrollpos <= Scroll) { add_class_on_scroll() }
    // else if (scrollpos >= Scroll) { remove_class_on_scroll() }
    else { remove_class_on_scroll() }

})

//category js ended//

//products slider js

let slideIndexs = 0;
showSlide();

function showSlide() {
    let i;
    let slides = document.getElementsByClassName("slide1");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndexs++;
    if (slideIndexs > slides.length) { slideIndexs = 1 }
    for (i = 0; i < slides.length; i++) {
        slides[i].className = slides[i].className.replace(" active", "");
    }

    slides[slideIndexs - 1].style.display = "block";
    slides[slideIndexs - 1].className += " active";
    setTimeout(showSlide, 5000); // Change image every 10 seconds
}
//product slider js ended