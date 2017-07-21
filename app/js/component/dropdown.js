//textDefault (string) Texto de la option default
//preselect (string) Nro de index/orden de la option a preselecionar

// REVISADO
function dropdown_init(textDefault, preselect) {
	var open = false;
	$('.dropdown').prepend('<span></span>');

	changeWidth();

	if((textDefault!=null || textDefault!=undefined) && textDefault.lenght>0){
		$(".dropdown span").text(textDefault);
	}

	// cuando hago click en el boton del dropdown
	$('.dropdown').click(function(){
		clickea(this.id);
	});
	function clickea(idHtml){
		if(open==false){
			$('#'+idHtml+' > div').show(50).addClass("active"); //$('div',$('#'+idHtml+' > div')).fadeToggle(300);
			$('#'+idHtml).addClass("active");
			if((textDefault!=null || textDefault!=undefined) && textDefault.lenght>0){
				$('#'+idHtml+' span').html(textDefault);
			}
			open = true;
		}
	}

	// cuando hago click en la opción
	$('.dropdown div[data-dd]').click(function(e){
		$('#'+this.parentElement.parentElement.id+' div[data-dd].active').removeClass("active");
		$(this).addClass("active");
		if(open == true){
			cerrar(e);
			open = false;
		}
	});

	$(window).click(function(e) {
		if(open == true){
			cerrar();	
			open = false;
		}
	});

	$('.dropdown').click(function(event){
		if(open == true){
	    	event.stopPropagation();
		}
	});

	if((preselect!=null || preselect!=undefined)){
		$(".dropdown div[data-dd]:nth-child("+preselect+")").addClass("active");
		$('.dropdown span').each(function(eachIndex){
			eachOption = $('.dropdown span')[eachIndex];
			$(eachOption).html($("#"+eachOption.parentElement.id+" div[data-dd]:nth-child("+preselect+")").text());
		})
	}
}

function cerrar(e) {
	if(e){
		e.stopPropagation();
		//$('#'+ e.currentTarget.parentElement.parentElement.id +' div[data-dd]').fadeToggle(400,function(e){
		$('#'+ e.currentTarget.parentElement.parentElement.id +' .contenedor').fadeToggle(50,function(e){
			$('#'+ e.currentTarget.parentElement.parentElement.id +' span').html(e.target.textContent);
			$('#'+ e.currentTarget.parentElement.parentElement.id +' span').attr("indice",e.target.attributes['indice'].value);
		}(e));
	}else{
		$('.dropdown .contenedor').hide(50);
	}
	$('.dropdown').removeClass("active");
	$('.dropdown > .contenedor').removeClass("active"); //$('.dropdown > div').removeClass("active");
}

function changeWidth(){
	var width = 0;
	$('.dropdown .contenedor').width(function() {
		if(width==0 || width<$(this).width()){
			width = $(this).width();
		}
	});
	$(".dropdown").css("width", width+"px");
}


// LO ANTERIOR
/*function dropdown_init(textDefault, preselect) {
	var open = false;
	$('.dropdown').prepend('<span></span>');

	changeWidth();

	if((textDefault!=null || textDefault!=undefined) && textDefault.lenght>0){
		$(".dropdown span").text(textDefault);
	}

	$('.dropdown').click(function(){
		if(open==false){
			$('div',$('.dropdown > div')).fadeToggle(300);
			$('.dropdown > div').addClass("active");
			if((textDefault!=null || textDefault!=undefined) && textDefault.lenght>0){
				$('.dropdown span').html(textDefault);
			}
			open = true;
		}
	});
	$('.dropdown div[data-dd]').click(function(e){
		$('.dropdown div[data-dd].active').removeClass("active");
		$(this).addClass("active");
		if(open == true){
			cerrar(e);
			open = false;
		}
	});

	$(window).click(function(e) {
		if(open == true){
			cerrar();	
			open = false;
		}
	});

	$('.dropdown').click(function(event){
		if(open == true){
	    	event.stopPropagation();
		}
	});

	if((preselect!=null || preselect!=undefined)){
		$(".dropdown div[data-dd]:nth-child("+preselect+")").addClass("active");
		$('.dropdown span').html($(".dropdown div[data-dd]:nth-child("+preselect+")").text());
	}
}

function cerrar(e) {
	if(e){
		e.stopPropagation();
		$('.dropdown div[data-dd]').fadeToggle(400,function(e){
			$('.dropdown span').html(e.target.textContent);
			$('.dropdown span').attr("indice",e.target.attributes['indice'].value);
		}(e));
	}else{
		$('.dropdown div[data-dd]').fadeToggle(400);
	}
	$('.dropdown > div').removeClass("active");
}

function changeWidth(){
	var width = 0;
	$('.dropdown div[data-dd]').each(function () {
		if(width==0 || width<$(this).width()){
			width = $(this).width();
		}
	});
	$(".dropdown").css("min-width", width+"px");
}*/
