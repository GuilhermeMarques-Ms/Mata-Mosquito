//colocar uma altura e largura maxima para aparecer o mosquito//
var altura = 0
var largura = 0
var vidas = 1
var tempo = 15

var criaMoscaTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?' , '')

if(nivel === 'normal'){
	criaMoscaTempo = 4000
}else if(nivel === 'dificil') {
	criaMoscaTempo = 2000
}else if(nivel === 'chucknorris') {
	criaMoscaTempo = 500
}

function ajustaTamanhoPalcoJogo() {

altura = window.innerHeight
largura = window.innerWidth
console.log(largura,altura)
}
ajustaTamanhoPalcoJogo()

//tempo do cronometro//
var cronometro = setInterval(function(){
	tempo -= 1
	if (tempo < 0) {
		clearInterval(criaMosca)
		clearInterval(cronometro)
		window.location.href = "vitoria.html"
	}else{
	document.getElementById('cronometro').innerHTML = tempo
	}
},1000)


function posicaoRandomica(){

//remover o mosquito anterior(caso exista)//
if(document.getElementById('mosquito')){
document.getElementById('mosquito').remove()

//tirar vidas caso erre//
    if(vidas > 3){
    	window.location.href = "fim_de_jogo.html"
    }else{
	document.getElementById('v' + vidas).src ="imagens/coracao_vazio.png"

	vidas++
	}			
}


//definir uma posição máxima para o mosquito, para não ultrapassar o tamanho da tela total//
var posicaoX = Math.floor(Math.random() * largura -90)
var posicaoY = Math.floor(Math.random() * altura -90)

posicaoX = posicaoX < 0 ? 0 : posicaoX
posicaoY = posicaoY < 0 ? 0 : posicaoY

console.log(posicaoY, posicaoX)


//criar o elemento html//

var mosquito = document.createElement('img')
mosquito.src = 'imagens/mosca.png'
mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
mosquito.style.left = posicaoX + 'px'
mosquito.style.top = posicaoY + 'px'
mosquito.style.position = 'absolute'
mosquito.id = 'mosquito'
mosquito.onclick = function(){
	this.remove()
}

document.body.appendChild(mosquito)

}


//mudar o tamanho do mosquito//
function tamanhoAleatorio() {
	var classe = Math.floor(Math.random() * 3)

	switch(classe) {
		case 0: 
		return 'mosquito1'

		case 1: 
		return 'mosquito2'

		case 2: 
		return 'mosquito3'
	}
}


// mudar o lado do mosquito//
function ladoAleatorio() {
	var classe = Math.floor(Math.random() * 2)

	switch(classe) {
		case 0:
		return 'ladoA'

		case 1:
		return 'ladoB'
	}
}
