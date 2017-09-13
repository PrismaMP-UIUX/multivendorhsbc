//textDefault (string) Texto de la option default
//preselect (string) Nro de index/orden de la option a preselecionar

// REVISADO
function dropdown_init(textDefault, preselect) {
	var open = false;
	$('.dropdown').prepend('<span><span></span></span>');

	//changeWidth();

	if((textDefault!=null || textDefault!=undefined) && textDefault.lenght>0){
		$(".dropdown span span").text(textDefault);
	}

	// cuando hago click en el boton del dropdown
	$('.dropdown').click(function(){
		clickea(this.id); 
	});
	function clickea(idHtml){
		if(open==false){ 
			$('#'+idHtml+' > .contenedor').addClass("active"); //$('div',$('#'+idHtml+' > div')).fadeToggle(300);
			$('#'+idHtml).addClass("active");
			if((textDefault!=null || textDefault!=undefined) && textDefault.lenght>0){
				$('#'+idHtml+' span span').html(textDefault);
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
		$('.dropdown span span').each(function(eachIndex){
			eachOption = $('.dropdown span span')[eachIndex];
			$(eachOption).html($("#"+eachOption.parentElement.parentElement.id+" div[data-dd]:nth-child("+preselect+")").text());
		})
	}
}


function cerrar(e) {
	if(e){
		e.stopPropagation();
		$('#'+ e.currentTarget.parentElement.parentElement.id +' .contenedor').toggleClass('active',function(e){
			$('#'+ e.currentTarget.parentElement.parentElement.id +' span span').html(e.target.textContent);
			$('#'+ e.currentTarget.parentElement.parentElement.id +' span span').attr("indice",e.target.attributes['indice'].value);
		}(e));
	}else{
		$('.dropdown .contenedor').toggleClass('active');
	}
	$('.dropdown').removeClass("active");
	$('.dropdown > .contenedor').removeClass("active");
}