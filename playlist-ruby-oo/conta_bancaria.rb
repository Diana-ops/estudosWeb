#Puxando a classe do outro arquivo
require_relative 'cliente'

class Conta
	attr_reader :numero, :titular
	attr_accessor :saldo

	def initialize(numero, titular, saldo)
		@titular = titular
		@saldo = saldo
		@numero = numero
	end

	def sacar(valor)
		if saldo >= valor
			self.saldo -= valor
			return true
		else
			puts 'Voce não tem saldo suficiente' 
		end
	end

	def depositar(valor)
		self.saldo += valor
	end

	def transferir(conta_destino, valor)
		resultado = sacar(valor)

		if resultado
			#Recebendo outro objeto e aplicando um metodo
			conta_destino.depositar(valor)
			puts "A transferencia de R$ #{valor} reais foi feita para a conta do titular #{conta_destino.titular}"
		else
			puts 'Não foi possível realizar a transferencia pois não há saldo suficiente'
		end
	end
end

puts 'Bem vindo a sua conta bancaria :)'