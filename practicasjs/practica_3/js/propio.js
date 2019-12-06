$(document).ready(function () {
 var t=0;
	$(".cuadro").click(function (e) {
		console.log(t);
		
	 if(t){
		 $(this).html("0");
		 t=1;
	 }else{
		 $(this).html("X");
		 t=0;
	 }
	});
})

var  Nancy={
	"Nombre":"nancy",
	"Edad":21
	"correr":function(){
	
	}
	"carros":[
		{"color":"rojo",
		 "modelo":"honda"},
		{"color":"rojo",
		 "modelo":"honda"},
		{"color":"rojo",
		 "modelo":"honda"},
		{"color":"rojo",
		 "modelo":"honda"}
	]
	
}








