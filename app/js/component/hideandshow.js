function hide(boton,target,callback){
	$(boton).on("click", function() {
		$(target).fadeOut(function(){
			callback();
		});
	});
}

function show(boton,target,callback){
	$(boton).on("click", function() {
		$(target).fadeIn( function(){
			callback;
		});
	});
}

function hideandshow(boton, targetHide, targetShow){
	$(boton).on("click", function() {
		$(targetHide).fadeOut( function(){
			$(targetShow).fadeIn();
		});
	});
}