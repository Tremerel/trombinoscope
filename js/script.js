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

  var boxes = document.querySelectorAll('.card');
  boxes.forEach(function(box){
     box.addEventListener( 'click', function() {
  box.classList.toggle('is-flipped');
})})
