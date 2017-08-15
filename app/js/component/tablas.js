$(document).ready(function(){
	// variables 
	var tableH = $('.tabla').height(),
		tableW = $('.tabla').width(),
		trH = $('.tabla tr').height(),
		trL = $('.tabla tr').length,
		numOfTrVisible = tableH / trH;  

	// Sistema de columnas  

    // for (i = 1; i <= 12; i++) {
    // 	$(".tabla .collumn-" + [i]).width(([i] / 12) * tableW + "px");
    // } 

	// scroll con botones
	$('a.abajo').click( function() {
		var scrollPosition = $('.tabla').scrollTop();
		$('.tabla').animate({scrollTop: scrollPosition + (numOfTrVisible * trH) });
	});
	$('a.arriba').click( function() {
		var scrollPosition = $('.tabla').scrollTop();
		$('.tabla').animate({scrollTop: scrollPosition - (numOfTrVisible * trH) });
	});

	// si hay 5 o menos movimientos, ocultar flechas y ensanchar tabla	 
	if ((trL * trH) <= tableH) { 
		$('.tabla .right').hide(); 
		$('.tabla').css('height', 'auto');
		$('.tabla').css('width', '100%');
		$('.fade-shadow').css('width', '100%');
		$('.tableScrollBlocker').css('width', '100%');
	};   

	// t-head
	var tWidth = $(".tabla_select > .tabla").width();
	var tHeadPos = [];

		// position t-head items
		$(".tabla_select > .tabla tr:first-of-type td").each(function(){
			tHeadPos.push($(this).position());
		});
		function posTheadItem() {
			for (i = 0; i <= $(".t-header div").length; i++) {
				$(".t-header div:nth-of-type(" + [i + 1]  + ")").css("left", tHeadPos[i].left + "px");  
			}
		}	
		posTheadItem();
		// t-head width				
		$(".t-header").width(tWidth);  
})