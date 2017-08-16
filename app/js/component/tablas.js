$(document).ready(function(){
	// variables 
	var tableH = $('.tabla').height(),
		tableW = $('.tabla').width(),
		trH = $('.tabla tr').height(),
		trL = $('.tabla tr').length,
		numOfTrVisible = tableH / trH;   

	// scroll con botones
	$('a.abajo').click( function() {
		var scrollPosition = $('.tabla').scrollTop(); 
		if ($('.tabla').scrollTop() + $('.tabla').innerHeight() < $('.tabla')[0].scrollHeight) { 
			$('.tabla').animate({scrollTop: scrollPosition + (numOfTrVisible * trH) });
		}
	});
	$('a.arriba').click( function() {
		var scrollPosition = $('.tabla').scrollTop();
		if (scrollPosition != 0) { 
			$('.tabla').animate({scrollTop: scrollPosition - (numOfTrVisible * trH) });
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
		$('.fade-shadow').css('width', '100%');
		$('.tableScrollBlocker').css('width', '100%');
		$(".fade-shadow").remove();
	};   
})