function alescribir(campo,boton){
	var campo = document.getElementById(campo);
	if(campo!=null)
	{
		campo.focus();
		var boton = document.getElementById(boton)
		if(boton!=null)
		{
			boton.style.display="none";
			campo.addEventListener("input", function (e) {
				if(this.value.length>0){
					boton.style.display="block";
				}else{
					boton.style.display="none";
				}
			});
		}
	}
}

function scaleBorrar(campo,boton) {
	var campo = document.getElementById(campo);
	if(campo!=null)
	{
		$(boton).attr('class', 'btn-chico naranja borrar block');
		campo.focus();
		var boton = document.getElementById(boton)
		if(boton!=null)
		{
			campo.addEventListener("input", function (e) {
				if(this.value.length>0){
					$(boton).addClass("v-visible");
					$(boton).removeClass('v-hidden');
					$(boton).removeClass('scale-out');
				}else{
					$(boton).addClass('scale-out');
				}
			});
		}
	}

}

function limpiarPass(campo){
	var campo = document.getElementById(campo);
	if(campo!=null){
		campo.focus();
		campo.value="";
		var borrar = document.getElementById("borrar");
		if(borrar!=null){
			var continuar = document.getElementById("continuar");
			if(continuar!=null){
				borrar.style.display="none";
				continuar.style.display="none";
			}
		}
	}
}

function deleteValue(obj,select) {
	$(select).click(function(){
		deleteOneCharacter();
	});



  function deleteOneCharacter() {
  	$(obj).val(
  	    function(index, value){
  	        return value.substr(0, value.length - 1);
  	});
  	//Para inputs de CBU
    if($("#cbu").length > 0 ) {
    	cbuFunction();
    }
  	$(obj).focus();
  }
}

function borrarTodo(campo) {
  $( "#borrar" ).mousedown(function(){
      $(".borrarTodo").addClass("active");
  });

   $( "#borrar" ).mouseup(function(){
      $(".borrarTodo").removeClass("active");
  });

  var pressTimer;
  $("#borrar").mouseup(function(){
    clearTimeout(pressTimer);
    return false;
  });
  $("#borrar").mousedown(function(){
    pressTimer = window.setTimeout(

      function() {
          $(campo).val('');

          //Para inputs de CBU
          if($(campo).length > 0 ) {
            cbuFunction();
            var cbuLengtha = $(campo).val().length;

            $(".cbu-counter span").text(cbuLengtha);

            $(".cbu-counter").attr('class', 'cbu-counter mg-b-20');

            if ( cbuLengtha >= 20 && cbuLengtha <= 21) {
              $(".cbu-counter").addClass("naranja");
              cbuFlag = false;
            };

            if ( cbuLengtha == 22) {
              $(".cbu-counter").addClass("verde");

              if(cbuFlag){
                $(".cbu-counter").addClass("pulse animated infinite");
              }
              cbuFlag = true;
            };
          }
          $(campo).focus();

          $("#borrar").addClass('scale-out');

          window.setTimeout(function(){$(".borrarTodo").removeClass("active")},100)
      }
    , 1000);
  });
}

function cbuFunction() {
  $("#cbu").bind('keyup', function(){
      cbuFunctionColors()
  });
  $("#borrar").click(function(){
  	cbuFunctionColors();
  });
  var cbuFlag = false;

  function cbuFunctionColors() {
    var cbuLength = $("#cbu").val().length;

    $(".cbu-counter span").text(cbuLength);

    $(".cbu-counter").attr('class', 'cbu-counter mg-b-20');

    if ( cbuLength >= 20 && cbuLength <= 21) {
      $(".cbu-counter").addClass("naranja");
      cbuFlag = false;
    };

    if ( cbuLength == 22) {
      $(".cbu-counter").addClass("verde");

      if(cbuFlag){
        $(".cbu-counter").addClass("pulse animated infinite");
      }
      cbuFlag = true;
    };
  }
}
