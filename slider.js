var slideIndex = 6;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(a,n) {
  showSlides(slideIndex += n+a);
}
function showSlides(n) {
  var i,a;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1;}
  if (n < 1) {slideIndex = slides.length;}
  for (i = 0; i < slides.length; i++) 
  {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "inline";
  a=slideIndex;
  if (slideIndex == slides.length) {a=0}
  slides[a].style.display = "inline";
}