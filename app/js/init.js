var $slider;
(function($){
  $(function(){
    dropdown_init(null,1);
  	$slider =  $('#loop .slider').bxSlider({slideWidth: 975, nextSelector: '#slider-next', prevSelector: '#slider-prev', nextText: '', prevText: '', pause:6000, touchEnabled: true});
  	if($slider[0]){
  		$slider.startAuto();
  	};
    $(".owl-carousel").owlCarousel({
      items: 1,
      autoplay: true, 
      autoplayTimeout: 6000, 
      nav: true,
      dots: true, 
      navText: [
          "<i id='slider-prev' class='prisma izquierda'></i>",
          '<i id="slider-next" class="prisma derecha"></i>'
      ],
      loop: true
    });

    alescribir("extraccion","borrar");      
    alescribir("extraccion","continuar");   

  }); // end of document ready
})(jQuery); // end of jQuery name space

$("body").on("keypress",function(e){
  key= window.event? event.keyCode: e.keyCode;
  if(key==72 || key==104){
    ayudavisual();
  }
  // control enter
  if((event.keyCode == 10 || event.keyCode == 13) && event.ctrlKey){
    window.location.href='inicio.html'
  }
});

function ayudavisual(){
  $("body").toggleClass("bnlc ayuda");
  /*setTimeout(function(){
      changeWidth();
  }, 200);*/
}



// checkbox slider
$(function() {
  var isDragging = false;

  // touch drag
  $("#checkboxes")
  .bind( "touchstart", function(e) {
    isDragging = false;
  })
  .bind('touchmove', function(e) {
    isDragging = true;
   })
  .bind( "touchend", function(e) {
    var input = $(this).children('input');
    var wasDragging = isDragging;
    isDragging = true;
    if (wasDragging) {

      input.prop("checked", !input.prop("checked"));
    }
  });

  // mouse drag
  $("#checkboxes")
  .mousedown(function() {
    isDragging = false;
  })
  .mousemove(function() {
    isDragging = true;
  })
  .mouseup(function() {
    var input = $(this).children('input');
    var wasDragging = isDragging;
    isDragging = true;
    if (wasDragging) {

      input.prop("checked", !input.prop("checked"));
    }
  });

  // click
  $("#checkboxes").click(function() {
      var input = $(this).children('input');
      input.prop("checked", !input.prop("checked"));
  });
});


// grupo de botones tipo check o radio
$('.btn-inputs label').click( function(){
  $(this).addClass('active');
  $(this).siblings().removeClass('active');

  $('#continuar').show();
})