$(document).ready(function () {
  $("#autoWidth").lightSlider({
    autoWidth: true,
    loop: true,
    onSliderLoad: function () {
      $("#autoWidth").removeClass("cS-hidden");
    },
  });
});


const MainImg = document.getElementById("MainImg");
const smallImg = document.getElementsByClassName("small-img");

// we take our small first image when we click it, it will target big image and replace it
smallImg[0].onclick = function(){
    MainImg.src = smallImg[0].src;
}
smallImg[1].onclick = function(){
    MainImg.src = smallImg[1].src;
}

