var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

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

jQuery(document).ready(function($) {
  $("#my-slider").sliderPro();

  $(window).stellar();
});

snapchat.onclick = function() {
  modal.style.display = "block";
};

span.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
