/*  For smooth scrolling to the target element when an anchor element with an internal link is clicked.
This is achieved by preventing the default behavior,
finding the target element based on the href attribute, 
and scrolling to it with a smooth animation.
*/

//Select all anchor elements with href starting with "#"
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    // Add click event listener to each anchor element
      anchor.addEventListener('click', function (e) {
        // Prevent default anchor click behavior
        e.preventDefault();
              // Scroll to the target element with a smooth animation
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  
    
    