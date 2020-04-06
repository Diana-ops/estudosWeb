const Hapi = require('hapi')

/*Chamando algumas coisinhas do banco de dados MongoDB*/
const Context = require('')
const MongoDB = require('')
const HeroiShema = require('')

const app = new Hapi.Server({
	port: 5000
})

aysnc function main() {

	/*Fazendo a conexão com o banco*/
	const connection = MongoDB.connect()
	const context = new Context(new MongoDB(connection, HeroiShema))

	app.route([
		{
			path: '/herois',
			method: 'GET',

			/*Mandando a resposta*/
			handler: (request, head) => {
				return context.read()
			}
		}
	])

	await app.start()
	console.log('Rodando a API com Happi', api.info.port)

	return app
}

module.exports = main()
