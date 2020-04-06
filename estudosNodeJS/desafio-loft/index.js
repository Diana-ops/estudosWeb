const { get, post } = require('axios')
const axios = require('axios')
var sha1 = require('sha1');
var fs = require('fs');
var FormData = require('form-data')
var fermata = require('fermata')
const request = require('request');
const fetch = require('node-fetch')

const GET_URL = `https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=b9ae50460dd7f998a1201ac45ff71ff72dd4501b`
const POST_URL = `https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token=b9ae50460dd7f998a1201ac45ff71ff72dd4501b`

/*Variaveis Principais*/
const alphabet =  	['a','b','c','d','e',
					'f','g','h','i','j',
					'k','l','m','n','o',
					'p','q','r','s','t',
					'u','v','w','x','y','z']


/*Requisição da Mensagem*/
async function getData() {

	const result = await get(GET_URL)

	var dataJulioCesar = [];
	dataJulioCesar = result.data

	var json = JSON.stringify(dataJulioCesar);
	fs.writeFile('./answer.json', json, 'utf8', function readFileCallback(err, data){
    		if (err){
        		console.log(err);
    }});

	return dataJulioCesar
}


/*Tratamento da Mensagem*/
async function converteMensagem(mensagem, casas) {

	let mensagemCriptografada = []
	const regex = /[0-9]/
	
	for (var i = 0; i < mensagem.length; i++) {
		
		let havePoint = (mensagem[i] === '.' || mensagem[i] === ',' || mensagem[i] === ';')
		
		if (!havePoint && mensagem[i] != " " && regex.test(mensagem[i]) === false) {

				indexAlpha = alphabet.indexOf(mensagem[i]) - casas

				if (alphabet[indexAlpha] != undefined) {
					mensagemCriptografada.push(alphabet[indexAlpha].toLowerCase())

				} else {

					newIndexAlpha = (26 - casas) + alphabet.indexOf(mensagem[i])
					mensagemCriptografada.push(alphabet[newIndexAlpha].toLowerCase())
				}	
		} else {
			mensagemCriptografada.push(mensagem[i].toLowerCase())
		}
	}
	mensagemCriptografada = mensagemCriptografada.join('')

	return mensagemCriptografada
	
}

async function postMsg(mensagemCriptografada) {

	fs.readFile('./answer.json', 'utf8', function readFileCallback(err, data){
    if (err){
        console.log(err);
    } else {
    		obj = JSON.parse(data); //now it an object
    		obj.decifrado = mensagemCriptografada; //add some data
    		obj.resumo_criptografico = sha1(mensagemCriptografada); //add some data
    		json = JSON.stringify(obj); //convert it back to json

    		fs.writeFile('./answer.json', json, 'utf8', function readFileCallback(err, data){
    			//const form = new FormData()

    			//form.append('answer', fs.createReadStream('./answer.json'))

				  const form = new FormData();
				  //form_data.append("answer", fs.createReadStream('./answer.json'));

					        

  form.append('answer', fs.createReadStream('./answer.json'))
  return fetch(POST_URL, { method: 'POST', body: form }).then(resp => resp.json()).catch((erro) => {
  	console.log("erro")
  })

    });

}});



	/*Envio da Mensagem*/

	/*
	axios.post( POST_URL, formData, "multipart/form-data")
	.then((res) => {
	  console.log(`statusCode: ${res.statusCode}`)
	  console.log(res)
	})
	.catch((error) => {
	  console.error(error.response.data)
	})
	*/

}


getData().then(mensagem => {
	converteMensagem(mensagem.cifrado, mensagem.numero_casas).then(msgCripto => {
		postMsg(msgCripto)
	})

}).catch(error => {
	console.error("Ops, tivemos um erro ao receber a mensagem: ", error)
}) 


