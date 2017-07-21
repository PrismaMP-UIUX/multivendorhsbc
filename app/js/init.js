var $slider;
(function($){
  $(function(){
    dropdown_init(null,1);
	$slider =  $('#loop .slider').bxSlider({slideWidth: 975, nextSelector: '#slider-next', prevSelector: '#slider-prev', nextText: '', prevText: ''});
	if($slider[0]){
		$slider.startAuto();
	}
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
    window.location.href='inicio.php'
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
