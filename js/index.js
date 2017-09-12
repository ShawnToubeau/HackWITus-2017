var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
var anchor_offset = $('a[href="#test"]').offset().top;

//MODIFIES IMAGE SLIDE SHOW
$("#my-slider").sliderPro({
  width: "100%",
  height: $(".header").height(),
  arrows: false,
  buttons: false,
  waitForLayers: true,
  fade: true,
  autoplay: true,
  autoScaleLayers: false,
  autoplayDelay: 10000
});

//WHEN READY CUE SLIDESHOW AND PARRALAX
jQuery(document).ready(function($) {  
  $("#my-slider").sliderPro();

  $(window).stellar();
  
  
   $('body').scrollspy({target: ".navbar", offset: 50});   

  // Add smooth scrolling on all links inside the navbar
  $("#myNavbar a").on('click', function(event) {
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
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });  
});

//OPENS THE MODAL TO DISPLAY SNAPCODE
snapchat.onclick = function() {
  modal.style.display = "block";
};

//CLOSES THE MODAL TO HIDE SNAPCODE
span.onclick = function() {
  modal.style.display = "none";
};

//IF MODAL OPEN && USER CLICKS OUT OF MODAL AREA. CLOSE MODAL
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

$(window).on('scroll', function() {
 if ($(window).scrollTop() > anchor_offset - 1) {
   $('#navbar').show(400);
 } else {
   $('#navbar').hide(400);
 }
});

