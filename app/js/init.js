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

    //Inicio - más operaciones
    jQuery.fn.fadeThenSlideToggle = function(speed, easing, callback) {
      if (this.is(":hidden")) {
        return this.slideDown(speed, easing).fadeTo(speed, 1, easing, callback);
      } else {
        return this.fadeTo(speed, 0, easing).slideUp(speed, easing, callback);
      }
    };
    $("#masOp").click(function(){
      $("#inicio_opnoextraccion").css("min-width","330px");
      $(this).addClass("heightZero animated");      
      $(".adde > a")  
          .addClass("open animated")  
    });    

    // Consulta
    $(".saldosDisponibles .tfila .btn-chico").click(function(){
      $(this).next().delay(800).fadeIn();
    }); 
    $("#bt_ayuda").click(function(){
      $(".ayudaContainer").removeClass("oculto");
    });
    $(".ayudaContainer .close").click(function(){
      $(".ayudaContainer").addClass("oculto");
    }); 

    //Inicio link
    $("#inicio_cuentas .dropdown .contenedor div").click(function(){
      $(this).closest(".dropdownContainer").next().removeClass("oculto"); 
    }); 
    $("#inicio_cuentas .dropdownContainer:nth-of-type(2) .dropdown .contenedor div").click(function(){
      $(this).closest(".dropdownContainer").siblings("p.azul").addClass("oculto");
    }); 

    //Consulta saldo
    $(".consultasaldo_link_intermedia_f .dropdown .contenedor div").click(function(){
      $(this).closest(".dropdownContainer").next().removeClass("oculto"); 
    });  

    //Cierre de cuentas
    $("#cierre_de_cuentas .dropdown .contenedor div").click(function(){
      $(this).closest(".dropdownContainer").next().removeClass("oculto"); 
    }); 
    $("#numeroCuenta .contenedor div").click(function(){
      $("#siguiente").removeClass("oculto"); 
    }); 

    //Focus en inputs,poner aquí
    $(".extraccion_sintarjeta_clave_modal_f.containerdeinput input").focus();
  }); // end of document ready
})(jQuery); // end of jQuery name space

//Últimos movimientos
if ($(".ultimosmovimientos tr").length < 5) {
  $(".ultimosmovimientos-botones").hide();    
}

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