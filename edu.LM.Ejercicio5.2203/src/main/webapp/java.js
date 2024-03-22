/**
 * 
 */
function triangulo() {
	let numeroUsuario = prompt("introduzca un numero para crear un triangulo");


	
	let escrito = "";
	let fila = "";

	for (let i = 1; i <= numeroUsuario; i++) {
		
		numeroUsuario = numeroUsuario + "*";
		 fila = fila + "*";
		 escrito= escrito + fila + "<br>";
		 
		 }
		 document.getElementById("texto").innerHTML = ("<br>" + escrito + "</br>");
		
		
		
		

		

	}


