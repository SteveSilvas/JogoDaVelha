var l1c1 = 1;
var l1c2 = 2;
var l1c3 = 3;

var l2c1 = 4;
var l2c2 = 5;
var l2c3 = 6;

var l3c1 = 7;
var l3c2 = 8;
var l3c3 = 9;

var jogadas = 0;
var jogador = "X";
var classe ="";

function loadGame(){
	if(classe == ""){
		classe = "fa fa-crow";
	}
	criaSubtutuloEIcone();
}

function criaSubtutuloEIcone(){
	let titulo = document.getElementById('subTitulo');
	titulo.innerHTML = "";	

	let lbl = document.createElement('label');
	lbl.innerHTML = "Vez do Jogador : ";
	lbl.style.fontSize = "1.3em";
	titulo.appendChild(lbl);

	let iconeTitulo = document.createElement('i');
	iconeTitulo.classList = classe;
	titulo.appendChild(iconeTitulo);

	titulo.style.display = "flex";
	titulo.style.flexDirection = "row";
	titulo.style.width = "30%";
	titulo.style.alignItems = "baseline";
	titulo.style.justifyContent = "space-around";
}

function mudaSubTitulo(classe){
	let titulo = document.getElementById('subTitulo');
	let iconeTitulo = titulo.children[1];
	iconeTitulo.classList = classe;
	animaMiniIcone(iconeTitulo);
}

function mudaClasseIcone(classeEntrada){
	classe1 = "fa fa-crow";
	classe2 = "fa fa-dove";
	if(classeEntrada == classe1){
		return classe2;
	}
	else{
		return classe1;
	}
}


function clicar(e){
    jogadas += 1;
	e.disabled = true;
	let icone = e.children[0];
    icone.classList = classe;
	pegarValores();
	verificarGanhador();
}

function pegarValores(){
	l1c1 = document.getElementById('btnl1c1').children[0];
	l1c2 = document.getElementById('btnl1c2').children[0];
	l1c3 = document.getElementById('btnl1c3').children[0];

	l2c1 = document.getElementById('btnl2c1').children[0];
	l2c2 = document.getElementById('btnl2c2').children[0];
	l2c3 = document.getElementById('btnl2c3').children[0];

	l3c1 = document.getElementById('btnl3c1').children[0];
	l3c2 = document.getElementById('btnl3c2').children[0];
	l3c3 = document.getElementById('btnl3c3').children[0];
}

function renderPagVencedor(){
	// setTimeout(function(){
	// 	location.reload();
	// },1000);
	escondeRows();
}

function escondeRows(){
	let rows = document.querySelectorAll(".row");
	rows.forEach(row => {
		row.style.display = "none";
	});
}

function verificarGanhador(){
	// Horizontal
	if(l1c1.classList[1] != "fa-hourglass" && 
		l1c1.classList[1] == l1c2.classList[1] && 
		l1c1.classList[1] == l1c3.classList[1]){
        marcaPosicaoVencedora("h1");
		avisarGanhador();
	}

	else if(l2c1.classList[1] != "fa-hourglass" && 
		l2c1.classList[1] == l2c2.classList[1] && 
		l2c1.classList[1] == l2c3.classList[1]){
		marcaPosicaoVencedora("h2");
		avisarGanhador();
	}

	else if(l3c1.classList[1] != "fa-hourglass" &&
		l3c1.classList[1] == l3c2.classList[1] && 
		l3c1.classList[1] == l3c3.classList[1]) {
		marcaPosicaoVencedora("h3");
        avisarGanhador();
	}

	//vertical
	else if(l1c1.classList[1] != "fa-hourglass" && 
		l1c1.classList[1] == l2c1.classList[1] && 
		l1c1.classList[1] == l3c1.classList[1]) {
		marcaPosicaoVencedora("v1");
        avisarGanhador();
	}

	else if(l1c2.classList[1] != "fa-hourglass" && 
		l1c2.classList[1] == l2c2.classList[1] && 
		l1c2.classList[1] == l3c2.classList[1]) {
		marcaPosicaoVencedora("v2");
        avisarGanhador();
	}

	else if(l1c3.classList[1] != "fa-hourglass" && 
		l1c3.classList[1] == l2c3.classList[1] && 
		l2c3.classList[1] == l3c3.classList[1]) {
		marcaPosicaoVencedora("v3");
        avisarGanhador();
	}
	
	//diagonal
	else if (l1c1.classList[1] != "fa-hourglass" &&
		l1c1.classList[1] == l2c2.classList[1] && 
		l1c1.classList[1] == l3c3.classList[1]){
		marcaPosicaoVencedora("d753");
        avisarGanhador();
	}

	else if(l1c3.classList[1] != "fa-hourglass" && 
		l1c3.classList[1] == l2c2.classList[1] && 
		l1c3.classList[1] == l3c1.classList[1]){
		marcaPosicaoVencedora("d951");
        avisarGanhador();
	}
    else if(jogadas == 9){
        avisarVelha();
    }
	else{
		classe = mudaClasseIcone(classe);
		mudaSubTitulo(classe);
	}
	
}

function criaPlacar(){
	var rodape = document.getElementById("rodape");
	var placar = document.createElement("div");
	rodape.appendChild(placar);
}

function avisarGanhador(){
	escondeRows();
	let tabuleiro = pegaTabuleiro();
	tabuleiro.style.overflow = "hiden";
	var mensagemGanhador = document.createElement('div');
	tabuleiro.appendChild(mensagemGanhador);

	mensagemGanhador.style.backgroundColor = "rgb(214, 202, 202)";
	mensagemGanhador.style.width="100%";
	mensagemGanhador.style.height="100%";
	mensagemGanhador.style.fontSize="4em"
	mensagemGanhador.style.display="flex";
	mensagemGanhador.style.flexDirection="column";
	mensagemGanhador.style.justifyContent="center";
	mensagemGanhador.style.alignItems="center";
	mensagemGanhador.style.padding="10%";
	let labelVitoria = document.createElement('label');
	labelVitoria.style.margin = "2%";
	mensagemGanhador.appendChild(labelVitoria);

	let titulovitoria = document.createTextNode("voce ganhou ");
	labelVitoria.appendChild(titulovitoria);
	let iconeGanhador = document.createElement("i");
	iconeGanhador.classList = "fa "+classe;
	mensagemGanhador.appendChild(iconeGanhador)
	animaMiniIcone(iconeGanhador);
}

function avisarVelha(){
	escondeRows();
	console.log('velha');
	let classeVelha = "fa-times";
	let tabuleiro = pegaTabuleiro();
	console.log('velha', tabuleiro);
	tabuleiro.style.overflow = "hiden";
	var mensagemGanhador = document.createElement('div');
	tabuleiro.appendChild(mensagemGanhador);

	mensagemGanhador.style.backgroundColor = "rgb(214, 202, 202)";
	mensagemGanhador.style.width="100%";
	mensagemGanhador.style.height="100%";
	mensagemGanhador.style.fontSize="4em"
	mensagemGanhador.style.display="flex";
	mensagemGanhador.style.flexDirection="column";
	mensagemGanhador.style.justifyContent="center";
	mensagemGanhador.style.alignItems="center";
	mensagemGanhador.style.padding="10%";
	let labelVitoria = document.createElement('label');
	labelVitoria.style.margin = "2%";
	mensagemGanhador.appendChild(labelVitoria);

	let titulovitoria = document.createTextNode("Deu Velha");
	labelVitoria.appendChild(titulovitoria);
	let iconeGanhador = document.createElement("i");
	iconeGanhador.classList = "fa "+classeVelha;
	animaIcone(iconeGanhador);
	mensagemGanhador.appendChild(iconeGanhador)
}	

function marcaPosicaoVencedora(posicaoVencedora){
	let tabuleiro = document.getElementById("tabuleiro");

}

function animaIcone(i){
	var animation = i.animate([
		{transform: 'rotate(45deg)'},
		{transform: 'rotate(-45deg)'},
	], 1000);
	
}

function animaMiniIcone(icone){
	let animation = icone.animate([
		{transform: 'rotate(0.5deg)'},
		{transform: 'translate(5px, -5px)'},
		{transform: 'translate(0)'},
		
	], 1000);
}

function pegaTabuleiro(){
	return document.getElementById('tabuleiro');
}
