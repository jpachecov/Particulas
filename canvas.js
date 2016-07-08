//PARTICULAS


function particula(x,y,m,v,d,r,color){
	this.x = x;
	this.y = y;
	this.m = m;
	this.v = v;
	this.d = d;
	this.r = r;
	this.color = color;
	this.draw = function(ctx){
		if(this.x < 0)
			this.x = 1;
		if(this.x > 1100)
			this.x = 1100;
		if(this.y < 0)
			this.y = 1;
		if(this.y > 700)
			this.y = 700;
		
		ctx.fillStyle = color;
		ctx.beginPath();
		ctx.arc(this.x,this.y,this.r,0,Math.PI*2,false);
		ctx.fill();
	}
	this.setPosition = function(all){
		//console.log("aaa");
		var dx = 0;
		var dy = 0;
		var x  = this.x;
		var y = this.y;
		var p = this;
		all.forEach(function(particle){
			
			if(particle.x != x && particle.y != y){
				dx += (9.8*particle.m*(1/(Math.pow(particle.x - x,2)+Math.pow(particle.y - y,2))))*(particle.x - x);
				dy += (9.8*particle.m*(1/(Math.pow(particle.x - x,2)+Math.pow(particle.y - y,2))))*(particle.y - y);
			}
			//console.log(dx + " "+dy)
			
			if(Math.sqrt(Math.pow(particle.x - x,2)+Math.pow(particle.y - y,2)) <= (particle.r + r+10)){
				//all.splice(all.indexOf(p),1);
				dx *= 0.1;
				dy *= 0.1;

			}
			
			
		});
		this.x += this.v*dx;
		this.y += this.v*dy;
	
	}
}


/*
* Las figuras a dibujar deben tener implementados los metodos
* draw  como parte de su propia animacion.
*/
function sol(x,y,m){
	this.x = x;
	this.y = y;
	this.m = m;
	this.draw = function(ctx){
		
		if(this.x < 0)
			this.x = 1;
		if(this.x > 1100)
			this.x = 1100;
		if(this.y < 0)
			this.y = 1;
		if(this.y > 700)
			this.y = 700;
		
		ctx.fillStyle = "yellow";
		ctx.beginPath();
		ctx.arc(this.x,this.y,8,0,Math.PI*2,false);
		ctx.fill();
	}
	
	this.setPosition = function(all){
		var dx = 0;
		var dy = 0;
		var x  = this.x;
		var y = this.y;
		all.forEach(function(particle){
			if(particle.x != x && particle.y != y){
				dx += (9.8*particle.m*(1/(Math.pow(particle.x - x,2)+Math.pow(particle.y - y,2))))*(particle.x - x);
				dy += (9.8*particle.m*(1/(Math.pow(particle.x - x,2)+Math.pow(particle.y - y,2))))*(particle.y - y);
			}
		});
		this.x += dx;
		this.y += dy;
	}
}
function planeta(x,y,m,direccion,r){
	this.r = r;
	this.x = x;
	this.y = y;
	this.m = m;
	this.direccion = direccion;
	this.draw = function(ctx){
		
		if(this.x < 0)
			this.x = 1;
		if(this.x > 1100)
			this.x = 1100;
		if(this.y < 0)
			this.y = 1;
		if(this.y > 600)
			this.y = 600;
		
		ctx.fillStyle = "#7CA6DA";
		ctx.beginPath();
		ctx.arc(this.x,this.y,r,0,Math.PI*2,false);
      	ctx.shadowColor = '#999';
      	ctx.shadowBlur = 40;
      	ctx.shadowOffsetX = 0;
      	ctx.shadowOffsetY = 0;
		ctx.fill();
	}
	this.setPosition = function(all){
		var dx = 0;
		var dy = 0;
		var x  = this.x;
		var y = this.y;
		var m = this.m;
		all.forEach(function(particle){
			if(particle.x != x && particle.y != y){
				dx += (9.8*particle.m*(1/(Math.pow(particle.x - x,2)+Math.pow(particle.y - y,2))))*(particle.x - x);
				dy += (9.8*particle.m*(1/(Math.pow(particle.x - x,2)+Math.pow(particle.y - y,2))))*(particle.y - y);
			}
			if(Math.sqrt(Math.pow(particle.x - x,2)+Math.pow(particle.y - y,2)) <= (particle.r + r)){
				dx =-1;
				dy =-1;
			}
		});

		

		all.forEach(function(e){
			if(e.x != x && e.y != y)
				if(Math.sqrt(Math.pow(e.x - x,2)+Math.pow(e.y - y,2)) < 18){
					e.m *=0.75;
					//e.m *= 1.1;
				} else {
				}
		});
		this.m *= 1.25;
		//this.m *= 0.9;
		this.x += dx;
		this.y += dy;
	}
}
function shape(x,y,w,h,color){
	this.x= x;
	this.y = y;
	this.w = w;
	this.h = h;
	this.color = color;
	this.draw = function(ctx){
		ctx.fillStyle = color;
		ctx.beginPath();
		ctx.arc(this.x,this.y,5,0,Math.PI*2,false);
		ctx.fill();

		this.x += w;
		this.y += h;
	}
	this.clean = function(ctx){
		ctx.fillStyle = 'white';
		ctx.beginPath();
		ctx.arc(this.x,this.y,5,0,Math.PI*2,false);
		ctx.fill();
	}
}

function state(canvas){
	this.ctx = canvas.getContext('2d');
	this.shapes = [];
	this.upload = function(){
		this.shapes.forEach(function(figura){
			figura.draw(canvas.getContext('2d'));
		});
		for(var  i =0; i < this.shapes.length; i++){
			this.shapes[i].setPosition(this.shapes);
		}
	};
	this.clean = function(){
		canvas.getContext('2d').clearRect(0,0,canvas.width,canvas.height);
	};
}

function animation(state){
	this.state = state;
	this.draw = function(){
		state.clean();
		state.upload();
	}
}


function esta(){
	
	var canvas = document.getElementsByClassName('canvas')[0];
	
	var stat = new state(canvas);
	var animati = new animation(stat);
	var color = ["blue","yellow","white","green"]
	for(var j = 0; j < 150;j++){
		//stat.shapes.push(new sol(Math.random()*canvas.width,Math.random()*canvas.height,4));
		stat.shapes.push(new particula(Math.random()*canvas.width,Math.random()*canvas.height,Math.random()*5+3,1,"a",Math.random()*10+3,color[j%color.length]));
	}
	/*
	for(var i = 0; i < 110; i++){
		stat.shapes.push(new planeta(Math.random()*canvas.width,Math.random()*canvas.height,2.1,{x:0,y:0},3));
	}
	*/
		
	var a = setInterval(function(){
		animati.draw();
	},50);
	
}