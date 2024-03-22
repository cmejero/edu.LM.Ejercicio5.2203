/**
 * 
 */
function triangulo() {
	let numeroUsuario = prompt("introduzca un numero para crear un triangulo");


	
	let escrito = "";
	let fila = "";


     if(numeroUsuario>0){
	for (let i = 0; i < numeroUsuario; i++) {
		
		
		 fila = fila + "*";
		 escrito= escrito + fila + "<br>";
		 
		 
		 
		 }
		 document.getElementById("texto").innerHTML = escrito ;
		}
		
		
		

		

	}


