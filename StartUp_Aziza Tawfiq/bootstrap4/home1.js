
           /* Start Button Scroll */
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myScroll").style.display = "block";
  } else {
    document.getElementById("myScroll").style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
             /* End Button Scroll */


             /* Start section3 */
function myRead() {
var dots = document.getElementsByClassName("dots");
var moreText = document.getElementsByClassName("more");
var btnText = document.getElementsByClassName("myBtn");

if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more"; 
    moreText.style.display = "none";
} else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less"; 
    moreText.style.display = "inline";
}
}
            /*End section3 */


             
