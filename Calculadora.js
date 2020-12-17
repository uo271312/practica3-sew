class CalculadoraRPN{

    constructor(){

        
        this.pilaLifo=new PilaLifo();
        this.pantalla="";

	}
	mostrar(){
		var stringPila = "<ul>";
		for (var i in this.pilaLifo.pila) stringPila += "<li>"+ this.pilaLifo.pila[i] + "</li>";
		stringPila += "</ul>"
		return stringPila;
	}

	borrar(){
		this.pantalla=this.pantalla.substring(0, this.pantalla.length - 1);
		this.actualizarPantalla();
	}
	actualizarPantalla(){
		var r=document.getElementById("pantalla");
		r.value=this.pantalla;
        
	}
	digitos(x){
		this.pantalla+=x;
		this.actualizarPantalla();
	}
	enter(){
		if(this.pantalla!=""){
			this.pilaLifo.apilar(this.pantalla);
			this.pantalla="";
			this.actualizarPantalla();
		}
	}

	
    suma(){
		var x=parseInt(this.pilaLifo.desapilar());
		var y=parseInt(this.pilaLifo.desapilar());
		this.pilaLifo.apilar(x+y);
	}
	resta(){
		var x=parseInt(this.pilaLifo.desapilar());
		var y=parseInt(this.pilaLifo.desapilar());
		this.pilaLifo.apilar(y-x);
		
	}
	multiplicacion(){
		var x=parseInt(this.pilaLifo.desapilar());
		var y=parseInt(this.pilaLifo.desapilar());
		this.pilaLifo.apilar(x*y);
	}
	
	division(){
		var x=parseInt(this.pilaLifo.desapilar());
		var y=parseInt(this.pilaLifo.desapilar());
		this.pilaLifo.apilar(y/x);
	}
	seno(){
		var x=Math.sin(parseInt(this.pilaLifo.desapilar()));
		this.pilaLifo.apilar(x);
	}
	coseno(){
		var x=Math.cos(parseInt(this.pilaLifo.desapilar()));
		this.pilaLifo.apilar(x);
	}
	cuadrado(){
		var x=parseInt(this.pilaLifo.desapilar());
		this.pilaLifo.apilar(Math.pow(x,2));
	}
	factorial(){
		var valor = 1;
		var x=parseInt(parseInt(this.pilaLifo.desapilar()));
		for(var i = 1; i <= x; i++){
			valor*= i;
		}
		this.pilaLifo.apilar(valor);
		
	}
	diezaX(){
		var x=parseInt(this.pilaLifo.desapilar());
		this.pilaLifo.apilar(Math.pow(10,x));
	}
	exp(){
		var x=parseInt(this.pilaLifo.desapilar());
		this.pilaLifo.apilar(Math.pow(Math.E,x));
	}
	xElevadoY(){
		var x=parseInt(this.pilaLifo.desapilar());
		var y=parseInt(this.pilaLifo.desapilar());
		this.pilaLifo.apilar(Math.pow(x,y));
	}
	xRaizY(){
		var x=parseInt(this.pilaLifo.desapilar());
		var y=parseInt(this.pilaLifo.desapilar());
		this.pilaLifo.apilar(Math.pow(x,1/y));
	}
	raiz(){
		var x=parseInt(this.pilaLifo.desapilar());
		this.pilaLifo.apilar(Math.pow(x,1/2));
	}
	arcoseno(){
		var x=Math.asin(parseInt(this.pilaLifo.desapilar()));
		this.pilaLifo.apilar(x);
	}
	tangente(){
		var x=Math.tan(parseInt(this.pilaLifo.desapilar()));
		this.pilaLifo.apilar(x);
	}
	arcotangente(){
		var x=Math.atan(parseInt(this.pilaLifo.desapilar()));
		this.pilaLifo.apilar(x);
	}
	arcocoseno(){
		var x=Math.acos(parseInt(this.pilaLifo.desapilar()));
		this.pilaLifo.apilar(x);
	}
	
	log(){
		var x=Math.log(parseInt(this.pilaLifo.desapilar()));
		this.pilaLifo.apilar(x);
	}
	ln(){
		var x=Math.pow(-10,7)*Mat.log(parseInt(this.pilaLifo.desapilar())/Math.pow(-10,7));
		this.pilaLifo.apilar(x);
	}
	negado(){
		var x=-parseInt(this.pilaLifo.desapilar());
		this.pilaLifo.apilar(x);
	}
}
class PilaLifo{
constructor(){
	this.pila=new Array();
}
apilar(valor){
	this.pila.push(valor);
}
desapilar(){
	return (this.pila.pop());
}
}
var calculadora=new CalculadoraRPN();

