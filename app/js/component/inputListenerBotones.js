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