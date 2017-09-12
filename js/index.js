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


$('.navbar-collapse a').click(function () {
  $('.navbar-collapse').collapse('hide')
})

$(document).click(function (e) {
  if (!$(e.target).is('a') || $(e.target).is('.navbar-brand')) {
    $('.collapse').collapse('hide')
  }
})

