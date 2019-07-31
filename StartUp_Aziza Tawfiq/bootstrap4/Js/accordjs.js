
        var acc = document.getElementsByClassName("accordion");
        var i;
        
        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function() {
                this.classList.toggle("active");
                var panel = this.nextElementSibling;
                if (panel.style.display === "block") {
                    panel.style.display = "none";
                } else {
                    panel.style.display = "block";
                }
            });
        }
 
$(window).on("scroll",function(){
    var $nav = $(".link-hover");
    if($(this).scrollTop() > 50)
    {
        
    document.getElementById("navigationbar").classList.add("scrolled");
    $nav.toggleClass('navlink',$(this).scrollTop() > 50);
    document.getElementById("logoimg1").classList.add("active-image");  
    document.getElementById("logoimg2").classList.add("main-image"); 
    document.getElementById("logoimg1").classList.remove("main-image");  
    document.getElementById("logoimg2").classList.remove("active-image");  
    
  }
  else{
    document.getElementById("navigationbar").classList.remove("scrolled"); 
    
    $nav.removeClass('navlink');
    document.getElementById("logoimg1").classList.add("main-image");  
    document.getElementById("logoimg2").classList.add("active-image"); 
    document.getElementById("logoimg1").classList.remove("active-image");  
    document.getElementById("logoimg2").classList.remove("main-image");

  }
});

$(document).ready(function(){
$(".link-hover").mouseover(function() {
    $(this).append("<div  id='addeddiv' style='position: absolute;top: 35px;left: 0;width: 9px;height: 2px;background: #17bed2;content:' ';margin-right: 0x;'></div>");
}
);
$(".link-hover").mouseout(function() {
    $("#addeddiv").remove();
});
});

function initMap() {
    var uluru = {lat: -25.363, lng: 131.044};
    var map = new google.maps.Map(document.getElementById('Contact-Map'), {
      zoom: 4,
      center: uluru
    });
    var marker = new google.maps.Marker({
      position: uluru,
      map: map
    });
  }

