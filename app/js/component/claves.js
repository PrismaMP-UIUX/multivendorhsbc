function cuenta() { 	 
	var count_options = $(".otras_claves_option").length;
	var slides = Math.ceil(count_options / 6);
	var cantidadVisible = Math.ceil(count_options / slides);
	
	if(count_options < 4 ) {
		$(".claves_otras_claves.owl-carousel").addClass("lessThan");
	}
	if(count_options <= 6) {
		if(count_options >= 4) {
			$(".claves_otras_claves.owl-carousel").removeClass("lessThan").addClass("midThan");
		}
		if(count_options == 5) {
			$(".claves_otras_claves.owl-carousel").removeClass("lessThan").addClass("fiveThan");
		}
		return wrapper(6);
	} else { 
		return coolWrapper(cantidadVisible,count_options);
	} 
} 

function wrapper(reque) {
	var i = 0, 
	    quotes = $(".claves_otras_claves").children('a'),
	    group;

	while ((group = quotes.slice(i, i += reque)).length) {
	    group.wrapAll('<div class="claves_otras_claves_slide" />');
	}
}

function coolWrapper(req,count_options) {   
	wrapper(req);
	clavesCarousel();

	if ( count_options == 16 || count_options == 13) {  
		if($(".mas_claves").length == 0) {
			$(".claves_otras_claves .owl-item:nth-of-type(2) .claves_otras_claves_slide")
				.children('a')
				.last() 
				.appendTo($(".owl-item:last-of-type .claves_otras_claves_slide"));
		} else {
			$(".claves_otras_claves .owl-item:nth-of-type(2) .claves_otras_claves_slide")
				.children('a')
				.last() 
				.insertBefore($(".mas_claves")) 

		}
	} 
}

function clavesCarousel(){
	$(".claves_otras_claves").owlCarousel({
	  items: 1,
	  autoplay: false,  
	  slideBy: 6,
	  smartSpeed: 100,
	  nav: true,
	  dots: false, 
	  autoHeight: true,
	  onInitialized: setOwlStageHeight,
      onResized: setOwlStageHeight,
      onTranslated: setOwlStageHeight,
	  navText: [
	      "<i id='slider-prev' class='prisma izquierda'></i>",
	      '<i id="slider-next" class="prisma derecha"></i>'
	  ],
	  // loop: true 
	}); 
}

function setOwlStageHeight(event) {
    var maxHeight = 0;
    $('.owl-item.active').each(function () { // LOOP THROUGH ACTIVE ITEMS
        var thisHeight = parseInt( $(this).height() );
        maxHeight=(maxHeight>=thisHeight?maxHeight:thisHeight);
    });
    $('.owl-carousel').css('height', maxHeight );
    $('.owl-stage-outer').css('height', maxHeight ); // CORRECT DRAG-AREA SO BUTTONS ARE CLICKABLE
}