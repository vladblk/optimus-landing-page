// Get the button
myButton = document.querySelector('.back-to-top');

// When the user scrolls down 20px from top of document, show the button
const scrollFunction = () => {
    if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        myButton.style.display = 'block';
    } else {
        myButton.style.display = 'none';
    }
}

window.onscroll = function(){
    scrollFunction();
}

// When the user click on the button, scroll to the top of the document
const topFunction = () => {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
}

// document.body - for Safari
// document.documentElement - for Chrome, Firefox, IE and Opera


// adding smooth scrolling for Safari and IE
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 200, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});