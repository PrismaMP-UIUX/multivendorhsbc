var pass = document.getElementById("password");
var borrar = document.getElementById("borrar")
pass.addEventListener("input", function (e) {
	if(this.value.length>0){
		borrar.style.display="block";
	}else{
		borrar.style.display="none";
	}
}); 

function limpiarPass(){
	pass.value="";
	borrar.style.display="none";
}