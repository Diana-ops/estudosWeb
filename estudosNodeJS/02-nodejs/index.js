
/*
Get user
Get phone and user by Id
Get adders by Id
*/
const util = require('util')
const getAddersAsync = util.promisify(getAdders)


function getUser() {
    // quando der algum problea -> reject(ERRO)
    // quando sucess -> RESOLV
    return new Promise(function resolvePromise(resolve, reject) {
        setTimeout(function () {
            // return reject(new Error('DEU RUIM DE VERDADE!'))

            return resolve({
                id: 9,
                nome: 'Diana Regina',
                dataNascimento: new Date()
            })
        }, 1000)

    })
}


function phoneUser(idUsuario) {
    return new Promise(function resolverPromise(resolve, reject) {
        setTimeout(() => {
            return resolve({
                telefone: '44273784',
                ddd: 11
            })
        }, 2000);

    })
}

function getAdders(idUsuario) {
    return new Promise(function resolverPromise(resolve, reject) {
    setTimeout(() => {
        return resolve({
            rua: 'dos bobos',
            numero: 0
        })
    }, 2000)
    })
}
//Colocando a palavra async na frente da função, ela sempre retornará uma promise

async function main(){
	try{
		console.time('Tempo de execução')
		const user = await getUser()
		//const phone = await phoneUser(user.id)
		const res = await Promise.all([
			phoneUser(user.id),
			getAdders(user.id)
		])

		const adders = res[1]
		const phone = res[0]
		console.log(`
			Nome: ${user.nome},
			Telefone: ${phone.ddd}, ${phone.telefone}
			Endereço: ${adders.rua}, ${adders.numero}
		`)

		console.timeEnd('Tempo de execução')
	}
	catch(error){
		console.error("Deu ruim", error)
	}
}
main()
/*
const userP = getUser()
getUser()
.then(function(usuario){
	return phoneUser(usuario.id)
		.then(function resolverPhone(phone){
			return{
				user: {
					name: usuario.nome,
					id: usuario.id,
					dataNascimento: usuario.dataNascimento
				},
				phone: phone
			}
	})
})
.then(function(response){
	console.log(
		`Nome: ${response.user.name}, ${response.user.id}, ${response.user.dataNascimento}
		Telefone: ${response.phone.ddd}, ${response.phone.telefone}`
	)
})
.catch(function(error){
	console.error(error)
})
*/
/*
.then(function(res){
	return phoneUser(res.id)
	.then(function resolverPhone(res){
		return{
			user: {
				name: user.nome,
				id: user.id,
			},
			phone: res
		}
	})
})
.then(function(res){
	const adders = getAddersAsync(res.user, res.id)
	return adders.then(function resolveAdders(res){
		return {
			user: res.user,
			phone: res.phone,
			adders: res
		}
	})
})
.then(function (res) {
	console.log(res)
})
.catch(function(error){
	console.log("Deu ruim")
})
*/
/*
getUser(function resolveUser(error, user){
	if(error){
		console.error("Deu ruim em user", error)
		return; //Stop the execution
	} 
	phoneUser(user.id, function resolvePhone(error2, phone) {
		if(error2){
			console.error("Deu ruim em phone", error2)
			return; //Stop the execution
		} 
		getAdders(user.id, function resolverAdd(error3, adders){
			if(error3){
				console.error("Deu ruim em adders", error3)
				return; //Stop the execution
			} 

			console.table(`
				Nome: ${user.id},
				Adders: ${adders.rua}, ${adders.numero},
				Phone: ${phone.ddd}, ${phone.phone}
			`)
		})
	})

})
*/