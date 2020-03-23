const { get } = require('axios')

const URL = `https://swapi.co/api/people`

async function obterPessoas(nome) {
	const url = `${URL}/?search=${nome}&format=json`
	const result = await get(url)
	
	/*Converte o objeto para string*/
	//console.log(result.data)

	/*Para cada item de return em mapear pessoas, será retornado as informações*/
	return result.data.results.map(mapearPessoas)
}

function mapearPessoas (item) {
	return   {
        nome: item.name,
        peso: item.height
    }

}
module.exports = {
	obterPessoas
}