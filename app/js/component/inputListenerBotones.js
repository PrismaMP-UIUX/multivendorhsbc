function alescribir(campo,boton){
	var campo = document.getElementById(campo);
	campo.focus();
	var boton = document.getElementById(boton)
	boton.style.display="none";
	campo.addEventListener("input", function (e) {
	if(this.value.length>0){
		boton.style.display="block";
	}else{
		boton.style.display="none";
	}
}); 
}
function limpiarPass(campo){
	var campo = document.getElementById(campo);
	campo.focus();
	campo.value="";
	var borrar = document.getElementById("borrar");
	var continuar = document.getElementById("continuar");
	borrar.style.display="none";
	continuar.style.display="none";
}