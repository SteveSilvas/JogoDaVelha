//variáveis q serão associadas aos elementos html do tabuleiro
var l1c1;
var l1c2;
var l1c3;

var l2c1;
var l2c2;
var l2c3;

var l3c1;
var l3c2;
var l3c3;

//inicializando o jogo com a vez do jogador X
var jogador = "X";
	
	
	
function clicar(){

	
	//mostrando no console e alterando o titulo 
	//indicando de qem é  a vez

	console.log("Jogador: "+jogador)
	texto = document.getElementById('txtitulo');
	texto.innerHTML = "Vez do Jogador : "+ jogador;
	mudarJogador()

	//buscando o id do elemento clicado
	var btn = event.target.id;
	
	//alterando texto do botao clicado
	var txt = document.getElementById(btn).innerHTML = jogador;



	//atribuindo os valores do html para variaveis js

	l1c1 = document.getElementById('btnl1c1').innerHTML;
	l1c2 = document.getElementById('btnl1c2').innerHTML;
	l1c3 = document.getElementById('btnl1c3').innerHTML;

	l2c1 = document.getElementById('btnl2c1').innerHTML;
	l2c2 = document.getElementById('btnl2c2').innerHTML;
	l2c3 = document.getElementById('btnl2c3').innerHTML;

	l3c1 = document.getElementById('btnl3c1').innerHTML;
	l3c2 = document.getElementById('btnl3c2').innerHTML;
	l3c3 = document.getElementById('btnl3c3').innerHTML;




	//chamando função para verificar se alguém ganhou
	verificarGanhador();

		

		console.log("primeira casa "+l1c1);	
}
	
	
	






	//alterando entre jogadores
	function mudarJogador(){
		
			if (jogador == "X"){
				jogador = "O";
				return jogador
				
			} else {
				jogador = "X";
				return jogador	
					
			} 
				
	}


function verificarGanhador(){
	

	//horizontal
	if(l1c1 ==l1c2 && l1c1 == l1c3){
	alert("ora ora temos um ganhador -> "+l1c1);
	location.reload();
	
	}
	else if(l2c1 ==l2c2 && l2c1 ==l2c3){
	alert("ora ora temos um ganhador -> "+l2c1);
	location.reload();
	}
	else if(l3c1==l3c2 && l3c1==l3c3) {
	alert("ora ora temos um ganhador -> "+l3c1);
	location.reload();
	}

	//vertical
	else if(l1c1==l2c1 && l1c1==l3c1) {
	alert("ora ora temos um ganhador -> "+l1c1);
	location.reload();
	}
	else if(l1c2==l2c2 && l1c2==l3c2) {
	alert("ora ora temos um ganhador -> "+l1c2);
	location.reload();
	}
	else if(l1c3==l2c3 && l2c3==l3c3) {
	alert("ora ora temos um ganhador -> "+l1c3);
	location.reload();
	}
	
	//diagonal
	else if (l1c1 == l2c2 && l1c1 == l3c3){
	alert("ora ora temos um ganhador -> "+l1c1);
	location.reload();
	}
	else if(l1c3 == l2c2 && l1c3 == l3c1){
	alert("ora ora temos um ganhador -> "+l1c3);
	location.reload();
	}
	
}

	/*
	/a desenvolver/
	function criarPlacar(){
	ma
	}*/

		