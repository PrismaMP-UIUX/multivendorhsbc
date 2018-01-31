$(document).ready(function(){
	// variables
	var tableH = $('.tabla').height(),
		tableW = $('.tabla').width(),
		trH = $('.tabla tr').height(),
		numOfTrVisible = tableH / trH,
		trL = $('.tabla tr').length;
	var datalenght;
	datavalue();

	function datavalue() {
		var esteData = $(".tabla_select").data("tabla-scroll");
		if (esteData == undefined) {
			datalenght = 4;
		} else {
			datalenght = esteData;
		}
	};
	console.log(datalenght);


	// scroll con botones
	$('a.abajo').click( function(filas) {
		var scrollPosition = $('.tabla').scrollTop();
		if ($('.tabla').scrollTop() + $('.tabla').innerHeight() < $('.tabla')[0].scrollHeight) {
			$('.tabla').animate({scrollTop: scrollPosition + (trH * datalenght) }, 300, 'linear');
		}
	});
	$('a.arriba').click( function(filas) {
		var scrollPosition = $('.tabla').scrollTop();
		if (scrollPosition != 0) {
			$('.tabla').animate({scrollTop: scrollPosition - (trH * datalenght) }, 300, 'linear');
		}
	});

	// Sombra
	$('.tabla').on('scroll', function() {
	    if($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight) {
	        $(".fade-shadow").fadeOut(10);
	    } else {
	      $(".fade-shadow").fadeIn(10);
	    }
	})

	// si hay 5 o menos movimientos, ocultar flechas, ensancha tabla y quita sombra
	if ((trL * trH) <= tableH) {
		$('.tabla .right').hide();
		$('.tabla').css('height', 'auto');
		$('.tabla').css('width', '100%');
		$('.t-header').css('width', '100%');
		$('.fade-shadow').css('width', '100%');
		$('.tableScrollBlocker').css('width', '100%');
		$(".fade-shadow").remove();
		$(".tableScrollBlocker").remove();
	};

	$('tr').click(function(){
		if($(this).find('td input[type="radio"]').val()){
			SSFramework.initTimeout();
			$(this).addClass('active');
			$(this).siblings().removeClass('active');
			$(this).find('td input[type=radio]').prop( "checked", true );
			var num=$(this).find('td input[type=radio]').val();
			Vars.set('cta_index',num);
      States.handleEvent('ev_ssfw_checked_cta');
		}
	});
})
