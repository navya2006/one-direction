    // LOADER
    
   var myVar;
   function myFunction() {
      myVar = setTimeout(showPage, 4000);
   }
    
   function showPage() {
      document.getElementById("load").style.display = "none";
      document.getElementById("mainBod").style.display = "block";
   } 


jQuery(document).on("scroll", function () {
    if ($(document).scrollTop() > 120) {
        $(".navb").css("background-color","#090b0d");
        $(".disappear").css("top","0");
    } else {
        $(".navb").css("background","none");
        $(".disappear").css("top","-200");
    }
});   