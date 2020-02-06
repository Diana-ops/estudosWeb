//Manipulador de Eventos, simular que o cliente esta fazendo algo

const EventEmitter = require('events')
class MeuEmissor extends EventEmitter{

}

const meuEmissor = new MeuEmissor()
const nomeEvento = 'usuarioClick'

//Aqui criamos um observador
meuEmissor.on(nomeEvento, function(click){
	console.log('um usuário clicou', click)
})

/*
//Simular que o usuário está clicando na tela
meuEmissor.emit(nomeEvento, 'na barra de rolar')
meuEmissor.emit(nomeEvento, 'no ok')

//A função é executada constantemente
let count = 0
setInterval(function(){
	meuEmissor.emit(nomeEvento, 'no ok'+(count++))
}, 1000)
*/
//Toda vez que o usuário digitar algo no terminal
const stdin = process.openStdin() //Leitura do teclado
stdin.addListener('data', function(value){
	console.log(`voce digitou ${value.toString().trim()}`)
})