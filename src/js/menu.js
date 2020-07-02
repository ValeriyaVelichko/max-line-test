$(document).ready(function () {
  $('.sub > a').click(function(){
    $('.sub ul').slideUp();
     if ($(this).next().is(":visible")){
         $(this).next().slideUp();
     } else {
     $(this).next().slideToggle();
     }
    return false;
  });
     $('.mini-menu > ul > li > a').click(function(){

   $(this).addClass('active');
}),
     $('.sub ul li a').click(function(){
   $(this).addClass('active');
});
});

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}