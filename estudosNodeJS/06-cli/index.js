const Commander = require('commander')
const Database = require('./database')
const Heroi = require('./heroi')

async function main(){
	Commander
		.version('v1')
		.option('-n, --nome [value]', "Nome do Heroi")
		.option('-p, --poder [value]', "Poder do Heroi")
		.option('-i, --id [value]', "Id do Heroi")

		.option('-c, --cadastrar', "Cadastrar um Heroi")
		.option('-l, --listar', "Listar Herois")
		.option('-r, --remover', "Remover um heroi pelo id")
		.option('-a, --atualizar [value]', "Atualizar um heroi pelo id")

		.parse(process.argv)

	const heroi = new Heroi(Commander)

	try {
		if(Commander.cadastrar){
			delete heroi.id

			const resultado = await Database.cadastrar(heroi)
			if(!resultado) 
			{
				console.log("Heroi não cadastrado")
				return;
			} 

			console.log("Heroi cadastrado")
			
		}

		if(Commander.listar) {
			const resultado = await Database.listar()
			console.log(resultado)
			return;
		}

		if(Commander.remover) {
			const resultado = await Database.remover(heroi.id)

			if(!resultado) {
				console.error("Não foi possivel remover o heroi")
				return;
			}

			console.log("Heroi removido com sucesso")
		}

		if(Commander.atualizar) {
			const idParaAtualizar = parseInt(Commander.atualizar)

			//remover todas as chaves com undefined
			const dado = JSON.stringify(heroi)
			const heroiAtualizar = JSON.parse(dado)
			const resultado = await Database.atualizar(idParaAtualizar, heroiAtualizar)

			if(!resultado){
				console.error("Não conseguimos atualizar")
				return;
			}

			console.log("Atualizamos com sucesso")
		}

	} catch (error) {
		console.log("DEU RUIM", error)
	}
}

main()