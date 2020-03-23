const { deepEqual, ok } = require('assert')

const DEFAULT_ITEM_CADASTRAR = {
	nome: 'Flash',
	poder: 'Spped',
	id: 1
}

const database = require('./database')

describe('Suite de manipulação de Herois', () => {

	it('deve pesquisar um heroi usando arquivos', async () => {
		const expected = DEFAULT_ITEM_CADASTRAR

		/*Pegando somente o primeiro resultado*/
		const [resultado] = await database.listar(expected.id)


		/*Compara 2 resultados*/
		deepEqual(resultado, expected)
	})
	/*
	it('deve cadastrar um heroi, usando arquivos', async () => {
		const expected = DEFAULT_ITEM_CADASTRAR
		
		ok(null, expected)
	
	})

	*/
})