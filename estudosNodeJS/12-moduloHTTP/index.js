const http = require('http')

/*Criando um servidor*/
http.createServer((request, response) => {

	/*Essa mensagem vai aparecer na tela*/
	response.end('Hello Node')
})
.listen(4000, () => console.log("o servidor esta rodando"))