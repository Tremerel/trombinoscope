// JavaScript Document
 $(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });

  var box = document.querySelector('.card');
box.addEventListener( 'click', function() {
  box.classList.toggle('is-flipped');
});