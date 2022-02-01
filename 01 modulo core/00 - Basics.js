console.log('hola bros');
console.log(global);
let i = 0;

const saludo = () =>{
	console.log("hola node.js");
	i++
	if (i==5){
		console.log("terminando intervalo")
		clearInterval(intervalo)
	}
}

const intervalo = setInterval(saludo,3000);

intervalo;
//JOYA