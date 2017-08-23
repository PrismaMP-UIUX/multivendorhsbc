var count_options = $(".otras_claves_option").length;
var slides = Math.ceil(count_options / 6);
var cantidadVisible = Math.ceil(count_options / slides);

cuenta();  

function wrapper(reque) {
	var i = 0, 
	    quotes = $(".claves_otras_claves").children(),
	    group;

	while ((group = quotes.slice(i, i += reque)).length) {
	    group.wrapAll('<div class="claves_otras_claves_slide" />');
	}
}

function coolWrapper(req) {   
	wrapper(req);
	clavesCarousel();

	if ( count_options == 16 || count_options == 13) { 
		console.log("x: number")
		$(".claves_otras_claves .owl-item:nth-of-type(2) .claves_otras_claves_slide")
			.children()
			.last() 
			.appendTo($(".owl-item:last-of-type .claves_otras_claves_slide")) 
	} 
}

function cuenta() { 	 
	if(count_options <= 6) {
		return wrapper(6);;
	} else { 
		return coolWrapper(cantidadVisible);
	} 
} 

function clavesCarousel() {
	$(".claves_otras_claves").owlCarousel({
	  items: 1,
	  autoplay: false,  
	  slideBy: 6,
	  smartSpeed: 100,
	  nav: true,
	  dots: false, 
	  navText: [
	      "<i id='slider-prev' class='prisma izquierda'></i>",
	      '<i id="slider-next" class="prisma derecha"></i>'
	  ],
	  // loop: true 
	}); 
}

console.log("la canatidad es de : " + count_options); 
console.log("slides : " + slides); 