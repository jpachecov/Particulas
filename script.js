	var d = new Date();
	var ultimavez1 = d.getTime();
	var ultimavez2 = d.getTime();
	var ultimavez3 = d.getTime();
	var alfabeto = "01";//"AB0CD1EF2GH3IJ4LM5NÑ6OP7QR8ST9UVWXYZ";
	var jean = "Jean Pierre";
	var carlos = "Carlos Augusto";
	var pilar = "Maria del Pilar";
	var cual = 0;




/*
* Variables para 
*/


function creaPalabras(alfabeto,nombre){
		var palabras = [];
		var x = Math.floor((Math.random() * alfabeto.length));
		palabras.push(alfabeto[x]);
		for(var i = 1; i < nombre.length; i++){
			if(nombre[i] == " "){
				palabras.push(palabras[i-1]+" ");
				continue;
			}
			x = Math.floor((Math.random() * alfabeto.length));
			palabras.push(palabras[i-1]+alfabeto[x]);

		}
		var ultima_completa = palabras[palabras.length-1];
		var nombreM = nombre.toUpperCase();
		for(var j = 0; j < ultima_completa.length; j++){
			palabras.push(nombreM.substr(0,j)+ultima_completa.substr(j,ultima_completa.length));
		}
		palabras.push(nombreM);
		ultima_completa = palabras[palabras.length-1];
		for(var k = 0; k < nombre.length;k++){
			palabras.push(nombre.substr(0,k)+ "_"+ ultima_completa.substr(k,ultima_completa.length));
		}
		palabras.push(nombre);
		return palabras;
	};

$(document).ready(function(){
	




/*
var n_nodos = 100;
var nodos = [];
for(var i = 0; i < n_nodos; i++){
	nodos.push({
		x: Math.floor((Math.random() * 500)),
		y: Math.floor((Math.random() * 500)),
		radio: Math.floor((Math.random() * 10))
	});
}
var aristas = []

var canvas = document.getElementsByClassName("canvas")[0];
var ctx = canvas.getContext('2d');

if(true){
	var a = setInterval(function(){

		var ctx = document.getElementsByClassName("canvas")[0].getContext('2d');
		ctx.fillStyle = 'rgba(0,0,0,0.4)';
		ctx.strokeStyle = 'rgba(0,153,255,0.4)';
		ctx.save();
		ctx.clearRect(0,0,300,300);
		for(var i = 0; i < nodos.length; i++){
			var path = new Path2D();
			path.arc(nodos[i].x,nodos[i].y,nodos[i].radio,0,2*Math.PI,true);
			nodos[i].x++;
			nodos[j].y++;
			ctx.fill(path);
			}
		}
	,500);	
}




console.log("sgit");
*/






	//Animaciones de fondos
	var last = 0;
	$(window).scroll(function(){
		last = $(window).scrollTop();
		
		if($(window).scrollTop()>0 && $(window).scrollTop()<700){
	//		console.log(last);
			//(150 + (1.1*last))
			$("#fondo1").css("background-position","center "+ (150 + (1.1*last)) + "px");

		}
		if(last >= 700){
	//		console.log(last);
	//
			$("#fondo2").css("background-position","center "+ (400 - (0.6*last)) + "px");
		}
		
	});

	//Animaciones de interaccion con nombres y fotos de perfil
	
	
	$("#jp").mouseover(function(){
		d = new Date();
		if(d.getTime() - ultimavez1 >= 3500){
			animacion1("#jp",jean,0,true);
			ultimavez1 = d.getTime();
		} else {
			animacion1("#jp",jean,0,false);

		}
	});
	$("#carlos").mouseover(function(){
		d = new Date();
		if(d.getTime() - ultimavez2 >= 3500){
			animacion1("#carlos",carlos,0,true);
			ultimavez2 = d.getTime();
		} else {
			animacion1("#carlos",carlos,0,false);
		}
	});
	$("#pilar").mouseover(function(){
		d = new Date();
		if(d.getTime() - ultimavez3 >= 3500){
			animacion1("#pilar",pilar,0,true);
			ultimavez3 = d.getTime();
		} else {
			animacion1("#pilar",pilar,0,false);
		}
	});


	/*
	*
	* Animaciones quienes somos
	*/
	/*
	$(".boton_animacion").mouseover(function(){
		$(".boton_animacion").animate({borderWidth:8},250,function(){
			$(".boton_animacion").animate({borderWidth:3},250);
		});
	});
	*/
	colores = ["#2CA599","#2C9A99","#2C9099"];
	var color = 0;
	$(".boton_animacion").click(function(){


		//#2C7C99
		/*

"rgb(44, 165, 153)" script.js:106:1
"rgb(44, 124, 153)
		*/
		if(color == colores.length){
			$(".contenido2").css("background-color",colores[color]);
			color = 0;
		} else {
			$(".contenido2").css("background-color",colores[color]);
			color++;
		}
		
		/*
		var x = 1;
		fondo_anim = setInterval(function(){
			
			console.log(165-x);
			if(165 - x == 124)
				clearInterval(fondo_anim);
			$(".contenido").css("background-color","");
			x--;
		},20);
		*/
		$(".titulo").animate({opacity:0},200,function(){
			$(".titulo").css("margin-left","-90px");
			$(".titulo").animate({opacity:1,marginLeft:0},1000);
		});
		$(".texto").animate({opacity:0},200,function(){
			$(".texto").css("margin-left","500px");
			$(".texto").animate({opacity:1,marginLeft:0},1000);
		});
		
	});
});
	//Dura 3400 milisegundos maso o menos
	function animacion1(id,nombre,cual,nom){
		//Animamos el circulo
		var padre = $(id).parent();
		padre.animate({borderWidth:10,opacity:0},350,function(){
			padre.animate({opacity:1,borderWidth:3},350);
		});
		
		if(nom){
			//Animamos el nombre
			var palabras = creaPalabras(alfabeto,nombre);
			$(id+"_n").animate({opacity:0},100,function(){
				$(id+"_n").animate({opacity:1},1000);
			});
			var anim = setInterval(function(){
				$(id+"_n").html(palabras[cual]);
				cual++;
				if(cual == palabras.length + 1){
					cual = 0;
					clearInterval(anim);
				}
			},100);
		}
	}


/*
*
*
* MANEJO DE CANVAS
*
*
*/

/*
*
*Nodos y aristas interactuando
*
*/
/*
var n_nodos = 100;
var nodos = [];
for(var i = 0; i < n_nodos; i++){
	nodos.push({
		x: Math.floor((Math.random() * 500)),
		y: Math.floor((Math.random() * 500)),
		radio: Math.floor((Math.random() * 10))
	});
}
var aristas = []

var canvas = document.getElementsByClassName("canvas")[0];
var ctx = canvas.getContext('2d');
if(ctx){
	var a = setInterval(function(){
		ctx.clearRect(0,0,300,300);
		for(var i = 0; i < nodos.length; i++){
			var path = new Path2D();
			path.arc(nodos[i].x,nodos[i].y,nodos[i].radio,0,2*Math.PI,true);
			nodos[i].x++;
			nodos[j].y++;
			ctx.fill(path);
		}
	},500);	
}







*/