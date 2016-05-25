
$(document).ready(function(){
  $(".navbar a, footer a").on('click', function(event) {
    if (this.hash !== ""){
      event.preventDefault();

      // Store hash
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){
   
        
        window.location.hash = hash;
      });
    } // End if
  });
})



